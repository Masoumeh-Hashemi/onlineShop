import db from "../db.ts";
import type { City } from "./City.ts";
import type { State } from "./State.ts";

import { Order } from "./Order.ts";

export enum Gender {
  Male = "Male",
  Female = "Female",
}

export enum ROLE {
  MASTER = "Master",
  EMPLOYEE = "Employee",
  CUSTOMER = "Customer",
}

export interface User {
  firstName: string;
  lastName: string;
  phone: number;
  gender: Gender;
  birthDate: Date;
  nationalCode: number;
  address: {
    postalCode: string;

    state: State;
    city: City;
    text: string;
  };
  role: ROLE[];
  email?: string;
  password?: string;
  isActive?: boolean;
  orders: Order;
}
export const users = db.collection<User>("Users");
