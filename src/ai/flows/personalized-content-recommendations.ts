'use server';
/**
 * @fileOverview AI-powered personalized content recommendations for parents.
 *
 * This file defines a Genkit flow that suggests relevant articles, videos, or exercises
 * based on the parent's interests, their child's age, and specific challenges they are facing.
 *
 * - `getPersonalizedContentRecommendations` - A function that retrieves personalized content recommendations.
 * - `PersonalizedContentRecommendationsInput` - The input type for the `getPersonalizedContentRecommendations` function.
 * - `PersonalizedContentRecommendationsOutput` - The return type for the `getPersonalizedContentRecommendations` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedContentRecommendationsInputSchema = z.object({
  parentalInterests: z
    .string()
    .describe('The interests of the parent related to parenting.'),
  childAgeMonths: z
    .number()
    .int()
    .positive()
    .describe('The age of the child in months.'),
  parentingChallenges: z
    .string()
    .describe('Specific challenges the parent is facing.'),
});

export type PersonalizedContentRecommendationsInput =
  z.infer<typeof PersonalizedContentRecommendationsInputSchema>;

const PersonalizedContentRecommendationsOutputSchema = z.object({
  recommendations: z.array(
    z.object({
      title: z.string().describe('Title of the recommended content.'),
      type: z.enum(['article', 'video', 'exercise']).describe('Type of content.'),
      url: z.string().url().describe('URL of the content.'),
      reason: z.string().describe('Why this content is recommended for the parent.'),
    })
  ).describe('A list of personalized content recommendations.'),
});

export type PersonalizedContentRecommendationsOutput =
  z.infer<typeof PersonalizedContentRecommendationsOutputSchema>;

export async function getPersonalizedContentRecommendations(
  input: PersonalizedContentRecommendationsInput
): Promise<PersonalizedContentRecommendationsOutput> {
  return personalizedContentRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedContentRecommendationsPrompt',
  input: {schema: PersonalizedContentRecommendationsInputSchema},
  output: {schema: PersonalizedContentRecommendationsOutputSchema},
  prompt: `You are an AI expert in personalized parenting advice.

  Based on the following information, provide a list of content recommendations (articles, videos, exercises) that would be helpful for the parent.

  Parental Interests: {{{parentalInterests}}}
  Child's Age (months): {{{childAgeMonths}}}
  Parenting Challenges: {{{parentingChallenges}}}

  Each recommendation should include a title, type (article, video, or exercise), URL, and a brief explanation of why it's relevant to the parent's situation.

  Format your response as a JSON array of content recommendations. Follow the schema descriptions for the output.
  `,
});

const personalizedContentRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedContentRecommendationsFlow',
    inputSchema: PersonalizedContentRecommendationsInputSchema,
    outputSchema: PersonalizedContentRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
