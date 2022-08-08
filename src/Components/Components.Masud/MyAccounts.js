import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import DepositModal from './DepositModal';
import WidthdrawModal from './WidthdrawModal';
import TransferMoneyModal from './TransferMoneyModal';
import { useSelector,useDispatch } from 'react-redux';
import { getUserAccount } from '../Components.Tanvir/ReduxStateManagement/Actions/action';
const MyAccounts = () => {

    
    const [user, loading] = useAuthState(auth);

    const [deposit, setDeposit] = useState(null);
    const [withdraw, setWithdraw] = useState(null);
    const [transferMoney, setTransferMoney] = useState(null);
    const [refresh,setRefresh]=useState(false)
    const dispatch = useDispatch();

    //////  load user account
    const {isLoading,myAccount,error} = useSelector(state=>state)
    useEffect(()=>{
    dispatch(getUserAccount(user.email))
    },[user, refresh])
    //////


    if (loading, isLoading) {
        return <p>Loading....</p>
    }


    return (
        <div className="overflow-x-auto">
            {error&& <h2>{error.message}</h2>}
            <table className="table table-zebra w-full">

                <thead>
                    <tr className='text-center'>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Index</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Name</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Acc No</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Balance</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Email</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Acc Type</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        myAccount.map((account, index) => {
                            const { name, AccNo, balance, email, actype } = account;
                            return (

                                <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block font-semibold lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Index</span>
                                        {index + 1}
                                    </td>
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Name</span>
                                        {name}
                                    </td>
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Acc No</span>
                                        {AccNo}
                                    </td>
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Balance</span>
                                        {balance}
                                    </td>
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Email</span>
                                        {email}
                                    </td>
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Acc Type</span>
                                        {actype}
                                    </td>
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Action</span>
                                        <label for="deposit-modal" onClick={() => setDeposit(account)} className="btn btn-primary btn-xs">Deposit</label>

                                        <label for="withdraw-modal" onClick={() => setWithdraw(account)} className="btn btn-info btn-xs mx-4">Withdraw</label>

                                        <label for="transfer-money-modal" onClick={() => setTransferMoney(account)} className="btn btn-success btn-xs">Send Money</label>
                                    </td>
                                </tr>

                            );
                        } )
                    }
                </tbody>
            </table>
            {
                deposit && <DepositModal deposit={deposit} setRefresh={setRefresh} refresh={refresh}  ></DepositModal>
            }
            {
                withdraw && <WidthdrawModal withdraw={withdraw} setRefresh={setRefresh} refresh={refresh} ></WidthdrawModal>
            }
            {
                transferMoney && <TransferMoneyModal transferMoney={transferMoney} setRefresh={setRefresh} refresh={refresh} ></TransferMoneyModal>
            }
        </div>
    );
};

export default MyAccounts;