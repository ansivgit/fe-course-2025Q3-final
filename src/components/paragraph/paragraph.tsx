import styles from '@/components/paragraph/paragraph.module.css';

import classNames from 'classnames/bind';
import type { ReactElement } from 'react';

const cx = classNames.bind(styles);

type ParagraphProps = {
  text: string;
  className?: string;
};

export const Paragraph = ({ text, className }: ParagraphProps): ReactElement => {
  return <p className={cx('paragraph', className)}>{text}</p>;
};
