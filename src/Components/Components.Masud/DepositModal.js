import React, { useRef, useState } from 'react';
import { toast } from "react-toastify";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth  from "../../firebase.init"
const DepositModal = ({ deposit }) => {
    const [user, loading] = useAuthState(auth);
    const email= user.email
    const { name, AccNo, balance, _id,phone, } = deposit;
console.log(deposit,email);
    const inputBalRef = useRef(0);
    const [error, setError] = useState('');

    const handleDeposit = () => {

        const inputBalance = parseFloat(inputBalRef.current.value);
        const depositBalance = parseFloat(balance + inputBalance);
        const updateBalance = { depositBalance,  name, AccNo, balance, email, phone};

        if (depositBalance < 0) {
            return setError("Please Input more then 0");
        }

        else {
            const url = `https://bank-of-bd.herokuapp.com/account/${_id}`;
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
            <input type="checkbox" id="deposit-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="deposit-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='mb-4 badge badge-success text-2xl badge-lg p-4'>Deposit Money</h1>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className='my-4'>Ac. No: {AccNo}</p>
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