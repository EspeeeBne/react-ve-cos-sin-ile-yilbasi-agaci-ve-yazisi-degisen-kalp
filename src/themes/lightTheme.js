import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#7077F9",
    },
    secondary: {
      main: "#FF4081",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    text: {
      primary: "#000000",
      secondary: "#707070",
    },
  },
});

export default lightTheme;
