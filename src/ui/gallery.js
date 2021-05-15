import React from "react";
import { Container, Grid, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
export default function Gallery(props) {
  const gal = props.gall;
  const theme = useTheme();
  const xsUp = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <Container className="my-4 ">
        <Grid container justify="center" alignItems="center" className="my-4">
          <Grid item xs={12} className="text-center">
            <Typography variant={xsUp ? "h2" : "button"}>
              Memories
              <div className="line"></div>
            </Typography>
          </Grid>
        </Grid>
        <photos>
          {gal?.map((people) => (
            <div className="hex-cell">
              <img
                src={`${process.env.REACT_APP_IMAGE_URL}${people.im}`}
                alt=""
              />
            </div>
          ))}
        </photos>
      </Container>
    </>
  );
}
