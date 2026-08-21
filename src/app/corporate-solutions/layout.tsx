import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Solutions - Employee Upskilling & Professional Development',
  description: 'Transform your workforce with customized corporate training programs. Leadership development, communication excellence, and professional growth solutions.',
};

export default function CorporateSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
