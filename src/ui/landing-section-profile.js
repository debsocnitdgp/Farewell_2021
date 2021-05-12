import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import mahimadi1 from "../images/mahimadi1.png";
function LandingSectionProfile() {
  return (
    <div className="landing__section__root text-justify my-2">
      <Container>
        <Grid container justify="center" spacing={3} alignItems="center">
          <Grid item xs={12} sm={6}>
            <div className="landing__section__image__root">
              <img src={mahimadi1} alt="" className="landing__section__image" />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="landing__section__text">
              <Typography variant="h5">HI I AM</Typography>
              <Typography variant="h3" className="landing__section__name">
                MAHIMA KRITI
              </Typography>
              <hr />
              <Typography variant="body1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Delectus quaerat dolor voluptas cumque blanditiis quo doloremque
                dolorum aliquid nihil corrupti!
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default LandingSectionProfile;
