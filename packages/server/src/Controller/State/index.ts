import { isAuth } from './../../utils/middlewares/isAuth.ts';
import { isMaster } from "./../../utils/middlewares/isMaster.ts";
import type { Router } from "https://deno.land/x/oak/mod.ts";
import {addState} from "./addState.ts"
export const stateRoutes = (router: Router)=>{
    router.post("/state/add",isAuth,isMaster,addState);
};