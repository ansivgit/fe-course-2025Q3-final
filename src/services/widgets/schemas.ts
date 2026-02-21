import { z } from 'zod';

export const QuizWidgetSchema = z.object({
  id: z.string(),
  type: z.literal('quiz'),
  tags: z.array(z.string()),
  payload: z.object({
    question: z.string(),
    options: z.array(z.object({ id: z.string(), option: z.string() })),
    correctAnswersIds: z.array(z.string()),
    explanation: z.string().optional(),
  }),
});

import type { Widget } from '@/types/widgets';

export const WidgetSchemas: Record<string, z.ZodType<Widget>> = {
  quiz: QuizWidgetSchema,
};
