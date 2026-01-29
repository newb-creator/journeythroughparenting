import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Baby } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 mr-auto">
          <Baby className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg font-headline">ConnectKids</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link
            href="#curriculum"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Curriculum
          </Link>
          <Link
            href="#testimonials"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Testimonials
          </Link>
          <Link
            href="#faq"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            FAQ
          </Link>
          <Link
            href="#ai-tools"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            AI Tools
          </Link>
        </nav>
        <div className="flex items-center gap-4 ml-auto">
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
            Enroll Now
          </Button>
        </div>
      </div>
    </header>
  );
}
