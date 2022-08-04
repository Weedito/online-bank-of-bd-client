import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import DepositModal from './DepositModal';
import WidthdrawModal from './WidthdrawModal';
import TransferMoneyModal from './TransferMoneyModal';


const MyAccounts = () => {

    const [myAccounts, setMyAccounts] = useState([]);
    const [user, loading] = useAuthState(auth);

    const [deposit, setDeposit] = useState(null);    
    const [withdraw, setWithdraw] = useState(null);
    const [transferMoney, setTransferMoney] = useState(null);


    useEffect(() => {
        const url = `http://localhost:5000/accounts?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMyAccounts(data))
    }, [user])

    if (loading) {
        return <p>Loading....</p>
    }


    return (
        <div class="overflow-x-auto">
            <table class="table table-zebra w-full">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Acc. No</th>
                        <th>Balance</th>
                        <th>Email</th>
                        <th>Acc. Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        myAccounts.map(account => <tr>
                            <th>{account?.name}</th>
                            <th>{account?.AccNo}</th>
                            <td>{account?.balance}</td>
                            <td>{account?.email}</td>
                            <td>{account?.actype}</td>

                            <td>
                                <label for="deposit-modal" onClick={() => setDeposit(account)} class="btn btn-primary btn-xs">Deposit</label>

                                <label for="withdraw-modal" onClick={() => setWithdraw(account)} class="btn btn-info btn-xs mx-4">Withdraw</label>

                                <label for="transfer-money-modal" onClick={() => setTransferMoney(account)} class="btn btn-success btn-xs">Send Money</label>
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
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