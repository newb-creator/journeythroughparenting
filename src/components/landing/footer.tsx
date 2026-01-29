import Link from 'next/link';
import { Baby } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary border-t">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Baby className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg font-headline">ConnectKids</span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} ConnectKids. All Rights Reserved.
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="#" className="hover:text-primary">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-primary">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
