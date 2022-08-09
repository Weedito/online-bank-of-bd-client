import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch, useSelector } from 'react-redux';
import DepositModal from '../../../../Components/Components.Masud/DepositModal';
import TransferMoneyModal from '../../../../Components/Components.Masud/TransferMoneyModal';
import WidthdrawModal from '../../../../Components/Components.Masud/WidthdrawModal';
import useAccount from '../../../../Components/Components.Nahid/Hooks/useAccount';
import Loading from '../../../../Components/Components.Nahid/Loading';
import { getUserAccount } from '../../../../Components/Components.Tanvir/ReduxStateManagement/Actions/action';
import auth from '../../../../firebase.init';


const MyAccounts = () => {

    const [myAccounts, setMyAccounts] = useState([]);
    const [user, loading] = useAuthState(auth);

    const [deposit, setDeposit] = useState(null);
    const [withdraw, setWithdraw] = useState(null);
    const [transferMoney, setTransferMoney] = useState(null);
    const [refresh,setRefresh]=useState(false)
    const {myAccount} = useAccount();


    return (
        <div className="">

<h3 className="text-3xl text-gray-700">My Accounts</h3>
{
    myAccount?.map(account => {
        return(
            <div className="">
                <div className="">
                    <h3 className="text-xl">Name: {account?.name}</h3>
                    <h3 className="text-xl">Email: {account?.email}</h3>
                    <h3 className="text-xl">Balance: {account?.balance}</h3>
                    <h3 className="text-xl">Deposit: {account?.deposit}</h3>
                    <h3 className="text-xl">Withdraw: {account?.withdraw}</h3>
                    <label for="deposit-modal" onClick={() => setDeposit(account)} className="btn btn-primary btn-xs">Deposit</label>

<label for="withdraw-modal" onClick={() => setWithdraw(account)} className="btn btn-info btn-xs mx-4">Withdraw</label>

<label for="transfer-money-modal" onClick={() => setTransferMoney(account)} className="btn btn-success btn-xs">Transfer Money</label>                </div>
            </div>
        )
    })
}
            
            {
                deposit && <DepositModal deposit={deposit} ></DepositModal>
            }
            {
                withdraw && <WidthdrawModal withdraw={withdraw} ></WidthdrawModal>
            }
            {
                transferMoney && <TransferMoneyModal transferMoney={transferMoney} ></TransferMoneyModal>
            }
        </div>
    );
};

export default MyAccounts;