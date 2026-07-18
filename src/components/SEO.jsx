import { useLayoutEffect } from 'react';
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_IMAGE,
  SITE_NAME,
  getCanonicalUrl,
  getFullTitle,
} from '../seo/metadata';

function upsertHeadElement(selector, tagName, attributes) {
  const matches = [...document.head.querySelectorAll(selector)];
  const element = matches.shift() || document.createElement(tagName);

  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, value);
  });

  if (!element.parentNode) document.head.appendChild(element);
  matches.forEach((duplicate) => duplicate.remove());

  return element;
}

export default function SEO({
  title,
  description,
  canonical,
  image = DEFAULT_IMAGE,
  schema,
  noindex = false,
}) {
  const fullTitle = getFullTitle(title);
  const metaDescription = description || DEFAULT_DESCRIPTION;
  const canonicalUrl = getCanonicalUrl(canonical);
  const robots = noindex
    ? 'noindex, nofollow, noarchive'
    : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
  const jsonLd = schema ? JSON.stringify(schema) : null;

  useLayoutEffect(() => {
    const titles = [...document.head.querySelectorAll('title')];
    const titleElement = titles.shift() || document.createElement('title');
    titleElement.textContent = fullTitle;
    if (!titleElement.parentNode) document.head.appendChild(titleElement);
    titles.forEach((duplicate) => duplicate.remove());

    upsertHeadElement('meta[name="title"]', 'meta', { name: 'title', content: fullTitle });
    upsertHeadElement('meta[name="description"]', 'meta', { name: 'description', content: metaDescription });
    upsertHeadElement('meta[name="robots"]', 'meta', { name: 'robots', content: robots });
    upsertHeadElement('meta[name="googlebot"]', 'meta', { name: 'googlebot', content: robots });
    upsertHeadElement('link[rel="canonical"]', 'link', { rel: 'canonical', href: canonicalUrl });

    upsertHeadElement('meta[property="og:title"]', 'meta', { property: 'og:title', content: fullTitle });
    upsertHeadElement('meta[property="og:description"]', 'meta', { property: 'og:description', content: metaDescription });
    upsertHeadElement('meta[property="og:url"]', 'meta', { property: 'og:url', content: canonicalUrl });
    upsertHeadElement('meta[property="og:image"]', 'meta', { property: 'og:image', content: image });
    upsertHeadElement('meta[property="og:type"]', 'meta', { property: 'og:type', content: 'website' });
    upsertHeadElement('meta[property="og:site_name"]', 'meta', { property: 'og:site_name', content: SITE_NAME });
    upsertHeadElement('meta[property="og:locale"]', 'meta', { property: 'og:locale', content: 'en_IN' });

    upsertHeadElement('meta[name="twitter:card"]', 'meta', { name: 'twitter:card', content: 'summary_large_image' });
    upsertHeadElement('meta[name="twitter:url"]', 'meta', { name: 'twitter:url', content: canonicalUrl });
    upsertHeadElement('meta[name="twitter:title"]', 'meta', { name: 'twitter:title', content: fullTitle });
    upsertHeadElement('meta[name="twitter:description"]', 'meta', { name: 'twitter:description', content: metaDescription });
    upsertHeadElement('meta[name="twitter:image"]', 'meta', { name: 'twitter:image', content: image });

    const schemaElement = document.head.querySelector('script[data-page-schema]');
    if (jsonLd) {
      const script = schemaElement || document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.pageSchema = 'true';
      script.textContent = jsonLd;
      if (!script.parentNode) document.head.appendChild(script);
    } else {
      schemaElement?.remove();
    }
  }, [canonicalUrl, fullTitle, image, jsonLd, metaDescription, robots]);

  return null;
}
