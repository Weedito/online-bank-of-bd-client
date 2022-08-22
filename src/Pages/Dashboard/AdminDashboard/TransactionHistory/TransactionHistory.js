import axios from 'axios';
import _ from "lodash";
import React, { useEffect, useState } from 'react';


const TransactionHistory = () => {

    const [transactions, setTransactions] = useState([]);
    const [paginatedData, set_paginatedData] = useState([]);
    const [currentPage, set_currentPage] = useState(1);

    const pageSize = 7;

    axios.get(`https://bank-of-bd.herokuapp.com/statements`)
        .then(function (data) {
            setTransactions(data?.data);
        })
    /* ----------------------------------------------------------------*/
    /*                      LOAD ALL TOUR DATA START                   */
    /* ----------------------------------------------------------------*/
    useEffect(() => {
        set_paginatedData(_(transactions).slice(0).take(pageSize).value(pageSize));
    }, []);

    /* ----------------------------------------------------------------*/
    /*                  PAGINATION FUNCTIONALITY START                 */
    /* ----------------------------------------------------------------*/
    const pageCount = transactions && Math.ceil(transactions.length / pageSize);
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);

    const handlePagination = (pageno) => {
        set_currentPage(pageno);
        const startIndex = (pageno - 1) * pageSize;
        const paginateData = _(transactions).slice(startIndex).take(pageSize).value();
        set_paginatedData(paginateData);
    };

    /* ----------------------------------------------------------------*/
    /*                  PAGINATION FUNCTIONALITY END                   */
    /* ----------------------------------------------------------------*/

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

                                {paginatedData &&
                                    paginatedData.map((data, index) => {
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
                        <div className="">
                            {/* Pagination */}
                            <div className="my-8 float-right">
                                <nav aria-label="Page navigation">
                                    <ul class="inline-flex space-x-2">
                                        <li>
                                            <button class="flex mr-3 items-center justify-center w-10 h-10 text-green-600 transition-colors duration-150 rounded-full focus:shadow-outline ring-1 ring-green-300 bg-green-100 hover:bg-green-500 hover:text-white">
                                                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                                    <path
                                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                        clip-rule="evenodd"
                                                        fill-rule="evenodd"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </li>
                                        {pages.map((number, index) => (
                                            <li
                                                key={index}
                                                onClick={() => handlePagination(number)}
                                                className="w-10 h-10 flex items-center justify-center text-green-600 transition-colors duration-150 rounded-full bg-green-100 hover:bg-green-300 hover:text-white focus:shadow-outline ring-1 ring-green-300 "
                                            >
                                                <button
                                                    className={
                                                        number === currentPage
                                                            ? "bg-green-500 w-10 h-10 rounded-full text-white"
                                                            : ""
                                                    }
                                                >
                                                    {number}
                                                </button>
                                            </li>
                                        ))}

                                        <li>
                                            <button class="flex items-center ml-3 justify-center w-10 h-10 text-green-600 transition-colors duration-150  rounded-full focus:shadow-outline ring-1 ring-green-300 bg-green-100 hover:bg-green-500 hover:text-white">
                                                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                                    <path
                                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                        clip-rule="evenodd"
                                                        fill-rule="evenodd"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransactionHistory;