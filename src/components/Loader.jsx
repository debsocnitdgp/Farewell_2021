import React from "react";
import logo from "../images/DEBSOClogo.png";

const Loader = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <img src={logo} alt="" style={{ height: "100px", width: "auto" }} />
      </div>
    </>
  );
};

export default Loader;
