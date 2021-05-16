import { Container, Grid, Typography, useMediaQuery } from "@material-ui/core";
import React from "react";

import { useTheme } from "@material-ui/styles";

function LandingSectionProfile(props) {
  const sname = props.seno;
  const pix = props.pic;
  const des = props.desc;
  const theme = useTheme();
  const xsUp = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div className="landing__section__root  my-2">
      <Container>
        <Grid container justify="center" spacing={3} alignItems="center">
          <Grid item xs={12} sm={6}>
            <div className="landing__section__image__root">
              <img
                src={`${process.env.REACT_APP_IMAGE_URL}${pix}`}
                alt=""
                className="landing__section__image"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div
              className={`landing__section__text ${
                xsUp ? "text-left" : "text-center"
              } `}
            >
              <Typography
                variant="h4"
                style={{
                  fontFamily: "Balsamiq Sans",
                  fontWeight: 500,
                  fontSize: "2.5rem",
                }}
              >
                Hello!
              </Typography>
              <Typography
                variant="body2"
                style={{
                  fontWeight: 400,
                  fontSize: "4rem",
                  lineHeight: "70px",
                  fontFamily: "Parisienne",
                  padding: "5px",
                }}
                className="landing__section__name"
              >
                {sname}
              </Typography>
              <hr style={{ border: "1px solid #123456" }} />
              <Typography
                style={{
                  fontWeight: "600",
                  marginTop: "13px",
                  fontSize: "1.5rem",
                  fontFamily: "Handlee",
                  letterSpacing: "1px",
                }}
              >
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
