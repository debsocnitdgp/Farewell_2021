import {
  AppBar,
  Container,
  Grid,
  IconButton,
  Toolbar,
} from "@material-ui/core";
import React from "react";
import HomeIcon from "@material-ui/icons/Home";
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
              <div className="header">Farewell 2021</div>
            </Grid>
            <Grid item xs></Grid>
            <Grid item>
              <IconButton>
                <HomeIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
