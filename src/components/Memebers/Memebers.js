import React from "react";
import Reveal from "react-awesome-reveal";
import classes from "./Memebers.module.css";
import { keyframes } from "@emotion/react";
export default function Memebers() {
  const memebers = [
    {
      img: "./logo.jpg",
      title: "memeber1",
    },
    {
      img: "./flk.jpeg",
      title: "memeber2",
    },
  ];
  const moveInRight = keyframes`
    0% {
      transform: translateX(40%);
    }
    100% {
      transform: translateX(0%);
    }`;

  return (
    <div>
      <Reveal keyframes={moveInRight} duration={1000}>
      <p className={classes.title}>شركاؤنا</p>
        <div className={classes.card}>
          {memebers.map((memeber, index) => {
            return (
              <div className={classes.memeber} key={index}>
                <img src={memeber.img} alt="Avatar" />
              </div>
            );
          })}
        </div>
      </Reveal>
    </div>
  );
}
