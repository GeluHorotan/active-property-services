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
        'font-light  text-[12px] text-custom_gray-700  border-[0.5px] py-[11.4px] items-center  justify-center px-[9px] flex whitespace-nowrap border-custom_gray-700 rounded-xl',
        className
      )}
    >
      <div className="flex gap-[6px]  ">
        {children}
        {icon}
      </div>
    </button>
  );
};

export default Button;
