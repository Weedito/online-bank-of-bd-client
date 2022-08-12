import React from 'react';
import { TrustedPartnersData } from '../../Components/Components.Nahid/Data';

const OruTrustedPartners = () => {
  return (
    <div className="flex justify-center items-center bg-slate-100 flex-col ">
      <div className="title">
        {/* <h2 className="section-title text-center font-semibold text-2xl md:text-4xl lg:text-6xl ">
          Our Trusted <span className="text-green-700">Partners</span>
        </h2> */}
      </div>
      <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* partner summary  */}
        {
          TrustedPartnersData.map((item, idx) => {
            return (
              <img className='p-10 opacity-50 w-60' key={idx} src={item?.imageURL} alt="partners" />
            )
          })
        }

      </div>
    </div>
  );
};

export default OruTrustedPartners;