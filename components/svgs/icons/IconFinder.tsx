import { FC } from 'react';
import PanelIcon from '@icons/PanelIcon';
import MoneyIcon from '@icons/MoneyIcon';
import TechnicalIcon from '@icons/TechnicalIcon';
import RealEstateIcon from '@icons/RealEstateIcon';
import SupplierIcon from '@icons/SupplierIcon';
import MarketplaceIcon from '@icons/MarketplaceIcon';
import ReportsIcon from '@icons/ReportsIcon';
import ContactsIcon from '@icons/ContactsIcon';
import TemplatesIcon from '@icons/TemplatesIcon';
import CalendarIcon from '@icons/CalendarIcon';
import SettingsIcon from '@icons/SettingsIcon';
import SupportIcon from '@icons/SupportIcon';

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
