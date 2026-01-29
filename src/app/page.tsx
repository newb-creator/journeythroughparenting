import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { CourseHighlights } from '@/components/landing/course-highlights';
import { Curriculum } from '@/components/landing/curriculum';
import { Testimonials } from '@/components/landing/testimonials';
import { Faq } from '@/components/landing/faq';
import { AiTools } from '@/components/landing/ai-tools';
import { FinalCta } from '@/components/landing/final-cta';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <CourseHighlights />
        <Curriculum />
        <Testimonials />
        <Faq />
        <AiTools />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
