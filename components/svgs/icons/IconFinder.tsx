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
import ArrowToRightIcon from '@icons/ArrowToRightIcon';
import ArrowToLeftIcon from '@icons/ArrowToLeftIcon';
import PlusIcons from './PlusIcons';

interface IIconFinder {
  name: string;
  className?: string;
  size?: number;
}

const IconFinder: FC<IIconFinder> = ({ name, size, className }) => {
  const icons: { [key: string]: React.JSX.Element } = {
    Panel: <PanelIcon size={size} className={className} />,
    Money: <MoneyIcon size={size} className={className} />,
    Technical: <TechnicalIcon size={size} className={className} />,
    RealEstate: <RealEstateIcon size={size} className={className} />,
    Supplier: <SupplierIcon size={size} className={className} />,
    Marketplace: <MarketplaceIcon size={size} className={className} />,
    Reports: <ReportsIcon size={size} className={className} />,
    Contacts: <ContactsIcon size={size} className={className} />,
    Templates: <TemplatesIcon size={size} className={className} />,
    Calendar: <CalendarIcon size={size} className={className} />,
    Settings: <SettingsIcon size={size} className={className} />,
    Support: <SupportIcon size={size} className={className} />,
    ArrowToRight: <ArrowToRightIcon size={size} className={className} />,
    ArrowToLeft: <ArrowToLeftIcon size={size} className={className} />,
    Plus: <PlusIcons size={size} className={className} />,
  };

  return icons[name];
};

export default IconFinder;
