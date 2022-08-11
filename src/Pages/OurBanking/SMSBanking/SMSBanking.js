import React from 'react';
import Slide from 'react-reveal/Slide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const SMSBanking = () => {

    const cardData = [
        { id: 1, name: 'Recharge', text: 'With Bank of bd recharge service over SMS, you can recharge.....' },
        { id: 2, name: 'Postpaid Bill Pay', text: 'We have made paying your post-paid Telecom bill payments .....' },
        { id: 3, name: 'DMRC card recharge', text: 'With just 1 SMS , now All Metro commuters, who have .....' },
        { id: 4, name: 'Alerts & Request', text: 'With Bank of bd recharge service over SMS, you can recharge.....' },
        { id: 5, name: 'Postpaid Bill Pay', text: 'We have made paying your post-paid Telecom bill payments even more convenient. Now pay your postpaid bill through just an SMS.' },
        { id: 6, name: 'DMRC card recharge', text: 'With just 1 SMS , now All Metro commuters, who have .....' }
    ];

    return (
        <div>
            <div className='flex flex-col md:flex-row gap-12 lg:gap-96 justify-center items-center bg-slate-100 py-20 px-2'>
                <Slide left>
                    <div className="text-left">
                        <h2 className='text-4xl font-semibold'>Sms Banking</h2>
                        <p className="text-gray text-sm mt-3">Dare coustomer,The sms banking page. That's use for any our <br /> banking issue verifications</p>
                    </div>
                </Slide>
                <Slide right>
                    <div className="">
                        <img className='object-cover' src="https://i.ibb.co/hd1fwLV/Group-88.png" alt="Group-88" />
                    </div>
                </Slide>

            </div>

            <section className='mx-20 lg:pl-16'>
                <div className='grid grid-cols-1 lg:grid-cols-3 pt-8 gap-10 py-10'>
                    <div class="card w-72 h-52 bg-base-100 shadow-2xl">
                        <div class="card-body">
                            <div class="card-actions justify-start">
                                <button class="btn btn-square btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                            <h2 className='text-xl font-bold mt-3'>Recharge</h2>
                            <p className='text-xs mt-2'>With Bank of bd recharge service over SMS, you can recharge.....</p>
                        </div>
                    </div>

                    <div class="card w-72 h-52 bg-base-100 shadow-2xl">
                        <div class="card-body">
                            <div class="card-actions justify-start">
                                <button class="btn btn-square btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                            <h2 className='text-xl font-bold mt-3'>Postpaid Bill Pay</h2>
                            <p className='text-xs mt-2'> Postpaid Bill Pay
                                We have made paying your post-paid Telecom bill payments ..... </p>
                        </div>
                    </div>

                    <div class="card w-72 h-52 bg-base-100 shadow-2xl">
                        <div class="card-body">
                            <div class="card-actions justify-start">
                                <button class="btn btn-square btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                            <h2 className='text-xl font-bold mt-3'>DMRC card recharge</h2>
                            <p className='text-xs mt-2'>With just 1 SMS , now All Metro commuters, who have .....</p>
                        </div>
                    </div>

                    <div class="card w-72 h-52 bg-base-100 shadow-2xl">
                        <div class="card-body">
                            <div class="card-actions justify-start">
                                <button class="btn btn-square btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                            <h2 className='text-xl font-bold mt-3'>Alerts & Request</h2>
                            <p className='text-xs mt-2'>With Bank of bd recharge service over SMS, you can recharge.....</p>
                        </div>
                    </div>

                    <div class="card w-96 h-60 bg-base-100 shadow-2xl">
                        <div class="card-body">
                            <div class="card-actions justify-start">
                                <button class="btn btn-square btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                            <h2 className='text-xl font-bold mt-3'>Postpaid Bill Pay</h2>
                            <p className='text-xs mt-2'>We have made paying your post-paid Telecom bill payments even more convenient. Now pay your postpaid bill through just an SMS.</p>
                        </div>
                    </div>

                    <div class="card w-72 h-52 bg-base-100 shadow-2xl">
                        <div class="card-body">
                            <div class="card-actions justify-start">
                                <button class="btn btn-square btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                            <h2 className='text-xl font-bold mt-2'>DMRC card recharge</h2>
                            <p className='text-xs mt-4'>With just 1 SMS , now All Metro commuters, who have .....</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mx-auto' style={{ backgroundColor: '#F5FFE9' }}>
                <div className='flex flex-col md:flex-row lg:gap-96 justify-center items-center py-2 px-2'>
                    <Slide left>
                        <div className="text-left pl-5">
                            <h2 className='text-4xl font-semibold'>Sms Banking</h2>
                            <p className="text-gray text-sm py-3 text-left w-96">Through SMS banking, Bank clients can get different types of information like account balance, card payment, loan installment & other information by mobile SMS. SMS Banking provides both Push & Pull SMS. Push SMS are those that the bank chooses to send to a customer’s mobile phone without customer’s request. Pull SMS are those that are initiated by the customer by sending SMS to bank to get specific information like account balance enquiry, mini statement, currency exchange rates, deposit interest rates, etc.</p>
                            <button className='px-5 py-2 bg-green-500 rounded-full'>Learn More</button>
                        </div>
                    </Slide>
                    <Slide right>
                        <div>
                            <img className='object-cover' src="https://i.ibb.co/272JRxm/pexels-roman-pohorecki-230554-1.jpg" alt="" />
                        </div>
                    </Slide>

                </div>
            </section>
        </div>
    );
};

export default SMSBanking;