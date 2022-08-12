import React from "react";
import NoticeFromBank from "../../Components/Components.Arif/NoticeFromBank/NoticeFromBank";
import BannerCarousel from "../../Components/Components.Masud/BannerCarousel";
import Banner from "./Banner";
import Blogs from "./Blogs";
import BusinessSummary from "./BusinessSummary";
import OruTrustedPartners from "./OruTrustedPartners";
import TrustedCFeedback from "./TrustedCFeedback";
import WhyChooseOBB from "./WhyChooseOBB";

const Home = () => {
  return (
    <div>
      <BannerCarousel></BannerCarousel>
      {/* <Banner /> */}
      <NoticeFromBank />
      <WhyChooseOBB />
      <BusinessSummary />
      <Blogs/>
      <OruTrustedPartners/>
      <TrustedCFeedback/>
    </div>
  );
};

export default Home;
