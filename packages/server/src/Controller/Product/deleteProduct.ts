import { products } from './../../Schema/Product.ts';
import { Context, RouterContext } from 'https://deno.land/x/oak/mod.ts';
import { ObjectId } from "https://deno.land/x/mongo@v0.12.1/ts/types.ts";

export const deleteProduct = async (ctx:RouterContext)=>{

try{
   if(ctx.params.id){

   const id = ctx.params.id
   const deletedProduct = await products.deleteOne({
       "_id":ObjectId(id)

   })
   ctx.response.status = 201;
   ctx.response.body = {
    succses : true,
    body:deletedProduct

    }
 }
}
catch(error){
    throw error;
}

}
// export const deleteProduct = async (
//     params: any,
//     response: any,
//   ): Promise<void> => {
//     try {
//       const id = params.id;
//       await products.deleteOne({ _id: { $oid: id } });

//       response.status = 200;
//       response.body = { message: "User has been deleted" };
//     } catch (error) {
//       response.status = 500;
//       response.body = { message: error };
//     }
//   };