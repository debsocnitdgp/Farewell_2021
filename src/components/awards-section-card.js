import { Grid, Typography } from "@material-ui/core";
import React from "react";
import cup from "../images/cup.png";
function AwardsCard() {
  return (
    <div className="awards__root text-white">
      <Grid container justify="flex-start" alignItems="center">
        <Grid item xs={6}>
          <img src={cup} alt="" className="awards__image" />
        </Grid>
        <Grid item xs={6}>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor omnis
            eos perspiciatis
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default AwardsCard;
