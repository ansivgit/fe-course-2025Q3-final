export type WidgetType = 'quiz' | 'match-game';

export type Widget<T extends WidgetType = WidgetType> = {
  id: string;
  type: T;
  tags: string[];
  payload: QuizPayload;
};

export type WidgetOption = {
  id: string;
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
  'match-game': Answer;
};

export type WidgetStrategy<T extends Widget, A> = {
  type: T['type'];
  run(
    widget: T,
    onAnswer: (answer: A) => void,
    parentContainer?: HTMLElement,
    nextWidget?: () => void,
  ): void;
  validate(widget: Widget, answer: Answer): ValidateReturn;
};

type OptionValidationState = 'correct' | 'wrong' | 'missed';

export type ValidationResult = Record<string, OptionValidationState>;

export type ValidateReturn = {
  isCorrect: boolean;
  result: ValidationResult;
};

export type WidgetProps = {
  widget: Widget & { type: 'quiz' };
  onAnswer: (answer: WidgetAnswerMap[WidgetType]) => void;
  onNext?: () => void;
};
