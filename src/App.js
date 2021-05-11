import React from "react";
import video from "./images/video.mov";
import Navbar from "./components/navbar";
import "./styles/App.css";
import GallerySection from "./ui/gallery-section-profile";
import LandingSectionProfile from "./ui/landing-section-profile";
function App() {
  return (
    <>
      <video autoPlay loop>
        <source src={video} type="video/mp4" />
      </video>
      <Navbar />
      <LandingSectionProfile />
      <GallerySection />
    </>
  );
}

export default App;
