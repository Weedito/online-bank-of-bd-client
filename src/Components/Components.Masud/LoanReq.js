import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllAccounts } from '../../Feature/allAccountsSlice';
import { fetchAllReqLoan } from '../../Feature/requestLoanSlice';


const LoanReq = () => {

    const { reqLoan } = useSelector(state => state.reqLoans);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllReqLoan())
        dispatch(fetchAllAccounts())
    }, []);

    const { allAccounts, isLoading, error } = useSelector(state => state?.accounts);

    if (isLoading) { return <h1>Loading....</h1> };
    if (error) { return <h1>{error}</h1> };

    const handleView = () => {

    }

    const approveLoan = (accNo, loanAmount, id) => {
        const allAccountNo = allAccounts.filter(account => account.AccNo === parseInt(accNo));        
        const { AccNo, balance, name, _id } = allAccountNo[0];
        const updateBalanceWithLoan = parseInt(balance) + parseInt(loanAmount);
        const updateBalance = { depositBalance: updateBalanceWithLoan };

        const loanUpdate = {
            status: "Approved",
        }

        // Update Balance

        const URL = `http://localhost:5000/account/${_id}`;
        axios.put(URL, updateBalance)
            .then(res => {
                console.log("Loan Approved !!!", res)
            })
            .catch(error => {
                console.log(error)
            })

        // Approved Loan status

        axios.put(`http://localhost:5000/loanRequests/${id}`, loanUpdate)
            .then(res => {
                console.log("status updated !!!", res)
            })
            .catch(error => {
                console.log(error)
            })
    }



    return (

        <div>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th>#id</th>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Loan Type</th>
                            <th>Account No</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            reqLoan && reqLoan.map((loan, index) => <tr>

                                {/* const {totalAmountTotal, interestTotal, loanType, loanPeriodYear, userEmail, userName, needToPayForEveryTransaction, phone, address} = loan; */}

                                <td>{index + 1}</td>
                                <th>{loan?.userName}</th>
                                <td>$ {loan?.totalAmountTotal}</td>
                                <td>{loan?.loanType}</td>
                                <td>{loan?.loanFromAcc}</td>
                                <td>{loan?.status}</td>
                                <td>
                                    <button className='btn btn-primary btn-xm' onClick={() => handleView()}>View</button>
                                    <button onClick={() => approveLoan(loan?.loanFromAcc, loan?.totalAmountTotal, loan?._id)} className='btn btn-primary btn-xm' disabled={loan?.status === "Approved"} >Approve</button>
                                </td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LoanReq;