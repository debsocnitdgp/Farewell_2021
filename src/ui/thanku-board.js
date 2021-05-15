import {
  Container,
  Grid,
  Typography,
  Icon,
  useMediaQuery,
} from "@material-ui/core";
import React from "react";
import ThankYouCard from "../components/thanku-card";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import { makeStyles, useTheme } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));
function ThankYouBoard(props) {
  const mes = props.messages;
  const classes = useStyles();
  const theme = useTheme();
  const xsUp = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <Container className="my-3 py-2 text-center">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} className="text-center">
            <Typography variant={xsUp ? "h2" : "subtitle1"}>
              Messages For You
            </Typography>
            <div className="line"></div>
          </Grid>
          <Grid item>
            <Icon style={{ color: "#0e0e25" }}>
              <FormatQuoteIcon className={classes.icon} />
            </Icon>
          </Grid>
        </Grid>
        <Carousel autoPlay showStatus={false} infiniteLoop>
          {mes?.map((people) => (
            <div className="slider my-2 py-3">
              <ThankYouCard mes={people} />
            </div>
          ))}
        </Carousel>
      </Container>
    </>
  );
}

export default ThankYouBoard;
