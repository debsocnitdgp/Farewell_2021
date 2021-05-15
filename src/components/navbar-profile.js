import { AppBar, Grid, IconButton, } from "@material-ui/core";
import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import Logo from "../images/Header.png";
import { Link } from "react-router-dom";
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
          <Grid item xs={9} style={{paddingLeft: "15px", marginTop: "7px"}}>
            <div className="header mx-1"> <img
                  src={Logo}
                  alt=""
                  style={{ height: "45px", width: "auto" }}
                /></div>
          </Grid>
          <Grid item xs={3} style={{textAlign:"right", paddingRight: "2px"}}>
            <IconButton >
              <Link to ="/">
              <HomeIcon style={{ color: "#123456" , fontSize:"30px", paddingBottom:"5px"}}/>
              </Link>
            </IconButton>
          </Grid>
      </Grid>
      {/* </Container> */}
      {/* </Toolbar> */}
    </AppBar>
  );
}

export default Navbar;
