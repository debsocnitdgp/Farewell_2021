import { Container, Grid, Typography, useMediaQuery } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";

import { useTheme } from "@material-ui/styles";
// import mahimadi1 from "../images/mahimadi1.png";
function LandingSectionProfile(props) {
  const { i } = useParams();
  console.log("this is ", i);
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
                  fontFamily: "Dancing Script",
                  fontWeight: 700,
                  fontSize: "2.5rem",
                }}
              >
                Hello
              </Typography>
              <Typography
                variant="body2"
                style={{
                  fontFamily: i == "Sneha Singh" ? "Cookie" : "Dancing Script",
                  fontWeight: 400,
                  fontSize: "3.5rem",
                }}
                className="landing__section__name"
              >
                {sname}
                <hr style={{ border: "1px solid #123456" }} />
              </Typography>
              <Typography
                style={{
                  fontWeight: "300",
                  // marginTop: "13px",
                  fontSize: "1.25rem",
                  fontFamily: "Poppins",
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
