import { Container, Grid, Typography, useMediaQuery } from "@material-ui/core";
import React from "react";
import { useTheme } from "@material-ui/styles";
import "../styles/favourite.css";
function FavSpot({ image }) {
  const theme = useTheme();
  const xsUp = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <Container>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} className="text-center">
            <Typography variant={xsUp ? "h2" : "subtitle1"}>
              Favourite Place
            </Typography>
            <div className="line"></div>
          </Grid>
          <Grid item xs={11}>
            <div className="main__container my-3">
              <div className="dark__overlay"></div>
              <img
                src="http://source.unsplash.com/random"
                alt="fav"
                className="fav__spot__image"
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              className="mx-2"
              style={{
                color: "#123456",
                textAlign: "center",
                // verticalAlign: "middle",
                margin: "1px auto",
                maxWidth: "600px",
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              expedita minus nostrum atque vitae reprehenderit ratione tempore
              veniam, dolore quidem? Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Nostrum, quasi?
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default FavSpot;
