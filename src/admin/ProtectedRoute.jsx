import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { authAPI } from "../services/api";

export default function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      const token = localStorage.getItem("tgi_admin_token");
      
      if (!token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        const response = await authAPI.verify();
        setIsAuthenticated(response.success && response.valid);
      } catch (err) {
        console.error('Auth verification failed:', err);
        setIsAuthenticated(false);
        localStorage.removeItem("tgi_admin_token");
        sessionStorage.removeItem("tgi_admin_auth");
      } finally {
        setLoading(false);
      }
    };

    verifyAuth();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Verifying authentication...</div>
      </div>
    );
  }

  if (!isAuthenticated) return <Navigate to="/admin/login" replace />;
  return children;
}
