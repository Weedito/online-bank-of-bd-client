import React from 'react';

const Loan = () => {
    return (
        <div>
            {/* Top-part-start */}
            <div>
                <div class="carousel w-full">
                    <div id="slide1" class="carousel-item relative w-full">
                        <img src="https://previews.123rf.com/images/rastudio/rastudio2005/rastudio200500843/146663193-bank-credit-finance-management-loan-agreement-signing-mortgage-money-credit-loan-disbursement-quick-.jpg" class="w-full" />

                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" class="btn btn-circle">❮</a>
                            <a href="#slide2" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" class="carousel-item relative w-full">
                        <img src="https://thumbs.dreamstime.com/b/mortgage-loan-concept-banner-header-borrower-making-payment-real-estate-agreement-home-bank-credit-services-footer-141200536.jpg" class="w-full" />
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" class="btn btn-circle">❮</a>
                            <a href="#slide3" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" class="carousel-item relative w-full">
                        <img src="http://vsvbank.com/wp-content/uploads/2016/11/ask-money-banner-3-1.png" class="w-full" />
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" class="btn btn-circle">❮</a>
                            <a href="#slide4" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" class="carousel-item relative w-full">
                        <img src="https://www.bankofbaroda.in/-/media/project/bob/countrywebsites/india/personal-banking/loans/education-loan/baroda-scholar/spotlight/baroda-scholar-spotlightbanner.jpg" class="w-full" />
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" class="btn btn-circle">❮</a>
                            <a href="#slide1" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Top-part-end */}
            <div>
                <div class="hero min-h-screen bg-base-200">
                    <div class="hero-content flex-col lg:flex-row">
                        <img src="https://allaboutturkish.com/wp-content/uploads/2021/09/bank-customer-getting-loan-man-wheeling-cart-with-cash-flat-vector-illustration-finance-money-banking-service_74855-8233.jpg" class="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 class="text-5xl font-bold">We are always with you.</h1>
                            <p class="py-6">Make your dream home a reality with easy home loans from Online Bank BD. Our wide range of options are designed to cater your every home financing need, be it purchasing a new flat, constructing a house or renovating your existing home. Allow us to be the finance partner of one of the biggest investments of your lifetime and give you a delightful experience of banking.</p>
                           
                        </div>
                    </div>
                </div>
            </div>
           
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
            {/* Calculate Emi-start */}
            <div>
                <div class="hero min-h-screen bg-base-200">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <div class="text-center lg:text-left">
                            <h1 class="text-5xl font-bold">Calculate Emi</h1>
                            <p class="py-6">You can easily calculate your emi here.</p>
                        </div>
                        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div class="card-body">
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Ammount</span>
                                    </label>
                                    <input type="text" placeholder="Input ammount here" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Tenure</span>
                                    </label>
                                    <input type="text" placeholder="Tenure" class="input input-bordered" />

                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Interest Rate</span>
                                    </label>
                                    <input type="text" placeholder="Interest Rate % here" class="input input-bordered" />
                                </div>
                                <div class="form-control mt-6">
                                    <button class="btn btn-primary">Calculate</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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