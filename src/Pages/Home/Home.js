import React from "react";
import Banner from "./Banner";
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
      <OruTrustedPartners/>
      <TrustedCFeedback/>
    </div>
  );
};

export default Home;
