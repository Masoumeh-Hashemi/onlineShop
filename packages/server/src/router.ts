import { cityRoutes } from './Controller/City/index.ts';
import { stateRoutes } from './Controller/State/index.ts';
import type{ Router } from "https://deno.land/x/oak@v6.3.1/mod.ts";
import {productRoutes} from "./Controller/Product/index.ts"
import userRoutes from "./Controller/User/index.ts";
export const manageRoutes =(router:Router)=>{
 productRoutes(router);
 userRoutes(router);
 stateRoutes(router);
 cityRoutes(router);
}
export default manageRoutes;