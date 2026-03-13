import type { MatchWidgetSchemaType, QuizWidgetSchemaType } from '@/schemas/widget-schemas';

export type WidgetType = 'quiz' | 'match-game';

export type QuizWidget = Widget<'quiz'>;

export type Widget<T extends WidgetType = WidgetType> = {
  id: string;
  type: T;
  tags: string[];
  payload: WidgetPayloadMap[T];
};

export type WidgetOption = {
  id: string;
  name: string;
  value: string;
};

export type WidgetPayloadMap = {
  quiz: QuizPayload;
  'match-game': MatchPayload;
};

export type MatchCard = {
  id: number;
  value: string;
  content: string;
};

export type QuizPayload = QuizWidgetSchemaType['payload'];
export type MatchPayload = MatchWidgetSchemaType['payload'];

export type Answer = {
  selectedIds: string[];
};

export type WidgetAnswerMap = {
  quiz: Answer;
  'match-game': MatchGameResult;
};

export type WidgetStrategy<T extends WidgetType, A> = {
  type: T;
  run(
    widget: Widget<T>,
    onAnswer: (answer: A) => void,
    parentContainer?: HTMLElement,
    nextWidget?: () => void,
  ): void;
  validate(widget: Widget<T>, answer: A): ValidateReturn;
  onAnswerCorrect?: () => void;
};

type OptionValidationState = 'correct' | 'wrong' | 'missed';

export type ValidationResult = Record<string, OptionValidationState>;

export type ValidateReturn = {
  isCorrect: boolean;
  result: ValidationResult | MatchGameResult;
};

export type MatchGameResult = {
  solvedPairs: number;
  totalPairs: number;
};

export type WidgetProps<T extends WidgetType = 'quiz'> = {
  widget: Widget<T>;
  onAnswer: (answer: WidgetAnswerMap[T]) => void;
  onNext?: () => void;
};

export type MatchCardState = {
  cardId: number;
  state: 'closed' | 'opened' | 'solved';
};

export type MatchWidgetProps = {
  widget: Widget<'match-game'>;
  onCardStateChange: (cardState: MatchCardState) => void;
  onNext?: () => void;
};

export type WidgetApiResponse = {
  data: Widget[];
  error: string | null;
};
