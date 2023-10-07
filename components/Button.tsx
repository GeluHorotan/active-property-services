import { cn } from '@lib/cn';
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
        'font-light  text-[12px] gap-2 text-custom_gray-700 border py-[11.4px] items-center justify-center px-[18.5px] flex whitespace-nowrap border-custom_gray-700 rounded-xl',
        className
      )}
    >
      {children}
      <div className="h-full ">{icon}</div>
    </button>
  );
};

export default Button;
