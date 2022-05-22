import React from "react";
import classes from "./Footer.module.css";
import { BsLinkedin } from "react-icons/bs";
import { FaPhoneSquare } from "react-icons/fa";
import { IconContext } from "react-icons";
import { MdEmail } from "react-icons/md";
import { Fade } from "react-awesome-reveal";
export default function Footer() {
  const contact = [
    {
      type: "phone",
      icon: "0543941993",
    },
    { type: "phone", icon: "0509991169" },
    { type: "phone", icon: "0533245454" },
    // { type: "web", icon: "Silicsandco.com" },
    { type: "mail", icon: "info@Silicsandco.com" },
  ];
  return (
    <div>
      <Fade>
        <div className={classes.footer}>
          {/* <div className={classes.card}>
            {Aboute.map((aboute, index) => {
              return (
                <div key={index}>
                  <p>{aboute.name}</p>
                </div>
              );
            })}
          </div> */}

          {/* <div className={classes.card}>
            {Careers.map((career, index) => {
              return (
                <div key={index}>
                  <p>{career.name}</p>
                </div>
              );
            })}
          </div> */}

          <div className={classes.card}>
            <p>تواصل معنا</p>
            {/* <div className={classes.contact}> */}
            {contact.map((social, index) => {
              return (
                <div key={index}>
                  {social.type == "mail" ? (
                    <a href="mailto:info@Silicsandco.com">{social.icon}</a>
                  ) : (
                    <>
                      <p>{social.icon}</p>
                      <IconContext.Provider value={{ display: "inline" }}>
                        <FaPhoneSquare />
                      </IconContext.Provider>
                    </>
                  )}
                </div>
              );
            })}
          </div>
          <div className={classes.column}>
            <div className={classes.contact}>
              <p> جميع الحقوق محفوظة للشركة سليكا ساند للمقاولات 2022 &copy;</p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
