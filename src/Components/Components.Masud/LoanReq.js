import React from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllAccounts } from '../../Feature/allAccountsSlice';
import { fetchAllReqLoan } from '../../Feature/requestLoanSlice';
import auth from '../../firebase.init';

const LoanReq = () => {    

    const { reqLoan } = useSelector(state => state.reqLoans);
    const dispatch = useDispatch();

    const  {allAccounts} = useSelector(state => state.accounts);


    useEffect(() => {
        dispatch(fetchAllReqLoan())
        dispatch(fetchAllAccounts())
    }, [])

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
                                <td>{loan?.status}</td>
                                <td>
                                    <button className='btn btn-primary btn-xm'>View</button>
                                    <button className='btn btn-primary btn-xm'>Approve</button>
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