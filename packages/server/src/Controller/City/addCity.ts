
import { create } from "../base/create.ts";
import { Context } from "https://deno.land/x/oak@v6.3.1/mod.ts";
import { cities } from "../../Schema/City.ts";
import { checkReqBody } from "../functions/checkReqBody.ts";
import { getBodyValueOfReq } from "../functions/getBodyValueOfReq.ts";
import { SetSuccessReqBody } from "../functions/SetSuccessReqBody.ts";
import { setFailedReqBody } from "../functions/setFailedReqBody.ts";


export const addCity =async (ctx:Context)=> {

try{    
     if(await checkReqBody(ctx)===true){
     const json =await getBodyValueOfReq(ctx)
     if(typeof json === 'object'){
       const creation = await create(cities,json) 
        SetSuccessReqBody(creation,ctx)
     }
     else{
      setFailedReqBody(ctx)
     }
   
     }
  }
catch  {
 await setFailedReqBody(ctx)

  }
}