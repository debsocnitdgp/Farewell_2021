import { Typography } from "@material-ui/core";
import React from "react";

function ThankYouCard(props) {
  const mess=props.mes;
  return (
    <div className="thanku__card__root mb-5 pb-1 px-2">
      <div className="thanku__content__root text-center">
        <Typography variant="subtitle2">
          {mess.comment}
        </Typography>
        <Typography variant="subtitle2" style={{fontWeight: "bold", marginTop:"12px"}}>
           - {mess.author}
        </Typography>
      </div>
    </div>
  );
}

export default ThankYouCard;
