import { products } from './../../Schema/Product.ts';
import { Context } from 'https://deno.land/x/oak/mod.ts';
export const getProducts = async (ctx:Context)=>{
    const allProducts = await products.find()
    ctx.response.body = {
        body: allProducts
    }
}
export default getProducts;