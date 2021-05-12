import { Grid } from "@material-ui/core";
import React from "react";

function GalleryCards({ image, content, size }) {
  return (
    <div>
      <Grid item xs={size}>
        <div className="gallery__image__root">
          <img src={image} alt="idk" className="gallery__image" />
        </div>
      </Grid>
    </div>
  );
}

export default GalleryCards;
