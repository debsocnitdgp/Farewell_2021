import React from "react";

import { Container, Grid, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

function GallerySection() {
  let data = [1, 2, 2, 2, 2, 2, 2];
  const theme = useTheme();
  const xsUp = useMediaQuery(theme.breakpoints.up("xs"));
  return (
    <>
      <Container>
        <Grid container justify="center" alignItems="center" spacing={2}>
          <Grid item xs={12} className="text-center">
            <Typography variant="h2">Gallery</Typography>
            <hr />
          </Grid>
          <Grid
            item
            container
            justify="flex-start"
            alignItems="flex-start"
            direction="column"
            xs={6}
            sm={3}
            spacing={xsUp ? 2 : 1}
          >
            {data.map((item, index) => {
              if (index < 3) {
                return (
                  <Grid item>
                    <img
                      src="https://source.unsplash.com/random"
                      className="gallery__image"
                      alt=""
                    />
                  </Grid>
                );
              }
              return "";
            })}
          </Grid>
          <Grid
            item
            container
            justify="flex-start"
            alignItems="flex-start"
            direction="column"
            xs={6}
            sm={3}
            spacing={2}
          >
            {data.map((item, index) => {
              if (index > 3) {
                return (
                  <Grid item>
                    <img
                      src="https://source.unsplash.com/random"
                      className="gallery__image"
                      alt=""
                    />
                  </Grid>
                );
              }
              return "";
            })}
          </Grid>
        </Grid>
        <div className="gallery__root"></div>
      </Container>
    </>
  );
}

export default GallerySection;
