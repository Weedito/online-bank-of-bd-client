import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch, useSelector } from 'react-redux';
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
    myAccount?.length
}
            
            {/* {
                deposit && <DepositModal deposit={deposit} ></DepositModal>
            }
            {
                withdraw && <WidthdrawModal withdraw={withdraw} ></WidthdrawModal>
            }
            {
                transferMoney && <TransferMoneyModal transferMoney={transferMoney} ></TransferMoneyModal>
            } */}
        </div>
    );
};

export default MyAccounts;