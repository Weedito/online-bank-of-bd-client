import React from 'react';

const SMSBanking = () => {
    return (
        <div className=''>
            <h3 className="text-3xl font-bold">SMS <span className='text-primary'>Banking</span></h3>
            <p className='mt-2'>Dare coustomer,The sms banking page. That's use for any our banking issue verifications</p>

            <div className='flex flex-col md:flex-row gap-x-20 justify-center items-center py-10 px-2 bg-orange-200'>
                <div className='text-start'>
                    <h2 className='text-2xl font-bold'>SMS Banking Services</h2>
                    <p className=' mt-2 w-96'>You do not need a smart phone or a data plan activated on your mobile phone to avail our SMS Banking services. Our SMS Banking services allow you to pay bills, recharge prepaid services and avail banking services by sending a simple SMS.</p>

                    <button className='btn btn-primary rounded-full mt-2'>Register Now</button>

                </div>
                <div>
                    <img className='' src="https://www.icicibank.com/managed-assets/images/generic-optimised/A-secure-way-to-bank-desktop.jpg" alt="" />
                </div>
            </div>
            {/* cards */}

            <div className='bg-orange-100 py-10'>
                <div className='grid lg:grid-cols-2 mx-24 gap-5'>
                    <div className='mt-5 mx-auto'>
                        <div class="card h-28 bg-base-100">
                            <div className='mt-3 px-10'>
                                <div>
                                    <h2 className='text-xl text-start link text-primary'>Recharge</h2>
                                    <p className='text-xs text-start mt-2'>With Bank of bd recharge service over SMS, you can recharge any prepaid phone, broadband and DTH account instantly. This service is available 24X7.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 mx-auto'>
                        <div class="card h-28 bg-base-100">
                            <div className='mt-3 px-10'>
                                <div>
                                    <h2 className='text-xl text-start link text-primary'>Postpaid Bill Pay</h2>
                                    <p className='text-xs text-start mt-2'>We have made paying your post-paid Telecom bill payments even more convenient. Now pay your postpaid bill through just an SMS.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 mx-auto'>
                        <div class="card h-28 bg-base-100">
                            <div className='mt-3 px-10'>
                                <div>
                                    <h2 className='text-xl text-start link text-primary'>DMRC card recharge</h2>
                                    <p className='text-xs text-start mt-2'>With just 1 SMS , now All Metro commuters, who have an account with Bank of bd with a registered mobile number, can top-up their All Metro smart cards. So, travel with ease without running short of recharge!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 mx-auto'>
                        <div class="card h-32 bg-base-100">
                            <div className='mt-3 px-10'>
                                <div>
                                    <h2 className='text-xl text-start link text-primary'>Alerts & Request</h2>
                                    <p className='text-xs text-start mt-2'>Now you can access your account information any time 24X7 using our alerts and requests services. Our services include checking your balance, viewing last 5 transactions, viewing payment due date of credit card, and many more. To view a complete list of Enquiry / Request Services on SMS Banking <span><button className='link text-xs text-black pl-2'>Click Here</button></span> </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className='text-start p-10 pl-10 bg-orange-200'>
                <h2 className='text-2xl font-bold text-primary'>SMS BANKING</h2>
                <p className='w-3/4 mt-2'>Through SMS banking, Bank clients can get different types of information like account balance, card payment, loan installment & other information by mobile SMS. SMS Banking provides both Push & Pull SMS. Push SMS are those that the bank chooses to send to a customer’s mobile phone without customer’s request. Pull SMS are those that are initiated by the customer by sending SMS to bank to get specific information like account balance enquiry, mini statement, currency exchange rates, deposit interest rates, etc. <span><button className='link text-xs text-black pl-2'>See more</button></span></p>
            </div>

        </div>
    );
};

export default SMSBanking;