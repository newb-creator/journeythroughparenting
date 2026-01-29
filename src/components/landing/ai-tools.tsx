"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  getPersonalizedContentRecommendations,
  type PersonalizedContentRecommendationsOutput,
} from '@/ai/flows/personalized-content-recommendations';
import { instantSupportChatbot } from '@/ai/flows/instant-support-chatbot';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import {
  Bot,
  Sparkles,
  Send,
  Loader2,
  Link as LinkIcon,
  Video,
  FileText,
} from 'lucide-react';
import Link from 'next/link';

// Schema for Content Recommender
const recommenderSchema = z.object({
  parentalInterests: z.string().min(3, 'Please describe your interests.'),
  childAgeMonths: z.coerce
    .number()
    .int()
    .positive('Please enter a valid age in months.'),
  parentingChallenges: z.string().min(3, 'Please describe your challenges.'),
});

// Schema for Chatbot
const chatbotSchema = z.object({
  question: z.string().min(5, 'Please ask a question.'),
});

function ContentRecommender() {
  const [recommendations, setRecommendations] =
    useState<PersonalizedContentRecommendationsOutput['recommendations'] | null>(
      null
    );
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof recommenderSchema>>({
    resolver: zodResolver(recommenderSchema),
    defaultValues: {
      parentalInterests: '',
      childAgeMonths: 12,
      parentingChallenges: '',
    },
  });

  async function onSubmit(values: z.infer<typeof recommenderSchema>) {
    setIsLoading(true);
    setRecommendations(null);
    try {
      const result = await getPersonalizedContentRecommendations(values);
      setRecommendations(result.recommendations);
    } catch (error) {
      console.error('Failed to get recommendations:', error);
      // Here you might want to use a toast notification
    } finally {
      setIsLoading(false);
    }
  }

  const TypeIcon = ({
    type,
  }: {
    type: 'article' | 'video' | 'exercise';
  }) => {
    switch (type) {
      case 'article':
        return <FileText className="h-5 w-5 text-muted-foreground" />;
      case 'video':
        return <Video className="h-5 w-5 text-muted-foreground" />;
      case 'exercise':
        return <Sparkles className="h-5 w-5 text-muted-foreground" />;
      default:
        return null;
    }
  };

  return (
    <div>
      <CardHeader>
        <CardTitle>Personalized Content</CardTitle>
        <CardDescription>
          Get AI-powered content recommendations tailored to your family's
          needs.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="parentalInterests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Parental Interests</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., child nutrition, early education"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="childAgeMonths"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Child's Age (in months)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g., 24" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="parentingChallenges"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Parenting Challenges</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., toddler tantrums, sleep training"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...
                </>
              ) : (
                <>Get Recommendations</>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
      {recommendations && (
        <CardFooter className="flex-col items-start gap-4 mt-6">
          <h3 className="font-semibold text-lg">
            Here are your personalized recommendations:
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {recommendations.map((rec, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-semibold">
                      {rec.title}
                    </CardTitle>
                    <TypeIcon type={rec.type} />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">{rec.reason}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link
                      href={rec.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkIcon className="mr-2 h-4 w-4" /> View {rec.type}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </CardFooter>
      )}
    </div>
  );
}

function SupportChatbot() {
  const [messages, setMessages] = useState<{ type: 'user' | 'bot'; text: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof chatbotSchema>>({
    resolver: zodResolver(chatbotSchema),
    defaultValues: { question: '' },
  });

  async function onSubmit(values: z.infer<typeof chatbotSchema>) {
    setIsLoading(true);
    setMessages((prev) => [...prev, { type: 'user', text: values.question }]);

    try {
      const result = await instantSupportChatbot(values);
      setMessages((prev) => [...prev, { type: 'bot', text: result.answer }]);
    } catch (error) {
      console.error('Chatbot error:', error);
      setMessages((prev) => [
        ...prev,
        {
          type: 'bot',
          text: "Sorry, I'm having trouble connecting right now. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
      form.reset();
    }
  }

  return (
    <div>
      <CardHeader>
        <CardTitle>Instant Support Chatbot</CardTitle>
        <CardDescription>
          Have a parenting question? Get an immediate, AI-powered answer.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80 bg-muted/50 rounded-lg p-4 flex flex-col gap-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 ${
                msg.type === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {msg.type === 'bot' && (
                <div className="p-2 bg-primary text-primary-foreground rounded-full flex-shrink-0">
                  <Bot className="h-5 w-5" />
                </div>
              )}
              <div
                className={`max-w-xs rounded-lg p-3 ${
                  msg.type === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-3 justify-start">
              <div className="p-2 bg-primary text-primary-foreground rounded-full flex-shrink-0">
                <Bot className="h-5 w-5" />
              </div>
              <div className="bg-card border rounded-lg p-3">
                <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex w-full items-start space-x-2"
          >
            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      placeholder="e.g., How can I handle picky eating?"
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="icon" disabled={isLoading}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </Form>
      </CardFooter>
    </div>
  );
}

export function AiTools() {
  return (
    <section id="ai-tools" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-block rounded-full bg-primary text-primary-foreground p-3 mb-4 shadow-lg">
            <Sparkles className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-headline font-bold">
            Your AI-Powered Parenting Toolkit
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Leverage cutting-edge AI to get personalized support and resources,
            right when you need them.
          </p>
        </div>
        <Tabs defaultValue="recommender" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="recommender">
              <Sparkles className="mr-2 h-4 w-4" /> Content Recommender
            </TabsTrigger>
            <TabsTrigger value="chatbot">
              <Bot className="mr-2 h-4 w-4" /> Support Chatbot
            </TabsTrigger>
          </TabsList>
          <TabsContent value="recommender">
            <Card className="shadow-lg">
              <ContentRecommender />
            </Card>
          </TabsContent>
          <TabsContent value="chatbot">
            <Card className="shadow-lg">
              <SupportChatbot />
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
