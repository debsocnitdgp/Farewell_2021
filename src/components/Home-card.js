import React from "react";

const Card = (props) => {
  const { id, name, dp } = props.people;
  console.log(props.people);
  console.log("high");

  return (
    <>
      <div className="home-card">
        <div className="name">
          <h1>{name}</h1>
        </div>
        <div className="box">
          <img className="Card-Image" src= {`http://res.cloudinary.com/paulserver/${dp}`} alt="" />
        </div>
      </div>
    </>
  );
};

export default Card;
