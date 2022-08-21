// import React from 'react';

// const Fixed = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default Fixed;

import { faAngleDoubleRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Fixed = () => {
    return (
        <div>
            <div className="w-full h-full bg-slate-200">
                <img className='object-cover h-full w-full' src="https://www.nrbcommercialbank.com/assets/img/product/fixed_deposit.jpg" alt="" />
            </div>
            <div className="w-full lg:w-3/5 mx-auto">
                <h3 className="text-3xl text-green-500 py-10 text-center font-bold">FIXED DEPOSIT</h3>
                <p className="text-justify text-gray-500 font-semibold">Unlike CD, SND and SB account, Branch shall accept deposit of fixed amount of money from the customers for a fixed period of time with interest under the term plan time to time. FDR is neither Transferable nor Negotiable and as such payment against this instrument with interest shall normally be made to the depositor on maturity. Payment against FDR can also be made to nominee or assignee after observing essential formalities.</p>
                <div className="pt-5 pb-10 ">
                    <div className="w-full md:w-4/5 mx-auto py-10">
                        <div className="accordion" id="accordionExample">


                            <div className="accordion-item border border-gray-200">
                                <h2 className="accordion-header mb-0" id="headingOne">
                                    <button className=" accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left  bg-white border-0 rounded-none transition focus:outline-none marker:"
                                        type="button" data-bs-toggle="collapse" data-bs-target={`#itemsthree`} aria-expanded="true"
                                        aria-controls='itemsthree'>
                                        <span className="text-green-700 font-bold"> <span className="font-bold text-md"><FontAwesomeIcon icon={faPlus} /></span> Who can open</span>
                                    </button>
                                </h2>
                                <div id='itemsthree' className="accordion-collapse collapse" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body py-4 px-5 flex justify-around items-center">
                                        <div className="w-5/6 mx-auto flex justify-center items-center">
                                            <p className="text-gray-600 space-y-2">

                                                <p className='font-semibold text-gray-500 mt-2'>Any Bangladeshi National (Adult, sound-minded having bonafide income) and institutions/organizations incorporated and operating in Bangladesh who are not adjudicated as insolvent by any Court of Law of the land can open Fixed Deposits Account for fixed tenure with any amount but not less than BDT 10,000 (Ten thousand).</p>
                                                <p className='font-semibold text-gray-500 mt-2'>2. Fixed Deposit Account can be opened in the name of</p>

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
                                        <div class="overflow-x-auto">
                                            <table class="table table-zebra w-full">
                                                {/* <!-- head --> */}
                                                <thead>
                                                    <tr>
                                                        <th>Particulars	</th>
                                                        <th>Tenor</th>
                                                        <th>Rate(%)
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* <!-- row 1 --> */}
                                                    <tr>
                                                        <td>Any Amount</td>
                                                        <td>1 Month</td>
                                                        <td>3.00%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Any Amount</td>
                                                        <td>3 Month</td>
                                                        <td>5.60%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Any Amount</td>
                                                        <td>6 Month</td>
                                                        <td>6.00%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Any Amount</td>
                                                        <td>12 Month</td>
                                                        <td>6.00%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Any Amount</td>
                                                        <td>2 Month</td>
                                                        <td>6.00%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Any Amount</td>
                                                        <td>3 Month</td>
                                                        <td>6.00%</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="accordion-item border border-gray-200">
                                <h2 className="accordion-header mb-0" id="headingOne">
                                    <button className=" accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left  bg-white border-0 rounded-none transition focus:outline-none marker:"
                                        type="button" data-bs-toggle="collapse" data-bs-target={`#itemsone`} aria-expanded="true"
                                        aria-controls='itemsone'>
                                        <span className="text-green-700 font-bold"> <span className="font-bold text-md"><FontAwesomeIcon icon={faPlus} /></span> Requirements</span>
                                    </button>
                                </h2>
                                <div id='itemsone' className="accordion-collapse collapse" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body py-4 px-5 flex justify-around items-center">
                                        <div className="w-5/6 mx-auto">
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

export default Fixed;