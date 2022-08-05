import React from 'react';

const Loan = () => {
    return (
        <div>

            {/* Top-part-start */}
            <div>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://previews.123rf.com/images/rastudio/rastudio2005/rastudio200500843/146663193-bank-credit-finance-management-loan-agreement-signing-mortgage-money-credit-loan-disbursement-quick-.jpg" className="w-full" />

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://thumbs.dreamstime.com/b/mortgage-loan-concept-banner-header-borrower-making-payment-real-estate-agreement-home-bank-credit-services-footer-141200536.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="http://vsvbank.com/wp-content/uploads/2016/11/ask-money-banner-3-1.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://www.bankofbaroda.in/-/media/project/bob/countrywebsites/india/personal-banking/loans/education-loan/baroda-scholar/spotlight/baroda-scholar-spotlightbanner.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Top-part-end */}
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://allaboutturkish.com/wp-content/uploads/2021/09/bank-customer-getting-loan-man-wheeling-cart-with-cash-flat-vector-illustration-finance-money-banking-service_74855-8233.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-4xl font-bold">We are always <span className='text-green-700 font-bold'>with you</span> .</h1>
                            <p className="py-6">Make your dream home a reality with easy home loans from Online Bank BD. Our wide range of options are designed to cater your every home financing need, be it purchasing a new flat, constructing a house or renovating your existing home. Allow us to be the finance partner of one of the biggest investments of your lifetime and give you a delightful experience of banking.</p>

                        </div>
                    </div>
                </div>
            </div>

            {/* box-text-new-start */}

            <div className='mx-10 justify-center mt-5'>
                <h3 className="text-3xl font-bold">Loan <span className='text-green-700 '>Informations</span></h3>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-8'>
                    <div className="card w-72 bg-warning shadow-xl">
                        <div className="card-body">
                            <h2 className='text-2xl'>BDT 5 lac - BDT 2 Crore</h2>
                            <p className='text-2xl'>Loan Amount</p>
                        </div>
                    </div>
                    <div className="card w-72 bg-warning shadow-xl">
                        <div className="card-body">
                            <h2 className='text-2xl'>1 - 25 years</h2>
                            <p className='text-2xl'>Loan Tenure</p>
                        </div>
                    </div>
                    <div className="card w-72 bg-warning shadow-xl">
                        <div className="card-body">
                            <h2 className='text-2xl'>Competitive</h2>
                            <p className='text-2xl'>Interest Rate</p>
                        </div>
                    </div>

                </div>
            </div>

















            {/* Calculate Emi-start */}
            <div className='my-10'>
                <div className="hero min-h-screen bg-base-200 ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Calculate Emi</h1>
                            <p className="py-6">You can easily calculate your emi here.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Ammount</span>
                                    </label>
                                    <input type="text" placeholder="Input ammount here" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Tenure</span>
                                    </label>
                                    <input type="text" placeholder="Tenure" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Interest Rate</span>
                                    </label>
                                    <input type="text" placeholder="Interest Rate % here" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary  bg-green-700 border-0">Calculate</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            {/* collaps */}
            <section>
                <div className='md:px-40 lg:px-96 px-12 py-3'>

                    <h2 className="text-center text-3xl">Overview</h2>

                    <div>
                        <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium">
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
                            <div className="collapse-title text-xl font-medium">
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
                            <div className="collapse-title text-xl font-medium">
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
                            <div className="collapse-title text-xl font-medium">
                                Required Documents
                            </div>
                            <div className="collapse-content">
                                <p>Download basic required documents for Home Loan, please Click here</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* collaps-end */}
        </div>

    );
};

export default Loan;