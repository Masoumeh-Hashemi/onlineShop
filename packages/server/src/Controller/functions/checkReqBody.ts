import { Context } from "https://deno.land/x/oak@v6.3.1/mod.ts";

export async function checkReqBody(ctx:Context) {
    try {

          if (!ctx.request.hasBody) {
          ctx.response.status = 404;
          ctx.response.body = {
            success: false,
            message: "No data provided",
          };
          return false
        } 
        else{
          return true
        }
        
      }
    catch(error){
      console.log(error,"there is a problem with body of the request")
      return false
    }
  } 