import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Programs - Employability Training Solutions',
  description: 'Explore our comprehensive training programs: soft skills, communication, aptitude, logical reasoning, technical training, placement readiness, and corporate training.',
};

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
