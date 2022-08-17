import React from 'react';
import { Slide } from 'react-reveal';

const RetailBanking = () => {

    return (
        <div className=''>
            {/* Image div */}
            <section>
                <img className='w-full' src="https://www.nrbcommercialbank.com/assets/img/banking.jpg" alt="" />
            </section>

            {/* Text work */}

            <section className='max-w-7xl mx-auto'>

                <div className='text-center mt-16 mx-40'>
                    <h2 className='text-4xl font-semibold'>Retail Banking</h2>
                    <p className=' mt-5 font-medium text-sm text-black text-start lg:px-36'>NRBCBank offers a complete range of retail and personal banking products and services through its network across the country. Our customers can be assured of a banking service that is flexible enough to tailor-make a product suite to take care of their specific banking needs. Our objective is to offer excellent value to customers by providing knowledgeable, efficient and reliable services in a personal, helpful and responsive manner</p>
                </div>

                <section className='lg:flex items-center justify-center bg-black lg:mx-60 mt-10'>
                    <div class="card hover:bg-green-400">
                        <div class="card-body">
                            <img className='w-16 pl-5' src="https://www.nrbcommercialbank.com//assets/img/care.png" alt="" />
                            <p className='text-warning'>ACCOUNTS</p>
                        </div>
                    </div>
                    <div class="card hover:bg-green-400">
                        <div class="card-body">
                            <img className='w-16 pl-5' src="https://www.nrbcommercialbank.com//assets/img/cash.png" alt="" />
                            <p className='text-warning'>CARDS</p>
                        </div>
                    </div>
                    <div class="card hover:bg-green-400">
                        <div class="card-body">
                            <img className='w-16 pl-5' src="https://www.nrbcommercialbank.com//assets/img/loan.png" alt="" />
                            <p className='text-warning'>LOANS</p>
                        </div>
                    </div>
                    <div class="card hover:bg-green-400">
                        <div class="card-body">
                            <img className='w-16 pl-5' src="https://www.nrbcommercialbank.com//assets/img/customer-service.png" alt="" />
                            <p className='text-warning'>SERVICES</p>
                        </div>
                    </div>
                </section>
            </section>

        </div>
    );
};

export default RetailBanking;