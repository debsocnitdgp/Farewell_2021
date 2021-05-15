import { Grid, Typography, Container } from "@material-ui/core";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function RatingsCard(props) {
  const ra = props.percentage;
  console.log(ra);

  return (
    <>
      <Container>
        <div className="ratings__card__root">
          <Grid container item justify="center" alignItems="cetner">
            <Grid item>
              <CircularProgressbar
                value={ra.rate * 10}
                text={`${ra.rate * 10}%`}
                strokeWidth={8}
                styles={{
                  root: {
                    padding: "15px",
                    width: "100%",
                    maxWidth: "120px",
                  },
                  path: {
                    stroke: "#123456",
                  },
                  text: {
                    fill: "#123456",
                    fontFamily: "Raleway",
                    fontWeight: "400",
                    fontSize: "1.5rem",
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
                    style={{ fontWeight: "600", fontSize: "1.5rem" }}
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
