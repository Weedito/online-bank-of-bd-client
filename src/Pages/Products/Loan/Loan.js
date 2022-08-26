import React from 'react';
import LoanPage from '../../../Components/Components.Rijon/LoanPage';
import { useState, useEffect } from "react";
import PageTitle from '../../PageTitle/PageTitle';

const Loan = () => {
    const [loan, setLoan] = useState(10000);
    const [duration, setDuration] = useState(1);
    const [interest, setInterest] = useState(0);
    const [dates, setDates] = useState([]);

    const getInterest = () => {
        let amountRepaid = loan - getPrincipal();
        let interestedAmount = (amountRepaid * interest) / 100;
        return Math.round((interestedAmount + Number.EPSILON) * 100) / 100;
    };

    const getPrincipal = () => {
        let dividedAmount = loan / duration;
        return Math.round((dividedAmount + Number.EPSILON) * 100) / 100;
    };

    const getTotalRepayment = () => {
        return Math.round((getInterest() + getPrincipal() + Number.EPSILON) * 100) / 100;
    };

    useEffect(() => {
        let datesArray = [];

        for (let i = 0; i < duration; i++) {
            let date = new Date();
            date = new Date(date.setMonth(date.getMonth() + 1 + i));
            datesArray.push(date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear());
        }

        setDates(datesArray);
    }, [duration]);



    return (
        <div className='max-w-7xl mx-auto pb-10'>
            {/* title */}

            <PageTitle title="Loan"></PageTitle>

            {/* end */}


            <LoanPage></LoanPage>

            <div className='grid grid-cols-1 lg:grid-cols-2 mx-12 gap-5'>
                <div data-aos="zoom-in-right" data-aos-duration="1000" class="card w-96 bg-base-100 shadow-xl m-auto">
                    <div class="card-body">
                        <form>
                            <div className="row g-3 align-items-center">
                                <div className="col-auto mb-3">
                                    <label htmlFor="loan-input" className="label-text">
                                        Loan Amount (£)
                                    </label>
                                </div>
                                <div className="col-auto">
                                    <input
                                        type="number"
                                        className="form-control input input-bordered input-accent w-full max-w-xs"
                                        id="loan-input"
                                        value={loan}
                                        onChange={e => setLoan(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="row g-3 align-items-center">
                                <div className="col-auto mt-5 mb-3">
                                    <label htmlFor="duration-input" className="form-label">
                                        Duration (in Months)
                                    </label>
                                </div>
                                <div className="col-auto">
                                    <input
                                        type="text"
                                        className="form-control input input-bordered input-accent w-full max-w-xs"
                                        id="duration-input"
                                        value={duration}
                                        onChange={e => setDuration(e.target.value)}
                                    />
                                </div>
                            </div>
                        </form>

                        <div className="col-auto">
                            <label htmlFor="interest-range" className="form-label">
                                Interest Rate (%) : {interest}
                            </label>
                        </div>
                        <div className="col-auto">
                            <input
                                type="range"
                                value={interest}
                                onChange={e => setInterest(e.target.value)}
                                min="0"
                                max="10"
                                step="1"
                                className="form-range"
                                id="interest-range"

                            />
                        </div>

                    </div>
                </div>
                <div><table className="table lg:w-full">
                    <thead>
                        <tr>
                            <th scope="col">Repayment Date</th>
                            <th scope="col">Principal</th>
                            <th scope="col">Interest</th>
                            <th scope="col">Total Repayment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dates.map((date, index) => (
                            <tr key={index}>
                                <td>{date}</td>
                                <td>{getPrincipal()}</td>
                                <td>{getInterest()}</td>
                                <td>{getTotalRepayment()}</td>
                            </tr>
                        ))}
                        <tr>
                            <td>Total</td>
                            <td>{loan}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>



        </div>
    );
};

export default Loan;