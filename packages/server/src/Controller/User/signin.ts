import type { RouterContext } from "https://deno.land/x/oak/mod.ts";
import {ROLE } from "../../Schema/User.ts";
import {users} from "../../Schema/User.ts"
import { createVerificationCode } from "../../utils/index.ts";
import { redis } from "../../redis.ts";
import type { ObjectId } from "https://deno.land/x/mongo@v0.12.1/mod.ts";
import {
  Jose,
  makeJwt,
  Payload,
  setExpiration,
} from "https://deno.land/x/djwt/create.ts";

export const key = "your-secret";
export const payload: Payload = {
  exp: setExpiration(60 * 60 * 24 * 30 * 6),
};
export const header: Jose = {
  alg: "HS256",
  typ: "JWT",
};

export const signReq = async ({ request, response }: RouterContext) => {
  if (!request.hasBody) {
    response.status = 404;
    response.body = {
      success: false,
      message: "No data provided",
    };
  }

  const body = request.body({ type: "json" });
  try {
    const { phone } = await body.value;
    let resBody: { phone?: number; _id?: ObjectId } = { phone };

    const findedUser = (await users.findOne({ phone })) || {
      _id: await users.insertOne({
        phone,
        isActive: false,
        role: [ROLE.CUSTOMER],
      }),
      phone,
    };
    resBody._id = findedUser._id;

    const code = createVerificationCode();
    await redis.set(`reg-${findedUser.phone}`, code, {
      ex: 100,
    });

    response.body = {
      success: true,
      body: resBody,
    };

    response.status = 201;
  } catch (error) {
    response.body = null;
    response.status = 500;
  }
};

export const signin = async ({ request, response }: RouterContext) => {
  if (!request.hasBody) {
    response.status = 404;
    response.body = {
      success: false,
      message: "No data provided",
    };
  }

  const body = request.body({ type: "json" });

  try {
    const { phone, code } = await body.value;
    const getUser = await users.findOne({ phone });

    if (getUser) {
      const getCode = await redis.get(`reg-${getUser.phone}`);

      if (code === getCode) {
        payload.userId = getUser._id.$oid;
        !getUser.isActive &&
          (await users.updateOne(
            { _id: getUser._id },
            { $set: { isActive: true } },
          ));
        const jwt = await makeJwt({ header, payload, key });
        response.body = {
          success: true,
          body: jwt,
        };
      } else {
        throw new Error("your code is not accepted");
      }
    } else {
      throw new Error("users not found");
    }
  } catch (error) {
    response.body = {
      success: false,
      error,
    };
    response.status = 500;
  }
};
