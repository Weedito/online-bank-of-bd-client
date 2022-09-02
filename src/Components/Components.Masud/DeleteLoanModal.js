import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const LoanViewModal = ({deleteLoan}) => {   
    const {address, interestTotal, loanFromAcc, loanPeriodYear , loanType, needToPayForEveryTransaction, phone, status, totalAmountTotal, userEmail, _id } = deleteLoan;

    const handleDelete = id => {
        axios.delete(`http://localhost:5000/loanRequests/${id}`)
        .then(data => {
            toast.warn(`Loan deleted Successfully!`);                      
        })
    }


// console.log(loan?.userEmail);   

    return (
        <div>
            <input type="checkbox" id="delete-loan-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="delete-loan-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='mb-4 badge badge-info badge-md font-semibold text-white px-5 py-3'>Review  <span className="text-rose-700 px-2"></span>Loan</h1>
                    <div className="flex w-full mx-auto items-center justify-center h-full">
                <div className="flex flex-col w-full rounded-lg bg-white shadow-lg">                   
                    <div className="p-6 w-full md:w-5/6 mx-auto flex flex-col justify-start">                        
                        <p className="text-gray-700 text-xs md:text-base font-semibold mb-4">Account Number: {loanFromAcc}</p>
                        <p className="text-gray-700 text-xs md:text-base font-semibold mb-4">Interest Total: $ {interestTotal}</p>
                        <p className="text-gray-700 text-xs md:text-base font-semibold mb-4">Email: {userEmail}</p>                       
                        <p className="text-gray-700 text-xs md:text-base font-semibold mb-4">Phone: {phone}</p>                        
                        <p className="text-gray-700 text-xs md:text-base font-semibold mb-4">Loan Total Amount: {totalAmountTotal}</p>                        
                        <p className="text-gray-700 text-xs md:text-base font-semibold mb-4">Address: {address}</p>
                        <p className="text-gray-600 text-xs md:text-base font-semibold mb-4"> Loan Type: {loanType} Month's</p>                        
                    </div>
                    <label htmlFor="delete-loan-modal" className='btn btn-error btn-md' onClick={()=> handleDelete(_id)}>Yes, Delete</label>
                </div>

            </div>                                    
                    {/* <div className="modal-action">
                        <label htmlFor="loan-view-modal" onClick={handleDelete} className="btn">Delete</label>
                    </div> */}
                </div>
            </div>

        </div>
    );
};

export default LoanViewModal;