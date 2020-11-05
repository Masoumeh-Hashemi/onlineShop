import { Order } from "./Order.ts";
import db from "../db.ts";

export interface Product {
  name: string;
  enName: string;
  brand?: string;
  price?: Number;
  remainingCount?: number;
  orders?: Order[];
}
export const products = db.collection<Product>("products");
