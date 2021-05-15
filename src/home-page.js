import React from "react";
import Card from "./components/Home-card";

import Navbar from "./components/navbar-home";
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const url = "https://debsocfarwell.herokuapp.com/webapp/apireqseniorall/";
  const [seniors, setSeniors] = useState([]);

  const getSeniors = useCallback(async () => {
    const response = await fetch(url);
    const seniors = await response.json();
    setSeniors(seniors);
  }, [url]);

  useEffect(() => {
    getSeniors();
  }, [url, getSeniors]);

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

            <text x="50%" y="35%" textAnchor="middle">
              Welcome to
            </text>
            <text x="50%" y="65%" textAnchor="middle">
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
            <text x="50%" y="29%" textAnchor="middle">
              Welcome
            </text>
            <text x="50%" y="47%" textAnchor="middle">
              to
            </text>
            <text x="50%" y="65%" textAnchor="middle">
              Farewell
            </text>
            <text x="50%" y="83%" textAnchor="middle">
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

            <text x="50%" y="27.5%" textAnchor="middle">
              Welcome
            </text>
            <text x="50%" y="42.5%" textAnchor="middle">
              to
            </text>
            <text x="50%" y="57.5%" textAnchor="middle">
              Farewell
            </text>
            <text x="50%" y="72.5%" textAnchor="middle">
              2021
            </text>
          </svg>
        </div>
        <div className="guest">Our Honourable Guests</div>
        <div className="line"></div>
        <div className="home-cards">
          {seniors.map((people) => (
            <Link className="home-card" to={`/${people.name}`}>
              <Card people={people} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
