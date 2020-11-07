import type { RouterMiddleware } from "https://deno.land/x/oak/mod.ts"
import { ROLE, User } from "../../Schema/User.ts";
import {throwError,IUserState} from "./isAuth.ts";

export const isMaster: RouterMiddleware<{},IUserState> = async (
    {response, state},
    next,
)=>{
    const {user} = state;
    try{console.log(";lkjhg")
        if(
            user&&
            user.role&&
            (user.role.includes(ROLE.MASTER))
        )
        {
            await next();

        }else {
            throwError("You dont have enough access right");
        }
    } catch (error){
        
        response.status=404;
        response.body = {
            states:false,
            error,
        };
    }
}
