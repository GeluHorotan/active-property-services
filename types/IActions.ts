export interface IAction {
  title: string;
  iconName: string;
  entries: {
    data_number: number;
    data_desc: string;
    data_unit?: string;
    highlight?: boolean;
  }[];
  action_name: string;
}

export interface IQuickActions {
  quick_actions: IAction[];
}
