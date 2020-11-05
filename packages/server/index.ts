
import { Application ,Router,Context } from "https://deno.land/x/oak@v6.3.1/mod.ts";
import manageRoutes from "./src/router.ts";

const router = new Router();
const app = new Application();

router.get("/", (ctx: Context) => {
  ctx.response.body = "Hello world";
});


manageRoutes(router);
app.use(router.routes());
app.use(router.allowedMethods())

await app.listen({ port: 4000 }).then(() => {
  console.log("listening");
});
