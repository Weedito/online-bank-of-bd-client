import React from "react";
import NoticeFromBank from "../../Components/Components.Arif/NoticeFromBank/NoticeFromBank";
import BannerCarousel from "../../Components/Components.Masud/BannerCarousel";
import PageTitle from "../PageTitle/PageTitle";
import Blogs from "./Blogs";
import BusinessSummary from "./BusinessSummary";
import GetLoan from "./GetLoan";
import HomeTopCarousel from "./HomeTopCarousel";
import OruTrustedPartners from "./OruTrustedPartners";
import OurFeatures from "./OurFeatures";
import TrustedCFeedback from "./TrustedCFeedback";
import WhyChooseOBB from "./WhyChooseOBB";
import WhyWaiting from "./WhyWaiting";

const Home = () => {
  return (

    <div className="">
      {/* title */}

      <PageTitle title="Home"></PageTitle>

      {/* end */}

      <HomeTopCarousel />
      <OruTrustedPartners />
      <OurFeatures />
      <NoticeFromBank />
      <WhyChooseOBB />
      <GetLoan />
      <BusinessSummary />
      <WhyWaiting />
      <TrustedCFeedback />
      <Blogs />
    </div>
  );
};

export default Home;
