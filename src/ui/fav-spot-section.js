import { Container, Grid, Typography, useMediaQuery } from "@material-ui/core";
import React from "react";
import { useTheme } from "@material-ui/styles";
import "../styles/favourite.css";
function FavSpot(props) {
  const fav = props.place;
  const theme = useTheme();
  const xsUp = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <Container>
        {fav?.map((people) => (
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
                src={`http://res.cloudinary.com/paulserver/${people.imag}`}
                alt="fav"
                className="fav__spot__image"
              />
            </div>
          </Grid>
           <Grid item xs={12} className="text-center">
            <Typography
              variant="h5"
              className="mx-2"
              style={{
                color: "#123456",
                textAlign: "center",
                // verticalAlign: "middle",
                margin: "1px auto",
                fontWeight: "700",
              }}
            >
             {people.place}
            </Typography>
          </Grid>
          <Grid item xs={12} className="text-center"  style={{
                display: "flex",
                alignItems:"center",
                justifyContent:"center",
              }}>
            <Typography
              variant="h6"
              className="mx-2 py-3"
              style={{
                color: "#123456",
                textAlign: "center",
                // verticalAlign: "middle",
                margin: "1px auto",
                maxWidth: "1000px",
              }}
            >
             {people.description}
            </Typography>
          </Grid>
        </Grid>
          ))}
      </Container>
    </>
  );
}

export default FavSpot;
