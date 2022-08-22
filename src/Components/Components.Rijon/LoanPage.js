import React from 'react';
import { Slide } from 'react-reveal';


const LoanPage = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row gap-2 justify-around items-center py-10 px-2'>
        <Slide left>
          <div className="text-left">
            <h3 className="text-3xl lg:text-5xl font-serif font-bold">We are always <br />
              with you.</h3>

          </div>
        </Slide>
        <Slide right>
          <div className="">
            <img className='object-cover' src="https://i.ibb.co/6HmZ2sG/loan-removebg-preview.png" alt="" />
          </div>
        </Slide>

      </div>
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://www.wikihow.com/images/thumb/a/a1/Build-a-House-Step-10-Version-4.jpg/v4-460px-Build-a-House-Step-10-Version-4.jpg" className="max-w-sm rounded-lg shadow-2xl" alt='' />
          <div className='text-left'>
            <h1 className="text-5xl font-bold">Make your Own Home</h1>
            <p className="py-6">Make your dream home a reality with easy home loans from Online Bank BD. Our wide range of options are designed to cater your every home financing need, be it purchasing a new flat, constructing a house or renovating your existing home. Allow us to be the finance partner of one of the biggest investments of your lifetime and give you a delightful experience of banking.</p>
            <button className="text-1xl px-4 py-1 text-white bg-green-700 rounded-full ">Apply Now</button>
          </div>
        </div>
      </div>


      <div className="hero py-10 mt-5">
        <div className="hero-content flex-col lg:flex-row">
          <img src="https://i.ibb.co/zmpVXHC/png-clipart-investment-banking-investment-banking-finance-company-bank-child-company-removebg-previe.png" className="max-w-sm rounded-lg shadow-2xl" alt='' />
          <div className='text-left lg:ml-10'>
            <h1 className="text-5xl font-bold">Personal Loan</h1>
            <p className="py-6">Whatever the occasion or requirement, make smart financial choice with Online Bank BD Personal Loan to fulfill all your dreams, reach to new heights and make your day to day journey of life joyful.</p>
            <button className="text-1xl px-4 py-1 text-white bg-green-700 rounded-full ">Apply Now</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default LoanPage;