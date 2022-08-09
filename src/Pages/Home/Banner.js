import React from 'react';
// import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Slide } from 'react-reveal';
import HomePageSlider from '../../Components/Components.Arif/HomePageSlider';

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row gap-2 justify-center items-center px-2 w-full'>
            
            {/* <Slide left>
              <div className="text-left">
                <h3 className="text-3xl lg:text-5xl font-serif font-bold">
                  Welcome To
                </h3>
                <h3 className="text-3xl lg:text-5xl text-green-700 font-serif font-bold">
                  Online Bank BD
                </h3>
                <p className="text-gray">
                  Our Online banking system project's aim is to automate
                  transactions of <br /> the bank and provide better and faster
                  service to the customers by using the internet.
                </p>
                <div className="flex justify-left items-center py-10">
                  <button className="px-5 py-2 bg-teal-200 rounded-full">
                    Get Started
                  </button>
                  <button className="px-5 py-2 ">
                    Learn More <FontAwesomeIcon icon={faArrowRight} />{" "}
                  </button>
                </div>
              </div>
            </Slide>
            <Slide right>
              <div className="">
                <img
                  className="object-cover"
                  src="https://i.ibb.co/CQMr5Mr/online-payments.png"
                  alt=""
                />
              </div>
            </Slide> */}

            <HomePageSlider />

        </div>
    );
};

export default Banner;