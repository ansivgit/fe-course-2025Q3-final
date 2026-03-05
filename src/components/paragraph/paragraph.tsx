import classNames from 'classnames/bind';

import styles from './paragraph.module.css';

const cx = classNames.bind(styles);

type ParagraphProps = {
  text: string;
};

export const Paragraph = ({ text }: ParagraphProps) => {
  return <p className={cx('paragraph')}>{text}</p>;
};
