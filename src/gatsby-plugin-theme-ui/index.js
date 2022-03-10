export default {
  colors: {
    primary: "#ee365b",
    secondary: "#e9d68a",
    background: "#373a3d",
    text: "#f8f8f8",
  },
  fonts: {
    body: "'Montserrat'",
    heading: "Montserrat, sans-serif",
    monospace: "Menlo, monospace",
  },
  radii: [10, 15, 20, 25],
  buttons: {
    primary: {
      color: "white",
      backgroundColor: "primary",
      borderRadius: "4px",
      fontSize: "1.2rem",
      fontWeight: "bold",
      padding: "0.5rem 1rem",
      textTransform: "uppercase",
      fontFamily: "Montserrat, sans-serif",
      fontWeight: "bold",
      letterSpacing: "0.1em",
      transition: "all 0.2s ease-in-out",
      "&:hover": {
        opacity: 0.8,
        color: "white",
      },
      cursor: "pointer",
    },
    outlined: {
      variant: "buttons.primary",
      background: "transparent",
      border: "1px solid",
      borderColor: "primary",
      color: "primary",
    },
  },
  secondary: {
    variant: "buttons.primary",
    backgroundColor: "secondary",
  },
  div: {
    flex: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
  },
  img: {
    noSelect: {
      "-webkit-user-select": "none",
      "-moz-user-select": "-moz-none",
      /*IE10*/
      "-ms-user-select": "none",
      "user-select": "none",

      /*You just need this if you are only concerned with android and not desktop browsers.*/
      "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
    },
  },
};
