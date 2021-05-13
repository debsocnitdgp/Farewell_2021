import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import AwardsCard from "../components/awards-section-card";

function AwardsSection() {
  return (
    <>
      <Container>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} className="text-center">
            <Typography variant="h2">Awards</Typography>
          </Grid>
          <hr style={{ border: "1px solid black" }} />
          <Grid
            item
            container
            justify="center" //flex-start,flex-end
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={12} sm={4}>
              <AwardsCard />
            </Grid>
            <Grid item xs={12} sm={4}>
              <AwardsCard />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AwardsSection;
