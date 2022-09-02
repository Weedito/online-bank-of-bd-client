import React from 'react';
import { toast } from 'react-toastify';

const LoanViewModal = (viewLoan) => {

    const loan = viewLoan && viewLoan[0];


    console.log(loan?.userEmail);

    // const handleDelete = () =>{
    //     fetch(`https://bank-of-bd.herokuapp.com/acc/${AccNo}`, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json',
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then(data => {
    //             if (data.modifiedCount > 0) {
    //                 toast('Approve Account Successfully')
    //                 // refetch();
    //             }
    //         })
    // }

    return (
        <div>
            <input type="checkbox" id="loan-view-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="loan-view-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='mb-4 badge badge-info badge-md font-semibold text-white px-5 py-3'>Review  <span className="text-rose-700 px-2">{loan?.userName}</span>'s Loan</h1>
                    <div className="flex w-full mx-auto items-center justify-center h-full">
                        <div className="flex flex-col w-full rounded-lg bg-white shadow-lg">
                            <div className="w-4/5 p-5 md:w-3/5 mx-auto">
                                <img className=" object-cover rounded-full" src={(loan?.ahimage && loan?.ahimage) || (loan?.ahupimage && loan?.ahupimage) || (loan?.ahcpimage && loan?.ahcpimage)} alt="" />
                            </div>
                            <div className="p-6 w-full md:w-5/6 mx-auto flex flex-col justify-start">
                                <h5 className="text-gray-900 text-xl font-semibold mb-2">Name: <span className="text-green-700">{loan?.name}</span></h5>
                                <p className="text-gray-700 text-xs md:text-base font-semibold mb-4">Account Type: <span className=" text-xs md:text-base px-3 py-1 rounded-full bg-rose-700 text-white">{loan?.actype}</span></p>
                                <p className="text-gray-700 text-xs md:text-base font-semibold mb-4">Account Number: {loan?.AccNo}</p>
                                <p className="text-gray-700 text-xs md:text-base font-semibold mb-4">Balance: $ {loan?.balance}</p>
                                <p className="text-gray-700 text-xs md:text-base font-semibold mb-4">Email: {loan?.accEmail}</p>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <div className="modal-action">
                        <label htmlFor="loan-view-modal" onClick={handleDelete} className="btn">Delete</label>
                    </div> */}
            </div>

        </div>
    );
};

export default LoanViewModal;