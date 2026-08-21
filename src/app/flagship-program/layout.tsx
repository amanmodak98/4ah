import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flagship Program - 90-Hour Final Year Employability Training',
  description: '90-hour comprehensive employability program: 60 hours quantitative & logical aptitude + 30 hours soft skills & corporate readiness. Build job-ready graduates.',
};

export default function FlagshipProgramLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
