export interface IPaymentGraph {
  categories: Category[];
  dropdown: Dropdown;
  graph_legend: {
    title: string;
    bg_color: string;
    color: string;
  }[];
  graph_sub_legend: {
    text: string;
    color: string;
  }[];
  title: string;
  button: {
    text: string;
    iconName: string;
  };
}

export interface Category {
  title: string;
  identifier: string;
}

export interface Dropdown {
  title: string;
  entries: {
    title: string;
  }[];
}
