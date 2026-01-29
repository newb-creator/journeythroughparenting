import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle, Users, Heart } from 'lucide-react';

export function CourseHighlights() {
  const instructorImg = PlaceHolderImages.find(
    (img) => img.id === 'instructor-photo'
  );

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-headline font-bold mb-4">
              Transform Your Parenting Journey
            </h2>
            <p className="mb-6 text-muted-foreground text-lg">
              Our course provides practical tools and deep insights to help you
              navigate the complexities of parenthood with confidence and grace.
              We focus on building communication, understanding developmental
              stages, and creating a harmonious family environment.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Expert-Led Modules</h3>
                  <p className="text-muted-foreground">
                    Learn from a seasoned professional with years of experience in
                    child psychology and family dynamics.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Community Support</h3>
                  <p className="text-muted-foreground">
                    Join a community of like-minded parents to share experiences
                    and grow together.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">
                    Connection-Focused Techniques
                  </h3>
                  <p className="text-muted-foreground">
                    Master strategies that strengthen your bond with your child
                    at every age.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Card className="max-w-sm w-full shadow-2xl overflow-visible">
              <CardHeader className="items-center text-center pb-4">
                {instructorImg && (
                  <Image
                    src={instructorImg.imageUrl}
                    alt={instructorImg.description}
                    data-ai-hint={instructorImg.imageHint}
                    width={120}
                    height={120}
                    className="rounded-full border-4 border-accent -mt-20 mb-4"
                  />
                )}
                <CardTitle className="font-headline text-2xl">
                  Dr. Evelyn Reed
                </CardTitle>
                <p className="text-muted-foreground font-semibold">
                  Child Development Expert
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  With over 15 years of experience, Dr. Reed has dedicated her
                  career to helping parents build stronger families. Her
                  compassionate and evidence-based approach has transformed
                  thousands of lives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
