import { createContext, useContext, useState, useEffect } from "react";
import defaultContent from "../data/defaultContent";
import { contentAPI } from "../services/api";

const STORAGE_KEY = "tgi_admin_content";
const CACHE_EXPIRY_KEY = "tgi_content_cache_expiry";
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

const ContentContext = createContext(null);

export function ContentProvider({ children }) {
  // Initialize with cached content immediately (no loading state)
  const [content, setContent] = useState(() => {
    try {
      const cached = localStorage.getItem(STORAGE_KEY);
      const expiry = localStorage.getItem(CACHE_EXPIRY_KEY);
      
      if (cached && expiry && Date.now() < parseInt(expiry)) {
        const parsedContent = JSON.parse(cached);
        return deepMerge(defaultContent, parsedContent);
      }
    } catch (err) {
      console.warn('Cache read error:', err);
    }
    return defaultContent;
  });
  
  const [loading, setLoading] = useState(false); // Start as false for instant UI
  const [error, setError] = useState(null);

  // Fetch content from backend in background (non-blocking)
  useEffect(() => {
    let isMounted = true;
    
    const fetchContent = async () => {
      try {
        const response = await contentAPI.getAll();
        
        if (!isMounted) return; // Prevent state update if unmounted
        
        if (response.success && response.content) {
          // Merge backend content with defaults, ensuring critical links exist
          const mergedContent = deepMerge(defaultContent, response.content);
          
          // Ensure Services link exists in navbar
          if (mergedContent.navbar && mergedContent.navbar.links) {
            const hasServices = mergedContent.navbar.links.some(
              link => link.label === "Services" || link.path === "/services"
            );
            if (!hasServices) {
              // Insert Services link after About
              const aboutIndex = mergedContent.navbar.links.findIndex(
                link => link.label === "About" || link.path === "/about"
              );
              const insertIndex = aboutIndex >= 0 ? aboutIndex + 1 : 2;
              mergedContent.navbar.links.splice(insertIndex, 0, {
                label: "Services",
                path: "/services"
              });
            }
          }
          
          setContent(mergedContent);
          // Save to localStorage with expiry
          localStorage.setItem(STORAGE_KEY, JSON.stringify(mergedContent));
          localStorage.setItem(CACHE_EXPIRY_KEY, (Date.now() + CACHE_DURATION).toString());
        } else {
          // Use localStorage backup if API fails
          const saved = localStorage.getItem(STORAGE_KEY);
          if (saved) {
            const parsedContent = JSON.parse(saved);
            const mergedContent = deepMerge(defaultContent, parsedContent);
            setContent(mergedContent);
          } else {
            // Use defaults
            setContent(defaultContent);
          }
        }
      } catch (err) {
        if (!isMounted) return;
        
        console.warn('Content API not available, using local defaults');
        // Fallback to localStorage
        try {
          const saved = localStorage.getItem(STORAGE_KEY);
          if (saved) {
            const parsedContent = JSON.parse(saved);
            const mergedContent = deepMerge(defaultContent, parsedContent);
            setContent(mergedContent);
          } else {
            // Use defaults if all else fails
            setContent(defaultContent);
          }
        } catch (parseErr) {
          console.error('Error parsing saved content:', parseErr);
          // Use defaults as final fallback
          setContent(defaultContent);
        }
      } finally {
        // Don't set loading state - UI is already rendered with cached/default content
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchContent();
    
    return () => {
      isMounted = false; // Cleanup function
    };
  }, []);

  // Update a nested section: updateSection("about.team", newTeamData)
  async function updateSection(path, value) {
    try {
      // Optimistically update UI
      setContent((prev) => {
        const next = structuredClone(prev);
        const keys = path.split(".");
        let obj = next;
        for (let i = 0; i < keys.length - 1; i++) {
          obj = obj[keys[i]];
        }
        obj[keys[keys.length - 1]] = value;
        return next;
      });

      // Update backend
      await contentAPI.update(path, value);
      
      // Update localStorage backup
      localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    } catch (err) {
      console.error('Error updating content:', err);
      setError(err.message);
      // Revert on error by refetching
      const response = await contentAPI.getAll();
      if (response.success) {
        setContent(deepMerge(defaultContent, response.content));
      }
      throw err;
    }
  }

  async function resetToDefaults() {
    try {
      await contentAPI.reset();
      localStorage.removeItem(STORAGE_KEY);
      setContent(defaultContent);
    } catch (err) {
      console.error('Error resetting content:', err);
      setError(err.message);
      throw err;
    }
  }

  return (
    <ContentContext.Provider value={{ content, updateSection, resetToDefaults, loading, error }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error("useContent must be used within ContentProvider");
  return ctx;
}

// Deep merge utility: base values overridden by override values, recursively
function deepMerge(base, override) {
  if (typeof base !== "object" || base === null) return override ?? base;
  if (typeof override !== "object" || override === null) return base;
  if (Array.isArray(base)) return Array.isArray(override) ? override : base;

  const result = { ...base };
  for (const key of Object.keys(override)) {
    if (key in base) {
      result[key] = deepMerge(base[key], override[key]);
    } else {
      result[key] = override[key];
    }
  }
  return result;
}
