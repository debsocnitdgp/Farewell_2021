import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import React from "react";
import { useTheme } from "@material-ui/styles";
function AwardsCard(props) {
  const awa = props.people;
  const theme = useTheme();
  const xsUp = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div className="awards__root text-white">
      <Grid container justify="flex-start" alignItems="center">
        <Grid item xs={6}>
          <img
            src={`${process.env.REACT_APP_IMAGE_URL}${awa.pict}`}
            alt=""
            className="awards__image"
          />
        </Grid>
        {/* <Grid item xs></Grid> */}
        <Grid item xs>
          <Typography
            style={{
              color: "#123456",
              textAlign: "right",
              fontWeight: "bolder",
              fontSize: xsUp ? "1.4rem" : "0.8rem",
              textTransform: "uppercase",
            }}
          >
            {awa.myaward}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default AwardsCard;
