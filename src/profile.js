import React from "react";
//import GallerySection from "./ui/gallery-section-profile";
import LandingSectionProfile from "./ui/landing-section-profile";
import AwardsSection from "./ui/awards-section-profile";
import ThankYouBoard from "./ui/thanku-board";
import GallerySection from "./ui/gallery";
import Navbar from "./components/navbar-profile";

function Profile() {
  return (
    <div>
      <Navbar />
      <LandingSectionProfile />
      <GallerySection />
      <AwardsSection />
      <ThankYouBoard />
    </div>
  );
}

export default Profile;
