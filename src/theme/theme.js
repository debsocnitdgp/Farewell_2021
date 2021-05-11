import React, { Component } from "react";

import { createMuiTheme } from "@material-ui/core";

const Theme = createMuiTheme({
  typography: {
    //landing section text
    h5: {
      fontFamily: "Poppins",
      fontWeight: 300,
    },
  },
});

export default Theme;
