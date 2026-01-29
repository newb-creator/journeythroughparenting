"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

const animatedTexts = ["understanding", "patience", "joy", "connection"];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const heroBg = PlaceHolderImages.find(img => img.id === 'hero-background');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % animatedTexts.length);
      setAnimationKey(prevKey => prevKey + 1);
    }, 4000); // Change text every 4 seconds (2s for typing, 2s for pause)

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[80vh] min-h-[500px] w-full flex items-center justify-center text-center text-white">
      {heroBg && (
        <Image
          src={heroBg.imageUrl}
          alt={heroBg.description}
          data-ai-hint={heroBg.imageHint}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            Building a Foundation of <br />
            <span key={animationKey} className="inline-block overflow-hidden whitespace-nowrap border-r-4 border-r-accent animate-typing">
              {animatedTexts[currentIndex]}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/80">
            Discover a new approach to parenting with our expert-led course, designed to foster strong, loving relationships with your children.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white bg-transparent hover:bg-white hover:text-black">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
