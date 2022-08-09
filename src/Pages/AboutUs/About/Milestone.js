import React from 'react';

const Milestone = () => {
    return (
        <div className="flex justify-center items-center flex-col py-20  px-2">
        <div className="title">
            <h2 className="section-title text-center font-semibold text-2xl md:text-4xl lg:text-6xl ">
                Our <span className="text-green-700">Milestone</span>
            </h2>
        </div>
        <div className=" pt-10 w-full md:w-4/5 lg:w-3/5 mx-auto flex flex-col gap-5 justify-center items-center">
            <div className="flex justify-start py-10 items-center w-full">
            <img className='object-cover p-10' src="https://i.ibb.co/GTL6G15/Group-52.png" alt="" />
            </div>
            <div className="flex justify-end py-10 items-center w-full">
            <img className='object-cover p-10' src="https://i.ibb.co/wpbb5yc/Group-51.png" alt="" />
            </div>
            <div className="flex justify-start py-10 items-center w-full">
            <img className='object-cover p-10' src="https://i.ibb.co/dDygTxh/Group-53.png" alt="" />
            </div>
        </div>
        </div>
    );
};

export default Milestone;