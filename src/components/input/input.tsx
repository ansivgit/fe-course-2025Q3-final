console.log('input');
// import classNames from 'classnames/bind';
// import type { ChangeEvent, ReactElement, ReactNode } from 'react';
// import { useState } from 'react';
// import { ErrorMessage } from '../error/error-message';
// import styles from './input.module.css';

// const cx = classNames.bind(styles);

// type InputProps = {
//   name: string;
//   label?: string;
//   type?: 'text' | 'password';
//   placeholder?: string;
//   onChange: (isBlur: boolean, value: string) => void;
//   leftIcon?: ReactNode;
//   rightIcon?: ReactNode;
//   errorMessage?: string;
// };

// export const Input = ({
//   name,
//   label,
//   type = 'text',
//   placeholder = '',
//   onChange,
//   leftIcon,
//   rightIcon,
//   errorMessage,
// }: InputProps): ReactElement => {
//   const [value, setValue] = useState('');

//   const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
//     const value = event.target.value;
//     setValue(value);
//     onChange(false, value);
//   };

//   const handleBlur = (event: ChangeEvent<HTMLInputElement>): void => {
//     const value = event.target.value;
//     setValue(value);
//     onChange(true, value);
//   };

//   return (
//     <>
//       <label className={cx('input-label')}>
//         {label && <span>{label}</span>}
//         <div className={cx('input-field')}>
//           {leftIcon && <span className={cx('input-icon', 'left')}>{leftIcon}</span>}

//           <input
//             name={name}
//             type={type}
//             placeholder={placeholder}
//             value={value}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             className={cx('input', {
//               'has-left': leftIcon,
//               'has-right': rightIcon,
//             })}
//           />

//           {rightIcon && <span className={cx('input-icon', 'right')}>{rightIcon}</span>}
//         </div>
//       </label>
//       <ErrorMessage message={errorMessage} />
//     </>
//   );
// };
