import React from "react";
import Services from "./Services/Services";
import Header from "./Layout/Header/Header";
import Memebers from "./Memebers/Memebers";
import Aboute from "./Aboute/Aboute";
import Product from "./Product/Product";
export default function Home() {
  return (
    <div>
      <Header />
      <Aboute />
      <Services />
      <Product />
      <Memebers />
    </div>
  );
}
