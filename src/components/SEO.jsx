import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.talentgroupofindia.com';
const SITE_NAME = 'Talent Group of India';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

/**
 * SEO component — drop into any page to set dynamic meta tags, OG, Twitter card,
 * canonical URL, and optional JSON-LD schema.
 *
 * Usage:
 *   <SEO
 *     title="IT Recruitment Agency in Mumbai | TGI"
 *     description="Top IT recruitment agency in Mumbai..."
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
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | #1 HR Recruitment & Staffing Agency in Mumbai`;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
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
