import React from "react";
import video from "./images/video.mov";
import Navbar from "./components/navbar";
import HomePage from "./home-page";
import "./styles/App.css";
// import "./styles/gallery.scss";

import Footer from "./components/footer";
import ReactRouterSetup from "./components/Router";
function App() {
  return (
    <>
      <video autoPlay loop>
        <source src={video} type="video/mp4" />
      </video>
      <Navbar />

      {/* <HomePage /> */}
      <ReactRouterSetup />
      <Footer />
    </>
  );
}

export default App;
