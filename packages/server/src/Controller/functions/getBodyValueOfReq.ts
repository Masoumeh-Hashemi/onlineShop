import { Context } from "https://deno.land/x/oak@v6.3.1/mod.ts";

export async function getBodyValueOfReq(ctx:Context){
    try{
      
    const json = await ctx.request.body({type:"json"}).value;
    return json
  }
  catch(error){
    console.log(error,"there is an error with getting value of body of the request")
  }
 }
