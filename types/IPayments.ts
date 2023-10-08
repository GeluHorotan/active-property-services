export interface IPayments {
  payments: IPayment;
  categories: { title: string; identifier: string }[];
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

  tabel: {
    iconName: string;

    title: string;
    amount: string;

    type: string;
    sub_title?: string;
  }[];
}
