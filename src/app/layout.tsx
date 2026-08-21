import type { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://4ah.in'),
  title: {
    default: '4Ability Hive | Employability Training & L&D Solutions',
    template: '%s | 4Ability Hive',
  },
  description: 'Transform students into industry-ready professionals with comprehensive employability training. Aptitude, soft skills, communication & placement readiness programs for colleges and corporates.',
  keywords: ['employability training', 'soft skills', 'aptitude training', 'placement readiness', 'corporate training', '4Ability Hive', 'L&D', 'campus training'],
  openGraph: {
    siteName: '4Ability Hive',
    locale: 'en_IN',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
        <meta name="theme-color" content="#F97316" />
      </head>
      <body className="bg-white text-gray-800">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
