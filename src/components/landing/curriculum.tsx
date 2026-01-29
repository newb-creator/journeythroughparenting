import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { BookOpen } from 'lucide-react';

const curriculumData = [
  {
    module: 'Module 1: The Foundation of Connection',
    title: 'Understanding Attachment Styles',
    topics: [
      'The science of attachment theory.',
      "Identifying your child's attachment style.",
      'Building a secure base for your child.',
    ],
  },
  {
    module: 'Module 2: Mindful Communication',
    title: 'Speaking and Listening with Heart',
    topics: [
      'Active listening techniques for all ages.',
      'Expressing your needs without blame.',
      'Navigating difficult conversations.',
    ],
  },
  {
    module: 'Module 3: Positive Discipline',
    title: 'Guidance Without Punishment',
    topics: [
      'Setting firm but kind boundaries.',
      "Understanding the 'why' behind behavior.",
      'Problem-solving together with your child.',
    ],
  },
  {
    module: 'Module 4: Emotional Intelligence',
    title: "Nurturing Your Child's Inner World",
    topics: [
      'Helping children name and manage their emotions.',
      'Developing empathy and compassion.',
      'Co-regulating with your child during meltdowns.',
    ],
  },
  {
    module: 'Module 5: Play and Connection',
    title: 'The Power of Playful Parenting',
    topics: [
      'Using play to build cooperation.',
      'Creating rituals of connection.',
      'Joining your child in their world.',
    ],
  },
];

export function Curriculum() {
  return (
    <section id="curriculum" className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold">Course Curriculum</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A week-by-week look at the transformative topics we'll cover
            together.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {curriculumData.map((item, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index}>
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                <div className="flex items-center gap-4 text-left">
                  <BookOpen className="h-6 w-6 text-accent flex-shrink-0" />
                  <span>
                    {item.module}:{' '}
                    <span className="font-normal text-muted-foreground">
                      {item.title}
                    </span>
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-14">
                <ul className="list-disc space-y-2 text-muted-foreground">
                  {item.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
