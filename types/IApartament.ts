export interface IApartament {
  apartaments_data: IApartamentsData;
}

export interface IApartamentsData {
  fixed_head: string;
  tabel_heads: { title: string }[];
  tabel_data: ITabelData[];
  filter_by_status: IFilterByStatus[];
  filter_by_owner: IFilterByOwner[];
  filter_by_property: IFilterByProperty[];
  filter_by_type: IFilterByType[];
  dropdown_default_values: IDropdown[];
}

export interface IFilterByStatus {
  title: string;
  identifier: number;
  empty?: boolean;
}

export interface IFilterByOwner {
  name: string;
}

export interface IFilterByType {
  title: string;
  identifier: string;
}

export interface IFilterByProperty {
  name: string;
  identifier: string;
}

export interface IDropdown {
  value: string;
}

export interface ITabelData {
  title: string;
  sub_title: string;
  identifier: number;
  status: string;
  name: string;
  address: string;
  number: number;
  city: string;
  type: string;
  owner: string;
  tickets: ITicket[];
  tenant: string;
  phone: IPhone[];
  contact: IContact[];
}

export interface ITicket {
  number: number | string;
  iconName?: string;
}

export interface IPhone {
  number: string;

  iconName: string;
}

export interface IContact {
  address: string;
  iconName: string;
}
