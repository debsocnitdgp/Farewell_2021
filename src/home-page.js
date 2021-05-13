import React from "react";
import Card from "./components/Home-card";
import { persons } from "./components/People-data";
import Navbar from "./components/navbar-home";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="Homepage">
        {/* <div className="Home">
          <h1>
            Welcome to <br /> Farewell 2021
          </h1>
        </div> */}
        <div className="patterns-l">
          <svg width="100%" height="100%">
            <defs>
              {/* <style>
                @import url("https://fonts.googleapis.com/css?
                family=Lora:400,400i,700,700i");
              </style> */}
            </defs>

            <text x="50%" y="35%" text-anchor="middle">
              Welcome to
            </text>
            <text x="50%" y="65%" text-anchor="middle">
              Farewell 2021
            </text>
          </svg>
        </div>
        <div className="patterns-m">
          <svg width="100%" height="100%">
            <defs>
              {/* <style>
                @import url("https://fonts.googleapis.com/css?
                family=Lora:400,400i,700,700i");
              </style> */}
            </defs>
            <text x="50%" y="29%" text-anchor="middle">
              Welcome
            </text>
            <text x="50%" y="47%" text-anchor="middle">
              to
            </text>
            <text x="50%" y="65%" text-anchor="middle">
              Farewell
            </text>
            <text x="50%" y="83%" text-anchor="middle">
              2021
            </text>
          </svg>
        </div>
        <div className="patterns-s">
          <svg width="100%" height="100%">
            <defs>
              {/* <style>
                @import url("https://fonts.googleapis.com/css?
                family=Lora:400,400i,700,700i");
              </style> */}
            </defs>

            <text x="50%" y="27.5%" text-anchor="middle">
              Welcome
            </text>
            <text x="50%" y="42.5%" text-anchor="middle">
              to
            </text>
            <text x="50%" y="57.5%" text-anchor="middle">
              Farewell
            </text>
            <text x="50%" y="72.5%" text-anchor="middle">
              2021
            </text>
          </svg>
        </div>
        <div className="guest">Our Honourable Guests</div>
        <div className="line"></div>
        <div className="home-cards">
          {persons.map((people) => (
            <Card people={people} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
