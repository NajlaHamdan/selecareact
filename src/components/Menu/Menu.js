import React from "react";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";
import classes from "./Menu.module.css";
export default function Menu() {
  const menu = [
    {
      icon: MdOutlineMiscellaneousServices,
      title: "خدماتنا",
      id: "#Service",
    },
    {
      icon: RiShoppingCart2Line,
      title: "منتجاتنا",
      id: "#Product",
    },
    {
      icon: FaUserFriends,
      title: "من نحن",
      id: "#Aboute",
    },
  ];

  return (
    <div className={classes.container}>
      {menu.map((item, index) => {
        return (
          <div className={classes.card} key={index}>
            <a href={item.id}>
              <div className={classes.icon}>
                <Icon as={item.icon} />
              </div>
              <div className="text">
                <p>{item.title}</p>
              </div>
            </a>
            {/* <div className="polygon"><p></p></div> */}
          </div>
        );
      })}
    </div>
  );
}
