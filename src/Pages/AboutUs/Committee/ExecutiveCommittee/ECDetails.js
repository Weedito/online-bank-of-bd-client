import React from 'react';
import { ExecutiveCData } from '../../../../Components/Components.Nahid/Data';

const ECDetails = () => {
    return (
        <div className=''>
            {
                ExecutiveCData.map((data, idx) => {
                    return (
                        <div key={idx} class="hero min-h-screen w-full bg-base-200">
                            <div class="hero-content flex-col lg:flex-row-reverse">
                                <div className="w-full lg:w-3/6 mx-auto">
                                <img src={data?.img} alt='' class=" mx-auto rounded-lg shadow-2xl" />
                                </div>
                                <div className='w-full lg:w-3/6 mx-auto'>
                                    <h3 className="text-2xl text-gray-400">{data?.title}</h3>
                                    <h1 class="text-3xl md:text-5xl font-bold">{data?.name}</h1>
                                    <p class="py-6 text-justify">{data?.desc}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ECDetails;