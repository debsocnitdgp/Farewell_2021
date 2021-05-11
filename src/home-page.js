import React from "react";
import Card from "./components/Home-card";
import { persons } from "./components/People-data";

const HomePage = () => {
  return (
    <>
      <div className="Homepage">
        <h1>Welcome to the Farewell 2021</h1>
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
