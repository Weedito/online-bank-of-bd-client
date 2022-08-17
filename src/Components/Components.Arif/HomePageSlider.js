import React from "react";
import { Slide } from "react-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./HomePageSlider.css";

const HomePageSlider = () => {
  
  return (
    <div className="w-full">
      <div
        id="carouselExampleCrossfade"
        className="carousel slide carousel-fade carousel-white relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="1"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="2"
            aria-label="Slide 1"
          ></button>
        </div>

          {/* Inner */}

        <div className="carousel-inner relative w-full overflow-hidden">
          {/* Single item 1*/}
          <div className="carousel-item active relative float-left w-full">
              <div className='sliderBg lg:py-40 overflow-x-hidden flex flex-col md:flex-row lg:gap-80 justify-center items-center py-4 px-2'>
                
                <Slide left className="">
                  <div className="text-left lg:ml-2">
                    <h3 className="text-3xl lg:text-7xl mb-16 text-white">
                      Welcome To
                    </h3>
                    <h3 className="text-3xl lg:text-7xl text-white font-serif font-bold mb-6">
                      Online Bank BD
                    </h3>
                    <p className="text-slate-300 text-xl">
                      Our Online banking system project's aim is to automate
                      transactions of <br /> the bank and provide better and faster
                      service to the customers by using the internet.
                    </p>
                    <div className="flex justify-left items-center pt-20 ml-10 lg:ml-0">
                      <button className="bannerBtn px-5 p-3 bg-green-200 rounded-full text-2xl">
                        Get Started
                      </button>
                      <button className="moreBtn px-5 py-2 text-white text-lg">
                        Learn More <FontAwesomeIcon className="" icon={faArrowRight} />{" "}
                      </button>
                    </div>
                  </div>
                </Slide>
                <Slide right>
                  <div className="">
                    <img
                      className="object-cover h-96"
                      src="https://i.ibb.co/8zhtLf0/Vector.png"
                      alt="img"
                    />
                  </div>
                </Slide>

            </div>
          </div>
          
              {/* Single item 2 */}
              <div className="carousel-item relative float-left w-full">
              <div className='sliderBg lg:py-40 overflow-x-hidden flex flex-col md:flex-row lg:gap-80 justify-center items-center py-4 px-2'>
                
                <Slide left className="">
                  <div className="text-left lg:mr-2">
                    <h3 className="text-3xl lg:text-7xl mb-16 text-white">
                      Welcome To
                    </h3>
                    <h3 className="text-3xl lg:text-7xl text-white font-serif font-bold mb-6">
                      Online Bank BD
                    </h3>
                    <p className="text-slate-300 text-xl">
                      Our Online banking system project's aim is to automate
                      transactions of <br /> the bank and provide better and faster
                      service to the customers by using the internet.
                    </p>
                    <div className="flex justify-left items-center pt-20 ml-16 lg:ml-0">
                      <button className="bannerBtn px-5 p-3 bg-green-200 rounded-full text-2xl">
                        Get Started
                      </button>
                      <button className="moreBtn px-5 py-2 text-white text-lg ml-6">
                        Learn More <FontAwesomeIcon className="" icon={faArrowRight} />{" "}
                      </button>
                    </div>
                  </div>
                </Slide>
                <Slide right>
                  <div className="">
                    <img
                      className="object-cover h-96"
                      src="https://i.ibb.co/8zhtLf0/Vector.png"
                      alt="img"
                    />
                  </div>
                </Slide>

            </div>
          </div>

           {/* Single item 3*/}
           <div className="carousel-item relative float-left w-full">
           <div className='sliderBg lg:py-40 overflow-x-hidden flex flex-col md:flex-row lg:gap-80 justify-center items-center py-4 px-2'>
                
                <Slide left className="">
                  <div className="text-left lg:mr-2">
                    <h3 className="text-3xl lg:text-7xl mb-16 text-white">
                      Welcome To
                    </h3>
                    <h3 className="text-3xl lg:text-7xl text-white font-serif font-bold mb-6">
                      Online Bank BD
                    </h3>
                    <p className="text-slate-300 text-xl">
                      Our Online banking system project's aim is to automate
                      transactions of <br /> the bank and provide better and faster
                      service to the customers by using the internet.
                    </p>
                    <div className="flex justify-left items-center pt-20 ml-16 lg:ml-0">
                      <button className="bannerBtn px-5 p-3 bg-green-200 rounded-full text-2xl">
                        Get Started
                      </button>
                      <button className="moreBtn px-5 py-2 text-white text-lg ml-6">
                        Learn More <FontAwesomeIcon className="" icon={faArrowRight} />{" "}
                      </button>
                    </div>
                  </div>
                </Slide>
                <Slide right>
                  <div className="">
                    <img
                      className="object-cover h-96"
                      src="https://i.ibb.co/8zhtLf0/Vector.png"
                      alt="img"
                    />
                  </div>
                </Slide>

            </div>
          </div>

          

          
        </div>

        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat border-2 rounded-full"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat border-2 rounded-full"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HomePageSlider;
