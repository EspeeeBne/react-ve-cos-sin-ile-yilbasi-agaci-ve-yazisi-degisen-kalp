import React, { createContext, useState } from "react";
import darkTheme from "../themes/darkTheme";
import lightTheme from "../themes/lightTheme";
import { ThemeProvider as MUIThemeProvider, CssBaseline } from "@mui/material";

export const ThemeContext = createContext();

const ThemeProviderWrapper = ({ children }) => {
  const [themeMode, setThemeMode] = useState("dark");

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const currentTheme = themeMode === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ toggleTheme, themeMode }}>
      <MUIThemeProvider theme={currentTheme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProviderWrapper;
