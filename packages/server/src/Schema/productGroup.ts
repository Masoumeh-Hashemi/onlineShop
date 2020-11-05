import { ProductType} from './productType.ts';
import { Order } from "./Order.ts";
import db from "../db.ts";
//second step of classifing products : مثلا کاپوت/درب
export interface ProductGroup {
    name:string;
    productType : ProductType;
    orders?:Order[] 

}
export const productGroups = db.collection<ProductGroup>("productGroups");