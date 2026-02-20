import { Paragraph } from '@/components/paragraph/paragraph';
import { Subtitle } from '@/components/subtitle/subtitle';
import styles from '@/components/widget-card/widget-card.module.css';
import { ROUTES } from '@/constants/constants';

import classNames from 'classnames/bind';
import type { ReactElement } from 'react';

const cx = classNames.bind(styles);

import { ArrowIcon, ClockIcon, LightningIcon } from '@/assets/icons';

type WidgetCardProps = {
  name?: string;
  image: string;
  heading: string;
  subheading: string;
  tasks: string;
  time: string;
  color?: string;
};

export type WidgetCardStyleProps = React.CSSProperties & {
  '--bg-color'?: string;
};

export const WidgetCard = ({
  name,
  image,
  heading,
  subheading,
  tasks,
  time,
  color = 'transparent',
}: WidgetCardProps): ReactElement => {
  const path = `/${ROUTES.practice}/${name}`;
  const style: WidgetCardStyleProps = { '--bg-color': color };

  return (
    <a
      href="/"
      onClick={(event) => {
        event.preventDefault();
        console.log(path);
      }}
      className={cx('widget')}
    >
      <div className={cx('image-container')} style={style}>
        <img src={image} alt="" className={cx('widget-image')} />
      </div>

      <Subtitle className={cx('heading')}>{heading}</Subtitle>
      <Paragraph text={subheading}></Paragraph>

      <div className={cx('meta')}>
        <span className={cx('meta-item')}>
          <img src={LightningIcon} alt="" className={cx('meta-image')} />
          {tasks}
        </span>

        <span className={cx('meta-item')}>
          <img src={ClockIcon} alt="" className={cx('meta-image')} />
          {time}
        </span>
      </div>
      <div className={cx('meta-action')}>
        <span>Play</span>
        <img src={ArrowIcon} alt="" />
      </div>
    </a>
  );
};
