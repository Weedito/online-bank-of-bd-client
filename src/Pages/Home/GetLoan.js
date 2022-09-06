import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const GetLoan = () => {
    return (
        <div className="py-10">
            <div className="flex flex-col w-full items-center max-w-7xl mx-auto  bg-[#F5FFE9] justify-around md:flex-row gap5">
                <div data-aos="fade-up" className="w-3/6 px-5 md:px-10">
                    <h3 className="text-3xl md:text-3xl text-black">Get your Home Loan</h3>
                    <h3 className="text-md md:text-md text-gray-500 font-bold">Get your home loan from our bank easily by following some steps</h3>
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