import { FC } from 'react';
import PanelIcon from './PanelIcon';
import MoneyIcon from './MoneyIcon';
import TechnicalIcon from './TechnicalIcon';
import RealEstateIcon from './RealEstateIcon';
import SupplierIcon from './SupplierIcon';
import MarketplaceIcon from './MarketplaceIcon';
import ReportsIcon from './ReportsIcon';
import ContactsIcon from './ContactsIcon';
import TemplatesIcon from './TemplatesIcon';
import CalendarIcon from './CalendarIcon';
import SettingsIcon from './SettingsIcon';
import SupportIcon from './SupportIcon';

interface IIconFinder {
  name: string;
}

const IconFinder: FC<IIconFinder> = ({ name }) => {
  const icons: { [key: string]: React.JSX.Element } = {
    Panel: <PanelIcon />,
    Money: <MoneyIcon />,
    Technical: <TechnicalIcon />,
    RealEstate: <RealEstateIcon />,
    Supplier: <SupplierIcon />,
    Marketplace: <MarketplaceIcon />,
    Reports: <ReportsIcon />,
    Contacts: <ContactsIcon />,
    Templates: <TemplatesIcon />,
    Calendar: <CalendarIcon />,
    Settings: <SettingsIcon />,
    Support: <SupportIcon />,
  };

  return icons[name];
};

export default IconFinder;
