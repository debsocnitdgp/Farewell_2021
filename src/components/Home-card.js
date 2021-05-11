import React from "react";

const Card = (props) => {
  const { name, img } = props.people;
  console.log(props.people);
  console.log("high");

  return (
    <>
      <div className="card">
        <img className="Card-Image" src={img} alt="" />
         <h1>{name }</h1>
      </div>
    </>
  );
};

export default Card;
