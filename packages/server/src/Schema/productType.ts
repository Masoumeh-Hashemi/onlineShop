import db from "../db.ts";
import { Order } from "./Order.ts";
import { ProductGroup } from "./productGroup.ts";
//first step of classifing products : مثلا قطعات داخلی خودرو یا قطعات موتور

export interface ProductType{
    name : string;
    productGroup : ProductGroup;
    orders?: Order[]
}

export const productTypes = db.collection<ProductType>("productTypes");