import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';




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
            <div className='w-full h-40 md:h-[19rem] lg:h-full bg-gray-500 mx-auto'>
                <Slider autoplay={3500} infinite={true} previousButton='' nextButton='' >
                    {slides.map((slide, index) => <div key={index}>
                        <div className="flex justify-center items-center w-full max-w-7xl mx-auto gap-3">

                            <div className='w-full flex justify-center items-center mx-auto'>
                                <img className='object-cover' src={slide?.img} alt="" />
                            </div>
                        </div>
                    </div>)}
                </Slider>

            </div>
    );
};

export default HomeTopCarousel;