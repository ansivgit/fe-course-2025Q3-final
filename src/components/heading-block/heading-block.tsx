import styles from '@/components/heading-block/heading-block.module.css';
import { Subtitle } from '@/components/subtitle/subtitle';

import classNames from 'classnames/bind';
import type { ReactElement } from 'react';

const cx = classNames.bind(styles);

type HeadingBlockProps = {
  heading: string;
  subheading: string;
  className?: string;
};

export const HeadingBlock = ({
  heading,
  subheading,
  className,
}: HeadingBlockProps): ReactElement => {
  return (
    <div className={cx('heading-block', className)}>
      <Subtitle className={cx('heading')}>{heading}</Subtitle>
      <p className={cx('subheading')}>{subheading}</p>
    </div>
  );
};
