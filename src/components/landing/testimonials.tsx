import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonialsData = [
  {
    name: 'Sarah J.',
    role: 'Mother of two',
    text: 'This course completely changed our family dynamic for the better. I feel more connected to my kids than ever before.',
    imageId: 'testimonial-1',
  },
  {
    name: 'Michael B.',
    role: 'Father of a toddler',
    text: 'I was skeptical at first, but the practical tools we learned have been invaluable. Tantrums have decreased, and our home is so much more peaceful.',
    imageId: 'testimonial-2',
  },
  {
    name: 'Emily R.',
    role: 'New Parent',
    text: 'As a new mom, I was feeling so lost. GenuineConnection gave me the confidence and community I desperately needed. Highly recommend!',
    imageId: 'testimonial-3',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold">
            What Parents Are Saying
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Success stories from parents who have transformed their families.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonialsData.map((testimonial, index) => {
              const testimonialImg = PlaceHolderImages.find(
                (img) => img.id === testimonial.imageId
              );
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-center text-center p-6">
                        {testimonialImg && (
                          <Avatar className="w-20 h-20 mb-4 border-4 border-accent">
                            <AvatarImage
                              src={testimonialImg.imageUrl}
                              alt={testimonial.name}
                              data-ai-hint={testimonialImg.imageHint}
                            />
                            <AvatarFallback>
                              {testimonial.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                        )}
                        <p className="text-muted-foreground italic mb-4">
                          "{testimonial.text}"
                        </p>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
