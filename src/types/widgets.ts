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

export type WidgetStrategy<T extends Widget, A> = {
  type: T['type'];
  run(widget: T, onAnswer: (answer: A) => void): void;
  validate(widget: T, answer: A): boolean;
};

export type WidgetAnswerMap = {
  quiz: QuizAnswer;
};
