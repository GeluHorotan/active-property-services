import { FC } from 'react';
import PanelIcon from './PanelIcon';

interface IIcons {
  name: string;
}

const Icons: FC<IIcons> = ({ name }) => {
  const icons: { [key: string]: React.JSX.Element } = {
    Panel: <PanelIcon />,
  };

  return icons[name];
};

export default Icons;
