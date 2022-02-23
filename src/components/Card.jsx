import React from "react";
import { useSpring, animated } from "react-spring";
import { jsx, Text } from "theme-ui";
/* @jsx jsx */
// import "./styles.css";
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
const transText = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Card = ({ imageUrl, text }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 60 },
  }));
  return (
    <div
      className="wrapper"
      sx={{
        margin: 4,
        position: "relative",
        textShadow: "2px 2px 24px rgba(0, 0, 0, 0.2)",
        transition: "text-shadow 0.5s ease",
        boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.2)",
        "&:hover": { textShadow: "2px 2px 24px rgba(0, 0, 0, 0.4)" },
      }}
    >
      <animated.div
        className="card"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        sx={{
          width: "45ch",
          height: "45ch",
          maxWidth: 250,
          maxHeight: 250,
          background: "transparent",

          backgroundImage: `url(${imageUrl})`,
          borderRadius: "10px",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.2)",
          transition: "box-shadow 0.5s",
          willChange: "transform",
          "&:hover": { boxShadow: "0px 30px 100px -10px rgba(0, 0, 0, 0.4)" },
        }}
        style={{ transform: props.xys.interpolate(trans) }}
      />
      <animated.div
        className="text"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        sx={{
          position: "absolute",
          color: "white",
          top: "0%",
          left: "-10%",
          transition: "box-shadow 0.5s",
          willChange: "transform",
        }}
        style={{ transform: props.xys.interpolate(transText) }}
      >
        <Text
          sx={{
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: "2.5rem",
            color: "text",
            textShadow: `0px 4px 3px rgba(0,0,0,0.4),
            0px 8px 13px rgba(0,0,0,0.1),
            0px 18px 23px rgba(0,0,0,0.1);`,
          }}
        >
          {text}
        </Text>
      </animated.div>
    </div>
  );
};

export default Card;
