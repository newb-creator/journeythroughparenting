import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function FinalCta() {
  return (
    <section id="enroll" className="py-16 md:py-24">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
          Ready to Build a Stronger Connection?
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
          Join a community of parents dedicated to raising happy, resilient
          children. Your journey to more joyful parenting starts now.
        </p>
        <Button
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-7 px-10"
        >
          Enroll in ConnectKids Today <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
