import React from "react";
import { Carousel } from "3d-react-carousal";
import { Container, Grid, Typography } from "@material-ui/core";
function GallerySection() {
  let slides = [
    <img
      src="https://picsum.photos/800/301/?random"
      className="gallery__image"
      alt="2"
    />,
    <img
      src="https://picsum.photos/800/302/?random"
      className="gallery__image"
      alt="3"
    />,
    <img
      src="https://picsum.photos/800/303/?random"
      className="gallery__image"
      alt="4"
    />,
    <img
      src="https://picsum.photos/800/304/?random"
      className="gallery__image"
      alt="5"
    />,
  ];
  return (
    <div className="my-4 py-2 text-center text-white">
      <Grid container justify="center" alignItems="center">
        <Container>
          <Grid item xs={12}>
            <Typography variant="h2">Engineering @ NIT DGP</Typography>
            <hr />
          </Grid>

          <Grid
            item
            container
            justify="flex-start"
            spacing={1}
            alignItems="center"
          >
            <Grid item xs={4} className="grid">
              <img
                src="https://picsum.photos/800/300/?random"
                className="gallery__image"
                alt="1"
              />
            </Grid>
            <Grid item xs={8}>
              <img
                src="https://picsum.photos/800/301/?random"
                className="gallery__image"
                alt="1"
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            justify="center"
            spacing={1}
            xs={12}
            alignItems="center"
          >
            <Grid item xs={6}>
              <img
                src="https://picsum.photos/800/302/?random"
                className="gallery__image"
                alt="1"
              />
            </Grid>
            <Grid item xs={6}>
              <img
                src="https://picsum.photos/800/303/?random"
                className="gallery__image"
                alt="1"
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={12}
            justify="center"
            spacing={1}
            alignItems="center"
          >
            <Grid item xs={6}>
              <img
                src="https://picsum.photos/800/304/?random"
                className="gallery__image"
                alt="1"
              />
            </Grid>
            <Grid item xs={4}>
              <img
                src="https://picsum.photos/800/301/?random"
                className="gallery__image"
                alt="1"
              />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
}

export default GallerySection;
