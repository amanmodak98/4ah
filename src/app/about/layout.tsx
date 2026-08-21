import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Our Mission & Vision',
  description: 'Learn about 4Ability Hive\'s mission to bridge the gap between academic education and workplace expectations. Discover our 4A philosophy and experienced trainer network.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
