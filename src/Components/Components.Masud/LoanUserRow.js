import React, { useEffect, useState } from 'react';
import { fetchAllReqLoan } from '../../Feature/requestLoanSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Components.Nahid/Loading';
import LoanViewModal from '../Components.Nahid/Modals/LoanViewModal';

const LoanUserRow = () => {

    const { reqLoan } = useSelector(state => state.reqLoans);
    const dispatch = useDispatch();
    const [viewLoan, setViewLoan] = useState(null);

    useEffect(() => {
        dispatch(fetchAllReqLoan())
    }, []);

    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading />
    }
    
    const individualLoan = reqLoan.filter(loan => loan.userEmail === user?.email);

    return (
        <div className='py-10'>
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
                            individualLoan && individualLoan?.map((loan, index) => <tr>

                                {/* const {totalAmountTotal, interestTotal, loanType, loanPeriodYear, userEmail, userName, needToPayForEveryTransaction, phone, address} = loan; */}

                                <td>{index + 1}</td>
                                <th>{loan?.userName}</th>
                                <td>$ {loan?.totalAmountTotal}</td>
                                <td>{loan?.loanType}</td>
                                <td>{loan?.loanFromAcc}</td>
                                <td>{loan?.status}</td>
                                <td>
                                    <div className="flex justify-between px-3 pb-1 gap-2 items-center">
                                        <label htmlFor="loan-view-modal" onClick={() => setViewLoan(loan)} className="btn text-white btn-accent btn-xs">View</label>
                                    </div>
                                </td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
            {
                viewLoan && <LoanViewModal viewLoan={viewLoan}></LoanViewModal>
            }
        </div>
    );
};

export default LoanUserRow;