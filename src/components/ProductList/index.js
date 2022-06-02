import React from "react";
import classes from "./Product.module.css";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import Product from "./Product.js";
export default function ProductList() {
  const Products = [
    {
      title: "رمل السليكا ",
      desription: "منخفض النسبة و بأحجام مختلفة (2مل -3مل -4مل)",
      size: [2, 3, 4],
      img: "/silicaSand.jpg",
    },
    {
      title: "حجر المرو",
      desription: "(أحجام مختلفة ( 3مل -4مل",
      size: [3, 4],
      img: "/mroStone.jpg",
    },
    {
      title: "رمل أحمر ",
      desription: "(أحجام مختلفة (3مل -4مل",
      size: [3, 4],
      img: "/redSand.jpg",
    },
  ];
  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(200px, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }`;
  return (
    <div>
      <Reveal keyframes={customAnimation} duration={2000}>
        <div className={classes.container}>
          <p className={classes.heading}>منتجاتنا</p>
          <div className={classes.card}>
            {Products.map((product, index) => {
              return (
                <Product
                  key={index}
                  title={product.title}
                  desription={product.desription}
                  size={product.size}
                  img={product.img}
                />
              );
            })}
          </div>
          <div className={classes.background}></div>
        </div>
      </Reveal>
    </div>
  );
}
