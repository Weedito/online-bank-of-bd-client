import React, { useEffect, useState } from 'react';
import DeleteAccountModal from '../../../../Components/Components.Masud/DeleteAccountModal';
import DepositModal from '../../../../Components/Components.Masud/DepositModal';
import WidthdrawModal from '../../../../Components/Components.Masud/WidthdrawModal';
import AccountsRow from './AccountsRow';

const ManageAccounts = () => {

    const [accounts, setAccounts] = useState([]);
    const [deposit, setDeposit] = useState(null);
    const [withdraw, setWithdraw] = useState(null);
    const [deleteAccount, setDeleteAccount] = useState(null);

    useEffect(() => {
        fetch('https://bank-of-bd.herokuapp.com/allaccounts')
            .then(res => res.json())
            .then(data => setAccounts(data))
    }, [])




    return (
        <div className=" text-left h-full w-full">

        <div className="w-full flex items-center justify-center my-12">
            <div className="bg-white shadow rounded py-12 px-8 mb-20">
            <p className="md:text-3xl text-xl font-bold pb-10 leading-7 text-center text-gray-700">Total Accounts: {accounts?.length}</p>
                <table className="border-collapse w-full bg-slate-200">
                    {/* <!-- head --> */}
                    <thead>
                        <tr className='text-center'>
                            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Index</th>
                            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Name</th>
                            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Acc No</th>
                            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Balance</th>
                            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Phone</th>
                            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Country</th>
                            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}

                        {
                            accounts.map((account, index) =>
                                <AccountsRow
                                    key={account._id}
                                    account={account}
                                    index={index}
                                    setDeposit={setDeposit}
                                    setWithdraw={setWithdraw}
                                    setDeleteAccount={setDeleteAccount}
                                ></AccountsRow>)
                        }

                    </tbody>
                </table>
            </div>

            {
                deposit && <DepositModal deposit={deposit} ></DepositModal>
            }

            {
                withdraw && <WidthdrawModal withdraw={withdraw} ></WidthdrawModal>
            }

            {
                deleteAccount && <DeleteAccountModal deleteAccount={deleteAccount} ></DeleteAccountModal>
            }

        </div>
        </div>
    );
};

export default ManageAccounts;