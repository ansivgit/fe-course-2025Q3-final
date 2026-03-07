import { z } from 'zod';

export const QuizWidgetSchema = z.object({
  id: z.string(),
  type: z.literal('quiz'),
  tags: z.array(z.string()),
  payload: z.object({
    question: z.string(),
    options: z.array(z.object({ id: z.string(), name: z.string(), value: z.string() })),
    correctAnswersIds: z.array(z.string()),
    explanation: z.string().optional(),
  }),
});

const MatchCardSchema = z.object({
  id: z.number(),
  value: z.string(),
  content: z.string(),
});

export const MatchWidgetSchema = z.object({
  id: z.string(),
  type: z.literal('match-game'),
  tags: z.array(z.string()),
  payload: z.array(MatchCardSchema),
});

import type { Widget } from '@/types/widgets';

export const WidgetSchemas: Record<string, z.ZodType<Widget>> = {
  quiz: QuizWidgetSchema,
  'match-game': MatchWidgetSchema,
};
