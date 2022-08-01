import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import DepositModal from './DepositModal';
import WidthdrawModal from './WidthdrawModal';
import SendMoneyModal from './SendMoneyModal';


const MyAccounts = () => {

    const [myAccounts, setMyAccounts] = useState([]);
    const [user, loading, error] = useAuthState(auth);

    const [deposit, setDeposit] = useState(null);    
    const [withdraw, setWithdraw] = useState(null);
    const [sendMoney, setSendMoney] = useState(null);


    useEffect(() => {
        const url = `http://localhost:5000/accounts?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMyAccounts(data))
    }, [myAccounts])

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

                                <label for="send-money-modal" onClick={() => setSendMoney(account)} class="btn btn-success btn-xs">Send Money</label>
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
                sendMoney && <SendMoneyModal sendMoney={sendMoney} ></SendMoneyModal>
            }
        </div>
    );
};

export default MyAccounts;