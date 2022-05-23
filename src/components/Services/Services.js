import React from "react";
import classes from "./Services.module.css";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
export default function Services() {
  const services = [
    {
      id: "01",
      title: "صيانة الكسارات",
    },
    {
      id: "02",
      title: "صيانة المعدات الثقيلة",
    },
    {
      id: "03",
      title: "أعمال اللحام",
    },
    {
      id: "04",
      title: "تطوير وتسوير المخططات",
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
          <p className={classes.heading}>خدماتنا</p>
          <div className={classes.card}>
            {services.map((service, index) => {
              return (
                <div className={classes.service} key={index}>
                  <p className={classes.number}>{service.id}</p>
                  <h1 className={classes.title}>{service.title}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
