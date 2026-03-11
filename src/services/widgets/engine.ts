import { WidgetSchemas } from '@/schemas/widget-schemas';

import type { Widget, WidgetAnswerMap, WidgetStrategy, WidgetType } from '@/types/widgets';

const strategies = new Map<
  Widget['type'],
  WidgetStrategy<WidgetType, WidgetAnswerMap[Widget['type']]>
>();

export const widgetAnswers: Record<string, WidgetAnswerMap[WidgetType] | undefined> = {};

export const pendingAnswers: Record<
  string,
  ((answer: WidgetAnswerMap[WidgetType]) => void) | undefined
> = {};

export function registerStrategy<T extends Widget>(
  strategy: WidgetStrategy<WidgetType, WidgetAnswerMap[T['type']]>,
): void {
  strategies.set(strategy.type, strategy);
}

export async function runWidgets(widgets: Widget[], container?: HTMLElement): Promise<void> {
  for (const widget of widgets) {
    const strategy = strategies.get(widget.type);
    if (!strategy) {
      console.warn('No strategy for widget type:', widget.type);
      continue;
    }

    const answer: WidgetAnswerMap[Widget['type']] = await new Promise((resolve) => {
      pendingAnswers[widget.id] = resolve;
      strategy.run(widget, resolve, container);
    });

    widgetAnswers[widget.id] = answer;
    strategy.validate(widget, answer);
  }
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

function isWidgetData(item: unknown): item is { type: string } {
  if (typeof item !== 'object' || item === null) {
    return false;
  }

  if (!('type' in item)) {
    return false;
  }

  return true;
}

export function parseWidgets(data: unknown): Widget[] {
  if (!Array.isArray(data)) {
    throw new TypeError('Widgets data must be an array');
  }

  const widgets: Widget[] = [];

  for (const item of data) {
    if (!isWidgetData(item)) {
      throw new Error('Invalid widget structure');
    }

    const type = item.type;
    const schema = WidgetSchemas[type];

    try {
      widgets.push(schema.parse(item));
    } catch (error) {
      console.warn('Invalid widget data:', error);
      throw error;
    }
  }

  return widgets;
}
