import { Card, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import cup from "../images/cup.png";
function AwardsCard() {
  return (
    <div className="awards__root">
      <Container>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={4}>
            <img src={cup} className="awards__image" />
          </Grid>
          <Grid item xs>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, dolor.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AwardsCard;
