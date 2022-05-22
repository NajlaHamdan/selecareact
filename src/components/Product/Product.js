import React from "react";
import classes from "./Product.module.css";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
export default function Product() {
  const Product = [
    {
      title: "رمل السليكا منخفض النسبة بأحجام مختلفة",
    },
    {
      title: "رمل أبيض بأحجام مختلفة",
    },
    {
      title: "رمل أحمر بأحجام مختلفة",
    },
    {
      title: "إنشاء كسارات",
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
          <p className={classes.title}>منتجاتنا</p>
          <div className={classes.card}>
            {Product.map((service, index) => {
              return (
                <div className={classes.service} key={index}>
                  <h1>{service.title}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
