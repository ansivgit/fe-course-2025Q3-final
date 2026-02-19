import { Subtitle } from '@/components/subtitle/subtitle';
import styles from '@/components/widget-card/widget-card.module.css';

import classNames from 'classnames/bind';
import type { ReactElement } from 'react';

const cx = classNames.bind(styles);

import ArrowIcon from '@/assets/icons/arrow.svg';
import ClockIcon from '@/assets/icons/clock.svg';
import LightningIcon from '@/assets/icons/lightning.svg';

type WidgetProps = {
  className?: string;
  image: string;
  heading: string;
  subheading: string;
  text1: string;
  text2: string;
};

export const Widget = ({
  className,
  image,
  heading,
  subheading,
  text1,
  text2,
}: WidgetProps): ReactElement => {
  const path = `/widgets/${heading.toLowerCase().replaceAll(/\s+/g, '-')}`;

  return (
    <a
      href="/"
      onClick={(event) => {
        event.preventDefault();
        console.log(path);
      }}
      className={cx('widget', className)}
    >
      <div className={cx('image-container')}>
        <img src={image} alt="" className={cx('widget-image')} />
      </div>

      <Subtitle className={cx('heading')}>{heading}</Subtitle>
      <p className={cx('subheading')}>{subheading}</p>

      <div className={cx('meta')}>
        <span className={cx('meta-item')}>
          <img src={LightningIcon} alt="" className={cx('meta-image')} />
          {text1}
        </span>

        <span className={cx('meta-item')}>
          <img src={ClockIcon} alt="" className={cx('meta-image')} />
          {text2}
        </span>
      </div>
      <div className={cx('meta-action')}>
        <span>Play</span>
        <img src={ArrowIcon} alt="" />
      </div>
    </a>
  );
};
