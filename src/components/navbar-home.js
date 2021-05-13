import {
  AppBar,
  Container,
  Grid,
  Toolbar,
} from "@material-ui/core";
import React from "react";
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
              <div className="headerhome">Farewell 2021</div>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
