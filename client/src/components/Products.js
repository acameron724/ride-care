import React, { useEffect } from "react";

const Products = (props) => {
  // useEffect(() => {
  //   async function getRideRequest() {
  //     try {
  //       const latitude = ''
  //       const longitude = ''
  //       const response = await fetch("api/v1/products");
  //       const rideRequest = await response.json();
  //       console.log(rideRequest)
  //     } catch (err) {
  //       console.err(`Error in fetch: ${err.message}`);
  //     }
  //   }
  //   getRideRequest();
  // }, []);
  

  return (
    <div>
      <h1>Uber Authentication</h1>
      <a href="https://login.uber.com/oauth/v2/authorize?response_type=code&client_id=ZDCicx_rddWA-FUusQIBB15Ha81ZFqZF&redirect_uri=http://localhost:3000/uberAuthentication"> Authorize Uber</a>
      <br/>
      <a href="https://login.uber.com/oauth/v2/authorize?client_id=ZDCicx_rddWA-FUusQIBB15Ha81ZFqZF&response_type=code&scope=profile"> Authorize Uber V2</a>
      <br />
      <a href="https://login.uber.com/oauth/v2/token?client_secret=CbjCr_7Hn-_otTlMKZSyJSf7nb589FQOo3uvTxNY&client_id=ZDCicx_rddWA-FUusQIBB15Ha81ZFqZF&grant_type=authorization_code&redirect_uri=http://localhost:3000/uberAuthentication&code=crd.EA.CAESEGq280KKhUNTjFyPEFuBVlgiATE.v9yZmefrDkP_evwf1t2Td6tQmFXuQPhvgc9_UjLhMyg">Testing</a>
    </div>
  );
};

export default Products;


//&scope=request%20profile%20history