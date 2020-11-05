
import { states } from './../../Schema/State.ts';
import { Context } from "https://deno.land/x/oak/mod.ts";


export const addState = async ({request,response}:Context)=>{
  const body = request.body({ type: "json" });
  
  if (!request.hasBody) {
    response.status = 404;
    response.body = {
      success: false,
      message: "No data provided",
    };
  }

    try{
    
      const {name , enName} =await body.value;
      const newState =await states.insertOne({name,enName});
        response.body = {
            success: true,
            body : newState
        };
    response.status = 201;
}
    catch(error){
    response.body = null;
    response.status = 500;
    
}


}
