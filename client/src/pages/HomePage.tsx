import React from "react";
import "../styles/Home.css";

import HomeLogo from "../components/HomeLogo";
import HomeSearchBar from "../components/HomeSearchBar";
import HomeCommunityBest from "../components/HomeCommunityBest";

function HomePage() {
  return (
    <>
      <HomeLogo />
      <HomeSearchBar />
      <HomeCommunityBest />
    </>
  );
}

export default HomePage;
