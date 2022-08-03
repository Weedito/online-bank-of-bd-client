import React from 'react';
import { StatemantData } from '../../../../Components/Components.Nahid/Data';

const Statement = () => {
    return (
        <div className=" text-left h-full w-full">

        <div className="w-full flex items-center justify-center my-12">
            <div className="bg-white shadow rounded py-12 px-8">
                {/* <p className="md:text-3xl text-xl font-bold pb-10 leading-7 text-center text-gray-700">Total Users: {users?.length}</p> */}
                <div className="w-full">
                    <table class="border-collapse w-full bg-slate-200">
                        <thead>
                            <tr className='text-center'>
                                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Index</th>
                                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Date</th>
                                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Statement</th>
                                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Deposit</th>
                                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Withdraw</th>
                                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Balance</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                StatemantData?.map((data, index) => {
                                    const {date, particulars, deposit, withdraw, balance} = data;

                                    return (

                                        <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                                            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block font-semibold lg:table-cell relative lg:static">
                                                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Index</span>
                                                {index + 1}
                                            </td>
                                            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Date</span>
                                                {date}
                                            </td>
                                            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Particulars</span>
                                                {particulars}
                                            </td>
                                            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Deposit</span>
                                                {deposit}
                                            </td>
                                            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Withdraw</span>
                                                {withdraw}
                                            </td>
                                            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Balance</span>
                                                {balance}
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

export default Statement;