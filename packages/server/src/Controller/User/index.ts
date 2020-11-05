import type { Router } from "https://deno.land/x/oak/mod.ts";
import { signReq, signin } from "./signin.ts";

const userRoutes = (router: Router) => {
  router.post("/sign/request", signReq);
  router.post("/signin", signin);
};

export default userRoutes;