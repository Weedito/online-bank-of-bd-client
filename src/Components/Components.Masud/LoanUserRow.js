import React, { useEffect } from 'react';
import { fetchAllReqLoan } from '../../Feature/requestLoanSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Components.Nahid/Loading';

const LoanUserRow = () => {

    const { reqLoan } = useSelector(state => state.reqLoans);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllReqLoan())      
    }, []);

    const [user, loading] = useAuthState(auth);
    if(loading) {
        return <Loading/>
    }

    

    const individualLoan = reqLoan.filter(loan => loan.userEmail === user?.email);

    const handleView = () => {

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
                            individualLoan && individualLoan.map((loan, index) => <tr>

                                {/* const {totalAmountTotal, interestTotal, loanType, loanPeriodYear, userEmail, userName, needToPayForEveryTransaction, phone, address} = loan; */}

                                <td>{index + 1}</td>
                                <th>{loan?.userName}</th>
                                <td>$ {loan?.totalAmountTotal}</td>
                                <td>{loan?.loanType}</td>
                                <td>{loan?.loanFromAcc}</td>
                                <td>{loan?.status}</td>
                                <td>
                                    <button className='btn btn-primary btn-xm' onClick={() => handleView()}>View</button>                                   
                                </td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LoanUserRow;