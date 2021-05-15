import { Grid, Typography, Container } from "@material-ui/core";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function RatingsCard(props) {
  const ra = props.percentage;

  return (
    <>
      <Container>
        <div className="ratings__card__root">
          <Grid container item justify="center" alignItems="cetner">
            <Grid item>
              <CircularProgressbar
                value={ra ? ra.rate * 10 : 0}
                text={ra ? `${ra.rate * 10}%` : "0%"}
                strokeWidth={10}
                styles={{
                  root: {
                    padding: "15px",
                    width: "100%",
                    maxWidth: "120px",
                  },
                  path: {
                    stroke: `${props.color}`,
                  },
                  "@global": {
                    "path:nth-of-type(1)": {
                      stroke: "#cf9fcf",
                    },
                    "path:nth-of-type(2)": {
                      stroke: "#f8f8f9",
                    },
                  },
                  text: {
                    fill: `${props.color}`,
                    fontFamily: "Raleway",
                    fontWeight: "600",
                    fontSize: "1.8rem",
                  },
                }}
              />
            </Grid>
            <Grid item xs></Grid>
            <Grid item xs container justify="center" alignItems="center">
              <Grid item>
                <div className="ratings__card__content text-right  py-2 px-3">
                  <Typography
                    variant="subtitle2"
                    style={{
                      fontWeight: "600",
                      fontSize: "1.5rem",
                    }}
                  >
                    {ra.name}
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
}

export default RatingsCard;
