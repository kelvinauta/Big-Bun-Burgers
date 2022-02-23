import React from "react";
/*@jsx jsx */
import { jsx, Text } from "theme-ui";
const Title = ({ children }) => {
  let pixel = 2;
  return (
    <div>
      <Text
        sx={{
          fontSize: ["3rem", "4.5rem"],
          textAlign: "center",
          //   textTransform: "uppercase",
          color: "text",
          fontFamily: "'Niconne', cursive",
          fontWeight: "700",
          textShadow: `${pixel}px ${pixel}px 0px #f68e5c,
            ${pixel * 2}px ${pixel * 2}px 0px #ec3a4b,
            ${pixel * 3}px ${pixel * 3}px 0px #f68e5c`,
        }}
      >
        {children}
      </Text>
    </div>
  );
};

export default Title;
