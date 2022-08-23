import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const GetLoan = () => {
    return (
        <div className=''>
            <div className="flex flex-col w-full items-center  bg-[#F5FFE9] justify-around md:flex-row gap5">
                <div className="w-full md:w-3/6 px-5 md:px-10 ml-80">
                    <h1 className="text-6xl my-5 font-semibold md:text-6xl text-black">Get your Home Loan</h1>
                    <p className=" mb-5 md:text-md text-gray-500 font-bold">Get your home loan from our bank easily by following some steps</p>
                    <Link to="/loan"><button to="/loan" className="px-5 py-3 rounded-full text-white bg-green-700 my-4">Learn More <FontAwesomeIcon className='pl-2' icon={faArrowRight} /></button></Link>
                </div>
                <div className="w-full md:w-3/6 h-96">
                    <img src="https://i.ibb.co/fxkf1mh/pexels-mikhail-nilov-6963921-1.png" alt="" className="object-cover w-full h-full" />

                </div>
            </div>
        </div>
    );
};

export default GetLoan;