import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './HomeTopCarousel.css';




const HomeTopCarousel = () => {

    const slides = [
        { img: 'https://i.ibb.co/hBqcQgS/banner-1.png' },
        { img: 'https://i.ibb.co/WzDcFm8/banner-2.png' },
        { img: 'https://i.ibb.co/48pcwk6/banner-3.png' },
        { img: 'https://i.ibb.co/xFXSyvy/banner-4.png' },
        { img: 'https://i.ibb.co/h2kgBJg/banner-5.png' },
        { img: 'https://i.ibb.co/dksmwXX/banner-6.png' },
        { img: 'https://i.ibb.co/CHBZ6XG/banner-7.png' },
    ];

    return (
        <div className='w-full h-40 md:h-[19rem] lg:h-full bg-white mx-auto hello flex justify-center items-center'>
            {/* <Slider autoplay={2000} infinite={true} previousButton='' nextButton='' >
                {slides.map((slide, index) => <div key={index}>
                    <div className="flex justify-center items-center w-full max-w-7xl mx-auto gap-3">

                        <div className='w-full flex justify-center items-center mx-auto'>
                            <img className='object-cover' src={slide?.img} alt="" />
                        </div>
                    </div>
                </div>)}
            </Slider>
 */}
            <Slider autoplay={2000} infinite={true} previousButton='' nextButton='' >
                <div key="1">
                    <div className="flex justify-between max-w-7xl mx-auto gap-3 p-5">
                        <div className='flex-initial w-3/4'>
                            <h1 className='text-7xl text-white'>Welcome To</h1>
                            <h1 className='mt-3 text-7xl text-white'>Online Bank BD</h1>
                            <p className='my-10 text-white'>
                                Our Online banking system
                                project's aim is to automate transactions of the bank and provide better and faster service to the
                                customers by using the internet.
                            </p>

                            <div className="flex justify-left items-center pt-12 lg:ml-0">
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
                </div>

                <div key="2">
                    <div className="flex justify-between max-w-7xl mx-auto p-5">
                        <div className='flex-initial w-3/4'>
                            <h1 className='text-7xl text-white'>We are different</h1>
                            <h1 className=' mt-3 text-7xl text-white'>From Other</h1>
                            <p className='my-10 text-white'>
                                Our Online banking system
                                project's aim is to automate transactions of the bank and provide better and faster service to the
                                customers by using the internet.
                            </p>

                            <div className="flex justify-left items-center pt-12 lg:ml-0">
                                <button className="btn btn-primary p-3 px-5 rounded-full">
                                    Get Started
                                </button>
                                <button className="moreBtn px-5 py-2 text-white text-lg ml-6">
                                    Learn More <FontAwesomeIcon className="" icon={faArrowRight} />{" "}
                                </button>
                            </div>

                        </div>

                        <div className=''>
                            <img src="https://i.ibb.co/ZzvkkY5/card.png" alt="" />
                        </div>
                    </div>
                </div>

                <div key="3">
                    <div className="flex justify-between max-w-7xl mx-auto gap-3 p-5">
                        <div className='flex-initial w-3/4'>
                            <h1 className='text-7xl text-white'>Welcome To</h1>
                            <h1 className='mt-3 text-7xl text-white'>Online Bank BD</h1>
                            <p className='my-10 text-white'>
                                Our Online banking system
                                project's aim is to automate transactions of the bank and provide better and faster service to the
                                customers by using the internet.
                            </p>

                            <div className="flex justify-left items-center pt-12 lg:ml-0">
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
                </div>              

            </Slider>
        </div>
    );
};

export default HomeTopCarousel;