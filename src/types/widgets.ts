export type WidgetType = 'quiz';

export type BaseWidget = {
  id: string;
  type: WidgetType;
  tags: string[];
};

export type QuizWidget = BaseWidget & {
  type: 'quiz';
  payload: QuizPayload;
};

export type QuizOption = {
  id: string;
  option: string;
};

export type QuizPayload = {
  question: string;
  options: QuizOption[];
  correctAnswersIds: string[];
  explanation?: string;
};

export type Widget = QuizWidget;

export type QuizAnswer = {
  selectedIds: string[];
};

export type WidgetAnswerMap = {
  quiz: QuizAnswer;
};

export type WidgetStrategy<T extends Widget, A> = {
  type: T['type'];
  run(widget: T, onAnswer: (answer: A) => void): void;
  validate(widget: T, answer: A): boolean;
};

export type QuizWidgetStrategy = {
  type: 'quiz';
  run(widget: QuizWidget, onAnswer: (answer: QuizAnswer) => void): void;
  validate(widget: QuizWidget, answer: QuizAnswer): QuizValidateReturn;
};

type OptionValidationState = 'correct' | 'wrong' | 'missed';

export type QuizValidationResult = Record<string, OptionValidationState>;

export type QuizValidateReturn = {
  isCorrect: boolean;
  result: QuizValidationResult;
};
