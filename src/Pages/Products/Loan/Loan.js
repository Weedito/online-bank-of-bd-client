import React from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from "react";
import { ShareHolderData } from '../../../Components/Components.Nahidul/Data';

const Loan = () => {
    //calculator
    const [loan, setLoan] = useState(10000);
    const [duration, setDuration] = useState(1);
    const [interest, setInterest] = useState(0);
    const [dates, setDates] = useState([]);

    const getInterest = (month) => {
        let amountRepaid = loan - getPrincipal(month);
        let interestedAmount = (amountRepaid * interest) / 100;
        return Math.round((interestedAmount + Number.EPSILON) * 100) / 100;
    };

    const getPrincipal = (month) => {
        let dividedAmount = (loan / duration) * month;
        return Math.round((dividedAmount + Number.EPSILON) * 100) / 100;
    };

    const getTotalRepayment = (month) => {
        return (
            Math.round((getInterest(month) + getPrincipal(month) + Number.EPSILON) * 100) / 100
        );
    };

    useEffect(() => {
        let datesArray = [];

        for (let i = 1; i <= duration; i++) {
            let date = new Date();
            date = new Date(date.setMonth(date.getMonth() + 1 + i));
            datesArray.push({
                date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
                month: i
            });
        }

        setDates(datesArray);
    }, [duration]);
    //loan end
    return (
        <div className='mx-auto max-w-7xl'>
            {/* Top-part-end */}
            <div>
                <div className="hero min-h-screen bg-slate-100">
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
            <section>
                <div className='mx-10 justify-center mt-5'>
                    <h3 className="text-3xl font-bold">Loan <span className='text-green-700 '>Informations</span></h3>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-8'>
                        <div class="card w-72 bg-green-500 hover:bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h2 className='text-2xl'>BDT 5 lac - BDT 2 Crore</h2>
                                <p className='text-2xl'>Loan Amount</p>
                            </div>
                        </div>
                        <div class="card w-72 bg-green-500  hover:bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h2 className='text-2xl'>1 - 25 years</h2>
                                <p className='text-2xl'>Loan Tenure</p>
                            </div>
                        </div>
                        <div class="card w-72 bg-green-500  hover:bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h2 className='text-2xl'>Competitive</h2>
                                <p className='text-2xl'>Interest Rate</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* home-loan-part */}
            <div class="hero min-h-screen bg-base-200 my-5">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://bizdatainsights.com/wp-content/uploads/2021/12/home-loan.jpg" class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Make your <span className='text-green-700 '>Own Home</span></h1>
                        <p class="py-6">Make your dream home a reality with easy home loans from Online Bank BD. Our wide range of options are designed to cater your every home financing need, be it purchasing a new flat, constructing a house or renovating your existing home. Allow us to be the finance partner of one of the biggest investments of your lifetime and give you a delightful experience of banking.</p>

                        <button class="btn btn-primary">Get Started</button>

                    </div>
                </div>
            </div>
            {/* home-loan-end */}

            {/* box-text-new-start */}
            <section>
                <div className='mx-10 justify-center mt-5'>
                    <h3 className="text-3xl font-bold">Loan <span className='text-green-700 '>Informations</span></h3>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-8'>
                        <div class="card w-72 bg-green-500  hover:bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h2 className='text-2xl'>BDT 1 Lac - BDT 20 Lac</h2>
                                <p className='text-2xl'>Loan Amount</p>
                            </div>
                        </div>
                        <div class="card w-72 bg-green-500  hover:bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h2 className='text-2xl'>12 - 60 months</h2>
                                <p className='text-2xl'>Loan Tenure</p>
                            </div>
                        </div>
                        <div class="card w-72 bg-green-500  hover:bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h2 className='text-2xl'>Competitive</h2>
                                <p className='text-2xl'>Interest Rate</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* personal-loan-start */}
            <div class="hero min-h-screen bg-base-200 my-5">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://us.123rf.com/450wm/netsay/netsay1609/netsay160932714/63517082-man-hand-writing-personal-loan-with-black-marker-on-visual-screen-isolated-on-sunbed-on-the-beach-bu.jpg?ver=6" class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Personal <span className='text-green-700 '>Loan</span></h1>
                        <p class="py-6">Whatever the occasion or requirement, make smart financial choice with Online Bank BD Personal Loan to fulfill all your dreams, reach to new heights and make your day to day journey of life joyful.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            {/* statup-loan-end */}

          
            {/* new calculator-start */}
            <h1 class="text-5xl text-center font-bold my-5">Emi <span className='text-green-700 '>Calculator</span></h1>
            <React.Fragment>
                <header>
                    <h1>Your Loan</h1>
                </header>
                <main>
                    <form>
                        <div className="row g-3 align-items-center">
                            <div className="col-auto">
                                <label htmlFor="loan-input" className="form-label">
                                    Loan Amount (Tk)
                                </label>
                            </div>
                            <div className="col-auto">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="loan-input"
                                    value={loan}
                                    onChange={(e) => setLoan(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row g-3 align-items-center">
                            <div className="col-auto">
                                <label htmlFor="duration-input" className="form-label">
                                    Duration (in Months)
                                </label>
                            </div>
                            <div className="col-auto">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="duration-input"
                                    value={duration}
                                    onChange={(e) => setDuration(e.target.value)}
                                />
                            </div>
                        </div>
                    </form>
                    <div className="row g-3 align-items-center">
                        <div className="col-auto">
                            <label htmlFor="interest-range" className="form-label">
                                Interest Rate (%) : {interest}
                            </label>
                        </div>
                        <div className="col-auto">
                            <input
                                type="range"
                                value={interest}
                                onChange={(e) => setInterest(e.target.value)}
                                min="0"
                                max="10"
                                step="1"
                                className="form-range"
                                id="interest-range"
                            />
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Repayment Date</th>
                                    <th scope="col">Principal</th>
                                    <th scope="col">Interest</th>
                                    <th scope="col">Total Repayment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dates.map((emi, index) => {
                                    const { date, month } = emi;
                                    return (
                                        <tr key={index}>
                                            <td>{date}</td>
                                            <td>{getPrincipal(month)}</td>
                                            <td>{getInterest(month)}</td>
                                            <td>{getTotalRepayment(month)}</td>
                                        </tr>
                                    );
                                })}
                                <tr>
                                    <td>Total</td>
                                    <td>{loan}</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </main>
            </React.Fragment>
            {/* new calculator-end */}




            {/* collaps */}



            <h2 className="text-center text-3xl">Overview</h2>

            <div className="w-full md:w-4/5 mx-auto py-10">
                <div class="accordion" id="accordionExample">
                    {
                        ShareHolderData.map((item, idx) => {
                            return (
                                <div key={idx} class="accordion-item bg-white border border-gray-200">
                                    <h2 class="accordion-header mb-0" id="headingOne">
                                        <button class=" accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left  bg-white border-0 rounded-none transition focus:outline-none marker:"
                                            type="button" data-bs-toggle="collapse" data-bs-target={`#${item?.index}`} aria-expanded="true"
                                            aria-controls={item?.index}>
                                            <span className="text-green-700 font-bold"> <span className="font-bold text-md"><FontAwesomeIcon icon={faPlus} /></span> {item?.name} </span>
                                        </button>
                                    </h2>
                                    <div id={item?.index} class="accordion-collapse collapse" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body py-4 px-5 flex justify-around items-center">
                                            <div className="w-3/6">

                                                <h3 className="text-2xl md:text-3xl py-5 text-gray-800 font-semibold text-left">{item?.name}</h3>
                                                <p className="text-xl text-left">{item?.discriptions}</p>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>























            {/* collaps new-start */}
            <div className='md:px-40 lg:px-96 px-12 py-3'>

                <div class="collapse">
                    <input type="checkbox" />
                    <div class="collapse-title text-xl font-medium">
                        Click me to show/hide content
                    </div>
                    <div class="collapse-content">
                        <p>hello</p>
                    </div>
                </div>


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

            {/* collaps-end */}
        </div>

    );
};

export default Loan;