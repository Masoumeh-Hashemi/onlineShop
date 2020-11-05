import { products } from './../../Schema/Product.ts';
import { Context } from 'https://deno.land/x/oak@v6.3.1/mod.ts';
export const getProducts = async (ctx:Context)=>{
    const allProducts = await products.find()
    ctx.response.body = {
        body: allProducts
    }
}
export default getProducts;