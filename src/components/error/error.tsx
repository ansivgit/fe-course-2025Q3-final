import classNames from 'classnames/bind';
import type { ReactElement } from 'react';
import styles from './input.module.css';

const cx = classNames.bind(styles);

type ErrorMessageProps = {
  message?: string;
};

export const ErrorMessage = ({ message }: ErrorMessageProps): ReactElement => {
  return <div className={cx('error')}>{message}</div>;
};
