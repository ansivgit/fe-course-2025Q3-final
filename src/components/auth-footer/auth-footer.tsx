import classNames from 'classnames/bind';
import type { ReactElement } from 'react';
import styles from './auth-footer.module.css';

const cx = classNames.bind(styles);

type AuthFooterProps = {
  isRegistered: boolean;
};

export const AuthFooter = ({ isRegistered }: AuthFooterProps): ReactElement => {
  const text = isRegistered ? 'No account?' : 'Already have an account?';

  const linkText = isRegistered ? 'Register' : 'Login';
  const linkHref = isRegistered ? '/register' : '/login';

  return (
    <div className={cx('form-footer')}>
      <span>{text} </span>
      <a href={linkHref} className={cx('link')}>
        {linkText}
      </a>
    </div>
  );
};
