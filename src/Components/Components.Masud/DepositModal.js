import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
const DepositModal = ({ deposit, refresh,setRefresh }) => {
    const { name, AccNo, balance, _id, accEmail } = deposit;
    const[balance1,setBalance1]=useState(0)
    const inputBalRef = useRef(0);
    const [error, setError] = useState('');
    const navigate =useNavigate()
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    console.log(deposit, accEmail);
    const inputb=inputBalRef.current.value;
    console.log("sfsklfjsfkjf",inputb, deposit, accEmail);
    const handleDeposit = () => {

        const inputBalance = parseFloat(balance1);
        const depositBalance = parseFloat(balance + inputBalance);
        const updateBalance = { depositBalance,  name, AccNo, balance};

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
                email: accEmail,
            }

            fetch('https://bank-of-bd.herokuapp.com/statement', {
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
                    <label htmlFor="deposit-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='mb-4 badge badge-success text-2xl badge-lg p-4'>Deposit Money</h1>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className='my-4'>Ac. No: {AccNo}</p>
                    <p className='my-4'>Balance: {balance}</p>
                    <p className=' text-primary'>{error}</p>
                    {/* <input ref={inputBalRef} min={10000} type="number" placeholder="$ amount" className="input input-bordered input-primary w-full max-w-xs" /> */}
                    <input name='balance' onChange={(e)=>setBalance1(parseInt(e.target.value))} min={10000} type="number" placeholder="$ amount" className="input input-bordered input-primary w-full max-w-xs" />
                    
                    <div className="modal-action flex justify-between">
                        <button
                        onClick={()=>navigate(`/payment/${_id}:${balance1}`)}
                        className='btn btn-primary'>Deposit With Card</button>
                        <label htmlFor="deposit-modal" onClick={handleDeposit} className="btn">Deposit</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepositModal;