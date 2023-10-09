export interface IPayments {
  payments: IPayment;
  categories: { title: string; filterBy: number }[];
}

export interface IPayment {
  title: string;
  total_spent: string;
  from: string;
  to: string;
  spent_on: {
    label_title: string;
    is_majority: boolean;
  }[];

  table: {
    iconName: string;

    title: string;
    amount: string;

    type: string;
    sub_title?: string;
  }[];
}
