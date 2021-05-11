import React from "react";
import Card from "./components/Home-card";
import { persons } from "./components/People-data";

const HomePage = () => {
  return (
    <>
      <div className="Homepage">
        {/* <div className="Home">
          <h1>
            Welcome to <br /> Farewell 2021
          </h1>
        </div> */}
        <div className="patterns">
          <svg width="100%" height="100%">
            <defs>
              <style>
                @import url("https://fonts.googleapis.com/css?
                family=Lora:400,400i,700,700i");
              </style>
            </defs>

            <text x="50%" y="40%" text-anchor="middle">
              Welcome to
            </text>
            <text x="50%" y="60%" text-anchor="middle">
              Fairwell 2021
            </text>
          </svg>
        </div>
        <div className="Cards">
          {persons.map((people) => (
            <Card people={people} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
