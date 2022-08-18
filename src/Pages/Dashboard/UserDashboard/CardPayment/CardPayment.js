import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useParams } from 'react-router-dom';
import useAccount from '../../../../Components/Components.Nahid/Hooks/useAccount';
import Loading from '../../../../Components/Components.Nahid/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51LXkLpJ087W2neXfEx5v1T4ewb0l3tAGRM7fOI4YAm5maotPk9n1lVbth2HeVgdyYHvnt86JQPRTx5uF68g4eW2A00juw6Z3qA');
const CardPayment = () => {
    const {id}=useParams();
    const { myAccount,isLoading } = useAccount();
    let existingAccount;
    const inputBalance=parseInt(id.split(":")[1])
    const accountId=id.split(":")[0];
    
    if(myAccount && !isLoading){
         existingAccount = myAccount.filter(account=> account._id === accountId)[0];
    }
    if(!existingAccount) <Loading/>
    console.log(existingAccount);
    return (
        <div className=' min-h-screen w-full bg-[#daf5dc] '>
            <div className='max-w-[1280px] px-2 mx-auto grid grid-cols-1 md:grid-cols-2 md:my-12 my-6' >
                <div className='account-info bg-gradient-to-r from-green-700 to-green-900 md:rounded-l-md rounded-t-md shadow-lg text-white flex flex-col items-center py-6 md:py-12'>
                    <img src={existingAccount?.ahimage} alt="user-img" className='h-20 w-20 rounded-full  my-4 border-2 border-white'/>
                    <h2 className='text-xl from-accent-focus  mb-4'>{existingAccount?.name}</h2>
                    <h2 className='my-2 text-white text-center'>Your Input Balance {inputBalance}</h2>
                    <p className='text-sm mb-2 ' >Account Number: {existingAccount?.AccNo}</p>
                </div>
                <div className='Card-info bg-white md:py-12 py-6 md:px-8 px-4   md:rounded-l-md rounded-b-md flex flex-col items-center'>
                    <h3 className='text-xl from-accent-content text-gray-600 my-4'>Enter The Card Number</h3>
                    <div className='md:w-2/3 mx-auto w-full'>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm existingAccount={existingAccount}  inputBalance={inputBalance}/>
                        </Elements>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CardPayment;