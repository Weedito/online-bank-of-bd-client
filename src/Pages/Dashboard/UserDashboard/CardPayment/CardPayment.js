import React from 'react';
import { useParams } from 'react-router-dom';
import useAccount from '../../../../Components/Components.Nahid/Hooks/useAccount';
import Loading from '../../../../Components/Components.Nahid/Loading';

const CardPayment = () => {
    const {id}=useParams();
    const { myAccount,isLoading } = useAccount();
    let existingAccount;
    if(myAccount && !isLoading){
         existingAccount = myAccount.filter(account=> account._id === id)[0];
    }
    if(!existingAccount) <Loading/>
    console.log(existingAccount);
    return (
        <div className='absolute top-0 bottom-0 right-0 left-0 min-h-screen bg-[#daf5dc] '>
            <div className='max-w-[1280px] px-2 mx-auto grid grid-cols-1 md:grid-cols-2 md:my-12 my-6' >
                <div className='account-info bg-gradient-to-r from-green-700 to-green-900 md:rounded-l-md rounded-t-md shadow-lg text-white flex flex-col items-center py-6 md:py-12'>
                    <img src={existingAccount?.ahimage} alt="user-img" className='h-20 w-20 rounded-full  my-4 border-2 border-white'/>
                    <h2 className='text-xl from-accent-focus  mb-4'>{existingAccount?.name}</h2>
                    <p className='text-sm mb-2 ' >Account Number: {existingAccount?.AccNo}</p>
                </div>
                <div className='Card-info bg-white md:py-12 py-6  md:rounded-l-md rounded-b-md flex flex-col items-center'>
                    <h3 className='text-xl from-accent-content text-gray-600 my-4'>Enter The Card Number</h3>
                    <h3>Enter The Card Number</h3>
                    <h3>Enter The Card Number</h3>
                </div>

            </div>
        </div>
    );
};

export default CardPayment;