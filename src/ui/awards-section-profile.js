import { Container, Grid, Typography, useMediaQuery } from "@material-ui/core";
import React from "react";
import AwardsCard from "../components/awards-section-card";
import { useTheme } from "@material-ui/styles";
function AwardsSection(props) {
  const awa = props.award;
  console.log(awa);
  const theme = useTheme();
  const xsUp = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <Container className="text-center my-4 py-4">
        <Grid container justify="center" alignItems="center" spacing={2}>
          <Grid item xs={12} className="text-center">
            <Typography variant={xsUp ? "h2" : "button"}>
              Awards
              <div className="line"></div>
            </Typography>
          </Grid>
          <Grid
            item
            container
            justify="center" //flex-start,flex-end
            alignItems="center"
            spacing={3}
          >
            {awa?(awa.map((people) => (<Grid item xs={10} sm={4}>
              <AwardsCard people={people} />
            </Grid>))) : (<> </>)}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AwardsSection;
