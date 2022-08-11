import React, { useRef, useState } from 'react';
import { toast } from "react-toastify";
const DepositModal = ({ deposit, refresh,setRefresh }) => {
    const { name, AccNo, balance, _id, authemail } = deposit;
    const inputBalRef = useRef(0);
    const [error, setError] = useState('');
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const handleDeposit = () => {

        const inputBalance = parseFloat(inputBalRef.current.value);
        const depositBalance = parseFloat(balance + inputBalance);
        const updateBalance = { depositBalance,  name, AccNo, balance};

        if (depositBalance < 0) {
            return setError("Please Input more then 0");
        }

        else {
            const url = `http://localhost:5000/account/${_id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateBalance)
            })
                .then(res => res.json())
                .then(data => {
                    toast("Deposited Successfully!");
                    inputBalRef.current.value = 0;
                    setRefresh(!refresh)
                })

            // Deposit Statement Creator

            const receiverStatementData = {
                senderAccount: AccNo,
                statement: "Deposit Money",
                deposit: inputBalance,
                withdraw: 0,
                balance: parseFloat(updateBalance?.depositBalance),
                date: date,
                email: authemail,
            }

            fetch('http://localhost:5000/statement', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(receiverStatementData)
            })
                .then(res => res.json())
                .then(data => {
                    toast("Deposited")
                })
        }
    }


    return (
        <div>
            <input type="checkbox" id="deposit-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle text-center">
                <div className="modal-box w-full">
                    <label for="deposit-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='mb-4 badge badge-success text-2xl badge-lg p-4'>Deposit Money</h1>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className='my-4'>Ac. No: {AccNo}</p>
                    <p className='my-4'>Balance: {balance}</p>
                    <p className=' text-primary'>{error}</p>
                    <input ref={inputBalRef} min={10000} type="number" placeholder="$ amount" className="input input-bordered input-primary w-full max-w-xs" />
                    <div className="modal-action">
                        <label for="deposit-modal" onClick={handleDeposit} className="btn">Deposit</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepositModal;