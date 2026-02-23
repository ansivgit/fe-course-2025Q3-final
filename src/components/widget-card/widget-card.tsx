import { Paragraph } from '@/components/paragraph/paragraph';
import { Subtitle } from '@/components/subtitle/subtitle';
import styles from '@/components/widget-card/widget-card.module.css';
import { ROUTES } from '@/constants/constants';

import classNames from 'classnames/bind';
import type { ComponentType, ReactElement, SVGProps } from 'react';

const cx = classNames.bind(styles);

import { ArrowIcon, ClockIcon, LightningIcon } from '@/assets/icons';

type WidgetCardConfig = {
  name: string;
  image: ComponentType<SVGProps<SVGSVGElement>>;
  heading: string;
  subheading: string;
  tasks: string;
  time: string;
  color?: WidgetCardColor;
};

type WidgetCardColor = 'purple' | 'teal' | 'pink';

type WidgetCardProps = {
  widget: WidgetCardConfig;
};

export const WidgetCard = ({ widget }: WidgetCardProps): ReactElement => {
  const { name, image: Icon, heading, subheading, tasks, time, color = 'purple' } = widget;
  const path = `/${ROUTES.practice}/${name}`;

  return (
    <a
      href="/"
      onClick={(event) => {
        event.preventDefault();
        console.log(path);
      }}
      className={cx('widget-card')}
    >
      <div className={cx('image-container', color)}>
        <div className={cx('widget-image')}>
          <Icon className={cx(color)} />
        </div>
      </div>

      <Subtitle className={cx('heading')}>{heading}</Subtitle>
      <Paragraph text={subheading}></Paragraph>

      <div className={cx('meta')}>
        <span className={cx('meta-item')}>
          <div className={cx('meta-action-image')}>
            <LightningIcon />
          </div>
          {tasks}
        </span>

        <span className={cx('meta-item')}>
          <div className={cx('meta-action-image')}>
            <ClockIcon />
          </div>
          {time}
        </span>
      </div>
      <div className={cx('meta-action')}>
        <span>Play</span>
        <div className={cx('meta-action-image')}>
          <ArrowIcon />
        </div>
      </div>
    </a>
  );
};
