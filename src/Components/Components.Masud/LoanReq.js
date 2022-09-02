import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchAllAccounts } from '../../Feature/allAccountsSlice';
import { fetchAllReqLoan } from '../../Feature/requestLoanSlice';
import LoanViewModal from '../Components.Nahid/Modals/LoanViewModal';
import DeleteLoanModal from './DeleteLoanModal';


const LoanReq = () => {

    const { reqLoan } = useSelector(state => state.reqLoans);
    const dispatch = useDispatch();

    const [viewLoan, setViewLoan] = useState(null);
    const [deleteLoan, setDeleteLoan] = useState(null);

    useEffect(() => {
        dispatch(fetchAllReqLoan())
        dispatch(fetchAllAccounts())
    }, []);

    const { allAccounts, isLoading, error } = useSelector(state => state?.accounts);

    if (isLoading) { return <h1>Loading....</h1> };
    if (error) { return <h1>{error}</h1> };


    

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
                toast.success(`${name}'s Loan Approved!`)
            })
            .catch(error => {
                console.log(error)
            })
    }



    return (

        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

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
                                    <label htmlFor="loan-view-modal" onClick={() => setViewLoan(loan)} className="btn text-white btn-accent btn-xs">View</label>
                                    
                                    
                                    <button onClick={() => approveLoan(loan?.loanFromAcc, loan?.totalAmountTotal, loan?._id)} className='btn btn-primary btn-xs mx-2' disabled={loan?.status === "Approved"} >Approve</button>

                                    <label htmlFor="delete-loan-modal" onClick={() => setDeleteLoan(loan)} className="btn text-white btn-error btn-xs mr-2">Delete</label>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

            {
                viewLoan && <LoanViewModal viewLoan={viewLoan}></LoanViewModal>
            }
            {
                deleteLoan && <DeleteLoanModal deleteLoan={deleteLoan}></DeleteLoanModal>
            }


        </div>
    );
};

export default LoanReq;