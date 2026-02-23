import type { Widget, WidgetAnswerMap } from '@/types/widgets';

import type { ReactElement } from 'react';
import { useState } from 'react';
import { Button } from '../button/button';

type QuizWidgetProps = {
  widget: Widget & { type: 'quiz' };
  onAnswer: (answer: WidgetAnswerMap['quiz']) => void;
};

export function QuizWidget({ widget, onAnswer }: QuizWidgetProps): ReactElement {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const toggle = (id: string): void => {
    setSelectedIds((selected) =>
      selected.includes(id) ? selected.filter((x) => x !== id) : [...selected, id],
    );
  };

  return (
    <div>
      <h3>{widget.payload.question}</h3>
      <ul>
        {widget.payload.options.map((option) => (
          <li key={option.value}>
            <label>
              <input
                type="checkbox"
                checked={selectedIds.includes(option.value)}
                onChange={() => {
                  toggle(option.value);
                }}
              />
              {option.value}
            </label>
          </li>
        ))}
      </ul>
      <Button
        disabled={selectedIds.length === 0}
        onClick={() => {
          onAnswer({ selectedIds });
        }}
      >
        OK
      </Button>
    </div>
  );
}
