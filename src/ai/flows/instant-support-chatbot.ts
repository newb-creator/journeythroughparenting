'use server';

/**
 * @fileOverview An AI-powered chatbot for answering common parenting questions and providing immediate support.
 *
 * - instantSupportChatbot - A function that handles the chatbot interaction.
 * - InstantSupportChatbotInput - The input type for the instantSupportChatbot function.
 * - InstantSupportChatbotOutput - The return type for the instantSupportChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InstantSupportChatbotInputSchema = z.object({
  question: z.string().describe('The parenting question asked by the user.'),
});
export type InstantSupportChatbotInput = z.infer<typeof InstantSupportChatbotInputSchema>;

const InstantSupportChatbotOutputSchema = z.object({
  answer: z.string().describe('The answer to the parenting question.'),
});
export type InstantSupportChatbotOutput = z.infer<typeof InstantSupportChatbotOutputSchema>;

export async function instantSupportChatbot(input: InstantSupportChatbotInput): Promise<InstantSupportChatbotOutput> {
  return instantSupportChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'instantSupportChatbotPrompt',
  input: {schema: InstantSupportChatbotInputSchema},
  output: {schema: InstantSupportChatbotOutputSchema},
  prompt: `You are a helpful AI-powered chatbot trained on a comprehensive database of parenting advice and resources.
  Your goal is to answer common parenting questions and provide immediate support to parents.

  Question: {{{question}}}
  Answer: `,
});

const instantSupportChatbotFlow = ai.defineFlow(
  {
    name: 'instantSupportChatbotFlow',
    inputSchema: InstantSupportChatbotInputSchema,
    outputSchema: InstantSupportChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
