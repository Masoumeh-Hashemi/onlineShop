import { Context } from "https://deno.land/x/oak@v6.3.1/context.ts";
import { products } from "../../Schema/index.ts";
export const addProduct = async ({ response, request }: Context) => {
  const body = request.body({ type: "json" });

  if (!request.hasBody) {
    response.status = 404;
    response.body = {
      success: false,
      message: "No data provided",
    };
  }

  try {
    const { name, enName , brand,price} = await body.value;
    const newProduct = await products.insertOne({
      name,
      enName,
      brand,
      price
    });
    response.body = {
      success: true,
      body: newProduct,
    };
    response.status = 201;
  } catch (error) {
    response.body = null;
    response.status = 500;
  }
};
