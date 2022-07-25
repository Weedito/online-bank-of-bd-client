import React from 'react';
import { AboutCounterData } from '../../../Components/Components.Nahid/Data';
import CountUp from 'react-countup';

const AboutCounter = () => {
    return (
        <div className="flex justify-center items-center flex-col py-20  px-2">
            <div className="title">
                <h2 className="section-title text-center font-semibold text-2xl md:text-4xl lg:text-6xl ">
                    Company <span className="text-green-700">At a Glance</span>
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 w-full mx-auto gap-8">
                {/* partner summary  */}
                {
                    AboutCounterData.map((data, idx) => {
                        return(
                            <div className="partner cursor-pointer">
                            <div class="stats shadow-md bg-green-700 text-white hover:bg-base-100 hover:text-green-700 p-10">
                                <div class="stat flex justify-center  items-center w-40 flex-col">
                                    {/* <div className="icon text-green-700 text-3xl md:text-4xl lg:text-6xl my-2">
                                        <FontAwesomeIcon icon={data?.icon}/>
                                    </div> */}
                                    <div class="stat-value"><CountUp delay={2} end={data?.count} /></div>
                                    <div class="stat-desc text-xl">{data?.title}</div>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default AboutCounter;