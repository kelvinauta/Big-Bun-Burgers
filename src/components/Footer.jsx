// ** @jsx jsx *
import { jsx, Text, Button } from "theme-ui";

import React from "react";
import { CgPatreon } from "react-icons/cg";
const Footer = () => {
  return (
    <div
      className="footer"
      sx={{
        variant: "div.flex",
        flexDirection: "column",
        width: "auto",
        // justifyContent: "center",
        // alignItems: "center",
        maxWidth: "100vw",
      }}
    >
      <img
        sx={{
          variant: "img.noSelect",
          width: 500,
          maxWidth: "95vw",
        }}
        src="./img/patronButton1.png"
        alt=""
      />
      <a
        href="https://www.patreon.com/hanon"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          color: "background",
          margin: 0,
          backgroundColor: "secondary",
          paddingTop: 3,
          paddingBottom: 3,
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        <div className="footer-icon">
          <CgPatreon
            sx={
              {
                // fill: "primary",
              }
            }
          />
        </div>
        <Text sx={{ fontWeight: "bold" }}>PATREON</Text>
      </a>
    </div>
  );
};

export default Footer;
