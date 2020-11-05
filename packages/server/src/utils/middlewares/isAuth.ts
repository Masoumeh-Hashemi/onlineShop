import type { RouterMiddleware } from "https://deno.land/x/oak/mod.ts";
import { ROLE, User, users } from "../../Schema/User.ts";
import { validateJwt } from "https://deno.land/x/djwt/validate.ts";
import type { PayloadObject } from "https://deno.land/x/djwt/create.ts";
import { ObjectId } from "https://deno.land/x/mongo@v0.12.1/mod.ts";

export interface IUserState {
    user: User;
}

export const isAuth: RouterMiddleware<{},IUserState> = async (ctx,next)=>{
try{
const token = ctx.request.headers.get("token");
const userFounded = token
    ?await getUser(token)
    :throwError("token is required")

    if(userFounded){
        ctx.state.user = userFounded;
    }
    await next();
}
catch(error){
 ctx.response.status = 404;
 ctx.response.body={
     states:false,
     error,
   };
  }
};
export const throwError = (msg?:string) =>{
 throw new Error(msg);
};

const getUser = async(jwt:string)=>{
    const isValid = await validateJwt({
    jwt,
    key:"your-secret",
    algorithm:"HS256"
    });
console.log(isValid);
    if(isValid.isValid && isValid.payload){
        console.log(isValid.payload as PayloadObject)
         const {userId} = isValid.payload as PayloadObject;   
            console.log(userId);
        if(userId && typeof userId === "string"){
            const foundedUser = await users.findOne({_id:ObjectId(userId)})
            if(foundedUser){
                console.log(foundedUser)
                return foundedUser;
            }
            else{
                throwError("user not found");
            }

        } else {
            throwError("your token not have proper user id")
        }

    } else {
        throwError("your token is not valid");
    }

};
