import React, { useEffect, useState } from 'react';
import { CardElement ,useStripe,useElements} from '@stripe/react-stripe-js';
const CheckoutForm = ({existingAccount}) => {
  const stripe = useStripe();
  const elements=useElements()
  const [ErrorMessage,setErrorMessage]=useState("")
  const [clientSecret,setClientSecret]=useState(null)
  const deposit = 40;
  useEffect(()=>{
    fetch("http://localhost:5000/create-payment-intent",{
        method:"POST",
        headers:{
            "content-type":"application/json",
            authorization : `Bearer ${localStorage.getItem('accessToken')}`
        },
        body:JSON.stringify({deposit})
    })
    .then(res=>res.json())
    .then(result=>{
        if(result?.clientSecret) setClientSecret(result.clientSecret)
    })
  },[deposit])
  // handle card deposit function
    const handleSubmit= async(event)=>{
        event.preventDefault()
        if(!stripe|| !elements){
            return;
        }
        const card = elements.getElement(CardElement);
        if(card=== null){
            return;
        }
        const {error, paymentMethod}=await stripe.createPaymentMethod({type:"card",card})
        if(error){
            console.log("error",error);
            setErrorMessage(error?.message)
        }else{
            setErrorMessage("")
            // confirm card deposit
            const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
               clientSecret ,
                {
                  payment_method: {
                    card: card,
                    billing_details: {
                      name: existingAccount?.name,
                      email:existingAccount?.accEmail,
                    },
                  },
                },
              );
            if(intentError){
                setErrorMessage(intentError?.message);
            }
            if(paymentIntent){
                console.log("Congrats! Deposit Done.");
            }

        }
    }
    return (
        <form onSubmit={handleSubmit}>
      <CardElement
      className='mt-6 border-2 p-4 rounded-md'
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <p className='text-sm my-2 text-red-600 '>{ErrorMessage}</p>
      <button type="submit" className='py-4 px-3 w-full bg-green-600 rounded-md md:my-12 my-6 text-xl hover:bg-green-500 duration-300 ease-in-out text-white'
       disabled={!stripe || !clientSecret}>
        Deposit
      </button>
    </form>
    );
};

export default CheckoutForm;