import { User } from "./User.ts";
import db from "../db.ts";
import { Product } from "./Product.ts";
export enum typeOfPayment {
  INTERNET_PAYMENT,
  IN_PERSON_PAYMENT,
}
export interface Order {
  price: Number;
  orderDate: Date;
  payment: typeOfPayment;
  deliveryDate: Date;
  orderStatus?: boolean;
  products: Product[];
  orders?: User[];
}

export const orders = db.collection<Order>("Orders");
