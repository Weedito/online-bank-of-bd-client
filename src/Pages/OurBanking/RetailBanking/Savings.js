import { faAngleDoubleRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Savings = () => {
    return (
        <div>
            <div className="w-full h-full bg-slate-200">
                <img className='object-cover h-full' src="https://www.nrbcommercialbank.com/assets/img/banner_all.jpg" alt="" />
            </div>
            <div className="w-full lg:w-3/5 mx-auto">
                <h3 className="text-3xl text-green-500 py-10 text-center font-bold">INDIVIDUAL SAVINGS ACCOUNT</h3>
                <p className="text-justify text-gray-500 font-semibold">Customer can open Savings Account in his/her own name or joint name. Any amount of the balance can be withdrawn from this account. There are no hidden charges and half yearly maintenance fee. NRBC Bank Limited ensures attractive rate of return on balance amount. The rate of interest of this account is 3.00%. Apart from this, cheque book, VISA debit card, internet banking and access to account 24/7 via ATM are available to customers.</p>
                <div className="pt-5 pb-10 ">
                    <div className="w-full md:w-4/5 mx-auto py-10">
                        <div className="accordion" id="accordionExample">

                            <div className="accordion-item border border-gray-200">
                                <h2 className="accordion-header mb-0" id="headingOne">
                                    <button className=" accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left  bg-white border-0 rounded-none transition focus:outline-none marker:"
                                        type="button" data-bs-toggle="collapse" data-bs-target={`#itemsone`} aria-expanded="true"
                                        aria-controls='itemsone'>
                                        <span className="text-green-700 font-bold"> <span className="font-bold text-md"><FontAwesomeIcon icon={faPlus} /></span> Who Can Open</span>
                                    </button>
                                </h2>
                                <div id='itemsone' className="accordion-collapse collapse" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body py-4 px-5 flex justify-around items-center">
                                        <div className="w-5/6 mx-auto">
                                            <p className="text-justify text-gray-600">
                                                <FontAwesomeIcon className='pr-2' icon={faAngleDoubleRight} /> <span className=""> Individual (Single).</span> <br />
                                                <FontAwesomeIcon className='pr-2' icon={faAngleDoubleRight} /> <span className="">Two or more persons (joint)</span> <br />
                                                <FontAwesomeIcon className='pr-2' icon={faAngleDoubleRight} /> <span className="">Sole Proprietorship Concern.</span> <br />
                                                <FontAwesomeIcon className='pr-2' icon={faAngleDoubleRight} /> <span className="">Partnership Concern (Firm).</span> <br />
                                                <FontAwesomeIcon className='pr-2' icon={faAngleDoubleRight} /> <span className="">Limited Companies (both Public and Private).</span> <br />
                                                <FontAwesomeIcon className='pr-2' icon={faAngleDoubleRight} /> <span className="">Society / Club / Association / Local Bodies / Govt. / Semi Govt. Organization, etc.
                                                </span> <br />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item border border-gray-200">
                                <h2 className="accordion-header mb-0" id="headingOne">
                                    <button className=" accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left  bg-white border-0 rounded-none transition focus:outline-none marker:"
                                        type="button" data-bs-toggle="collapse" data-bs-target={`#itemstwo`} aria-expanded="true"
                                        aria-controls='itemstwo'>
                                        <span className="text-green-700 font-bold"> <span className="font-bold text-md"><FontAwesomeIcon icon={faPlus} /></span> Interest Rates</span>
                                    </button>
                                </h2>
                                <div id='itemstwo' className="accordion-collapse collapse" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body py-4 px-5 flex justify-around items-center">
                                        <div className="w-5/6 mx-auto flex justify-center items-center">
                                            <p>All types of Savings Account rate :3.50%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item border border-gray-200">
                                <h2 className="accordion-header mb-0" id="headingOne">
                                    <button className=" accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left  bg-white border-0 rounded-none transition focus:outline-none marker:"
                                        type="button" data-bs-toggle="collapse" data-bs-target={`#itemsthree`} aria-expanded="true"
                                        aria-controls='itemsthree'>
                                        <span className="text-green-700 font-bold"> <span className="font-bold text-md"><FontAwesomeIcon icon={faPlus} /></span> Requirements</span>
                                    </button>
                                </h2>
                                <div id='itemsthree' className="accordion-collapse collapse" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body py-4 px-5 flex justify-around items-center">
                                        <div className="w-5/6 mx-auto flex justify-center items-center">
                                            <p className="text-gray-600 space-y-2">
                                                <FontAwesomeIcon className='pr-2' icon={faAngleDoubleRight} /> <span className="">Two copies of passport size photographs, birth registration certificate, attested copies of institutional identity card/certificate issued by educational institute/receipt of school fees of latest month of the students</span> <br />
                                                <FontAwesomeIcon className='pr-2' icon={faAngleDoubleRight} /> <span className=""> Passport size Photographs of Legal Guardian</span> <br />
                                                <FontAwesomeIcon className='pr-2' icon={faAngleDoubleRight} /> <span className="">One copy of Passport Size Photograph of Nominee duly attested by the Legal Guardian</span> <br />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="accordion-item border border-gray-200">
                                <h2 className="accordion-header mb-0" id="headingOne">
                                    <button className=" accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left  bg-white border-0 rounded-none transition focus:outline-none marker:"
                                        type="button" data-bs-toggle="collapse" data-bs-target={`#itemsfour`} aria-expanded="true"
                                        aria-controls='itemsfour'>
                                        <span className="text-green-700 font-bold"> <span className="font-bold text-md"><FontAwesomeIcon icon={faPlus} /></span> Features And Benefits</span>
                                    </button>
                                </h2>
                                <div id='itemsfour' className="accordion-collapse collapse" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body py-4 px-5 flex justify-around items-center">
                                        <div className="w-5/6 mx-auto flex justify-center items-center">
                                            <p className="text-gray-600 space-y-2">
                                                <FontAwesomeIcon className='pr-2' icon={faAngleDoubleRight} /> <span className="">Cheque book and debit card facilities are available against this account.</span> <br />
                                                <FontAwesomeIcon className='pr-2' icon={faAngleDoubleRight} /> <span className="">Interest bearing account</span> <br />
                                                <FontAwesomeIcon className='pr-2' icon={faAngleDoubleRight} /> <span className="">Debit Card</span> <br />
                                                <FontAwesomeIcon className='pr-2' icon={faAngleDoubleRight} /> <span className="">Transferring fund through standing instruction</span> <br />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Savings;