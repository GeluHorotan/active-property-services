import { FC } from 'react';
import PanelIcon from './PanelIcon';

interface IIconFinder {
  name: string;
}

const IconFinder: FC<IIconFinder> = ({ name }) => {
  const icons: { [key: string]: React.JSX.Element } = {
    Panel: <PanelIcon />,
  };

  return icons[name];
};

export default IconFinder;
