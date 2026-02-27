import { Layout } from '@/components/layout/layout';
import { Paragraph } from '@/components/paragraph/paragraph';
import { Title } from '@/components/title/title';
import { parseWidgets, registerStrategy, runWidgets } from '@/services/widgets/engine';

import type { Widget, WidgetAnswerMap, WidgetStrategy } from '@/types/widgets';

import classNames from 'classnames/bind';
import type { ReactElement } from 'react';
import { useEffect, useRef, useState } from 'react';
import styles from './widget.module.css';

const cx = classNames.bind(styles);

type WidgetPageProps = {
  widgetsData: unknown;
  widget: Widget;
  title: string;
  Icon?: React.ElementType;
  completionText: string;
  strategies: WidgetStrategy<Widget, WidgetAnswerMap[Widget['type']]>[];
};

export function WidgetPage({
  widgetsData,
  title,
  Icon,
  completionText,
  strategies,
}: WidgetPageProps): ReactElement {
  const widgetContainer = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false); //  Used to ensure the effect runs only once in dev mode in React Strict Mode
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (startedRef.current) {
      return;
    }
    startedRef.current = true;

    strategies.forEach((strategy) => {
      registerStrategy(strategy);
    });

    const widgets: Widget[] = parseWidgets(widgetsData);

    if (widgetContainer.current) {
      runWidgets(widgets, widgetContainer.current)
        .then(() => {
          setCompleted(true);
        })
        .catch((error: unknown) => {
          if (error instanceof Error) {
            console.error('Widgets error:', error.message);
          } else {
            console.error('Widgets error:', error);
          }
        });
    }
  }, [widgetsData, strategies]);

  return (
    <Layout>
      <section className={cx('title-section')}>
        <div className={cx('icon')}>{Icon && <Icon />}</div>
        <Title size="small">{title}</Title>
      </section>
      <div ref={widgetContainer} className={cx('widget-container')} />
      {completed && (
        <div>
          <Paragraph text={completionText} />
        </div>
      )}
    </Layout>
  );
}
