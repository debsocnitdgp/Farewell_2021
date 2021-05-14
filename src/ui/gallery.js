import React from "react";
import { Container, Grid, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
export default function Gallery() {
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
          <div className="hex-cell">
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=650&amp;fm=jpg"
              alt=""
            />
          </div>
          <div className="hex-cell">
            <img
              src="https://images.unsplash.com/photo-1497733942558-e74c87ef89db?w=650&amp;fm=jpg"
              alt=""
            />
          </div>
          <div className="hex-cell">
            <img
              src="https://images.unsplash.com/photo-1540744276164-9dc898353c7b?w=650&amp;fm=jpg"
              alt=""
            />
          </div>
          <div className="hex-cell">
            <img
              src="https://images.unsplash.com/photo-1469975692758-66d107a536cb?w=650&amp;fm=jpg"
              alt=""
            />
          </div>
          <div className="hex-cell">
            <img
              src="https://images.unsplash.com/photo-1490845060161-85f9ce08a9f4?w=650&amp;fm=jpg"
              alt=""
            />
          </div>
          <div className="hex-cell">
            <img
              src="https://images.unsplash.com/photo-1541673504494-8bcc1a340180?w=650&amp;fm=jpg"
              alt=""
            />
          </div>
          <div className="hex-cell">
            <img
              src="https://images.unsplash.com/photo-1515937350506-3e7b51a95339?w=650&amp;fm=jpg"
              alt=""
            />
          </div>
        </photos>
      </Container>
    </>
  );
}
