import type { Widget, WidgetAnswerMap, WidgetStrategy } from '@/types/widgets';

const strategies = new Map<
  Widget['type'],
  WidgetStrategy<Widget, WidgetAnswerMap[Widget['type']]>
>();

export const widgetAnswers: Partial<Record<string, WidgetAnswerMap[keyof WidgetAnswerMap]>> = {};

export const pendingAnswers: Partial<
  Record<string, (answer: WidgetAnswerMap[keyof WidgetAnswerMap]) => void>
> = {};

export function registerStrategy<T extends Widget>(
  strategy: WidgetStrategy<T, WidgetAnswerMap[T['type']]>,
): void {
  strategies.set(strategy.type, strategy);
}

export function answerWidget(
  widgetId: string,
  answer: WidgetAnswerMap[keyof WidgetAnswerMap],
): void {
  const resolve = pendingAnswers[widgetId];
  if (!resolve) {
    console.warn('No pending question for widget:', widgetId);
    return;
  }
  resolve(answer);
  pendingAnswers[widgetId] = undefined;
}

export async function runWidgets(widgets: Widget[]): Promise<void> {
  for (const widget of widgets) {
    const strategy = strategies.get(widget.type);
    if (!strategy) {
      console.warn('No strategy for widget type:', widget.type);
      continue;
    }

    const answer: WidgetAnswerMap[Widget['type']] = await new Promise((resolve) => {
      pendingAnswers[widget.id] = resolve;
      strategy.run(widget, resolve);
    });

    widgetAnswers[widget.id] = answer;
    strategy.validate(widget, answer);
  }
}
