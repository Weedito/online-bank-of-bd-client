import React from 'react';

const Loan = () => {
    return (
        <div>
            <h3 className=" px-20 py-3 text-3xl text-justify">Make your dream home a reality with easy home loans from Online Bank BD. Our wide range of options are designed to cater your every home financing need, be it purchasing a new flat, constructing a house or renovating your existing home. Allow us to be the finance partner of one of the biggest investments of your lifetime and give you a delightful experience of banking.</h3>
            <div className='py-12 '>
                <div className="stats stats-vertical lg:stats-horizontal shadow bg-gradient-to-r from-cyan-300 to-blue-200 border-2 border-green-600">

                    <div className="stat">

                        <div className="stat-value">BDT 5 lac - BDT 2 Crore</div>
                        <div className="stat-desc my-5 text-lg">Loan amount</div>
                    </div>

                    <div className="stat">

                        <div className="stat-value">1 - 25 years</div>
                        <div class="stat-desc">Loan tenure</div>
                    </div>

                    <div className="stat">

                        <div className="stat-value">Competitive</div>
                        <div className="stat-desc">Interest rate</div>
                    </div>

                </div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:px-8 lg:px-12 px-3 my-8 w-full gap-3 items-center justify-center ">

                {/* emi calculator */}
                <input type="text" placeholder="Loan Ammount" className="input border-1 border-gray-700 w-full " />
                <input type="text" placeholder="Tenure" className="input border-1 border-gray-700  w-full " />
                <input type="text" placeholder="Interest Rate" className="input w-full  border-1 border-gray-700" />
                <button className='btn btn-primary max-w-lg'>Calculate</button>

            </div>
            {/* collaps */}
            <div className='md:px-40 lg:px-96 px-12 py-3'>
                <div>
                    <h2 className="text-center text-3xl">Overview</h2>
                </div>
                <div>
                    <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <input type="checkbox" />
                        <div class="collapse-title text-xl font-medium">
                            Features
                        </div>
                        <div className="collapse-content text-left">


                            <ul className='list-disc px-12' >
                                <li>Loan amount ranging from BDT 5 lac to BDT 200 lac</li>
                                <li>Repayment tenure 1 year to 25 years</li>
                                <li>Financing up to 70% of property value</li>
                                <li>Semi-pucca financing facility</li>
                                <li>Financing to Non Resident Bangladeshi (NRB)</li>
                                <li>Home loan with overdraft (OD) facility</li>
                                <li>No hidden cost</li>
                                <li>Early settlement facility</li>
                                <li>Loan across the country</li>
                            </ul>


                        </div>
                    </div>
                </div>

                <div>
                    <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <input type="checkbox" />
                        <div class="collapse-title text-xl font-medium">
                            Processing Fee
                        </div>
                        <div className="collapse-content">
                            <p>Please see the Schedule of Charges.</p>


                        </div>
                    </div>
                </div>
                <div>
                    <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <input type="checkbox" />
                        <div class="collapse-title text-xl font-medium">
                            Eligibility
                        </div>
                        <div className="collapse-content">

                            <ul className='list-disc px-12 text-left' >
                                <li>BDT 50,000 and above</li>
                                <li>BDT 30,000 (Government officials only)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <input type="checkbox" />
                        <div class="collapse-title text-xl font-medium">
                            Required Documents
                        </div>
                        <div className="collapse-content">
                            <p>Download basic required documents for Home Loan, please Click here</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default Loan;