import React from "react";
import video from "./images/video.mov";
import Navbar from "./components/navbar";
import HomePage from "./home-page";
import "./styles/App.css";
import "./styles/gallery.scss";

import GallerySection from "./ui/gallery-section-profile";
import LandingSectionProfile from "./ui/landing-section-profile";
import AwardsSection from "./ui/awards-section-profile";
function App() {
  return (
    <>
      <video autoPlay loop>
        <source src={video} type="video/mp4" />
      </video>
      <Navbar />
      <LandingSectionProfile />
      <GallerySection />
      <AwardsSection />
      {/* <HomePage /> */}
    </>
  );
}

export default App;
