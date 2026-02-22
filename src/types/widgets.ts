export type WidgetType = 'quiz';

export type BaseWidget = {
  id: string;
  type: WidgetType;
  tags: string[];
};

export type QuizWidget = BaseWidget & {
  type: 'quiz';
  payload: WidgetPayload;
};

export type WidgetOption = {
  id: string;
  option: string;
};

export type WidgetPayload = {
  question: string;
  options: WidgetOption[];
  correctAnswersIds: string[];
  explanation?: string;
};

export type Widget = QuizWidget;

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
  run(widget: QuizWidget, onAnswer: (answer: Answer) => void): void;
  validate(widget: QuizWidget, answer: Answer): QuizValidateReturn;
};

type OptionValidationState = 'correct' | 'wrong' | 'missed';

export type QuizValidationResult = Record<string, OptionValidationState>;

export type QuizValidateReturn = {
  isCorrect: boolean;
  result: QuizValidationResult;
};
