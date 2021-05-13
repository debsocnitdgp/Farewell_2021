import React from "react";
import GallerySection from "./ui/gallery-section-profile";
import LandingSectionProfile from "./ui/landing-section-profile";
import AwardsSection from "./ui/awards-section-profile";
import ThankYouBoard from "./ui/thanku-board";
function Profile() {
  return (
    <div>
      <LandingSectionProfile />
      {/* <GallerySection /> */}

      <AwardsSection />
      <ThankYouBoard />
    </div>
  );
}

export default Profile;
