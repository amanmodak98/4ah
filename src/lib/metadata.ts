import { Metadata } from 'next';

const siteUrl = 'https://4ah.in';
const siteName = '4Ability Hive';
const siteDescription = 'Transform learners into industry-ready professionals with comprehensive employability training. Expert-led programs in soft skills, aptitude, communication, and placement readiness across India. 10,000+ learners trained.';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: '4Ability Hive - Transform Learners Into Industry-Ready Professionals',
    template: '%s | 4Ability Hive',
  },
  description: siteDescription,
  keywords: [
    'employability training India',
    'soft skills training',
    'aptitude training programs',
    'communication skills development',
    'placement readiness training',
    'college training programs',
    'corporate training solutions',
    'learner development programs',
    'career skills training',
    'professional development',
    'job readiness training',
    'campus placement training',
    'skill development programs India',
    'interview preparation training',
    'year-wise employability programs',
    'fresher training programs',
    'graduate employability',
    'workplace readiness',
    'experiential learning',
    '4Ability Hive',
    '4AH training',
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
    title: '4Ability Hive - Transform Learners Into Industry-Ready Professionals',
    description: siteDescription,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '4Ability Hive - Employability Training Across India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '4Ability Hive - Transform Learners Into Industry-Ready Professionals',
    description: siteDescription,
    images: ['/twitter-image.jpg'],
    creator: '@4abilityhive',
    site: '@4abilityhive',
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
    // google: 'add-your-google-search-console-verification-code-here',
    // yandex: 'add-your-yandex-verification-code-here',
    // bing: 'add-your-bing-webmaster-verification-code-here',
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
  alternateName: ['4AH', '4Ability', 'Four Ability Hive'],
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/og-image.jpg`,
  description: siteDescription,
  foundingDate: '2018',
  slogan: 'Transform Learners Into Industry-Ready Professionals',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: '10-50',
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'India',
    },
    {
      '@type': 'State',
      name: 'All States of India',
    },
  ],
  audience: {
    '@type': 'EducationalAudience',
    audienceType: 'College Students, Corporate Employees, Educational Institutions',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressRegion: 'India',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'info@4ah.in',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
    {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      email: 'info@4ah.in',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
  ],
  sameAs: [
    'https://www.linkedin.com/company/4abilityhive',
    'https://twitter.com/4abilityhive',
    'https://www.instagram.com/4abilityhive',
    'https://www.youtube.com/@4abilityhive',
    'https://www.facebook.com/4abilityhive',
  ],
  founder: [
    {
      '@type': 'Person',
      name: 'Himani S.',
      jobTitle: 'Founder & CEO',
      worksFor: {
        '@type': 'Organization',
        name: '4Ability Hive',
      },
    },
    {
      '@type': 'Person',
      name: 'Aviral Jain',
      jobTitle: 'Co-Founder & COO',
      worksFor: {
        '@type': 'Organization',
        name: '4Ability Hive',
      },
    },
    {
      '@type': 'Person',
      name: 'Anand Tiwari',
      jobTitle: 'Co-Founder & Head of Training',
      worksFor: {
        '@type': 'Organization',
        name: '4Ability Hive',
      },
    },
  ],
  knowsAbout: [
    'Employability Training',
    'Soft Skills Development',
    'Aptitude Training',
    'Communication Skills',
    'Placement Readiness',
    'Corporate Training',
    'Professional Development',
    'Career Skills',
    'Interview Preparation',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Training Programs',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'Flagship 90-Hour Employability Program',
          description: 'Comprehensive aptitude and soft skills training for final year learners',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'College Solutions Programs',
          description: 'Year-wise progressive training from first year to placement',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'Corporate Training Solutions',
          description: 'Professional development and upskilling programs for employees',
        },
      },
    ],
  },
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

export const reviewSchema = (review: {
  author: string;
  reviewBody: string;
  reviewRating: number;
  datePublished?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'EducationalOrganization',
    name: '4Ability Hive',
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: review.reviewRating,
    bestRating: 5,
  },
  author: {
    '@type': 'Person',
    name: review.author,
  },
  reviewBody: review.reviewBody,
  datePublished: review.datePublished || new Date().toISOString().split('T')[0],
});

export const aggregateRatingSchema = (ratingValue: number, reviewCount: number) => ({
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: '4Ability Hive',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: ratingValue,
    reviewCount: reviewCount,
    bestRating: 5,
    worstRating: 1,
  },
});

export const itemListSchema = (items: { name: string; url: string; description: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Course',
      name: item.name,
      description: item.description,
      url: item.url,
      provider: {
        '@type': 'Organization',
        name: '4Ability Hive',
        sameAs: siteUrl,
      },
    },
  })),
});
