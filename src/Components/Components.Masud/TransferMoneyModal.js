import React, { useState } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from "react-hook-form";

import { toast } from 'react-toastify';
import axios from 'axios';

const TransferMoneyModal = ({ transferMoney }) => {
    const { name, AccNo, balance, _id, email } = transferMoney;
    const { register, handleSubmit, reset } = useForm();
    const [transAcc, setTransAcc] = useState();


    // console.log(balance);


    const handleAccountBlur = (e) => {
        const tccAcc = e.target.value;
        axios.get(`http://localhost:5000/accountno?accountno=${tccAcc}`)
            .then(function (data) {
                // handle success
                // console.log(data);
                setTransAcc(data?.data);
            })
    }

    const previousBalance = transAcc?.balance;
    const AccName = transAcc?.name;
    const AccNumber = transAcc?.AccNo;


    // Reciver info

    const handleTransferMoney = (data) => {

        const transName = data.name;
        const transAccNo = data.AccNo;
        const transBalance = data.balance;
        let today = new Date();

        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


        // Receiver 
        const transferAmount = previousBalance + parseFloat(transBalance);
        const transferAccountNo = transAccNo;


        // Sender
        const depositBalance = balance - parseFloat(transBalance);
        const updateBalance = { depositBalance };


        if (AccName !== transName && AccNumber !== transAccNo) {
            return (
                toast.error("Account Name & Number Doesn't Match")
            )
        } else {

            // Sender
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
                    reset();
                })

            // Receiver        
            const addBalance = { transferAmount };

            const senderUrl = `http://localhost:5000/accountno/${transferAccountNo}`;

            fetch(senderUrl, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(addBalance)
            })
                .then(res => res.json())
                .then(data => {
                    toast.success("Transfer Money Successfully")
                    reset();
                })

            // Post Data for Statemant

            const statementData = {
                senderAccount: transAccNo,
                statement: "Transfer Money",
                deposit: transBalance ? parseFloat(transBalance) : 0,
                widthdraw: 0,
                balance: depositBalance,
                data: date,
                email: email
            }

            fetch('http://localhost:5000/statement', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(statementData)
            })
                .then(res => res.json())
                .then(data => {
                    toast("Statemant Created Successfully!")
                })

        }

    }

    return (
        <div className=''>
            <input type="checkbox" id="transfer-money-modal" class="modal-toggle" />
            <div class="modal modal-bottom md:modal-middle">
                <div class="modal-box w-full">
                    <label for="transfer-money-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h1 className="font-bold text-2xl pb-4 text-green-500">Transfer Money</h1>
                    <div class="flex flex-col w-full mx-auto justify-center lg:flex-row">
                        <div class="grid flex-grow h-full w-full  py-5 card bg-base-300 rounded-box place-items-center">
                            <h3 className="text-center font-semibold py-3 text-green-700">My Account</h3>
                            <div className="w-2/3 mx-auto text-left">
                                <div className="my-2">
                                    <h3 className="text-gray-700 text-sm">Account Holer Name</h3>
                                    <p className=""><FontAwesomeIcon className='pr-2' icon={faArrowRight} /><span className="text-rose-700">{name}</span></p>
                                </div>
                                <div className="my-2">
                                    <p className="text-gray-700">Account Number</p>
                                    <p className=""><FontAwesomeIcon className='pr-2' icon={faArrowRight} /><span className="text-rose-700"> {AccNo}</span></p>
                                </div>
                                <div className="my-2">
                                    <p className="text-gray-700">Available Balance</p>
                                    <p className=""><FontAwesomeIcon className='pr-2' icon={faArrowRight} /><span className="text-rose-700">$ {balance}</span></p>
                                </div>
                                <div className="py-9 w-full flex justify-center mx-auto">
                                    <FontAwesomeIcon className='text-3xl text-green-700' icon={faArrowRight} />
                                </div>
                            </div>

                        </div>
                        <div class="divider lg:divider-horizontal"></div>
                        <div class="grid flex-grow h-full w-full py-5 card bg-base-300 rounded-box place-items-center">
                            <h3 className="text-center font-semibold text-green-700 py-3">Transfer Account</h3>
                            <form onSubmit={handleSubmit(handleTransferMoney)} action="">
                                <div class="relative z-0 my-2">
                                    <input {...register("name")} type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:green-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                                    <label for="floating_standard" class="absolute text-sm text-left w-full justify-start flex text-gray-700 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Account Holder Name</label>
                                </div>
                                <div onBlur={handleAccountBlur} class="relative z-0 my-2">
                                    {/* onBlur={accountNumber} */}

                                    <input {...register("AccNo")} type="number" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:green-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                                    <label for="floating_standard" class="absolute text-sm text-left w-full justify-start flex text-gray-700 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Account Number</label>
                                </div>
                                <div class="relative z-0 my-2">
                                    <input {...register("balance")} type="number" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:green-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                                    <label for="floating_standard" class="absolute text-sm text-left w-full justify-start flex text-gray-700 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Transfer Amount</label>
                                </div>
                                <div className="py-10 w-full flex justify-center mx-auto">
                                    <input class="inline-block px-7 py-2.5 border-2 border-green-700 text-green-700 font-medium text-xs leading-tight uppercase rounded hover:bg-gray-700 hover:text-white hover:border-rose-700 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                        data-mdb-ripple="true" data-mdb-ripple-color="light" type="submit" value="Transfer" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransferMoneyModal;