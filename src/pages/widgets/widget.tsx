import { Layout } from '@/components/layout/layout';
import { Paragraph } from '@/components/paragraph/paragraph';
import { Title } from '@/components/title/title';
import { parseWidgets, registerStrategy, runWidgets } from '@/services/widgets/engine';

import type { Widget } from '@/types/widgets';

import classNames from 'classnames/bind';
import type { ReactElement } from 'react';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { widgetPageConfig } from './widget.config';
import styles from './widget.module.css';

const cx = classNames.bind(styles);

export function WidgetPage(): ReactElement {
  const { widgetId } = useParams<{ widgetId: string }>();

  const widgetContainer = useRef<HTMLDivElement>(null);
  const [completed, setCompleted] = useState(false);

  const config = widgetPageConfig.find((widget) => widget.id === widgetId);

  useEffect(() => {
    if (!config) {
      return;
    }

    const { strategies, widgetsData } = config;

    strategies.forEach((strategy) => {
      registerStrategy(strategy);
    });

    const widgets: Widget[] = parseWidgets(widgetsData);

    if (!widgetContainer.current) {
      return;
    }

    runWidgets(widgets, widgetContainer.current)
      .then(() => {
        setCompleted(true);
      })
      .catch((error: unknown) => {
        console.error('Widgets error:', error);
      });
  }, [config]);

  if (!config) {
    return <Paragraph text="Widget not found"></Paragraph>;
  }

  const { title, Icon, completionText } = config;

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
