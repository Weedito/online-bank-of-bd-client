import React from 'react';
import { Slide } from 'react-reveal';
import './Timeline.css';

const Timeline = () => {
    return (
        <div className='bg-slate-200 pb-20'>

            <div className='flex flex-col md:flex-row gap-12 lg:gap-96 justify-center items-center bg-slate-100 py-20 px-2'>
                <Slide left>
                    <div className="text-left">
                        <div className='pl-20'>
                            <h2 className='text-4xl font-semibold'>SMS Banking</h2>
                            <p className="text-gray text-sm mt-3 w-96">Through SMS banking, Bank clients can get different types of information like account balance, card payment, loan installment & other information by mobile SMS. SMS Banking provides both Push & Pull SMS. Push SMS are those that the bank chooses to send to a customer’s mobile phone without customer’s request. Pull SMS are those that are initiated by the customer by sending SMS to bank to get specific information like account balance enquiry, mini statement, currency exchange rates, deposit interest rates, etc.</p>
                        </div>
                    </div>
                </Slide>
                <Slide right>
                    <div className="">
                        <img className='object-cover' src="https://www.firstcitizensgroup.com/tt/wp-content/uploads/sites/2/2021/10/mobile-app.png?w=700" alt="Group-91" />
                    </div>
                </Slide>
            </div>
            <div className="">
                <div className="title py-7">
                    <h2 className="section-title text-center font-semibold text-2xl md:text-4xl lg:text-6xl ">
                        Registration <span className="text-green-700">Process</span>
                    </h2>
                </div>
                <div className="wrapper space-y-5">
                    <div className="center-line">
                        <a href="#!" className="scroll-icon"><i className="fas fa-caret-up"></i></a>
                    </div>
                    <div className="row row-1">
                        <section>
                            <i className="icon fas fa-home"></i>
                            <div className="details">
                                <span className="title">Go To Nearest Branch</span>

                            </div>
                            <p>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
                            <div className="bottom">
                                <a href="#!">Read more</a>
                            </div>
                        </section>
                    </div>
                    <div className="row row-2">
                        <section>
                            <i className="icon fas fa-star"></i>
                            <div className="details">
                                <span className="title">Collect Registration Form</span>
                            </div>
                            <p>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
                            <div className="bottom">
                                <a href="#!">Read more</a>
                            </div>
                        </section>
                    </div>
                    <div className="row row-1">
                        <section>
                            <i className="icon fas fa-rocket"></i>
                            <div className="details">
                                <span className="title">Fillup Form with Your Information</span>
                            </div>
                            <p>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
                            <div className="bottom">
                                <a href="#!">Read more</a>
                            </div>
                        </section>
                    </div>
                    <div className="row row-2">
                        <section>
                            <i className="icon fas fa-globe"></i>
                            <div className="details">
                                <span className="title">Activate Your Service</span>
                            </div>
                            <p>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
                            <div className="bottom">
                                <a href="#!">Read more</a>
                            </div>
                        </section>
                    </div>
                    <div className="row row-1">
                        <section>
                            <i className="icon fas fa-paper-plane"></i>
                            <div className="details">
                                <span className="title">Your will get a confirmation Message</span>
                            </div>
                            <p>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
                            <div className="bottom">
                                <a href="#!">Read more</a>
                            </div>
                        </section>
                    </div>
                    <div className="row row-2 pb-10">
                        <section>
                            <i className="icon fas fa-map-marker-alt"></i>
                            <div className="details">
                                <span className="title">Get Your Balance Statement via SMS</span>
                            </div>
                            <p>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
                            <div className="bottom">
                                <a href="#!">Read more</a>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;