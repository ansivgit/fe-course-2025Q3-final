import styles from '@/components/paragraph/paragraph.module.css';

import classNames from 'classnames/bind';
import type { ReactElement } from 'react';

const cx = classNames.bind(styles);

type ParagraphProps = {
  text: string;
};

export const Paragraph = ({ text }: ParagraphProps): ReactElement => {
  return <p className={cx('paragraph')}>{text}</p>;
};
