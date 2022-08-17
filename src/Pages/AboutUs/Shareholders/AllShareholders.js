import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ShareHolderData } from '../../../Components/Components.Nahid/Data';

const AllShareholders = () => {
    return (
        <div className='container max-w-7xl mx-auto'>
            <div className="title">
                <h2 className="section-title text-center font-semibold text-2xl md:text-4xl lg:text-6xl ">
                    Our <span className="text-green-700">Shareholders</span>
                </h2>
                <p className="text-md md:text-xl mt-7 px-2 md:px-5">
                    Shareholders and active participants in the bank's planning have provided strength, stability and a vision to help us lead our customers where they want to go.
                </p>
            </div>
            <div className="w-full md:w-4/5 mx-auto py-10">
                <div className="accordion" id="accordionExample">
                    {
                        ShareHolderData.map((item, idx) => {
                            return (
                                <div key={idx} className="accordion-item bg-white border border-gray-200">
                                    <h2 className="accordion-header mb-0" id="headingOne">
                                        <button className=" accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left  bg-white border-0 rounded-none transition focus:outline-none marker:"
                                            type="button" data-bs-toggle="collapse" data-bs-target={`#${item?.index}`} aria-expanded="true"
                                            aria-controls={item?.index}>
                                            <span className="text-green-700 font-bold"> <span className="font-bold text-md"><FontAwesomeIcon icon={faPlus}/></span> {item?.name}, <span className="text-gray-500 font-poppins">Shareholder</span></span>
                                        </button>
                                    </h2>
                                    <div id={item?.index} className="accordion-collapse collapse" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body py-4 px-5 flex justify-around items-center">
                                            <div className="w-3/6">
                                            <h3 className="text-2xl md:text-3xl py-5 text-gray-400 font-semibold text-left">SHAREHOLDER</h3>
                                            <h3 className="text-2xl md:text-3xl py-5 text-gray-800 font-semibold text-left">{item?.name}</h3>
                                            <p className="text-xl text-left">Shareholder</p>

                                            </div>
                                            <div className="w-3/6">
                                            <img className='' src={item?.img} alt={item?.name} />
                                            </div>                                            
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    );
};

export default AllShareholders;