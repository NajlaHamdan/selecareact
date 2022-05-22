import React from "react";
import classes from "./Header.module.css";
import { GrMenu } from "react-icons/gr";
import Menu from "./../../Menu/Menu";
export default function Header() {
  return (
    <div>
      <div className={classes.header}>
        <div className={classes.logo}>
          <img src="./seleca.png" alt="logo" />
        </div>
        {/* <div className={classes.menu}>
         <GrMenu/>
        </div> */}
        {/* <div className={classes.breaker}> */}
        {/* <img src="./es.jpg" alt="es" /> */}
        {/* </div> */}
        {/* <div className={classes.card}> */}
        <div className={classes.left}>
          <div className={classes.box}>
              <div className={classes.title}>
          <p>سليكا ساند للمقاولات</p>
          </div>
              <div className={classes.sub}>
          <p>الإنتاج بشغف والبسمة بلطف</p>
          </div>
          {/* <div className={classes.button}>
            <button>المزيد</button>
          </div> */}
          </div>
          <div className={classes.menu}>
            <Menu />
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.backgroun}>
            <img src='./case.png' alt="" />
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
