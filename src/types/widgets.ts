export type WidgetType = 'quiz';

export type Widget = {
  id: string;
  type: WidgetType;
  tags: string[];
  payload: QuizPayload;
};

export type WidgetOption = {
  name: string;
  value: string;
};

export type QuizPayload = {
  question: string;
  options: WidgetOption[];
  correctAnswersIds: string[];
  explanation?: string;
};

export type Answer = {
  selectedIds: string[];
};

export type WidgetAnswerMap = {
  quiz: Answer;
};

export type WidgetStrategy<T extends Widget, A> = {
  type: T['type'];
  run(widget: T, onAnswer: (answer: A) => void): void;
  validate(widget: T, answer: A): boolean;
};

export type QuizWidgetStrategy = {
  type: 'quiz';
  run(widget: Widget, onAnswer: (answer: Answer) => void): void;
  validate(widget: Widget, answer: Answer): QuizValidateReturn;
};

type OptionValidationState = 'correct' | 'wrong' | 'missed';

export type QuizValidationResult = Record<string, OptionValidationState>;

export type QuizValidateReturn = {
  isCorrect: boolean;
  result: QuizValidationResult;
};
