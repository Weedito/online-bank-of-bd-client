import React, { useRef } from 'react';
import { toast } from 'react-toastify';

const WidthdrawModal = ({ withdraw, setRefresh, refresh }) => {
    const { name, AccNo, balance, _id, accEmail, ahimage, ahcpimage, ahupimage } = withdraw;
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const timeAMPM = (date) => {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
      }
      
      const time = timeAMPM(today);


    const inputBalRef = useRef('');

    const hadleWithdraw = () => {

        const inputBalance = parseFloat(inputBalRef.current.value);
        const depositBalance = parseFloat(balance - inputBalance);
        const updateBalance = { depositBalance };
        const image = ahimage || ahcpimage || ahupimage;



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
                toast.success(`${inputBalance} withdrawal successful`)
                inputBalRef.current.value = 0;
                setRefresh(!refresh)
            })


        // withdraw Statement Creator

        const receiverStatementData = {
            senderAccount: AccNo,
            statement: "Withdraw Money",
            deposit: 0,
            withdraw: inputBalance,
            balance: parseFloat(updateBalance?.depositBalance),
            date: date,
            time: time,
            email: accEmail,
            name: name,
            image: image
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
                console.log(data)
            })
    }

    return (
        <div>
            <input type="checkbox" id="withdraw-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle text-center">
                <div className="modal-box">
                    <label htmlFor="withdraw-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h1 className='mb-4 badge badge-info text-2xl badge-lg p-4'>Withdraw Money</h1>

                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className='my-4'>Ac. No: {AccNo}</p>
                    <p className='my-4'>Balance: {balance}</p>

                    <input ref={inputBalRef} min={10000} type="number" placeholder="$ amount" className="input input-bordered input-primary w-full max-w-xs" />
                    <div className="modal-action">
                        <label htmlFor="withdraw-modal" onClick={hadleWithdraw} className="btn">Withdraw</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WidthdrawModal;