import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Success Stories - Participant & College Testimonials',
  description: 'Real success stories from participants, colleges and corporates who transformed with 4Ability Hive training programs. Read testimonials and placement results.',
};

export default function SuccessStoriesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
