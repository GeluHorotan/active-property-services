export interface IPaymentGraph {
  categories: Category[];
  dropdown: Dropdown;
  graph_legend: {
    title: string;
  }[];
  graph_sub_legend: {
    text: string;
  }[];
  title: string;
  button: {
    text: string;
    iconName: string;
  };
}

export interface Category {
  title: string;
  identifier?: string;
  filterBy: number;
}

export interface Dropdown {
  title: string;
  entries: {
    title: string;
  }[];
}
