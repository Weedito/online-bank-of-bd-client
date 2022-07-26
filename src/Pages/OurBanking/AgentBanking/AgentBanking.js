import React from 'react';

const AgentBanking = () => {
    return (
        <div>
            <div className='lg:flex items-center space-x-40 mx-20 px-10'>
                <div className='w-96 mt-10'>
                    <h3 className="text-3xl font-bold">Agent Banking</h3>
                    <p className='mt-5 font-semibold'>Agent Banking is defined as the banking services provided (outside of regular bank branches) by engaging agents under a valid agreement. An Agent is the owner of an outlet who conducts banking transaction on behalf of a Bank. It was first introduced by Bangladesh Bank (BB) in 2013. The aim is to provide financial services to the vastly unbanked segments of the population, especially those from the geographically dispersed locations.</p>

                    <button className='btn btn-primary mt-5'>Submit your Deatils</button>
                </div>

                <div>
                    <img width={'400px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLPBK6EDQu-gzO3NfPtbNSVNjIRBQrJrKSmA&usqp=CAU" alt="" />
                </div>
            </div>

            <div className='mx-10 justify-center'>
                <h3 className="text-3xl font-bold">WHERE WE ARE TODAY</h3>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 gap-8'>
                    <div class="card w-72 bg-warning shadow-xl">
                        <div class="card-body">
                            <h2 className='text-2xl'>5,129</h2>
                            <p className='text-2xl'>Money Exchange</p>
                        </div>
                    </div>
                    <div class="card w-72 bg-warning shadow-xl">
                        <div class="card-body">
                            <h2 className='text-2xl'>70</h2>
                            <p className='text-2xl'>Partners</p>
                        </div>
                    </div>
                    <div class="card w-72 bg-warning shadow-xl">
                        <div class="card-body">
                            <h2 className='text-2xl'>64</h2>
                            <p className='text-2xl'>Districs</p>
                        </div>
                    </div>
                    <div class="card w-72 bg-warning shadow-xl">
                        <div class="card-body">
                            <h2 className='text-2xl'>532</h2>
                            <p className='text-2xl'>Upazila</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='text-start mx-10'>
                <h3 className='text-3xl font-bold mt-10'>Agent Banking Services</h3>

                <div className='mt-2'>
                    <p className='font-semibold'>The following permissible services from Central Bank will be covered under Bank of bd Agent Banking.</p>
                    <br />
                    <p>1. <span>Cash deposits and cash withdrawals (ceiling should be determined by the Bank in line with the guideline of central bank)</span></p>
                    <p>1. <span>Inward Foreign Remittance disbursement</span></p>
                    <p>1. <span>	Disbursement and recovery/repayments of investments, installments;(as per regular banking procedure)</span></p>
                    <p>1. <span>Utility Bills payment and ticketing (air, bus and train)</span></p>
                    <p>1. <span>Payment of social safety net program</span></p>
                    <p>1. <span>Fund transfer
                        [Person to Person (P2P), Person to Business (P2B), Business to Person (B2P), Person to Government (P2G), Government to Person (G2P), Business to Government (B2G), Government to Business (G2B)]</span></p>
                </div>
            </div>

        </div>
    );
};

export default AgentBanking;