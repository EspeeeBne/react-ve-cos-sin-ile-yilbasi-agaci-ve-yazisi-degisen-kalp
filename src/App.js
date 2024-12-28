import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TreeCanvas from "./components/TreeCanvas";
import HeartCanvas from "./components/HeartCanvas";
import ThemeProviderWrapper from "./context/ThemeContext";
import { useTranslation } from "react-i18next";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import darkTheme from "./themes/darkTheme";
import './i18n';

const App = () => {
  const [page, setPage] = useState("tree");
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={darkTheme}>
      <ThemeProviderWrapper>
        <Navbar onPageChange={setPage} />
        <div style={{ marginTop: "100px", textAlign: "center" }}>
          {page === "tree" && <TreeCanvas />}
          {page === "heart" && <HeartCanvas />}
        </div>
        <Footer />
      </ThemeProviderWrapper>
    </ThemeProvider>
  );
};

const Footer = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <div
      style={{
        position: "fixed",
        bottom: "10px",
        right: "10px",
        fontSize: "14px",
        color: theme.palette.text.primary,
        fontWeight: "bold",
        textShadow:
          theme.palette.mode === "dark"
            ? "2px 2px 4px rgba(255, 255, 255, 0.5)"
            : "2px 2px 4px rgba(0, 0, 0, 0.5)",
      }}
    >
      {t("createdBy")}
    </div>
  );
};

export default App;
