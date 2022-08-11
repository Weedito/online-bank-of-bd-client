import React from 'react';

const AboutTopSection = () => {
    return (
        <div className="py-10">
            <div className="flex flex-col items-center justify-around md:flex-row gap5">
                <div className="">
                    <h3 className="text-3xl md:text-5xl lg:text-7xl text-black">An overview of</h3>
                    <h3 className="text-2xl md:text-3xl lg:text-5xl text-green-700 font-bold">Online Bank BD</h3>

                </div>
                <div className="">
                    <img src="https://i.ibb.co/yhVHjK0/undraw-savings-re-eq4w-1-1.png" alt="" className="object-cover p-5" />

                </div>
            </div>
        </div>
    );
};

export default AboutTopSection;