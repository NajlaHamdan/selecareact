import React from "react";
import classes from "./Certifications.module.css";
// import "./Certifications.module.css";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
export default function Certifications() {
  const services = [
    {
      img: "01",
      title: "صيانة الكسارات",
      color: "lightRed",
    },
    {
      img: "02",
      title: "صيانة المعدات الثقيلة",
      color: "red",
    },
    {
      img: "03",
      title: "أعمال اللحام",
      color: "lightBlue",
    },
    {
      img: "04",
      title: "تطوير البنية التحتية للأراضي الخام",
      color: "blue",
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
          <p className={classes.heading}>شهاداتنا</p>
          <div className={classes.card}>
            {services.map((service, index) => {
              return (
                <div className={classes[`${service.color}`]} key={index}>
                  <div className={classes.service}>
                    {/* <p>{service.title}</p> */}
                    {/* <p className={classes.number}>{service.id}</p> */}
                    {/* <img src={classes.img} alt={service.title} /> */}
                    <h1 className={classes.title}>{service.title}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
