import { cn } from '@lib/utils';
import { FC } from 'react';

interface IButton {
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button: FC<IButton> = ({ className, children, icon }) => {
  return (
    <button
      type="button"
      className={cn(
        'font-light  gap-[6px] text-[12px] text-custom_gray-700  border-[0.5px] py-[11.4px]   justify-center px-[9px] flex whitespace-nowrap border-custom_gray-700 rounded-xl',
        className
      )}
    >
      {children}
      {icon}
    </button>
  );
};

export default Button;
