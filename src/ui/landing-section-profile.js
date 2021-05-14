import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
// import mahimadi1 from "../images/mahimadi1.png";
function LandingSectionProfile(props) {
  const sname = props.seno;
  const pix = props.pic;
  const des=props.desc;

  return (
    <div className="landing__section__root text-justify my-2">
      <Container>
        <Grid container justify="center" spacing={3} alignItems="center">
          <Grid item xs={12} sm={6}>
            <div className="landing__section__image__root">
              <img src={`http://res.cloudinary.com/paulserver/${pix}`} alt="" className="landing__section__image" />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="landing__section__text">
              <Typography variant="h5">HELLO</Typography>
              <Typography variant="h3" className="landing__section__name">
                {sname}
              </Typography>
              <Typography style={{ fontWeight: "600" }}>
                {des}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default LandingSectionProfile;
