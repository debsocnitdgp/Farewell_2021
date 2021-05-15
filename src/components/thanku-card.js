import { Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import React from "react";

const ThankYouCard = (props) => {
  const mess = props.mes;
  console.log("this is mess from card", mess);
  const theme = useTheme();
  const xsUp = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div className="thanku__card__root ">
      <div className="thanku__content__root text-center">
        <Typography
          variant="subtitle2"
          style={{ fontSize: `${xsUp ? "1.55rem" : "1rem"}` }}
        >
          {mess.comment}
        </Typography>
        <Typography
          variant="subtitle2"
          style={{
            fontSize: `${xsUp ? "1.75rem" : "1.2rem"}`,
            fontWeight: "bold",
            marginTop: "12px",
          }}
        >
          - {mess.author}
        </Typography>
      </div>
    </div>
  );
};

export default ThankYouCard;
