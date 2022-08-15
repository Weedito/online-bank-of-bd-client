import React from 'react';

const WhyWaiting = () => {
    return (
        <div className='bg-gradient-to-r from-[#016837] px-10 md:px-20 w-full to-[#559600] py-10 flex justify-between items-center gap-5'>
            <div className="w-4/6 mx-auto">
                <h3 className="text-xl md:text-3xl font-bold lg:text-4xl text-white uppercase">Why you are waiting?</h3>
            </div>
            <div className="w-2/6 flex justify-end">
                <button className="uppercase px-4 md:px-7 py-2 md:py-3 font-semibold rounded-full bg-white text-green-600">Create Account</button>
            </div>
        </div>
    );
};

export default WhyWaiting;