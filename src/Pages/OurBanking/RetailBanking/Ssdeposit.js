import { faAngleDoubleRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Ssdeposit = () => {
    return (
        <div>
            <div className="w-full h-full bg-slate-200">
                <img className='object-cover h-full' src="https://www.nrbcommercialbank.com/assets/img/banner_all.jpg" alt="" />
            </div>
            <div className="w-full lg:w-3/5 mx-auto">
                <h3 className="text-3xl text-green-500 py-10 text-center font-bold">SHOHOJ SANCHAY DEPOSIT</h3>
                <p className="text-justify text-gray-500 font-semibold">Shohoj Shanchay Deposit Account is a unique account with an opportunity to earn higher interest and enjoy the freedom of savings account. Any individual can open this account in his/her own name or jointly by depositing declared amounts.</p>
                <div className="pt-5 pb-10 ">
                    <div className="w-full md:w-4/5 mx-auto py-10">
                        <div className="accordion" id="accordionExample">

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
                                            <img src="https://www.nrbcommercialbank.com/assets/img/product/Shohoj%20Shanchay%20Deposit.PNG" alt="" className="object-cover mx-auto" />
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
                                        type="button" data-bs-toggle="collapse" data-bs-target={`#itemsone`} aria-expanded="true"
                                        aria-controls='itemsone'>
                                        <span className="text-green-700 font-bold"> <span className="font-bold text-md"><FontAwesomeIcon icon={faPlus} /></span> Features And Benefits</span>
                                    </button>
                                </h2>
                                <div id='itemsone' className="accordion-collapse collapse" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body py-4 px-5 flex justify-around items-center">
                                        <div className="w-5/6 mx-auto">
                                            <p className="text-gray-600 space-y-2">
                                                <FontAwesomeIcon className='pr-2' icon={faAngleDoubleRight} /> <span className="">Cheque book and debit card facilities are available against this account.</span> <br />
                                                <FontAwesomeIcon className='pr-2' icon={faAngleDoubleRight} /> <span className="">Interest bearing account</span> <br />
                                                <FontAwesomeIcon className='pr-2' icon={faAngleDoubleRight} /> <span className="">Debit Card</span> <br />
                                                <FontAwesomeIcon className='pr-2' icon={faAngleDoubleRight} /> <span className="">Transferring fund through standing instruction</span> <br />
                                                <FontAwesomeIcon className='pr-2' icon={faAngleDoubleRight} /> <span className="">Depositor may avail credit facility against deposited amount according to credit policy of the bank.</span> <br />
                                                <FontAwesomeIcon className='pr-2' icon={faAngleDoubleRight} /> <span className="">The customer may pay installment of other deposit account/loan, without any charge from this account by giving standing order.</span> <br />
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
                                        <span className="text-green-700 font-bold"> <span className="font-bold text-md"><FontAwesomeIcon icon={faPlus} /></span> Terms & Conditions</span>
                                    </button>
                                </h2>
                                <div id='itemsfour' className="accordion-collapse collapse" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body py-4 px-5 flex justify-around items-center">
                                        <div className="w-5/6 mx-auto flex justify-center items-center">
                                            <p className="text-gray-600 space-y-2">
                                                <FontAwesomeIcon className='pr-2' icon={faAngleDoubleRight} /> <span className="">Customer can deposit or withdraw any amount at any time from this account.</span> <br />
                                                <FontAwesomeIcon className='pr-2' icon={faAngleDoubleRight} /> <span className="">If the customer wants to close the account before end of the month, then no interest will be given for that month.</span> <br />
                                                <FontAwesomeIcon className='pr-2' icon={faAngleDoubleRight} /> <span className="">All Bank charges, government tax, levy, duty or surcharge etc. applicable to the account will be deducted from the account.</span> <br />
                                                <FontAwesomeIcon className='pr-2' icon={faAngleDoubleRight} /> <span className="">Bank reserves the rights to change/amend/review/revise the terms and conditions of this account at any time with or without retrospective effect and without showing any reason.</span> <br />
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

export default Ssdeposit;