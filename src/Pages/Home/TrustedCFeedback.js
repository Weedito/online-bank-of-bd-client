import React from 'react';
import { TrustedCFeedbackData } from '../../Components/Components.Nahid/Data';

const TrustedCFeedback = () => {
    return (
        <div className="flex justify-center items-center bg-base-100 flex-col py-20  px-2">
          <div className="title">
            <h2 className="section-title text-center font-semibold text-2xl md:text-4xl lg:text-6xl ">
              Trusted Customers <span className="text-green-700">Feedback</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 items-center justify-center p-10 md:grid-cols-2 mt-12 gap-8">
            {/* partner summary  */}
             {
                TrustedCFeedbackData.map((item, idx) => {
                    return(
                        <div key={idx} className="flex flex-col md:flex-row justify-center items-center">
                            <div className="w-2/5 mx-auto">
                                <img src={item?.imageURL} alt="Customrs" className="object-cover w-32 h-32 rounded-full mx-auto" />
                            </div>
                            <div className="w-3/5 text-center md:text-left">
                                <h2 className="text-2xl font-semibold text-gray-700">{item?.name}</h2>
                                <p className="py-3">{item?.desc}</p>
                                <img src={item?.stars} alt="stars" className="object-cover w-32 mx-auto md:mx-0" />
                            </div>
                        </div>
                    )
                })
             }
            
          </div>
        </div>
      );
};

export default TrustedCFeedback;