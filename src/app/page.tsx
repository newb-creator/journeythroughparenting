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
      {currentWord}
    </span>
  );
};


const Header = () => (
  <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40">
    <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
      <a href="#" className="flex items-center gap-3">
        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
          <HeartHandshake className="w-6 h-6 text-accent" />
        </div>
        <span className="text-2xl font-headline font-bold text-foreground">
          Genuine<span className="text-accent">Connection</span>
        </span>
      </a>
      <nav className="hidden md:flex items-center space-x-6">
        <a href="#curriculum" className="hover:text-primary transition-colors">Curriculum</a>
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#reviews" className="hover:text-primary transition-colors">Reviews</a>
      </nav>
      <Button asChild>
        <a href="#waitlist">Join Waitlist</a>
      </Button>
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
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <a href="#waitlist">Join the Waitlist Now</a>
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
                            Unlike most practitioners who work with adults, Lynette has spent 30 years in the classroom and guided over 2,000 young children and their parents (and is still teaching preschool today). She offers world-class insight on how children actually work–not how they work in theory.
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
                     <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">Get a taste of Lynette's practical, empathy-driven approach.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                     <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg group">
                        {videoImage && <Image src={videoImage.imageUrl} alt={videoImage.description} data-ai-hint={videoImage.imageHint} fill className="object-cover"/>}
                         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                             <PlayCircle className="w-20 h-20 text-white/80 transform transition-transform group-hover:scale-110" />
                         </div>
                     </div>
                     <div>
                         <h3 className="text-2xl font-headline font-bold">What you'll learn in 5 minutes</h3>
                         <ul className="mt-4 space-y-3">
                             <li className="flex items-center gap-3">
                                 <CheckCircle className="w-6 h-6 text-primary"/>
                                 <span>The real reason your child has temper tantrums.</span>
                             </li>
                             <li className="flex items-center gap-3">
                                 <CheckCircle className="w-6 h-6 text-primary"/>
                                 <span>How to respond instead of react.</span>
                             </li>
                             <li className="flex items-center gap-3">
                                 <CheckCircle className="w-6 h-6 text-primary"/>
                                 <span>A simple phrase to de-escalate any situation.</span>
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
                 <h2 className="text-3xl md:text-4xl font-headline font-bold">More Than Just "Tips & Tricks"</h2>
                 <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">We go beyond surface-level advice to help you build a lasting foundation of connection.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                    <div className="flex justify-center items-center mb-4 w-16 h-16 mx-auto bg-primary/10 rounded-full">
                        <HeartHandshake className="w-8 h-8 text-primary"/>
                    </div>
                    <h3 className="text-xl font-headline font-bold">Fun & Active Learning</h3>
                    <p className="mt-2 text-muted-foreground">Engaging exercises that feel like play, not homework.</p>
                </div>
                 <div className="text-center">
                    <div className="flex justify-center items-center mb-4 w-16 h-16 mx-auto bg-primary/10 rounded-full">
                        <Grab className="w-8 h-8 text-primary"/>
                    </div>
                    <h3 className="text-xl font-headline font-bold">Practical & Actionable</h3>
                    <p className="mt-2 text-muted-foreground">Tools you can use immediately, no matter the situation.</p>
                </div>
                 <div className="text-center">
                    <div className="flex justify-center items-center mb-4 w-16 h-16 mx-auto bg-primary/10 rounded-full">
                        <BrainCircuit className="w-8 h-8 text-primary"/>
                    </div>
                    <h3 className="text-xl font-headline font-bold">Mindset Over Methods</h3>
                    <p className="mt-2 text-muted-foreground">Understand the 'why' behind behaviors to foster real change.</p>
                </div>
                 <div className="text-center">
                    <div className="flex justify-center items-center mb-4 w-16 h-16 mx-auto bg-primary/10 rounded-full">
                        <Clock className="w-8 h-8 text-primary"/>
                    </div>
                    <h3 className="text-xl font-headline font-bold">Bite-Sized & Convenient</h3>
                    <p className="mt-2 text-muted-foreground">Learn at your own pace with short, digestible lessons.</p>
                </div>
            </div>
        </div>
    </section>
);


const CurriculumSection = () => (
    <section id="curriculum" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center">Course Curriculum</h2>
            <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">A 4-week journey to transform your family's dynamic.</p>
            <div className="max-w-3xl mx-auto mt-12">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg font-headline">Week 1: The Foundation of Connection</AccordionTrigger>
                        <AccordionContent>
                            Learn the core principles of connection-based parenting. We'll explore how your own mindset impacts your child's behavior and introduce the foundational tools for empathetic communication.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg font-headline">Week 2: Decoding Behavior</AccordionTrigger>
                        <AccordionContent>
                            Dive deep into the 'why' behind your child's actions. This week is all about shifting your perspective from seeing 'bad behavior' to seeing 'unmet needs' and learning how to respond effectively.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-lg font-headline">Week 3: Setting Limits with Love</AccordionTrigger>
                        <AccordionContent>
                            Boundaries are essential for a healthy family. Learn how to set firm, respectful limits without resorting to punishment or rewards, fostering cooperation instead of conflict.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-lg font-headline">Week 4: Playful Parenting & Lasting Joy</AccordionTrigger>
                        <AccordionContent>
                            Rediscover the power of play in building resilience and connection. This week provides practical strategies for bringing more laughter, joy, and ease into your daily family life.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    </section>
);

const TestimonialsSection = () => {
    const testimonials = [
        { id: 'testimonial-1', name: 'Sarah J.', quote: "This course was a game-changer. I feel like I finally understand my son instead of just battling him. Our home is so much more peaceful." },
        { id: 'testimonial-2', name: 'Michael B.', quote: "I was skeptical, but Lynette's approach is so practical. I started seeing changes in my daughter's behavior within days. Highly recommend." },
        { id: 'testimonial-3', name: 'Emily R.', quote: "Genuine Connection should be required for all parents. It's not about being perfect, it's about being present. Thank you, Lynette!" },
    ];

    return (
        <section id="reviews" className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-center">What Parents Are Saying</h2>
                <div className="mt-12">
                    <Carousel opts={{ loop: true }} className="max-w-4xl mx-auto">
                        <CarouselContent>
                            {testimonials.map(t => {
                                const avatar = PlaceHolderImages.find(p => p.id === t.id);
                                return (
                                <CarouselItem key={t.id} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                    <Card className="h-full">
                                        <CardContent className="pt-6 flex flex-col items-center text-center">
                                            {avatar && <Image src={avatar.imageUrl} alt={avatar.description} data-ai-hint={avatar.imageHint} width={80} height={80} className="rounded-full mb-4" />}
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
                        <AccordionContent>The course is designed for busy parents! Lessons are short, practical, and you can learn at your own pace.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-2">
                        <AccordionTrigger>Is this for a specific age group?</AccordionTrigger>
                        <AccordionContent>The principles apply to all ages, but the examples and strategies are most relevant for parents of toddlers through elementary school-aged children (approx. 2-10).</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-3">
                        <AccordionTrigger>What if my partner won't do it with me?</AccordionTrigger>
                        <AccordionContent>That's okay! Even one parent implementing these changes can have a huge positive impact on the entire family dynamic. Our Village Pass is a great option to invite them to join later!</AccordionContent>
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
                 <h2 className="text-3xl md:text-4xl font-headline font-bold">Choose Your Path</h2>
                 <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">Invest in your family's future. Join the waitlist to be notified when enrollment opens.</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="font-headline">Learn Alone</CardTitle>
                        <CardDescription>A focused, self-paced journey for one.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-4xl font-bold font-headline mb-4">$100 <span className="text-sm font-normal text-muted-foreground">/ person</span></p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary"/>Single-person access</li>
                            <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary"/>Full self-paced course</li>
                        </ul>
                    </CardContent>
                    <div className="p-6 pt-0">
                         <Button className="w-full" variant="outline">Join Waitlist</Button>
                    </div>
                </Card>
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
                         <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Join the Village Waitlist</Button>
                    </div>
                </Card>
            </div>
        </div>
    </section>
);


const Footer = () => (
  <footer className="bg-secondary">
    <div className="container mx-auto px-4 md:px-6 py-8 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Genuine Connection. All Rights Reserved.</p>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProblemSection />
        <InstructorSection />
        <SampleLessonSection/>
        <CourseHighlightsSection />
        <CurriculumSection />
        <TestimonialsSection />
        <FaqSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
