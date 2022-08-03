import React, { useRef, useState } from 'react';
import { toast } from "react-toastify";

const DepositModal = ({ deposit }) => {
    const { name, AccNo, balance, _id } = deposit;

    const inputBalRef = useRef(0);
    const [error, setError] = useState('');

    const handleDeposit = () => {

        const inputBalance = parseFloat(inputBalRef.current.value);
        const depositBalance = parseFloat(balance + inputBalance);
        const updateBalance = { depositBalance };

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
                })
        }
    }


    return (
        <div>
            <input type="checkbox" id="deposit-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="deposit-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='mb-4 badge badge-success text-2xl badge-lg p-4'>Deposit Money</h1>
                    <h3 class="font-bold text-lg">{name}</h3>
                    <p className='my-4'>Ac. No: {AccNo}</p>
                    <p className=' text-primary'>{error}</p>
                    <input ref={inputBalRef} min={10000} type="number" placeholder="$ amount" class="input input-bordered input-primary w-full max-w-xs" />
                    <div class="modal-action">
                        <label for="deposit-modal" onClick={handleDeposit} class="btn">Deposit</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepositModal;