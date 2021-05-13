 import React from 'react';
 import "./ratings.css";
 import {CircularProgressbarWithChildren,buildStyles,CircularProgressbar} from "react-circular-progressbar";
 import VisibilitySensor from "react-visibility-sensor";
import { Container,Grid,Typography } from '@material-ui/core';

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
        <div className="rating1">

        <VisibilitySensor>
          {({ isVisible }) => {
            const percentage = isVisible ? 70 : 0;
            return (
              <CircularProgressbarWithChildren 
                value={percentage}
                text={`${percentage}%`}>
                 
                </CircularProgressbarWithChildren>
            );
          }}
        </VisibilitySensor>

        
 <h3>Sarcasm</h3>
</div>
        </Grid>
        <Grid item xs={12} sm={4}>
        <div className="rating2">
   <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 40 : 0;
              return (
                <CircularProgressbarWithChildren 
                  value={percentage}
                  text={`${percentage}%`}
                />
              );
            }}
          </VisibilitySensor>

  </div>
        </Grid>
        

        <Grid item xs={12} sm={4}>
        <div className="rating2">
   <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 20 : 0;
              return (
                <CircularProgressbarWithChildren 
                  value={percentage}
                  text={`${percentage}%`}
                />
              );
            }}
          </VisibilitySensor>
  </div>
        </Grid>

        <Grid item xs={12} sm={4}>
        <div className="rating2">
   <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 60 : 0;
              return (
                <CircularProgressbarWithChildren 
                  value={percentage}
                  text={`${percentage}%`}
                />
              );
            }}
          </VisibilitySensor>
  </div>
        </Grid>

        <Grid item xs={12} sm={4}>
        <div className="rating2">
   <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 80 : 0;
              return (
                <CircularProgressbarWithChildren 
                  value={percentage}
                  text={`${percentage}%`}
                />
              );
            }}
          </VisibilitySensor>
  </div>
        </Grid>

        <Grid item xs={12} sm={4}>
        <div className="rating2">
   <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 70 : 0;
              return (
                <CircularProgressbarWithChildren 
                  value={percentage}
                  text={`${percentage}%`}
                />
              );
            }}
          </VisibilitySensor>
  </div>
        </Grid>
      </Grid>
    </Grid>
  </Container>
  
  </>
)
}
export default Ratings;
