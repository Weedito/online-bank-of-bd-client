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
        class="carousel slide carousel-fade carousel-white relative"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="0"
            class="active"
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

        <div class="carousel-inner relative w-full overflow-hidden">
          {/* Single item */}
          <div class="carousel-item active relative float-left w-full">
              <div className='sliderBg overflow-x-hidden flex flex-col md:flex-row gap-2 justify-center items-center py-20 px-2'>
                
                <Slide left>
                  <div className="text-left">
                    <h3 className="text-3xl lg:text-5xl mb-8 text-white">
                      Welcome To
                    </h3>
                    <h3 className="text-3xl lg:text-5xl text-white font-serif font-bold mb-6">
                      Online Bank BD
                    </h3>
                    <p className="text-slate-300 text-sm">
                      Our Online banking system project's aim is to automate
                      transactions of <br /> the bank and provide better and faster
                      service to the customers by using the internet.
                    </p>
                    <div className="flex justify-left items-center py-10">
                      <button className="px-5 py-2 bg-green-200 rounded-full">
                        Get Started
                      </button>
                      <button className="px-5 py-2 text-white text-sm">
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
                </Slide>

            </div>
          </div>
          
              {/* Single item */}
          <div class="carousel-item relative float-left w-full">
          <div className='sliderBg flex flex-col md:flex-row gap-2 justify-center items-center py-20 px-2'>
                
                <Slide left>
                  <div className="text-left">
                    <h3 className="text-3xl lg:text-5xl mb-8 text-white">
                      Welcome To
                    </h3>
                    <h3 className="text-3xl lg:text-5xl text-white font-serif font-bold mb-6">
                      Online Bank BD
                    </h3>
                    <p className="text-slate-300 text-sm">
                      Our Online banking system project's aim is to automate
                      transactions of <br /> the bank and provide better and faster
                      service to the customers by using the internet.
                    </p>
                    <div className="flex justify-left items-center py-10">
                      <button className="px-5 py-2 bg-green-200 rounded-full">
                        Get Started
                      </button>
                      <button className="px-5 py-2 text-white text-sm">
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
                </Slide>

            </div>
          </div>

           {/* Single item */}
           <div class="carousel-item relative float-left w-full">
          <div className='sliderBg flex flex-col md:flex-row gap-2 justify-center items-center py-20 px-2'>
                
                <Slide left>
                  <div className="text-left">
                    <h3 className="text-3xl lg:text-5xl font-serif mb-8 text-white">
                      Welcome To
                    </h3>
                    <h3 className="text-3xl lg:text-5xl text-white font-serif font-bold mb-6">
                      Online Bank BD
                    </h3>
                    <p className="text-slate-300 text-sm">
                      Our Online banking system project's aim is to automate
                      transactions of <br /> the bank and provide better and faster
                      service to the customers by using the internet.
                    </p>
                    <div className="flex justify-left items-center py-10">
                      <button className="px-5 py-2 bg-green-200 rounded-full">
                        Get Started
                      </button>
                      <button className="px-5 py-2 text-white text-sm">
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
                </Slide>

            </div>
          </div>

          

          
        </div>

        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon inline-block bg-no-repeat border-2 rounded-full"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon inline-block bg-no-repeat border-2 rounded-full"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HomePageSlider;
