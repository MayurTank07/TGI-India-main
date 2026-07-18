import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { load } from 'cheerio';
import {
  DEFAULT_IMAGE,
  ROUTE_SEO,
  getCanonicalUrl,
  getFullTitle,
} from '../src/seo/metadata.js';

const outputDirectory = join(process.cwd(), 'dist');
const template = await readFile(join(outputDirectory, 'index.html'), 'utf8');
const forbiddenTerminology = /\bagenc(?:y|ies)\b/i;

function setMeta($, selector, attributes) {
  let element = $(selector);

  if (element.length === 0) {
    $('head').append('<meta>');
    element = $('head meta').last();
  }

  element.attr(attributes);
}

function renderRoute(route, metadata) {
  const $ = load(template, { decodeEntities: false });
  const title = getFullTitle(metadata.title);
  const canonicalUrl = getCanonicalUrl(metadata.canonical);
  const robots = metadata.noindex
    ? 'noindex, nofollow, noarchive'
    : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';

  $('title').text(title);
  setMeta($, 'meta[name="title"]', { name: 'title', content: title });
  setMeta($, 'meta[name="description"]', { name: 'description', content: metadata.description });
  setMeta($, 'meta[name="robots"]', { name: 'robots', content: robots });
  setMeta($, 'meta[name="googlebot"]', { name: 'googlebot', content: robots });

  $('link[rel="canonical"]').attr('href', canonicalUrl);

  setMeta($, 'meta[property="og:title"]', { property: 'og:title', content: title });
  setMeta($, 'meta[property="og:description"]', { property: 'og:description', content: metadata.description });
  setMeta($, 'meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
  setMeta($, 'meta[property="og:image"]', { property: 'og:image', content: DEFAULT_IMAGE });

  setMeta($, 'meta[name="twitter:title"]', { name: 'twitter:title', content: title });
  setMeta($, 'meta[name="twitter:description"]', { name: 'twitter:description', content: metadata.description });
  setMeta($, 'meta[name="twitter:url"]', { name: 'twitter:url', content: canonicalUrl });
  setMeta($, 'meta[name="twitter:image"]', { name: 'twitter:image', content: DEFAULT_IMAGE });

  const html = $.html();
  if (forbiddenTerminology.test(html)) {
    throw new Error(`Forbidden SEO terminology found in generated HTML for ${route}`);
  }

  return html;
}

for (const [route, metadata] of Object.entries(ROUTE_SEO)) {
  const outputFile = route === '/'
    ? join(outputDirectory, 'index.html')
    : join(outputDirectory, `${route.slice(1)}.html`);

  await mkdir(dirname(outputFile), { recursive: true });
  await writeFile(outputFile, renderRoute(route, metadata));
}

console.log(`Generated crawler-ready metadata for ${Object.keys(ROUTE_SEO).length} routes.`);
