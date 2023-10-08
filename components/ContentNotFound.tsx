import { FC } from 'react';

interface IContentNotFound {
  children?: React.ReactNode;
}

const ContentNotFound: FC<IContentNotFound> = ({ children }) => {
  return <h6 className="font-semibold text-custom_gray-700">{children}</h6>;
};

export default ContentNotFound;
