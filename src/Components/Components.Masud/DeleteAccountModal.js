import React from 'react';
import { toast } from 'react-toastify';

const DeleteAccountModal = ({deleteAccount}) => {

    const {name, AccNo, balance, _id} = deleteAccount;



    const handleDelete = id =>{
        const url = `https://bank-of-bd.herokuapp.com/account/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            toast.success(`${name} account has been deleted.`)            
        })
    }

    return (
        <div>
            <input type="checkbox" id="delete-account-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="delete-account-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='mb-4 badge  badge-error text-2xl badge-lg p-4'>Delete Account</h1>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className='my-4'>Ac. No: {AccNo}</p>                                       
                    <p className='my-4'>Balance: {balance}</p>                                       
                    <div className="modal-action">
                        <label for="delete-account-modal" onClick={() => handleDelete(_id)} className="btn">Delete</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DeleteAccountModal;