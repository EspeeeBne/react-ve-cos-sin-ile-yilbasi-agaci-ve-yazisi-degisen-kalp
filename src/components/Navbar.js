import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ThemeContext } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness3Icon from "@mui/icons-material/Brightness3";

const Navbar = ({ onPageChange }) => {
  const { toggleTheme, themeMode } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "background.paper",
        color: themeMode === "dark" ? "white" : "black",
        boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Select
            value={i18n.language}
            onChange={(e) => handleLanguageChange(e.target.value)}
            sx={{
              color: themeMode === "dark" ? "white" : "black",
              ".MuiSelect-icon": { color: themeMode === "dark" ? "white" : "black" },
              marginRight: "20px",
            }}
          >
            <MenuItem value="tr">
              <img
                src="https://flagcdn.com/w40/tr.png"
                alt="TR"
                style={{ width: 20, height: 15, marginRight: 5 }}
              />
              {t("language.tr")}
            </MenuItem>
            <MenuItem value="en">
              <img
                src="https://flagcdn.com/w40/us.png"
                alt="EN"
                style={{ width: 20, height: 15, marginRight: 5 }}
              />
              {t("language.en")}
            </MenuItem>
          </Select>
          <IconButton onClick={toggleTheme} color="inherit">
            {themeMode === "dark" ? <WbSunnyIcon /> : <Brightness3Icon />}
          </IconButton>
        </div>

        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            textAlign: "center",
            fontWeight: "bold",
            color: themeMode === "dark" ? "white" : "black",
          }}
        >
          {t("app_title")}
        </Typography>

        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onPageChange("tree")}
            sx={{ marginRight: "10px" }}
          >
            {t("tree")}
          </Button>
          <Button variant="contained" color="secondary" onClick={() => onPageChange("heart")}>
            {t("heart")}
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
