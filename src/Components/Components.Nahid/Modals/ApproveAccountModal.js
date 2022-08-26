import React from 'react';
import { toast } from 'react-toastify';

const ApproveAccountModal = ({approveAccount, refetch}) => {

    const {name, AccNo, balance} = approveAccount;



    const handleApprove = () =>{
        fetch(`http://localhost:5000/acc/${AccNo}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast('Approve Account Successfully')
                    refetch();
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="approve-account-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="approve-account-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='mb-4 badge  badge-error text-2xl badge-lg p-4'>Approve Account</h1>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className='my-4'>Ac. No: {AccNo}</p>                                       
                    <p className='my-4'>Balance: {balance}</p>                                       
                    <div className="modal-action">
                        <label htmlFor="approve-account-modal" onClick={handleApprove} className="btn">Approve</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ApproveAccountModal;