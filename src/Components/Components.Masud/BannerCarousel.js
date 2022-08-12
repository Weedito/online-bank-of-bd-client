import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./SwiperStyle.css";
import { Navigation } from "swiper";



const BannerCarousel = () => {
    return (
        <div className='mx-auto mt-9'>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="flex justify-between max-w-7xl">
                        <div className='flex-initial w-3/4'>
                            <h1 className='text-7xl text-white'>Welcome To</h1>
                            <h1 className=' mt-3 text-7xl text-white'>Online Bank BD</h1>
                            <p className=' my-10 text-white'>
                                Our Online banking system
                                project's aim is to automate transactions of the bank and provide better and faster service to the
                                customers by using the internet.
                            </p>

                            <div className="flex justify-left items-center pt-20 lg:ml-0">
                                <button className="btn btn-primary p-3 px-5 rounded-full">
                                    Get Started
                                </button>
                                <button className="moreBtn px-5 py-2 text-white text-lg ml-6">
                                    Learn More <FontAwesomeIcon className="" icon={faArrowRight} />{" "}
                                </button>
                            </div>

                        </div>

                        <div className=''>
                            <img src="https://i.ibb.co/8zhtLf0/Vector.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex justify-between max-w-7xl">
                        <div className='flex-initial w-3/4'>
                            <h1 className='text-7xl text-white'>We are different</h1>
                            <h1 className=' mt-3 text-7xl text-white'>From Other</h1>
                            <p className=' my-10 text-white'>
                                Our Online banking system
                                project's aim is to automate transactions of the bank and provide better and faster service to the
                                customers by using the internet.
                            </p>

                            <div className="flex justify-left items-center pt-20 lg:ml-0">
                                <button className="btn btn-primary p-3 px-5 rounded-full">
                                    Get Started
                                </button>
                                <button className="moreBtn px-5 py-2 text-white text-lg ml-6">
                                    Learn More <FontAwesomeIcon className="" icon={faArrowRight} />{" "}
                                </button>
                            </div>

                        </div>

                        <div className=''>
                            <img src="https://i.ibb.co/1RNPK3X/dfshyrey.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex justify-between max-w-7xl">
                        <div className='flex-initial w-3/4'>
                            <h1 className='text-7xl text-white'>Welcome To</h1>
                            <h1 className=' mt-3 text-7xl text-white'>Online Bank BD</h1>
                            <p className=' my-10 text-white'>
                                Our Online banking system
                                project's aim is to automate transactions of the bank and provide better and faster service to the
                                customers by using the internet.
                            </p>

                            <div className="flex justify-left items-center pt-20 lg:ml-0">
                                <button className="btn btn-primary p-3 px-5 rounded-full">
                                    Get Started
                                </button>
                                <button className="moreBtn px-5 py-2 text-white text-lg ml-6">
                                    Learn More <FontAwesomeIcon className="" icon={faArrowRight} />{" "}
                                </button>
                            </div>

                        </div>

                        <div className=''>
                            <img src="https://i.ibb.co/8zhtLf0/Vector.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-between max-w-7xl">
                        <div className='flex-initial w-3/4'>
                            <h1 className='text-7xl text-white'>We are different</h1>
                            <h1 className=' mt-3 text-7xl text-white'>From Other</h1>
                            <p className=' my-10 text-white'>
                                Our Online banking system
                                project's aim is to automate transactions of the bank and provide better and faster service to the
                                customers by using the internet.
                            </p>

                            <div className="flex justify-left items-center pt-20 lg:ml-0">
                                <button className="btn btn-primary p-3 px-5 rounded-full">
                                    Get Started
                                </button>
                                <button className="moreBtn px-5 py-2 text-white text-lg ml-6">
                                    Learn More <FontAwesomeIcon className="" icon={faArrowRight} />{" "}
                                </button>
                            </div>

                        </div>

                        <div className=''>
                            <img src="https://i.ibb.co/1RNPK3X/dfshyrey.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                

            </Swiper>





        </div>
    );
};

export default BannerCarousel;