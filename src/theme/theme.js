import React, { Component } from "react";

import { createMuiTheme } from "@material-ui/core";

const Theme = createMuiTheme({
  typography: {
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
  },
});

export default Theme;
