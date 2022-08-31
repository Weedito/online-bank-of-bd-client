import { faArrowAltCircleDown, faArrowAltCircleUp, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const AccountsRow = ({ account, index, setDeposit, setWithdraw, setDeleteAccount }) => {

    const { name, AccNo, balance, phone, country, actype } = account;

    return (
        <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
            <td className="w-full lg:w-auto p-2 text-sm text-gray-800 text-center border border-b block font-semibold lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Index</span>
                {index + 1}
            </td>
            <td className="w-full lg:w-auto p-2 text-sm text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Name</span>
                {name}
            </td>
            <td className="w-full lg:w-auto p-2 text-sm text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Acc No</span>
                {AccNo} <br />
                <span className="text-xs p-1 bg-rose-700 text-white rounded-full">{actype}</span>
            </td>
            <td className="w-full lg:w-auto p-2 text-sm text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Balance</span>
                {balance}
            </td>
            <td className="w-full lg:w-auto p-2 text-sm text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Phone</span>
                {phone}
            </td>
            <td className="w-full lg:w-auto p-2 text-sm text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
                {country}
            </td>
            <td className="w-full lg:w-auto text-xs p-2 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <div className="flex justify-between px-3 pb-1 items-center">
                    <label htmlFor="deposit-modal" onClick={() => setDeposit(account)} className="btn btn-primary text-white btn-xs"><FontAwesomeIcon icon={faArrowAltCircleDown} /></label>

                    <label htmlFor="withdraw-modal" onClick={() => setWithdraw(account)} className="btn btn-info btn-xs mx-4"><FontAwesomeIcon icon={faArrowAltCircleUp} /></label>
                    
                    <label htmlFor="delete-account-modal" onClick={() => setDeleteAccount(account)} className="btn btn-secondary btn-xs"><FontAwesomeIcon icon={faTrashAlt} /></label>
                </div>
            </td>
        </tr>
    );
};

export default AccountsRow;