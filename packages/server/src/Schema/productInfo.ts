
import db from "../db.ts";

export interface ProductInfo{
    brifDesc : string;
    fullDecs : string;
}
export const productInfos = db.collection<ProductInfo>("productInfo");