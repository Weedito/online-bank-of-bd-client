import React from "react";
import NoticeFromBank from "../../Components/Components.Arif/NoticeFromBank/NoticeFromBank";
import Banner from "./Banner";
import Blogs from "./Blogs";
import BusinessSummary from "./BusinessSummary";
import GetLoan from "./GetLoan";
import OruTrustedPartners from "./OruTrustedPartners";
import TrustedCFeedback from "./TrustedCFeedback";
import WhyChooseOBB from "./WhyChooseOBB";
import WhyWaiting from "./WhyWaiting";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <NoticeFromBank />
      <WhyChooseOBB />
      <GetLoan/>
      <BusinessSummary />
      <WhyWaiting/>
      <Blogs/>
      <OruTrustedPartners/>
      <TrustedCFeedback/>
    </div>
  );
};

export default Home;
