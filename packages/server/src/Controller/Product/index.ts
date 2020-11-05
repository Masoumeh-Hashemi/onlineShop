import { updateProduct } from './updateProduct.ts';
import { isMaster } from './../../utils/middlewares/isMaster.ts';
import { isAuth } from './../../utils/middlewares/isAuth.ts';
import { getProducts } from './getProducts.ts';
import { addProduct } from "./addProduct.ts";
import type { Router } from "https://deno.land/x/oak@v6.3.1/mod.ts";
import { deleteProduct } from "./deleteProduct.ts";
import { getProduct } from "./getProduct.ts";


export const productRoutes = (router: Router) => {
  router.post("/product/add",isAuth,isMaster ,addProduct);
  router.get("/product/product/:id" ,getProduct);
  router.get("/product/products",getProducts);
  router.put("/product/update/:id",updateProduct);
  router.delete("/product/delete/:id",deleteProduct);
};
export default productRoutes;
