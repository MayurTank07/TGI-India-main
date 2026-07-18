export const SITE_URL = 'https://www.talentgroupofindia.com';
export const SITE_NAME = 'Talent Group of India';
export const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1200&h=630&q=85';

export const ROUTE_SEO = {
  '/': {
    title: 'Talent Group of India: HR Recruitment & Staffing Company in India',
    description: 'Talent Group of India is a leading HR recruitment and staffing company helping businesses hire skilled professionals across Mumbai, Bangalore, Gujarat and India.',
    canonical: '/',
  },
  '/about': {
    title: 'About Us | HR Recruitment Company in Mumbai',
    description: 'Learn how Talent Group of India supports recruitment, staffing and manpower hiring for IT, BPO, Finance, Healthcare, Non-IT and corporate roles across India.',
    canonical: '/about',
  },
  '/services': {
    title: 'Recruitment & Staffing Services in India',
    description: 'Explore HR recruitment services for IT, BPO, Non-IT, Accounting, Healthcare and Corporate hiring across Mumbai, Bangalore, Gujarat and India.',
    canonical: '/services',
  },
  '/services/it': {
    title: 'IT Recruitment Company in Mumbai',
    description: "Hire software developers, cloud engineers, DevOps, cybersecurity and IT support professionals with Talent Group of India's IT recruitment services.",
    canonical: '/services/it',
  },
  '/services/bpo': {
    title: 'BPO Recruitment & Staffing Company in Mumbai',
    description: 'Build BPO and customer support teams with recruitment for call center agents, telecallers, customer service executives and back-office professionals.',
    canonical: '/services/bpo',
  },
  '/services/non-it': {
    title: 'Non-IT Recruitment Company in Mumbai',
    description: "Recruit sales, marketing, operations, HR and administration professionals with Talent Group of India's non-IT recruitment services across India.",
    canonical: '/services/non-it',
  },
  '/services/accounting': {
    title: 'Finance Recruitment Company in Mumbai',
    description: "Hire chartered accountants, financial analysts, CFOs, auditors and accounts executives with Talent Group of India's finance recruitment services.",
    canonical: '/services/accounting',
  },
  '/services/healthcare': {
    title: 'Healthcare Recruitment Company in Mumbai',
    description: 'Hire nurses, doctors, medical billing professionals, hospital administrators and allied health staff with healthcare recruitment support from Talent Group of India.',
    canonical: '/services/healthcare',
  },
  '/services/corporate': {
    title: 'Corporate Hiring Company in Mumbai',
    description: 'Recruit leaders, managers and specialist professionals with corporate hiring and executive search support from Talent Group of India.',
    canonical: '/services/corporate',
  },
  '/our-clients': {
    title: 'Recruitment Clients Across India',
    description: 'See companies and organizations that work with Talent Group of India for recruitment, staffing and hiring support across IT, healthcare, finance, BPO and corporate sectors.',
    canonical: '/our-clients',
  },
  '/testimonials': {
    title: 'Recruitment Testimonials from Employers & Job Seekers',
    description: 'Read testimonials from employers and job seekers who trusted Talent Group of India for HR recruitment, staffing and career placement support in India.',
    canonical: '/testimonials',
  },
  '/contact': {
    title: 'Contact HR Recruitment Company in Mumbai',
    description: 'Contact Talent Group of India for HR recruitment, staffing, manpower hiring and job placement support across Mumbai, Bangalore, Gujarat and India.',
    canonical: '/contact',
  },
  '/404': {
    title: 'Page Not Found',
    description: 'The page you are looking for could not be found on Talent Group of India.',
    canonical: '/404',
    noindex: true,
  },
};

export const DEFAULT_DESCRIPTION = ROUTE_SEO['/'].description;

export function getFullTitle(title) {
  if (!title) return ROUTE_SEO['/'].title;
  return title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
}

export function getCanonicalUrl(canonical = '/') {
  return `${SITE_URL}${canonical}`;
}
