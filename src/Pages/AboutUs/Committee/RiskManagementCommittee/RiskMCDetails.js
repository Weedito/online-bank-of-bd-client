import React from 'react';
import { RiskMCData } from '../../../../Components/Components.Nahid/Data';

const RiskMCDetails = () => {
    return (
        <div>
            {
                RiskMCData.map((data, idx) => {
                    return (
                        <div key={idx} className="hero min-h-screen w-full bg-base-200">
                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <div className="w-full lg:w-3/6 mx-auto">
                                <img src={data?.img} alt='' className=" mx-auto rounded-lg shadow-2xl" />
                                </div>
                                <div className='w-full lg:w-3/6 mx-auto'>
                                    <h3 className="text-2xl text-gray-400">{data?.title}</h3>
                                    <h1 className="text-3xl md:text-5xl font-bold">{data?.name}</h1>
                                    <p className="py-6 text-justify">{data?.desc}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default RiskMCDetails;