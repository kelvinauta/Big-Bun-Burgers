import React from "react";
import Header from "../components/Header";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <style jsx="true" global="true">{`
        body {
          margin: 0;
          padding: 0;
          font-family: "Montserrat", sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Layout;
