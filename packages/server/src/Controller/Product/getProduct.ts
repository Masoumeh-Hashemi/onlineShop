import { products } from './../../Schema/Product.ts';
import { Context, RouterContext } from 'https://deno.land/x/oak/mod.ts';
import { ObjectId } from "https://deno.land/x/mongo@v0.12.1/ts/types.ts";

export const getProduct = async (ctx:RouterContext)=>{

try{
   
   if(ctx.params.id){

   const id = ctx.params.id
   const foundProduct = await products.findOne({
       "_id":ObjectId(id)

   })
   ctx.response.status = 201;
   ctx.response.body = {
    succses : true,
    body:foundProduct

    }
 }
}
catch(error){
    throw error;
}

}