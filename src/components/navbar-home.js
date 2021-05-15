import { AppBar, Container, Grid, Toolbar } from "@material-ui/core";
import React from "react";
import Logo from "../images/Header.png";
function Navbar() {
  return (
    <AppBar
      style={{ backgroundColor: "transparent" }}
      elevation={0}
      position="static"
    >
      <Toolbar>
        <Container>
          <Grid container justify="center" alignItems="center">
            <Grid item>
              <div className="headerhome">
                <img
                  src={Logo}
                  alt=""
                  style={{ height: "45px", width: "auto" }}
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
