import React from "react";
import Services from "./Services/Services";
import Header from "./Layout/Header/Header";
// import Memebers from "./Memebers/Memebers";
import Aboute from "./Aboute/Aboute";
import Product from "./Product/Product";
export default function Home() {
  return (
    <div>
      <Header />
      <div id="Service">
        <Services />
      </div>
      <div id="Product">
        <Product />
      </div>
      <div id="Aboute">
        <Aboute />
      </div>

      {/* <Memebers /> */}
    </div>
  );
}
