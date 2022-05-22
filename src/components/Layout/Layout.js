import React from "react";
import Footer from "./Footer/Footer";
import MainNavigation from "./MainNav/MainNavigation";

export default function Layout({ children }) {
  return (
    <div>
      <MainNavigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
