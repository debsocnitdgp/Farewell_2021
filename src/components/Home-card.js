import React from "react";

const Card = (props) => {
  const { name, img } = props.people;
  console.log(props.people);
  console.log("high");

  return (
    <>
      <div className="card">
        <div className="name">
          <h1>{name}</h1>
        </div>
        <div className="box">
          <img className="Card-Image" src={img} alt="" />
        </div>
      </div>
    </>
  );
};

export default Card;
