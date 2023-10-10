export interface INavigation {
  main_buttons: {
    title: string;
    iconName: string;
    isExtendable?: boolean;
    to: string;
  }[];
  secondary_buttons: {
    title: string;
    iconName: string;
  }[];
}
