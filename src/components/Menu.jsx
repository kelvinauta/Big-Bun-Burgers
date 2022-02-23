// ** @jsx jsx *
import { jsx, Text, Button } from "theme-ui";

import React from "react";
import { FaHamburger } from "react-icons/fa";
const Menu = () => {
  return (
    <div>
      <div
        className="menu"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div className="burger">
          <FaHamburger
            sx={{ fill: "primary", fontSize: 4, cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
