import { addCity } from './addCity.ts';

import type { Router } from "https://deno.land/x/oak/mod.ts"


export const cityRoutes = (router:Router)=>{

    router.post("/city/add", addCity)
    // router.post("/state/add",isAuth,isMaster,addState);
}