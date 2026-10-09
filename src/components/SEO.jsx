import { useEffect } from 'react';

const SITE_NAME = 'LoveLead Assisted Living';
const DEFAULT_IMAGE = 'https://www.loveleadal.com/photos/lovelead_frontyard2.jpeg';
const BASE_URL = 'https://www.loveleadal.com';

function updateMetaTag(attrName, attrValue, content) {
  if (!content) return;
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function updateLinkTag(rel, href) {
  if (!href) return;
  let element = document.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

export default function SEO({
  title,
  description,
  keywords,
  path = '',
  image = DEFAULT_IMAGE,
  schema = null,
}) {
  useEffect(() => {
    // 1. Update Title Tag
    const formattedTitle = title
      ? `${title} | ${SITE_NAME}`
      : `${SITE_NAME} | Compassionate Senior Care in Cottage Grove, MN`;
    document.title = formattedTitle;

    // 2. Canonical URL Tag
    const cleanPath = path ? (path.startsWith('/') ? path : `/${path}`) : '';
    const canonicalUrl = `${BASE_URL}${cleanPath}`;
    updateLinkTag('canonical', canonicalUrl);

    // 3. Primary Search Description & Keywords
    if (description) {
      updateMetaTag('name', 'description', description);
    }
    if (keywords) {
      updateMetaTag('name', 'keywords', keywords);
    }

    // 4. Open Graph Social Sharing
    updateMetaTag('property', 'og:title', formattedTitle);
    if (description) {
      updateMetaTag('property', 'og:description', description);
    }
    updateMetaTag('property', 'og:url', canonicalUrl);
    updateMetaTag('property', 'og:image', image);
    updateMetaTag('property', 'og:site_name', SITE_NAME);

    // 5. Twitter Card Social Sharing
    updateMetaTag('name', 'twitter:title', formattedTitle);
    if (description) {
      updateMetaTag('name', 'twitter:description', description);
    }
    updateMetaTag('name', 'twitter:image', image);

    // 6. Structured Data (JSON-LD) for Rich Snippets
    let scriptTag = null;
    if (schema) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      scriptTag.className = 'page-structured-data';
      scriptTag.innerHTML = JSON.stringify(schema);
      document.head.appendChild(scriptTag);
    }

    return () => {
      if (scriptTag && scriptTag.parentNode) {
        scriptTag.parentNode.removeChild(scriptTag);
      }
    };
  }, [title, description, keywords, path, image, schema]);

  return null;
}
