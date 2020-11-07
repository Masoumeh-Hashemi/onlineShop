import { Context } from 'https://deno.land/x/oak@v6.3.1/mod.ts';
export async function setFailedReqBody(ctx:Context){
    
    ctx.response.body = {
        message: "there is a problem with type of  data",
        success :false
    }
    
    ctx.response.status = 500;

}