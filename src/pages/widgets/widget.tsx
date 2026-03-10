import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Layout } from '@/components/layout/layout';
import { Paragraph } from '@/components/paragraph/paragraph';
import { Title } from '@/components/title/title';
import { fetchData } from '@/services/api/data';
import { parseWidgets, registerStrategy, runWidgets } from '@/services/widgets/engine';
import { ROUTES } from '@/constants/constants';

import type { Widget, WidgetApiResponse } from '@/types/widgets';

import { widgetPageConfig } from './widget.config';
import styles from './widget.module.css';

const cx = classNames.bind(styles);

export function WidgetPage() {
  const { widgetId } = useParams<{ widgetId: string }>();

  const widgetContainer = useRef<HTMLDivElement>(null);
  const [completed, setCompleted] = useState(false);

  const config = widgetPageConfig.find((widget) => widget.id === widgetId);

  useEffect(() => {
    if (!config) {
      return;
    }

    const { strategies } = config;

    strategies.forEach((strategy) => {
      registerStrategy(strategy);
    });

    async function initWidgets() {
      try {
        if (!config) {
          return;
        }

        const widgetData: WidgetApiResponse = await fetchData(config.id);

        if (!widgetContainer.current) {
          return;
        }

        const widgets: Widget[] = parseWidgets(widgetData.data);

        await runWidgets(widgets, widgetContainer.current);
        setCompleted(true);
      } catch (error) {
        console.error('Widgets error:', error);
      }
    }

    initWidgets().catch((error: unknown) => {
      console.error('initWidgets promise error', error);
    });
  }, [config]);

  if (!config) {
    return <Navigate to={ROUTES.notFound} replace />;
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
