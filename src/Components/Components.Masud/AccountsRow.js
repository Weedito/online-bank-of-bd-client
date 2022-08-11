import React from 'react';

const AccountsRow = ({ account, setDeposit, setWithdraw, setDeleteAccount }) => {

    const { name, AccNo, balance, phone, country, actype } = account;

    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src="https://placeimg.com/192/192/people" alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{country}</div>
                    </div>
                </div>
            </td>
            <td>
                {AccNo}
                <br />
                <span className="badge badge-ghost badge-sm">{actype}</span>
            </td>
            <td>$ {balance}</td>
            <td>{phone}</td>
            <th>
                <label for="deposit-modal" onClick={() => setDeposit(account)} className="btn btn-primary btn-xs">Deposit</label>

                <label for="withdraw-modal" onClick={() => setWithdraw(account)} className="btn btn-info btn-xs mx-4">Withdraw</label>

                <label for="delete-account-modal" onClick={() => setDeleteAccount(account)} className="btn btn-secondary btn-xs">Delete Account</label>

            </th>
        </tr>
    );
};

export default AccountsRow;