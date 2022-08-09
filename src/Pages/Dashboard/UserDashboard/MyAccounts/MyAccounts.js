import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import DepositModal from '../../../../Components/Components.Masud/DepositModal';
import TransferMoneyModal from '../../../../Components/Components.Masud/TransferMoneyModal';
import WidthdrawModal from '../../../../Components/Components.Masud/WidthdrawModal';
import useAccount from '../../../../Components/Components.Nahid/Hooks/useAccount';


const MyAccounts = () => {

    const [deposit, setDeposit] = useState(null);
    const [withdraw, setWithdraw] = useState(null);
    const [transferMoney, setTransferMoney] = useState(null);
    const { myAccount } = useAccount();
    const navigate = useNavigate();


    return (
        <div className="">

            <h3 className="text-3xl text-center py-5 text-gray-700">My Accounts</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto w-full items-center justify-center gap-5 pb-10 ">
                {
                    myAccount?.map(account => {
                        console.log(account);
                        return (
                            <div className=" mx-auto w-full items-center justify-center ">

                                <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                                    <img class=" w-full h-auto md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={account?.acImage} alt="" />
                                    <div class="p-6 flex flex-col justify-start">
                                        <h5 class="text-gray-900 text-xl font-semibold mb-2">Name: <span className="text-green-700">{account?.name}</span></h5>
                                        <p class="text-gray-700 text-xs md:text-base font-semibold mb-4">Account Type: <span className=" text-xs md:text-base px-3 py-1 rounded-full bg-rose-700 text-white">{account?.actype}</span></p>
                                        <p class="text-gray-700 text-xs md:text-base font-semibold mb-4">Account Number: {account?.AccNo}</p>
                                        <p class="text-gray-700 text-xs md:text-base font-semibold mb-4">Balance: $ {account?.balance}</p>
                                        <p class="text-gray-600 text-xs">Account Created {account?.crDate}</p>
                                        <div className=" flex items-center justify-evenly flex-col py-5 px-3 md:flex-row gap-5">
                                            <div className="flex flex-row items-center justify-evenly gap-3">
                                                <label for="deposit-modal" onClick={() => setDeposit(account)} className="btn text-white btn-primary btn-xs">Deposit</label>

                                                <label for="withdraw-modal" onClick={() => setWithdraw(account)} className="btn btn-info btn-xs mx-4">Withdraw</label>
                                            </div>

                                            <label for="transfer-money-modal" onClick={() => setTransferMoney(account)} className="btn btn-success btn-xs">Transfer Money</label>
                                        </div>
                                        <div class="flex space-x-2 justify-center">
                                            <button
                                                onClick={() => navigate(`/dashboard/myaccounts/${account?.AccNo}`)}
                                                type="button"
                                                data-mdb-ripple="true"
                                                data-mdb-ripple-color="light"
                                                class="inline-block px-6 py-2.5 bg-sky-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                            >Explore More About This</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            {
                deposit && <DepositModal deposit={deposit} ></DepositModal>
            }
            {
                withdraw && <WidthdrawModal withdraw={withdraw} ></WidthdrawModal>
            }
            {
                transferMoney && <TransferMoneyModal transferMoney={transferMoney} ></TransferMoneyModal>
            }
        </div>
    );
};

export default MyAccounts;