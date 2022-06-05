import React from "react";
import Services from "./Services/Services";
import Header from "./Layout/Header/Header";
// import Memebers from "./Memebers/Memebers";
import Aboute from "./Aboute/Aboute";
import ProductList from "./ProductList";
import Boss from './Boss'
import Certifications from "./Certifications";
export default function Home() {
  return (
    <div>
      <Header />
      <div id="Service">
        <Services />
      </div>
      <div id="Product">
        <ProductList />
      </div>
      <div id="Aboute">
        <Aboute />
      </div>
      <div id="Boss">
        <Boss />
      </div>
      <div id="Certifications">
        <Certifications />
      </div>
      {/* <Memebers /> */}
    </div>
  );
}
