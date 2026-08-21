import { Metadata } from 'next';

const siteUrl = 'https://4ah.in';
const siteName = '4Ability Hive';
const siteDescription = 'Transform students into industry-ready professionals with comprehensive employability training. Expert-led programs in soft skills, aptitude, communication, and placement readiness across India.';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: '4Ability Hive - Transform Students Into Industry-Ready Professionals',
    template: '%s | 4Ability Hive',
  },
  description: siteDescription,
  keywords: [
    'employability training',
    'soft skills training',
    'aptitude training',
    'communication skills',
    'placement readiness',
    'college training programs',
    'corporate training',
    'student development',
    'career skills',
    'professional development',
    'job readiness training',
    'campus to corporate',
    'skill development programs',
    'technical training',
    'interview preparation',
  ],
  authors: [{ name: '4Ability Hive' }],
  creator: '4Ability Hive',
  publisher: '4Ability Hive',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: siteName,
    title: '4Ability Hive - Transform Students Into Industry-Ready Professionals',
    description: siteDescription,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '4Ability Hive - Employability Training',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '4Ability Hive - Transform Students Into Industry-Ready Professionals',
    description: siteDescription,
    images: ['/twitter-image.jpg'],
    creator: '@4abilityhive',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'education',
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: '4Ability Hive',
  alternateName: '4AH',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: siteDescription,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-99999-99999',
    contactType: 'Customer Service',
    email: 'info@4ah.in',
    availableLanguage: ['English', 'Hindi'],
  },
  sameAs: [
    'https://www.linkedin.com/company/4abilityhive',
    'https://twitter.com/4abilityhive',
    'https://www.instagram.com/4abilityhive',
    'https://www.youtube.com/@4abilityhive',
  ],
  founder: [
    {
      '@type': 'Person',
      name: 'Himani S.',
      jobTitle: 'Founder & CEO',
    },
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteName,
  url: siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${siteUrl}${item.url}`,
  })),
});

export const courseSchema = (course: {
  name: string;
  description: string;
  provider: string;
  url: string;
  hasCourseInstance?: {
    courseMode: string;
    duration: string;
  };
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: course.name,
  description: course.description,
  provider: {
    '@type': 'Organization',
    name: course.provider,
    sameAs: siteUrl,
  },
  url: course.url,
  hasCourseInstance: course.hasCourseInstance
    ? {
        '@type': 'CourseInstance',
        courseMode: course.hasCourseInstance.courseMode,
        duration: course.hasCourseInstance.duration,
      }
    : undefined,
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});
