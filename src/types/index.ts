type ButtonColor = 'gradient' | 'dark' | 'outline' | 'ghost';
type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  color?: ButtonColor;
  size?: ButtonSize;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}