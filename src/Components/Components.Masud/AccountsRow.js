import React from 'react';

const AccountsRow = ({ account, setDeposit, setWithdraw, setDeleteAccount }) => {

    const { name, AccNo, balance, phone, country, actype } = account;

    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" class="checkbox" />
                </label>
            </th>
            <td>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                            <img src="https://placeimg.com/192/192/people" alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div class="font-bold">{name}</div>
                        <div class="text-sm opacity-50">{country}</div>
                    </div>
                </div>
            </td>
            <td>
                {AccNo}
                <br />
                <span class="badge badge-ghost badge-sm">{actype}</span>
            </td>
            <td>$ {balance}</td>
            <td>{phone}</td>
            <th>
                <label for="deposit-modal" onClick={() => setDeposit(account)} class="btn btn-primary btn-xs">Deposit</label>

                <label for="withdraw-modal" onClick={() => setWithdraw(account)} class="btn btn-info btn-xs mx-4">Withdraw</label>

                <label for="delete-account-modal" onClick={() => setDeleteAccount(account)} class="btn btn-secondary btn-xs">Delete Account</label>

            </th>
        </tr>
    );
};

export default AccountsRow;