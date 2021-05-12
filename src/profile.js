import React from "react";
import GallerySection from "./ui/gallery-section-profile";
import LandingSectionProfile from "./ui/landing-section-profile";
import AwardsSection from "./ui/awards-section-profile";
function Profile() {
  return (
    <div>
      <LandingSectionProfile />
      <GallerySection />
      <AwardsSection />
    </div>
  );
}

export default Profile;
