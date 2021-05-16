import {
  Container,
  Grid,
  Typography,
  Icon,
  useMediaQuery,
} from "@material-ui/core";
import React from "react";
import ThankYouCard from "../components/thanku-card";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import { makeStyles, useTheme } from "@material-ui/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
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
  console.log("this is message from thnku board", mes);
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

        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={5}
          infinite={true}
        >
          <Slider>
            {mes.map((item, index) => {
              console.log("this si from if", item);
              return (
                <Slide index={index}>
                  <div className="slider">
                    <ThankYouCard
                      mes={item}
                      key={new Date().getTime().toString()}
                    />
                  </div>
                </Slide>
              );
            })}
          </Slider>

          <ButtonBack>
            <ChevronLeftIcon style={{ fontSize: "1.8rem" }} />
          </ButtonBack>
          <ButtonNext>
            <ChevronRightIcon style={{ fontSize: "1.8rem" }} />
          </ButtonNext>
        </CarouselProvider>
      </Container>
    </>
  );
}

export default ThankYouBoard;
