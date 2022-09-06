import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import DepositModal from '../../../../Components/Components.Masud/DepositModal';
import TransferMoneyModal from '../../../../Components/Components.Masud/TransferMoneyModal';
import WidthdrawModal from '../../../../Components/Components.Masud/WidthdrawModal';
import useAccount from '../../../../Components/Components.Nahid/Hooks/useAccount';

import PageTitle from '../../../PageTitle/PageTitle';

// import useMainAccount from '../../../../Components/Components.Nahid/Hooks/useMainAccount';



const MyAccounts = () => {

    const [deposit, setDeposit] = useState(null);
    const [withdraw, setWithdraw] = useState(null);
    const [transferMoney, setTransferMoney] = useState(null);
    const { myAccount, setRefreshAccount, refreshAccount } = useAccount();
    const navigate = useNavigate();
    // const {mainAcc} = useMainAccount();

    const account = myAccount?.filter(acc => acc?.role === 'approved');

    // console.log(mainAcc);
    return (
        <div className="">


            {/* title */}

            <PageTitle title="MyAccounts"></PageTitle>

            {/* end */}



            <div className="py-7">
                <h2 className="section-title text-center font-semibold text-2xl md:text-4xl lg:text-6xl ">
                    My <span className="text-green-700">Accounts</span>
                </h2>
            </div>
            <div className="py-7 flex justify-end">
                <a href="/openaccount" className="text-right font-semibold text-xl bg-accent text-white cursor-pointer px-7 py-2 rounded"> Open Another Account  <FontAwesomeIcon icon={faArrowCircleRight} /></a>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto w-full pt-5 items-center justify-center gap-5 pb-10 ">
                {
                    account?.map(account => {
                        const mainAcc = account?.AccNo === 777888999000;

                        return (

                            <div className=" mx-auto w-full items-center justify-center p-5 rounded-lg bg-white shadow-lg ">

                                <div className="flex flex-col md:flex-row w-full items-center p-5 rounded-lg bg-white shadow-lg">
                                    <div className="w-full p-5 md:w-2/5 items-center mx-auto">
                                        <img className=" object-cover rounded-lg" src={(account?.ahimage && account?.ahimage) || (account?.ahupimage && account?.ahupimage) || (account?.ahcpimage && account?.ahcpimage)} alt="" />
                                    </div>
                                    <div className="p-6 w-full md:w-3/5 mx-auto flex flex-col justify-start">
                                        <h5 className="text-gray-900 text-xl font-semibold mb-2">Name: <span className="text-green-700">{account?.name}</span></h5>
                                        <p className="text-gray-700 text-xs md:text-base font-semibold mb-4"><span className=" text-xs md:text-base px-3 py-1 rounded-full bg-rose-700 text-white">{account?.actype}</span></p>
                                        <p className="text-gray-700 text-xs md:text-base font-semibold mb-4">Acc No: {account?.AccNo}</p>
                                        {
                                            mainAcc ?
                                                <p className="text-gray-700 text-xs md:text-base font-semibold mb-4">Balance: $ {account?.balance?.toFixed(2)}</p> :
                                                <p className="text-gray-700 text-xs md:text-base font-semibold mb-4">Balance: $ {account?.balance}</p>
                                        }
                                        <p className="text-gray-600 text-xs">Account Created {account?.OpeningDate}</p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className=" flex items-center justify-evenly flex-col py-5 px-3 md:flex-row gap-3">
                                        <div className="flex flex-row items-center mx-auto w-full justify-evenly gap-3">
                                            <label htmlFor="deposit-modal" onClick={() => setDeposit(account)} className="btn text-white btn-primary btn-xs">Deposit</label>

                                            <label htmlFor="withdraw-modal" onClick={() => setWithdraw(account)} className="btn btn-info btn-xs mx-4">Withdraw</label>
                                        </div>

                                        <label htmlFor="transfer-money-modal" onClick={() => setTransferMoney(account)} className="btn btn-success btn-xs">Transfer Money</label>
                                    </div>
                                    <div className="flex space-x-2 justify-center">
                                        <button
                                            onClick={() => navigate(`/dashboard/myaccounts/${account?.AccNo}`)}
                                            type="button"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                            className="inline-block px-6 py-2.5 bg-sky-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                        >Explore More About This</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            {
                deposit && <DepositModal deposit={deposit} setRefreshAccount={setRefreshAccount} refreshAccount={refreshAccount} ></DepositModal>
            }
            {
                withdraw && <WidthdrawModal withdraw={withdraw} setRefreshAccount={setRefreshAccount} refreshAccount={refreshAccount}  ></WidthdrawModal>
            }
            {
                transferMoney && <TransferMoneyModal transferMoney={transferMoney} setRefreshAccount={setRefreshAccount} refreshAccount={refreshAccount}  ></TransferMoneyModal>
            }
        </div>
    );
};

export default MyAccounts;