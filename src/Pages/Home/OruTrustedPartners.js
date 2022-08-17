import React from 'react';
import { TrustedPartnersData } from '../../Components/Components.Nahid/Data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OruTrustedPartners = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  return (
    <div className="flex justify-center items-center w-full mx-auto bg-slate-200 ">
      <div className="w-full max-w-7xl mx-auto">
        <Slider className='' {...settings}>
          {
            TrustedPartnersData.map((item, idx) => {
              return (

                <div className="py-10 h-40 flex justify-center items-center gap-5">
                  <img className='w-40 md:w-52 flex justify-center items-center h-30 py-5 px-7' key={idx} src={item?.imageURL} alt="partners" />
                </div>

              )
            })
          }
        </Slider>

      </div>
    </div>
  );
};

export default OruTrustedPartners;