import React from 'react';
import SigninLeft from './SigninLeft';
import SigninRight from './SigninRight';

const Signin = () => {
    return (
        <div className="">
            <div className="w-screen h-fit bg-green-300 flex justify-center items-center py-20">
            <div className='w-screen lg:w-4/6 mx-auto flex flex-col lg:flex-row rounded justify-center items-center shadow-lg h-full lg:h-[80vh]'>
            <div className="bg-white w-full lg:w-1/2 h-full lg:h-[80vh] py-10 lg:py-0 rounded flex justify-center items-center order-2 lg:order-1">
                <SigninLeft/>
            </div>
            <div className="bg-gradient-to-r from-green-700 to-green-900 w-full lg:w-1/2 h-full lg:h-[80vh] py-10 lg:py-0 rounded flex justify-center items-center order-1 lg:order-2">
                <SigninRight/> 
            </div> 
        </div> 
        </div>
        </div>
    );
};

export default Signin;