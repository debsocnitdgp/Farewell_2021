import { Container, Grid, Typography, Icon } from "@material-ui/core";
import React from "react";
import ThankYouCard from "../components/thanku-card";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));
function ThankYouBoard() {
  const classes = useStyles();

  return (
    <>
      <Container className="my-4">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} className="text-center">
            <Typography variant="h2">Achievements</Typography>
            <hr style={{ border: "1px solid black" }} />
          </Grid>
          <Grid item>
            <Icon style={{ color: "#0e0e25" }}>
              <FormatQuoteIcon className={classes.icon} />
            </Icon>
          </Grid>
        </Grid>
        <Carousel autoPlay showStatus={false} infiniteLoop>
          <div className="slider my-2 py-3">
            <ThankYouCard />
          </div>
          <div className="slider my-2 py-3">
            <ThankYouCard />
          </div>
          <div className="slider my-2 py-3">
            <ThankYouCard />
          </div>
          <div className="slider my-2 py-3">
            <ThankYouCard />
          </div>
          <div className="slider my-2 py-3">
            <ThankYouCard />
          </div>
        </Carousel>
      </Container>
    </>
  );
}

export default ThankYouBoard;
