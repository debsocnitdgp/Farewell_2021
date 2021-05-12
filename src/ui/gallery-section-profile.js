import React from "react";
import { Carousel } from "3d-react-carousal";
import { Container, Grid, Typography } from "@material-ui/core";
function GallerySection() {
  return (
    // <div className="my-4 py-2 text-center text-white">
    //   <Grid container justify="center" alignItems="center">
    //     <Grid item xs={12}>
    //       <Typography variant="h2">Engineering @ NIT DGP</Typography>
    //       <hr />
    //     </Grid>
    //     <Grid item>

    //     </Grid>
    //   </Grid>
    // </div>
    <div className="container">
      <div className="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Cat_plotting_something_evil%21.jpg" />
        <div className="card__head">Plotting Cat</div>
      </div>
      <div className="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/False_alarm_-a.jpg/1280px-False_alarm_-a.jpg" />
        <div className="card__head">Angry Cat</div>
      </div>
      <div className="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Neugierige-Katze.JPG/1280px-Neugierige-Katze.JPG" />
        <div className="card__head">Curious Cat</div>
      </div>
      <div className="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Al_acecho_%289272124788%29.jpg/1280px-Al_acecho_%289272124788%29.jpg" />
        <div className="card__head">Prowling Cat</div>
      </div>
      <div className="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Mimi%26Tigsi.jpg/1280px-Mimi%26Tigsi.jpg" />
        <div className="card__head">Sleepy Cat</div>
      </div>
    </div>
  );
}

export default GallerySection;
