import React from "react";
import "../styles/ratings.css";

import VisibilitySensor from "react-visibility-sensor";
import { Container, Grid, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import RatingsCard from "../components/ratings-card";

const Ratings = (props) => {
  let coloraArray = ["#f00", "#118f11", "#00f", "#911eba", "#f06", "#25b28f"];
  const rat = props.rat;
  const theme = useTheme();
  const xsUp = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <Container>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} className="text-center">
            <Typography variant={xsUp ? "h2" : "button"}>
              Ratings
              <div className="line"></div>
            </Typography>
          </Grid>
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            spacing={2}
            className="py-2 my-4 ratings__seection__cards"
          >
            {rat?.map((people, index) => (
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <VisibilitySensor>
                  {({ isVisible }) =>
                    isVisible ? (
                      <RatingsCard
                        percentage={people}
                        color={coloraArray[index]}
                      />
                    ) : (
                      <RatingsCard percentage={0} color={coloraArray[index]} />
                    )
                  }
                </VisibilitySensor>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Ratings;
