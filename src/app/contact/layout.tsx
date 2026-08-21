import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Partner With 4Ability Hive',
  description: 'Get in touch with 4Ability Hive for institutional partnerships, corporate training, or custom employability programs. Transform your students today.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
