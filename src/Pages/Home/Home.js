import React from "react";
import Banner from "./Banner";
import Blogs from "./Blogs";
import BusinessSummary from "./BusinessSummary";
import OruTrustedPartners from "./OruTrustedPartners";
import TrustedCFeedback from "./TrustedCFeedback";
import WhyChooseOBB from "./WhyChooseOBB";

const Home = () => {
  return (
    <div>
      <Banner />
      <WhyChooseOBB />
      <BusinessSummary />
      <Blogs/>
      <OruTrustedPartners/>
      <TrustedCFeedback/>
    </div>
  );
};

export default Home;
