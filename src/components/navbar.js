import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import HomeIcon from "@material-ui/icons/Home";
function Navbar() {
  return (
    <div className="navbar">
      <AppBar
        elevation={0}
        style={{ backgroundColor: "transparent" }}
        position="sticky"
      >
        <Toolbar>
          <IconButton>
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" className="header__logo">
            FareWell 2021
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
