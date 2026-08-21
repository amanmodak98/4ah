import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'College Solutions - Year-wise Learning Journey',
  description: 'Progressive training from 1st year to final year. Build employability through structured year-wise programs ensuring campus-placement readiness.',
};

export default function CollegeSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
