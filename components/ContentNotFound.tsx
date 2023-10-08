import { cn } from '@lib/utils';
import { FC } from 'react';

interface IContentNotFound {
  children: React.ReactNode;
  className?: string;
}

const ContentNotFound: FC<IContentNotFound> = ({ children, className }) => {
  return (
    <h6 className={cn('font-semibold text-custom_gray-700', className)}>
      {children}
    </h6>
  );
};

export default ContentNotFound;
