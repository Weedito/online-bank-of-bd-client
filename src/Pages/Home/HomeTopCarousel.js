import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';




const HomeTopCarousel = () => {

    const slides = [
        { title: 'First item', description: 'Lorem ipsum', img: 'https://i.ibb.co/8zhtLf0/Vector.png' },
        { title: 'Second item', description: 'Lorem ipsum', img: 'https://i.ibb.co/8zhtLf0/Vector.png' },
        { title: 'Second item', description: 'Lorem ipsum', img: 'https://i.ibb.co/8zhtLf0/Vector.png' },
        { title: 'Second item', description: 'Lorem ipsum', img: 'https://i.ibb.co/8zhtLf0/Vector.png' },
        { title: 'Second item', description: 'Lorem ipsum', img: 'https://i.ibb.co/8zhtLf0/Vector.png' }
    ];

    return (
        <div className='w-full bg-gray-500 mx-auto'>
            <Slider autoplay={5000} infinite={true} >
                {slides.map((slide, index) => <div key={index}>
                <div className="flex justify-between items-center p-5 w-full max-w-7xl mx-auto gap-3">
                        <div className='flex-initial space-y-2 w-3/6'>
                            <h1 className='text-3xl md:text-5xl text-white'>Welcome To</h1>
                            <h1 className='text-3xl md:text-5xl text-white'>Online Bank BD</h1>
                            <p className=' text-white'>
                                Our Online banking system
                                project's aim is to automate transactions of the bank and provide better and faster service to the
                                customers by using the internet.
                            </p>

                            <div className="flex justify-left items-center pt-10 lg:ml-0">
                                <button className="btn btn-primary p-3 px-5 rounded-full">
                                    Get Started
                                </button>
                                <button className="moreBtn px-5 py-2 text-white text-lg ml-6">
                                    Learn More <FontAwesomeIcon className="" icon={faArrowRight} />{" "}
                                </button>
                            </div>

                        </div>

                        <div className='w-3/6 flex justify-center mx-auto'>
                            <img src="https://i.ibb.co/8zhtLf0/Vector.png" alt="" />
                        </div>
                    </div>
                </div>)}
            </Slider>

        </div>
    );
};

export default HomeTopCarousel;