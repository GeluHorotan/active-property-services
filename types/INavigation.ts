export interface INavigation {
  main_buttons: {
    title: string;
    iconName: string;
    isExtendable?: boolean;
    isGreen?: boolean;
  }[];
  secondary_buttons: {
    title: string;
    iconName: string;
  }[];
}
