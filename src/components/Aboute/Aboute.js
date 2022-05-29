import React from "react";
import classes from "./Aboute.module.css";
import Reveal from "react-awesome-reveal";
export default function Aboute() {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        {/* <Reveal> */}
        <div className={classes.rightImg}>
          <img src="./seleca.png" alt="logo" />
        </div>
        <Reveal>
          <div>
            <h2 className={classes.title}>سليكا ساند للمقاولات</h2>
            <p>
              شركة سليكا ساند للمقاولات هي شركة تأسست عام 1424 هجرية، ومن هنا
              انطلقت بخطى حثيثة نحو التميز والرقي وذلك باتباع أفضل الطرق لإنتاج
              رمال البناء، المستخرجة من شمال الرياض من مجمع كسارات أم عاذر
              بالمجمعة، وتعبئتها وتنظيفها وبيعها بشكل أجود وأنظف وبأسعار مميزة.
            </p>
          </div>
        </Reveal>
      </div>
      <div>
        <img
          className={classes.blueRight}
          src="./selecaborder.png"
          alt="logoborder"
        />
        <img
          className={classes.redRight}
          src="./selecared.png"
          alt="logoborder"
        />
      </div>
      <div>
        <img
          className={classes.blueLeft}
          src="./selecaborder.png"
          alt="logoborder"
        />
        <img
          className={classes.redLeft}
          src="./selecared.png"
          alt="logoborder"
        />
      </div>
    </div>
  );
}
