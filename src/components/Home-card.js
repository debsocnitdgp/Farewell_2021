import React from "react";

const Card = (props) => {
  const { name, dp } = props.people;
  
  return (
    <>
      <div className="name">
        <h1
          className="home__name"
          // style={{ fontWeight: 400, fontSize: "1.25rem" }}
        >
          {name}
        </h1>
      </div>
      <div className="box">
        <img
          className="Card-Image"
          src={`${process.env.REACT_APP_IMAGE_URL}${dp}`}
          alt=""
        />
      </div>
    </>
  );
};

export default Card;
