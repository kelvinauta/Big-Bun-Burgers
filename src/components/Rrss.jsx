import React from "react";
/*@jsx jsx */
import { jsx, Text } from "theme-ui";
const Rrss = () => {
  const rrss = [
    {
      title: "twitter",
      url: "https://twitter.com/ponehanon",
      icon: "https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-3.png",
    },
    {
      title: "patreon",
      url: "https://www.patreon.com/hanon",
      icon: "https://cdn-icons-png.flaticon.com/512/2111/2111548.png",
    },
    {
      title: "discord",
      url: "https://discord.gg/kTpvnXVbkX",
      icon: "https://cdn.icon-icons.com/icons2/3053/PNG/512/discord_macos_bigsur_icon_190238.png",
    },
    {
      title: "furaffinity",
      url: "https://furaffinity.net/user/bunnehanon/",
      icon: "https://en.wikifur.com/w/images/thumb/1/1b/Fa_logo.png/250px-Fa_logo.png",
    },
  ];
  return (
    <div>
      <div
        sx={{
          variant: "div.flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          // @refresh reset
          flexWrap: "wrap",
        }}
      >
        {rrss.map((rrss) => {
          return (
            <a
              href={rrss.url}
              key={rrss.title}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                color: "text",
                margin: 0,
                // @refresh reset
                cursor: "pointer",
                textDecoration: "none",
                padding: 2,

                transition: "all 0.2s ease-in-out",
                border: "1px solid",
                borderColor: "text",
                borderRadius: "5px",
                mr: 2,
                mb: 2,

                "&:hover": {
                  backgroundColor: "text",
                  color: "background",
                },
              }}
            >
              <div className="footer-icon">
                <img
                  sx={{
                    variant: "img.noSelect",
                    width: 15,
                  }}
                  src={rrss.icon}
                  alt=""
                />
              </div>
              <Text
                sx={{
                  fontWeight: "bold",
                  fontSize: "0.8em",
                  textTransform: "uppercase",
                  "@media screen and (max-width: 600px)": {
                    fontSize: "0.5rem",
                    fontWeight: "normal",
                  },
                }}
              >
                {rrss.title}
              </Text>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Rrss;
