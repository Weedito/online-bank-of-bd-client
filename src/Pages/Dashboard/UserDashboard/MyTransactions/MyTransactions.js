import React, { useEffect, useState } from 'react';
import useAccount from '../../../../Components/Components.Nahid/Hooks/useAccount';
import Loading from '../../../../Components/Components.Nahid/Loading';
import TransactionDetails from './TransactionDetails';

const MyTransactions = () => {
    const { myAccount, isLoading } = useAccount();
    const [currentAccount, setCurrentAccount] = useState();
    const [transactions, setTransactions] = useState([]);
    const [myTransactions, setMyTransactions] = useState([]);
    const frstacc = myAccount && myAccount[0]?.AccNo;
    const [selectAcc, setSelectAcc] = useState(frstacc);

    const trAcc = currentAccount && currentAccount[0];

    useEffect(() => {
        const account = myAccount?.filter(ac => ac.AccNo === parseInt(selectAcc));
        setCurrentAccount(account);
    }, [myAccount, selectAcc]);

    useEffect(() => {
        fetch('https://bank-of-bd.herokuapp.com/statements')
            .then(res => res.json())
            .then(data => setTransactions(data))
    }, [])

    useEffect(() => {
        const trc = transactions.filter((transaction) => transaction?.senderAccount === trAcc?.AccNo);
        setMyTransactions(trc);
    }, [transactions, trAcc]);


    const handleSelect = (e) => {
        const acc = e.target.value;
        setSelectAcc(acc);
    }


    if (isLoading) {
        return <Loading />
    }

    // myTransactions.sort((a, b) => (a.date < b.date) ? 1 : -1)


    return (
        <div className=" text-left h-full w-full">

            <div className="w-full flex items-center justify-center my-12">
                <div className=" shadow rounded py-12 px-8 mb-20">
                    <div className="text-gray-700 flex py-7 items-center justify-center gap-2 font-semibold text-xl lg:text-3xl">
                        <h3 className="text-sm md:text-2xl font-semibold pr-2">Select Your Account</h3>
                        <div className="">

                            <select onChange={handleSelect} class="select focus:outline-none select-ghost w-full text-md md:text-xl">
                                {
                                    myAccount?.map(account => <option >{account?.AccNo}</option>)
                                }
                            </select>
                        </div>
                    </div>
                    <p className="md:text-3xl text-xl font-bold pb-10 leading-7 text-center text-gray-700">Total Transactions: {myTransactions?.length}</p>
                    <div className="w-full">
                        <table className="border-collapse w-full bg-slate-200">
                            <thead>
                                <tr className='text-center'>
                                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Date</th>
                                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Account Number</th>
                                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Statement</th>
                                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Transaction</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    myTransactions.slice().reverse()
                                    .map((trc) => <TransactionDetails key={trc._id} trc={trc} />)
                                    // myTransactions?.reverse().map((trc) => <TransactionDetails key={trc._id} trc={trc} />)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyTransactions;