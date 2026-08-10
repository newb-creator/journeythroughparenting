'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MessageSquareWarning, MicOff, UsersRound, PlayCircle, Grab, BrainCircuit, Clock, HeartHandshake, Star, CheckCircle, Video, Users, LifeBuoy, BookOpen, Twitter, Youtube, Facebook, Instagram } from 'lucide-react';

const WordCycle = () => {
  const words = ['Trust', 'Resilience', 'Joy', 'Connection'];
  const [currentWord, setCurrentWord] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150;
  const deletingSpeed = 75;
  const delay = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[wordIndex];
      setCurrentWord(
        isDeleting
          ? fullWord.substring(0, currentWord.length - 1)
          : fullWord.substring(0, currentWord.length + 1)
      );

      if (!isDeleting && currentWord === fullWord) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && currentWord === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [currentWord, isDeleting, wordIndex, words, delay]);

  return (
    <span className="font-bold text-accent min-h-[4rem] inline-block">
      {currentWord || ' '}
    </span>
  );
};


const Header = () => (
  <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40">
    <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
      <a href="#" className="flex items-center gap-2">
        <svg width="44" height="44" viewBox="0 0 70 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="54" cy="18" r="6" fill="#D85A30"/>
          <path d="M54 24 L54 36" stroke="#D85A30" stroke-width="3.5" stroke-linecap="round"/>
          <path d="M54 36 L46 46" stroke="#D85A30" stroke-width="3.5" stroke-linecap="round"/>
          <path d="M46 46 L54 50" stroke="#D85A30" stroke-width="3.5" stroke-linecap="round"/>
          <path d="M54 29 L62 34" stroke="#D85A30" stroke-width="3" stroke-linecap="round"/>
          <path d="M54 29 L43 33" stroke="#D85A30" stroke-width="3" stroke-linecap="round"/>
          <circle cx="18" cy="20" r="4.5" fill="#2a2a2a"/>
          <path d="M18 24.5 L18 37" stroke="#2a2a2a" stroke-width="2.8" stroke-linecap="round"/>
          <path d="M18 37 L13 48" stroke="#2a2a2a" stroke-width="2.8" stroke-linecap="round"/>
          <path d="M18 37 L23 48" stroke="#2a2a2a" stroke-width="2.8" stroke-linecap="round"/>
          <path d="M18 29 L11 34" stroke="#2a2a2a" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M18 29 L29 33" stroke="#2a2a2a" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M29 33 L43 33" stroke="#D85A30" stroke-width="2.2" stroke-linecap="round" stroke-dasharray="2.5 2"/>
        </svg>
        <span className="flex flex-col font-headline leading-[1.15]">
          <span className="text-foreground font-semibold" style={{fontSize: '15px'}}>Journey through</span>
          <span className="text-accent font-bold" style={{fontSize: '22px'}}>Parenting</span>
        </span>
      </a>
      <nav className="hidden md:flex items-center space-x-6">
        <a href="#curriculum" className="hover:text-primary transition-colors">Curriculum</a>
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#reviews" className="hover:text-primary transition-colors">Reviews</a>
      </nav>
      {/* <Button asChild>
        <a href="#waitlist">Join Waitlist</a>
      </Button> */}
    </div>
  </header>
);

const Hero = () => (
    <section className="text-center py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
                Parenting is about building <WordCycle />
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
                The 4-week course to stop managing behaviors and start connecting with your child.
            </p>
            <div className="mt-8">
                {/* <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <a href="#waitlist">Join Waitlist Now</a>
                </Button> */}
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <a href="#about">See What's Included</a>
                </Button>
            </div>
        </div>
    </section>
);

const ProblemSection = () => (
    <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Tired of the Daily Battles?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">You're not alone. Modern parenting is full of challenges that leave us feeling drained and disconnected.</p>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                    <MessageSquareWarning className="w-12 h-12 text-accent"/>
                    <h3 className="mt-4 text-xl font-headline font-bold">Yelling & Frustration</h3>
                    <p className="mt-2 text-muted-foreground">Feeling like you have to raise your voice just to be heard.</p>
                </div>
                <div className="flex flex-col items-center">
                    <MicOff className="w-12 h-12 text-accent"/>
                    <h3 className="mt-4 text-xl font-headline font-bold">The Silent Treatment</h3>
                    <p className="mt-2 text-muted-foreground">When communication shuts down and you don't know how to reconnect.</p>
                </div>
                <div className="flex flex-col items-center">
                    <UsersRound className="w-12 h-12 text-accent"/>
                    <h3 className="mt-4 text-xl font-headline font-bold">Constant Power Struggles</h3>
                    <p className="mt-2 text-muted-foreground">Every day feels like a negotiation over simple tasks.</p>
                </div>
            </div>
        </div>
    </section>
);

const InstructorSection = () => {
    const instructorImage = PlaceHolderImages.find(p => p.id === 'lynette-anderson');
    return (
        <section id="about" className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative w-full max-w-sm mx-auto aspect-[4/5]">
                        {instructorImage && (
                            <Image src={instructorImage.imageUrl} alt={instructorImage.description} data-ai-hint={instructorImage.imageHint} fill className="rounded-2xl object-cover shadow-lg" />
                        )}
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-headline font-bold">Meet Your Instructor: Lynette Anderson</h2>
                        <p className="mt-4 text-lg text-primary font-semibold">Experienced Early Childhood Educator</p>
                        <p className="mt-4 text-muted-foreground">
                            Unlike most practitioners who work with adults, Lynette has spent 30 years in the classroom. She is the Director of Hilltop Preschool, a parent-participation, Reggio-inspired co-op in southern California -- meaning parents work alongside teachers in the classroom every day, and Lynette has coached them through it. She's personally taught over 2,000 young children and their parents (and she's still teaching preschool today). Lynette offers hard-earned insight on how children <em>actually</em> work--not how they work in theory.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

const SampleLessonSection = () => {
    const videoImage = PlaceHolderImages.find(p => p.id === 'video-placeholder');
    return (
        <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                     <h2 className="text-3xl md:text-4xl font-headline font-bold">See For Yourself: A Sample Lesson</h2>
                     <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">Get a taste of Lynette's practical, connected approach.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                     <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg group">
                        {videoImage && <Image src={videoImage.imageUrl} alt={videoImage.description} data-ai-hint={videoImage.imageHint} fill className="object-cover"/>}
                         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                             <PlayCircle className="w-20 h-20 text-white/80 transform transition-transform group-hover:scale-110" />
                         </div>
                     </div>
                     <div>
                         <h3 className="text-2xl font-headline font-bold">What you'll learn in 10 minutes</h3>
                         <ul className="mt-4 space-y-3">
                             <li className="flex items-center gap-3">
                                 <CheckCircle className="w-6 h-6 text-primary"/>
                                 <span>The science of tantrums</span>
                             </li>
                             <li className="flex items-center gap-3">
                                 <CheckCircle className="w-6 h-6 text-primary"/>
                                 <span>Staying connected and calm</span>
                             </li>
                             <li className="flex items-center gap-3">
                                 <CheckCircle className="w-6 h-6 text-primary"/>
                                 <span>Help your child build their self-regulation</span>
                             </li>
                         </ul>
                     </div>
                </div>
            </div>
        </section>
    );
};

const CourseHighlightsSection = () => (
    <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
             <div className="text-center mb-12">
                 <h2 className="text-3xl md:text-4xl font-headline font-bold">Journey through Parenting - A Class for All Parents</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                    <div className="flex justify-center items-center mb-4 w-16 h-16 mx-auto bg-primary/10 rounded-full">
                        <UsersRound className="w-8 h-8 text-primary"/>
                    </div>
                    <h3 className="text-xl font-headline font-bold">Live Instruction</h3>
                    <p className="mt-2 text-muted-foreground">4 weekly classes. Real time with Lynette and a small group of parents.</p>
                </div>
                <div className="text-center">
                    <div className="flex justify-center items-center mb-4 w-16 h-16 mx-auto bg-primary/10 rounded-full">
                        <Star className="w-8 h-8 text-primary"/>
                    </div>
                    <h3 className="text-xl font-headline font-bold">A Different Focus</h3>
                    <p className="mt-2 text-muted-foreground">Build a lasting bond with your child — while growing their curiosity, confidence, self-regulation, and creativity.</p>
                </div>
                <div className="text-center">
                    <div className="flex justify-center items-center mb-4 w-16 h-16 mx-auto bg-primary/10 rounded-full">
                        <HeartHandshake className="w-8 h-8 text-primary"/>
                    </div>
                    <h3 className="text-xl font-headline font-bold">Learning by Doing</h3>
                    <p className="mt-2 text-muted-foreground">No lectures. Just playful, spot-on demos that feel like real life with your child.</p>
                </div>
            </div>
        </div>
    </section>
);


const CurriculumSection = () => (
    <section id="curriculum" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center">Course Curriculum</h2>
            <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">A 4-week course to transform your family's dynamic.</p>
            <div className="max-w-3xl mx-auto mt-12">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg font-headline">Week 1: The Foundation of Connection</AccordionTrigger>
                        <AccordionContent>
                            <p>Learn the core principles of connection-based parenting. We'll explore how your own mindset impacts your child's behavior, and introduce the foundational tools for empathetic communication.</p>
                            <p className="mt-4"><em>You'll learn:</em> Parenting with the end in mind, how change really happens, the three parenting paradigms (authoritative, permissive, and heart-centered), Genuine Endearing Moments, and a 60-second grounding technique.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg font-headline">Week 2: Decoding Behavior</AccordionTrigger>
                        <AccordionContent>
                            <p>Dive deep into the 'why' behind your child's actions. This week is all about shifting your perspective from seeing 'bad behavior' to seeing 'unmet needs' and learning how to respond effectively.</p>
                            <p className="mt-4"><em>You'll learn:</em> The look and feel of high/medium/low levels of connection, the SPECIAL needs of every child, temper tantrums, active listening, and self-care.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-lg font-headline">Week 3: Setting Limits with Love</AccordionTrigger>
                        <AccordionContent>
                            <p>Boundaries are essential for a healthy family. Learn how to set clear, respectful limits without resorting to punishment or rewards, fostering cooperation instead of conflict.</p>
                            <p className="mt-4"><em>You'll learn:</em> How to set limits around health, safety, and respect, how to express when your own boundaries are being crossed, meeting your child at their developmental age, using feeling encouragers, and using encouragement instead of praise or rewards.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-lg font-headline">Week 4: Playful Parenting & Lasting Joy</AccordionTrigger>
                        <AccordionContent>
                            <p>Rediscover the power of play in building resilience and connection. This week provides practical strategies for bringing more laughter, joy, and ease into your daily family life.</p>
                            <p className="mt-4"><em>You'll learn:</em> How to run family meetings, reframing negative labels, prioritizing one-on-one time, and giving yourself permission to play — plus a little grace for the days that don't go perfectly.</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    </section>
);

const TestimonialsSection = () => {
    const testimonials = [
        { id: 'testimonial-1', name: 'Sarah J.', quote: "This class helped me to confidently understand what goes on in the preschool brain, to know what young children are capable of and need at an early age." },
        { id: 'testimonial-2', name: 'Michael B.', quote: "I learned that logic is an ineffective tool before the age of 5. I started seeing changes in my daughter's behavior within days. Highly recommend." },
        { id: 'testimonial-3', name: 'Emily R.', quote: "I love how deep the class went.  I learned not just tactics, but a coherent philosophy.  Now I can use it for any problems that come up." },
    ];

    return (
        <section id="reviews" className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-center">What Parents Are Saying</h2>
                <div className="mt-12">
                    <Carousel opts={{ loop: true }} className="max-w-4xl mx-auto">
                        <CarouselContent>
                            {testimonials.map(t => {
                                const initials = t.name.replace(/\./g, '').split(' ').map(part => part[0]).join('');
                                return (
                                <CarouselItem key={t.id} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                    <Card className="h-full">
                                        <CardContent className="pt-6 flex flex-col items-center text-center">
                                            <Avatar className="h-20 w-20 mb-4">
                                                <AvatarFallback className="text-xl font-headline font-bold bg-primary/10 text-primary">{initials}</AvatarFallback>
                                            </Avatar>
                                            <p className="italic text-muted-foreground">"{t.quote}"</p>
                                            <p className="mt-4 font-bold font-headline">{t.name}</p>
                                        </CardContent>
                                    </Card>
                                    </div>
                                </CarouselItem>
                            )})}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

const FaqSection = () => (
    <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto mt-12">
                <Accordion type="single" collapsible>
                    <AccordionItem value="faq-1">
                        <AccordionTrigger>What if I'm too busy?</AccordionTrigger>
                        <AccordionContent>We know parents are busy — that's why we kept it to just 4 sessions, with practical takeaways you can use immediately.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-2">
                        <AccordionTrigger>Is this for a specific age group?</AccordionTrigger>
                        <AccordionContent>The principles apply to all ages, but the examples and strategies are most relevant for parents of preschoolers through elementary school-aged children (approx 3-8).</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-3">
                        <AccordionTrigger>What if my partner won't do it with me?</AccordionTrigger>
                        <AccordionContent>That's okay! Even one parent implementing these changes can have a huge positive impact on the entire family dynamic.</AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    </section>
);

const PricingSection = () => (
    <section id="waitlist" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
             <div className="text-center mb-12">
                 <h2 className="text-3xl md:text-4xl font-headline font-bold">Join Our Pilot Class</h2>
                 <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">Invest in your family's future. Join our pilot class — a small, invite-only group to start.</p>
            </div>
            <div className="grid max-w-md mx-auto">
                <Card className="flex flex-col">
                    <CardContent className="flex-grow pt-6">
                        <p className="text-4xl font-bold font-headline mb-4">$250 <span className="text-sm font-normal text-muted-foreground">/ person</span></p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5"/>Four 2-hour live sessions with Lynette</li>
                            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5"/>A workbook to capture what clicks — yours to keep and revisit</li>
                            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5"/>A small group of fellow parents on the same journey</li>
                            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5"/>Personalized guidance on your own parenting moments, live with Lynette</li>
                        </ul>
                    </CardContent>
                </Card>
                {/* Village Pass option — may bring back later
                 <Card className="flex flex-col border-primary ring-2 ring-primary">
                    <CardHeader>
                        <CardTitle className="font-headline">Village Pass</CardTitle>
                        <CardDescription>Share the journey and the cost with your support system.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-4xl font-bold font-headline mb-4">$50 <span className="text-sm font-normal text-muted-foreground">/ person</span></p>
                         <ul className="space-y-2">
                            <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary"/>Multi-person access (invite co-parents, friends)</li>
                            <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary"/>Shared journey & accountability</li>
                             <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary"/>Exclusive group voice chats</li>
                        </ul>
                    </CardContent>
                     <div className="p-6 pt-0">
                         <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                            <a href="#waitlist">Join the Village Waitlist</a>
                         </Button>
                    </div>
                </Card>
                */}
            </div>
        </div>
    </section>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProblemSection />
        <InstructorSection />
        <CourseHighlightsSection />
        {/* <SampleLessonSection/> */}
        <CurriculumSection />
        <TestimonialsSection />
        <FaqSection />
        <PricingSection />
      </main>
      <footer className="bg-secondary">
        <div className="container mx-auto px-4 md:px-6 py-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Journey through Parenting. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
