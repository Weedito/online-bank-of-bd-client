import React from 'react';
import { AboutCounterData } from '../Components.Nahid/Data';

const FetureHome = () => {
    return (
        <div>
            <div className="flex justify-center items-center flex-col py-20  px-2">
                <div className="title">
                    <h2 className="section-title text-center font-semibold text-2xl md:text-4xl lg:text-6xl ">
                        Company <span className="text-green-700">Feature of</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 w-full mx-auto gap-8 px-10">
                    <div className="shadow-md mx-auto cursor-pointer w-full bg-white hover:bg-[#D9FCAB] rounded-2xl p-5">

                        <div className="flex justify-start text-start items-center py-7 flex-col">
                            <div className="flex justify-start my-4 text-left w-full">
                                <img className='w-10 ' src="" alt="" />
                            </div>
                            <div className="font-bold flex justify-start w-full text-left text-gray-900 text-2xl">Send Money

                            <p>Best Methods for Quickly Transferring Money</p> 
                            
                            </div>
                                                       
                        </div>
                        
                    </div>

                </div>
            </div>

        </div>
    );
};

export default FetureHome;