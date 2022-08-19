import React from 'react';

const Service = () => {
    return (
        <div className='pl-80 pb-10'>

            <div className='lg:flex gap-10 justify-center items-center lg:w-1/2'>
                <section>
                    <img src="https://www.nrbcommercialbank.com//assets/img/retail_service.jpg" alt="" />
                </section>

                <section className='text-start'>
                    <div className='font-semibold'>
                        <p>Business is increasingly mobile as opportunities may arise far from home base. Our electronic banking platforms can keep you connected to your funds wherever you may be on the planet.</p>
                    </div>
                    <div className='mt-5 text-red-600 hover:link'>
                        {/* /contactus */}
                        <a href="/contactus"><li>Internet Banking</li></a>
                        <a href="/dashboard/myaccounts"><li>Missed Call Balance Inquiry Service</li></a>
                        <a href="/corporatebanking"><li>Utilitis Bill Pay</li></a>
                    </div>
                </section>

            </div>

        </div>
    );
};

export default Service;