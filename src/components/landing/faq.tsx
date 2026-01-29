import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const faqData = [
  {
    question: 'Who is this course for?',
    answer:
      "This course is designed for parents, caregivers, and anyone involved in a child's life, from infancy through adolescence. Whether you're a new parent or have years of experience, you'll find valuable insights.",
  },
  {
    question: "What if I can't make a live session?",
    answer:
      "No problem! All sessions are recorded and will be available for you to watch at your convenience. You'll have lifetime access to all course materials.",
  },
  {
    question: 'How much time commitment is required per week?',
    answer:
      'We recommend setting aside 2-3 hours per week. This includes watching the module content, completing exercises, and participating in the community forums.',
  },
  {
    question: 'Is there a money-back guarantee?',
    answer:
      "Yes! We offer a 30-day, no-questions-asked money-back guarantee. If you're not satisfied with the course for any reason, just let us know, and we'll issue a full refund.",
  },
  {
    question: 'Will I get personal advice for my situation?',
    answer:
      'While the course provides general frameworks, the community forums and live Q&A sessions with Dr. Reed are great opportunities to ask specific questions and get tailored guidance.',
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Find answers to common questions about the ConnectKids course.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index}>
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                <div className="flex items-center gap-4">
                  <HelpCircle className="h-6 w-6 text-accent flex-shrink-0" />
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-14 text-muted-foreground text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
