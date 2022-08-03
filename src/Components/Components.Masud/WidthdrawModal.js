import React, { useRef } from 'react';
import { toast } from 'react-toastify';

const WidthdrawModal = ({ withdraw }) => {
    const { name, AccNo, balance, _id, authemail } = withdraw;
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


    const inputBalRef = useRef('');

    const hadleWithdraw = () => {

        const inputBalance = parseFloat(inputBalRef.current.value);
        const depositBalance = parseFloat(balance - inputBalance);
        const updateBalance = { depositBalance };        

        
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
                    toast.success(`${inputBalance} withdrawal successful`)
                    inputBalRef.current.value = 0;
            })
            
            // withdraw Statement Creator

            const receiverStatementData = {
                senderAccount: AccNo,
                statement: "Withdraw Money",
                deposit: 0,
                withdraw: inputBalance,
                balance: parseFloat(updateBalance?.depositBalance),
                date: date,
                email: authemail,
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
                    
                })
    }

    return (
        <div>
            <input type="checkbox" id="withdraw-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="withdraw-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h1 className='mb-4 badge badge-info text-2xl badge-lg p-4'>Withdraw Money</h1>

                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className='my-4'>Ac. No: {AccNo}</p>

                    <input ref={inputBalRef} min={10000} type="number" placeholder="$ amount" className="input input-bordered input-primary w-full max-w-xs" />
                    <div className="modal-action">
                        <label for="withdraw-modal" onClick={hadleWithdraw} className="btn">Withdraw</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WidthdrawModal;