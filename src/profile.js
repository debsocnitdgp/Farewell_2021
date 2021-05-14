import React from "react";
//import GallerySection from "./ui/gallery-section-profile";
import LandingSectionProfile from "./ui/landing-section-profile";
import Ratings from "./ui/ratings-section-profile";
import AwardsSection from "./ui/awards-section-profile";
import ThankYouBoard from "./ui/thanku-board";
import Favourite from "./ui/favouriteplace-section-profile";
import GallerySection from "./ui/gallery";
import Navbar from "./components/navbar-profile";
import {useParams} from  "react-router-dom";
import { useState, useEffect, useCallback} from 'react';


function Profile() {
const { i } = useParams();
const url = `https://debsocfarwell.herokuapp.com/webapp/apireqseniori/${i}`;
  const [seniors, setSeniors] = useState([]);

  const getSeniors = useCallback(async () => {
    const response = await fetch(url);
    const seniors = await response.json();
    setSeniors(seniors);
  }, [url]);

  useEffect(() => {
    getSeniors();
  }, [url, getSeniors]);
 console.log(seniors);
  return (
    <div>
      <Navbar />
      <LandingSectionProfile seno={seniors.sname} pic={seniors.pic} desc={seniors.description}/>
      <GallerySection gall={seniors.gall}/>
      <Ratings/>
      <AwardsSection />
      <Favourite/>
      <ThankYouBoard />
    </div>
  );
}

export default Profile;
