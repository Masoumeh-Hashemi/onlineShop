
import { Router } from "https://deno.land/x/oak@v6.3.1/mod.ts";
import { addCity } from './addCity.ts';



export const cityRoutes = (router:Router)=>{

    router.post("/city/add", addCity)
    // router.post("/state/add",isAuth,isMaster,addState);
}