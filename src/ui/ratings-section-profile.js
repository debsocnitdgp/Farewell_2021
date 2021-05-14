import React from "react";
import "../styles/ratings.css";

import VisibilitySensor from "react-visibility-sensor";
import { Container, Grid, Typography } from "@material-ui/core";
import RatingsCard from "../components/ratings-card";

const Ratings = () => {
  return (
    <>
      <Container>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} className="text-center">
            <Typography variant="h2">Ratings</Typography>
          </Grid>
          <div className="line"></div>
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            spacing={2}
            className="py-2 my-4"
          >
            <Grid item xs={12} sm={4}>
              <VisibilitySensor>
                {({ isVisible }) =>
                  isVisible ? (
                    <RatingsCard percentage={60} />
                  ) : (
                    <RatingsCard percentage={0} />
                  )
                }
              </VisibilitySensor>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Ratings;
