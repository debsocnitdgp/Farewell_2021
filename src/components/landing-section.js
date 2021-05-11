import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import person2 from "../images/person2.jpg";
function LandingSection() {
  return (
    <div className="landing__section">
      <div className="landing__section__text">
        <Typography variant="h5">Hi there! I am Mahima Kriti</Typography>
      </div>
      {/* <div className="landing__section__image__root">
        <img src={person2} alt="" className="landing__section__image" />
      </div> */}
    </div>
  );
}

export default LandingSection;
