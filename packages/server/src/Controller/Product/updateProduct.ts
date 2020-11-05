

import { Context, RouterContext } from 'https://deno.land/x/oak/mod.ts';
import { products } from './../../Schema/Product.ts';
import { ObjectId } from "https://deno.land/x/mongo@v0.12.1/ts/types.ts";

export const updateProduct = async (ctx:RouterContext)=>{
const body = ctx.request.body({type:"json"})
    if(!ctx.request.body){
        ctx.response.status = 404,
        ctx.response.body={
            success: false,
            message: "No data provided",
        }
    }
   try {
    const  {name,enName,price,brand,remainingCount} =await body.value;
    const productId = ctx.params.id
    console.log(productId)
    if(productId){

    const updatedProduct = await products.updateOne(
     {"_id": ObjectId(productId) },
     { $set:
        { name,enName,price,brand,remainingCount } 
     }
     )
    const t =await products.findOne({"_id":ObjectId(productId)})
     ctx.response.body={
         success:true,
         body:t
         
     }
     ctx.response.status =201;
    }
        
}

catch(error){
    throw error
}

}


export default updateProduct