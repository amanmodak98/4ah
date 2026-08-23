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
  alternateName: '4AH',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: siteDescription,
  foundingDate: '2020', // Update with actual founding year
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: '10-50', // Update with actual range
  },
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Add your street address here',
    addressLocality: 'Add your city here',
    addressRegion: 'Add your state here',
    postalCode: 'Add your postal code here',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-XXXXXXXXXX', // Replace with actual phone number
    contactType: 'Customer Service',
    email: 'info@4ah.in',
    areaServed: 'IN',
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
      worksFor: {
        '@type': 'Organization',
        name: '4Ability Hive',
      },
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
