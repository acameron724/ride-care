import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import productsRouter from "./api/v1/productsRouter.js";
import got from "got";

const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);
rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);
rootRouter.use("/api/v1/products", productsRouter);

rootRouter.use("/uberAuthentication", async (req, res) => {
  const authorizationCode = req.query.code;
  console.log(authorizationCode);
  console.log("requesting token...");
  try {
    const url = `https://login.uber.com/oauth/v2/token?client_secret=CbjCr_7Hn-_otTlMKZSyJSf7nb589FQOo3uvTxNY&client_id=ZDCicx_rddWA-FUusQIBB15Ha81ZFqZF&grant_type=authorization_code&redirect_uri=http://localhost:3000/uberAuthentication&scope=profile&code=${authorizationCode}`;
    const apiResponse = await got(url);
    
    const responseBody = apiResponse.body;
    // debugger
    console.log(`API response: ${apiResponse}`);
    console.log(`Response Body: ${responseBody}`);

    res.redirect("http://localhost:3000/uberAuthentication");
  } catch (error) {
    return { error: error.message };
  }
});

export default rootRouter;

// let code = "crd.EA.CAESEGq280KKhUNTjFyPEFuBVlgiATE.v9yZmefrDkP_evwf1t2Td6tQmFXuQPhvgc9_UjLhMyg"
