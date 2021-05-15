import { AppBar, Grid, IconButton } from "@material-ui/core";
import React from "react";
import HomeIcon from "@material-ui/icons/Home";
function Navbar() {
  return (
    <AppBar
      className="navbar"
      style={{ backgroundColor: "transparent" }}
      elevation={0}
      position="static"
    >
      {/* <Toolbar  > */}
      {/* <Container> */}
      <Grid container>
        <Grid item xs={6} style={{ paddingLeft: "10px", marginTop: "7px" }}>
          <div className="header mx-1">Farewell 2021</div>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "right", paddingRight: "12px" }}>
          <IconButton className="px-0">
            <HomeIcon style={{ color: "#123456" }} />
          </IconButton>
        </Grid>
      </Grid>
      {/* </Container> */}
      {/* </Toolbar> */}
    </AppBar>
  );
}

export default Navbar;
