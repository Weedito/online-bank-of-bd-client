import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../../../Components/Components.Nahid/Loading';
import auth from '../../../../firebase.init';


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
        return <Loading />
    }


    return (
        <div className="">

<h3 className="text-3xl text-gray-700">My Accounts</h3>
            {/* {
                myAccounts.map((account, index) => {
                    const { name, AccNo, balance, email, actype } = account;
                    return (
                        <div className="">
                            <div className="rounded-md p-5">
                                <h3 className="text-3xl text-gray-700">Name:</h3>
                                <h3 className="text-3xl text-gray-700">Name:</h3>
                                <h3 className="text-3xl text-gray-700">Name:</h3>
                                <h3 className="text-3xl text-gray-700">Name:</h3>
                                <h3 className="text-3xl text-gray-700">Name:</h3>
                                <h3 className="text-3xl text-gray-700">Name:</h3>
                            </div>
                        </div>
                    );
                })
            } */}
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