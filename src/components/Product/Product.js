import React from "react";
import classes from "./Product.module.css";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
export default function Product() {
  const Products = [
    {
      title: "رمل السليكا ",
      desription: "منخفض النسبة و بأحجام مختلفة (2مل -3مل -4مل)",
      img: "/silicaSand.jpg",
    },
    {
      title: "رمل أبيض",
      desription: "(أحجام مختلفة ( 3مل -4مل",
      img: "/whiteSand.jpg",
    },
    {
      title: "رمل أحمر ",
      desription: "(أحجام مختلفة (3مل -4مل",
      img: "/redSand.jpg",
    },
    {
      title: "إنشاء كسارات",
      desription: "",
      img: "/es.jpg",
    },
  ];
  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-200px, -100px, 0);
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
                <div className={classes.product} key={index}>
                  <img src={product.img} alt={product.title} />
                  <h1>{product.title}</h1>
                  {/* <p>{product.desription}</p> */}
                </div>
              );
            })}
          </div>
          <div className={classes.background}></div>
        </div>
      </Reveal>
    </div>
  );
}
