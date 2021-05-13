import { Grid, Typography } from "@material-ui/core";
import React from "react";
import cup from "../images/cup.png";
function AwardsCard() {
  return (
    <div className="awards__root text-white">
      <Grid container justify="flex-start" alignItems="center">
        <Grid item xs={4}>
          <img src={cup} alt="" className="awards__image" />
        </Grid>
        <Grid item xs></Grid>
        <Grid item xs={7}>
          <Typography
            style={{
              color: "#123456",
              textAlign: "right",
              fontWeight: "bolder",
              fontSize: "1rem",
              textTransform: "uppercase",
            }}
          >
            The vast vocabulary award
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default AwardsCard;
