import { faAngleDoubleRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Student = () => {
    return (
        <div>
            <div className="w-full mx-auto h-full bg-slate-200">
                <img className='object-cover h-full' src="https://i.ibb.co/WvdxYS8/school-banking-banner.png" alt="" />
            </div>
            <div className="w-full lg:w-3/5 mx-auto">
                <h3 className="text-3xl text-green-500 py-10 text-center font-bold">STUDENT SAVING SCHEME</h3>
                <p className="text-justify text-gray-500 font-semibold">Student Savings Account is designed for our future generation to introduce them in Banking practice. Any student at the age of below eighteen years can open this account. However, the account is operated by legal guardian of the students</p>
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
                                            <p className="text-justify text-gray-600">Any students below age eighteen years can open this scheme in his/her own name by depositing first installment. Parents or legal guardian of the students will operate the scheme on behalf of the students. During opening of the scheme students have to submit two copies of passport size photographs, birth registration certificate, attested copies of institutional identity card/certificate issued by educational institute/receipt of school fees of latest month of the students.</p>
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
                                            <img src="https://www.nrbcommercialbank.com/assets/img/product/student-scheme.PNG" alt="" className="object-cover mx-auto" />
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
                                        <span className="text-green-700 font-bold"> <span className="font-bold text-md"><FontAwesomeIcon icon={faPlus} /></span> Terms & Conditions</span>
                                    </button>
                                </h2>
                                <div id='itemsfour' className="accordion-collapse collapse" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body py-4 px-5 flex justify-around items-center">
                                        <div className="w-5/6 mx-auto flex justify-center items-center">
                                            <p className="text-gray-600 space-y-2">
                                                <FontAwesomeIcon className='pr-2' icon={faAngleDoubleRight} /> <span className="">Scheme can be opened at any working day of the month by depositing first installment at any working day. Second and subsequent installments must be deposited within 28th of every month. If 28th day of the month is holiday, installment must be deposited at previous working day.</span> <br />
                                                <FontAwesomeIcon className='pr-2' icon={faAngleDoubleRight} /> <span className=""> Scheme can be opened through our any branch/agent point. But encashment of this scheme shall be made in the scheme maintaining branch.</span> <br />
                                                <FontAwesomeIcon className='pr-2' icon={faAngleDoubleRight} /> <span className="">In case of failure to deposit installment in due time, depositor will have to pay 5% late fee with overdue installment for each month.</span> <br />
                                                <FontAwesomeIcon className='pr-2' icon={faAngleDoubleRight} /> <span className="">Customers of ten years scheme will get a bonus equivalent to one month installment for depositing 120 installments in time.</span> <br />
                                                <FontAwesomeIcon className='pr-2' icon={faAngleDoubleRight} /> <span className="">If depositor fails to deposit six consecutive installments then scheme will be closed.</span> <br />
                                                <FontAwesomeIcon className='pr-2' icon={faAngleDoubleRight} /> <span className="">All government tax, levy, duty or surcharge etc. applicable to the scheme will be deducted from encashment value of the scheme.</span> <br />
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

export default Student;