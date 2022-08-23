import React from 'react';
import { OurFeaturesData } from '../../Components/Components.Nahid/Data';

const OurFeatures = () => {
    return (
        <div className="flex justify-center items-center flex-col py-32  px-2 max-w-7xl mx-auto">
            <div className="title">
                <h2 className=" mb-14 section-title text-center font-semibold text-2xl md:text-4xl lg:text-6xl ">
                    Our <span className="text-green-700">Features</span>
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 w-full mx-auto gap-20 px-10">
                {/* partner summary  */}
                {
                    OurFeaturesData.map((data, idx) => {
                        return(
                            <div className="shadow-md mx-auto cursor-pointer w-full bg-white hover:bg-[#D9FCAB] rounded-2xl p-5">
                                <div className="flex justify-start text-start items-center py-7 flex-col">
                                    <div className="flex justify-start my-4 text-left w-full">
                                    <img className='w-10 ' src={data?.icon} alt="" />
                                    </div>
                                    <div className="font-bold flex justify-start w-full text-left text-gray-900 text-2xl">{data?.title}</div>
                                    <div className=" text-green-700 flex justify-start text-left w-full text-md"> <p className="">{data?.desc}</p></div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default OurFeatures;