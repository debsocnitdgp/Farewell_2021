import React from 'react';
import "./favourite.css";
import {Container,Grid,Typography } from '@material-ui/core';

 const Favourite = () => {
    return (
        
            <Container>
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} className="text-center">
        <Typography variant="h2">Favourite Place</Typography>
      </Grid>
      <div className="line"></div>
        <div className="favourite-image">
         <div className="favourite-overlay"></div>
        <div className="favourite-text">
        <Typography variant="h2">JHOOPS</Typography>
        </div>
        </div>
        


</Grid>
</Container>

       
    )
}

export default Favourite;