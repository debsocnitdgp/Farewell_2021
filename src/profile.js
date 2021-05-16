import React from "react";
//import GallerySection from "./ui/gallery-section-profile";
import LandingSectionProfile from "./ui/landing-section-profile";
import Ratings from "./ui/ratings-section-profile";
import AwardsSection from "./ui/awards-section-profile";
import ThankYouBoard from "./ui/thanku-board";
import Loader from "./components/Loader";
import GallerySection from "./ui/gallery";
import Navbar from "./components/navbar-profile";
import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import FavSpot from "./ui/fav-spot-section";
import Footer from "./components/footer";

function Profile() {
  const { i } = useParams();
  const url = `${process.env.REACT_APP_BACKEND_URL}apireqseniori/${i}`;
  const [seniors, setSeniors] = useState([]);
  const [loading, setLoading] = useState(true);

  const getSeniors = useCallback(async () => {
    const response = await fetch(url);
    const seniors = await response.json();
    setSeniors(seniors);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getSeniors();
  }, [url, getSeniors]);


  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <LandingSectionProfile
            seno={seniors.sname}
            pic={seniors.pic}
            desc={seniors.description}
          />
          <GallerySection gall={seniors.gall} />
          <AwardsSection award={seniors.award} />
          <Ratings rat={seniors.rat} />
          <FavSpot place={seniors.favplace} />
          <ThankYouBoard messages={seniors.message} />
          <Footer />
        </div>
      )}
    </>
  );
}

export default Profile;
