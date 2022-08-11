import axios from 'axios';
import React, { useState } from 'react';


const TransactionHistory = () => {

    const [transactions, setTransactions] = useState([]);

    axios.get(`https://bank-of-bd.herokuapp.com/statements`)
        .then(function (data) {           
            setTransactions(data.data);
        })

    return (
        <div className=" text-left h-full w-full">

            <div className="w-full flex items-center justify-center my-12">
                <div className="bg-white shadow rounded py-12 px-8 mb-20">
                    <p className="md:text-3xl text-xl font-bold pb-10 leading-7 text-center text-gray-700">Total Transactions: {transactions?.length}</p>
                    <div className="w-full">
                        <table className="border-collapse w-full bg-slate-200">
                            <thead>
                                <tr className='text-center'>
                                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Index</th>
                                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Date</th>
                                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Transaction</th>
                                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Transfer</th>
                                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Withdraw</th>
                                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Balance</th>
                                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Acc. No</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    transactions?.map((data, index) => {
                                        const { date, statement, deposit, balance, withdraw, senderAccount } = data;

                                        return (

                                            <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                                                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block font-semibold lg:table-cell relative lg:static">
                                                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Index</span>
                                                    {index + 1}
                                                </td>
                                                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Date</span>
                                                    {date}
                                                </td>
                                                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Transaction</span>
                                                    {statement}
                                                </td>
                                                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Transfer</span>
                                                    {deposit}
                                                </td>
                                                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Withdraw</span>
                                                    {withdraw}
                                                </td>
                                                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Balance</span>
                                                    {balance}
                                                </td>
                                                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Acc. No</span>
                                                    {senderAccount}
                                                </td>
                                            </tr>

                                        );
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransactionHistory;