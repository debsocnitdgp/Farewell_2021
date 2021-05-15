import React from "react";
import video from "./images/video.mov";

import "./styles/home.css";
import "./styles/App.css";
import "./styles/gallery.css";
// import "./styles/gallery.scss";


import ReactRouterSetup from "./components/Router";
function App() {
  return (
    <>
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      {/* <HomePage /> */}
      <ReactRouterSetup />
     
    </>
  );
}

export default App;
