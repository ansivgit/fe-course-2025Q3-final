import classNames from 'classnames/bind';
import LogoIcon from '@/assets/icons/logo.svg';

import styles from './logo.module.css';

const cx = classNames.bind(styles);

type LogoProps = {
  className?: string;
  size?: 'default' | 'small';
  onClick?: (event: Event) => void;
};

export const Logo = ({ className = '', size = 'default', onClick }: LogoProps) => {
  return (
    <a
      href="/"
      className={cx('logo-link', size === 'small' && 'small', className)}
      onClick={(event) => {
        event.preventDefault();
        console.warn('Logo clicked', onClick);
      }}
    >
      <div className={cx('logo-icon-wrapper')}>
        <img src={LogoIcon} alt="TANDEM logo" className={cx('logo-svg')} />
      </div>
      <span className={cx('logo-label')}>Tandem</span>
    </a>
  );
};
