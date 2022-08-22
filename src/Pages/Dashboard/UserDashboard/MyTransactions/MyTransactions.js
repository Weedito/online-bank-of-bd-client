import React, { useEffect, useState } from 'react';
import useAccount from '../../../../Components/Components.Nahid/Hooks/useAccount';
import Loading from '../../../../Components/Components.Nahid/Loading';
import TransactionDetails from './TransactionDetails';
import _ from "lodash";

const MyTransactions = () => {
    const { myAccount, isLoading } = useAccount();
    const [currentAccount, setCurrentAccount] = useState();
    const [transactions, setTransactions] = useState([]);
    const [myTransactions, setMyTransactions] = useState([]);
    const frstacc = myAccount && myAccount[0]?.AccNo;
    const [selectAcc, setSelectAcc] = useState(frstacc);

    const trAcc = currentAccount && currentAccount[0];
    const [paginatedData, set_paginatedData] = useState([]);
    const [currentPage, set_currentPage] = useState(1);

    const pageSize = 7;

    const handleSelect = (e) => {
        const acc = e.target.value;
        setSelectAcc(acc);
    }

    
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

    /* ----------------------------------------------------------------*/
    /*                      LOAD ALL TOUR DATA START                   */
    /* ----------------------------------------------------------------*/
/*     useEffect(() => {
        set_paginatedData(_(myTransactions).slice(0).take(pageSize).value(pageSize));
    }, [myAccount,myTransactions]);
 */

    if (isLoading) {
        return <Loading />
    }


    /* ----------------------------------------------------------------*/
    /*                  PAGINATION FUNCTIONALITY START                 */
    /* ----------------------------------------------------------------*/
/*     const pageCount = myTransactions && Math.ceil(myTransactions.length / pageSize);
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);

    const handlePagination = (pageno) => {
        set_currentPage(pageno);
        const startIndex = (pageno - 1) * pageSize;
        const paginateData = _(myTransactions).slice(startIndex).take(pageSize).value();
        set_paginatedData(paginateData);
    }; */

    /* ----------------------------------------------------------------*/
    /*                  PAGINATION FUNCTIONALITY END                   */
    /* ----------------------------------------------------------------*/


    return (
        <div className=" text-left h-full w-full">

            <div className="w-full flex items-center justify-center my-12">
                <div className=" shadow rounded py-12 px-8 mb-20">
                    <div className="text-gray-700 flex py-7 items-center justify-center gap-2 font-semibold text-xl lg:text-3xl">
                        <h3 className="text-sm md:text-2xl font-semibold pr-2">Select Your Account</h3>
                        <div className="">

                            <select onChange={handleSelect} className="select focus:outline-none select-ghost w-full text-md md:text-xl">
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
                                  myTransactions?.slice().reverse()
                                    .map((trc) => <TransactionDetails key={trc._id} trc={trc} />)
                                    // myTransactions?.reverse().map((trc) => <TransactionDetails key={trc._id} trc={trc} />)
                                }

                            </tbody>
                        </table>
{/*                       <div className="">
                            
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
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyTransactions;