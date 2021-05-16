import React from "react";
import video from "./images/video.mov";

import "./styles/home.css";
import "./styles/App.css";
import "./styles/gallery.css";
// import "./styles/gallery.scss";

import ReactRouterSetup from "./components/Router";
function App() {
  const vid =
    "https://static.videezy.com/system/resources/previews/000/052/185/original/4K-8.mp4";
  return (
    <>
      <video autoPlay="autoplay" loop="loop" muted>
        <source src={vid} type="video/mp4" />
        <source src={vid} type="video/ogg" />
      </video>
      {/* <HomePage /> */}
      <ReactRouterSetup />
    </>
  );
}

export default App;
