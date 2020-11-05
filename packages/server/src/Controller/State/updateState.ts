import { RouterContext } from 'https://deno.land/x/oak/mod.ts';
import { ObjectId } from "https://deno.land/x/mongo@v0.12.1/ts/types.ts";
import { states } from "../../Schema/State.ts";

export const updateState = async (ctx:RouterContext)=>{
const body = ctx.request.body({type:"json"})
    if(!ctx.request.body){
        ctx.response.status = 404,
        ctx.response.body={
            success: false,
            message: "No data provided",
        }
    }
   try {
    const  {name,enName} =await body.value;
    const stateId = ctx.params.id
    console.log(stateId)
    if(stateId){

    const updatedProduct = await states.updateOne(
     {"_id": ObjectId(stateId) },
     { $set:
        { name,enName } 
     }
     )
    const t =await states.findOne({"_id":ObjectId(stateId)})
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