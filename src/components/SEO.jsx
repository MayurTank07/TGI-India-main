import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.talentgroupofindia.com';
const SITE_NAME = 'Talent Group of India';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;
const DEFAULT_DESCRIPTION = 'Talent Group of India is a leading recruitment and staffing company helping businesses hire skilled professionals across Mumbai, Bangalore, Gujarat and India.';

/**
 * SEO component — drop into any page to set dynamic meta tags, OG, Twitter card,
 * canonical URL, and optional JSON-LD schema.
 *
 * Usage:
 *   <SEO
 *     title="IT Recruitment Company in Mumbai"
 *     description="Specialized IT recruitment support for software, cloud, DevOps, and infrastructure roles."
 *     canonical="/services/it"
 *     schema={{ "@type": "Service", ... }}
 *   />
 */
export default function SEO({
  title,
  description,
  canonical,
  image = DEFAULT_IMAGE,
  schema,
  noindex = false,
}) {
  const fullTitle = title
    ? title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`
    : `Talent Group of India: HR Recruitment & Staffing Company in India`;
  const metaDescription = description || DEFAULT_DESCRIPTION;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={noindex ? 'noindex, nofollow, noarchive' : 'index, follow'} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
