import { Context } from "https://deno.land/x/oak@v6.3.1/mod.ts";

export async function SetSuccessReqBody(bodyValue:any,ctx:Context){
    try{ 
          ctx.response.body = {
          success: true,
          body:bodyValue
        };
        ctx.response.status = 201;}
        catch(error){
          console.log(error,"a problem with set the req body after successful operation")
        };
        
     }