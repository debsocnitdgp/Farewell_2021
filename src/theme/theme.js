import React, { Component } from "react";

import { createMuiTheme } from "@material-ui/core";

const Theme = createMuiTheme({
  typography: {
    //title
    body2: {
      fontFamily: ["Cookie", "cursive"].join(","),
      fontWeight: 400,
      fontSize: "2.3rem",
    },
    //landing section text
    h5: {
      fontFamily: "Poppins",
      fontWeight: 300,
    },
    h3: {
      fontFamily: "Poppins",
      fontWeight: 500,
    },
    body1: {
      fontFamily: "Raleway",
      fontWeight: 300,
    },
    // sectin headers
    h2: {
      fontFamily: "Raleway",
      fontWeight: 300,
    },
    //cards
    h4: {
      fontFamily: "Poppins",
      fontWeight: 400,
    },
  },
});

export default Theme;
