import { createMuiTheme } from "@material-ui/core";

const Theme = createMuiTheme({
  typography: {
    //title
    body2: {
      fontFamily: "Cookie",
      fontWeight: 400,
      fontSize: "2.3rem",
      // background-color: #2a2a72;

      // textFillColor: "transparent",
    },
    //landing section text
    h5: {
      fontFamily: "Raleway",
      fontWeight: 400,
      // color: "#123456",
    },
    h3: {
      fontFamily: "Raleway",
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
      textTransform: "capitalize",
      color: "#123456",
    },
    button: {
      textTransform: "capitalize",
      fontFamily: "Raleway",
      fontWeight: 300,
      fontSize: "2.5rem",
      color: "#123456",
    },
    subtitle1: {
      textTransform: "capitalize",
      fontFamily: "Raleway",
      fontWeight: 300,
      fontSize: "2rem",
    },
    subtitle2: {
      fontSize: "1.1rem",
    },
    //cards
    h4: {
      fontFamily: "Poppins",
      fontWeight: 400,
    },
  },
});

export default Theme;
