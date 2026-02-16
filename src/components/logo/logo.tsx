import LogoIcon from '@/assets/icons/logo.svg';

import classNames from 'classnames/bind';
import type { MouseEvent, ReactElement } from 'react';
import styles from './logo.module.css';

const cx = classNames.bind(styles);

type LogoProps = {
  className?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export const Logo = ({ className = '', onClick }: LogoProps): ReactElement => {
  return (
    <a
      href="/"
      className={cx('logo-link', className)}
      onClick={(event) => {
        event.preventDefault();
        console.log('Logo clicked', onClick);
      }}
    >
      <div className={cx('logo-icon-wrapper')}>
        <img src={LogoIcon} alt="TANDEM logo" className={cx('logo-svg')} />
      </div>
      <span className={cx('logo-label')}>Tandem</span>
    </a>
  );
};
