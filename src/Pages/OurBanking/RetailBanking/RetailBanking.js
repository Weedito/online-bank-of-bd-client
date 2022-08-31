import React from 'react';
import OurCards from '../../../Components/Components.Rijon/OurCards';
import Loan from '../../Products/Loan/Loan';
import Accounts from './Accounts';
import Service from './Service';





const RetailBanking = () => {




    return (
        <div className='bg-white'>
            {/* Image div */}
            <section>
                <img className='w-full' src="https://www.nrbcommercialbank.com/assets/img/banking.jpg" alt="" />
            </section>
            <section className='py-12 my-12'>


                <div className='text-center mt-16 mx-40'>
                    <h2 className='text-4xl font-semibold'>Retail Banking</h2>
                    <p className=' mt-5 font-medium text-sm text-black text-start lg:px-36'>NRBCBank offers a complete range of retail and personal banking products and services through its network across the country. Our customers can be assured of a banking service that is flexible enough to tailor-make a product suite to take care of their specific banking needs. Our objective is to offer excellent value to customers by providing knowledgeable, efficient and reliable services in a personal, helpful and responsive manner</p>
                </div>
            </section>

            <section className='flex items-center justify-center w-full mx-auto my-20'>
                <div className='w-full mx-auto'>
                    <ul className="nav nav-tabs grid grid-cols-2 lg:grid-cols-4  mx-auto md:flex-row flex-wrap list-none border-b-0 mb-4 bg-black justify-center lg:ml-80 w-1/2 gap-4" id="tabs-tab" role="tablist">


                        <li className="nav-item" role="presentation">
                            <a href="#tabs-home" className="" id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home"
                                aria-selected="true">
                                <div className="card hover:bg-green-600 rounded-none">
                                    <div className="card-body">
                                        <img className='w-16 pl-5' src="https://www.nrbcommercialbank.com//assets/img/care.png" alt="" />
                                        <p className='text-warning'>ACCOUNTS</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a href="#tabs-profile" className="" id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab"
                                aria-controls="tabs-profile" aria-selected="false">
                                <div className="card hover:bg-green-600 rounded-none">
                                    <div className="card-body">
                                        <img className='w-16 pl-5' src="https://www.nrbcommercialbank.com//assets/img/cash.png" alt="" />
                                        <p className='text-warning'>CARDS</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a href="#tabs-messages" className="" id="tabs-messages-tab" data-bs-toggle="pill" data-bs-target="#tabs-messages" role="tab"
                                aria-controls="tabs-messages" aria-selected="false">
                                <div className="card hover:bg-green-600 rounded-none">
                                    <div className="card-body">
                                        <img className='w-16 pl-5' src="https://www.nrbcommercialbank.com//assets/img/loan.png" alt="" />
                                        <p className='text-warning'>LOANS</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a href="#tabs-contact" className="" id="tabs-contact-tab" data-bs-toggle="pill" data-bs-target="#tabs-contact" role="tab"
                                aria-controls="tabs-contact" aria-selected="false">
                                <div className="card hover:bg-green-600 rounded-none">
                                    <div className="card-body">
                                        <img className='w-16 pl-5' src="https://www.nrbcommercialbank.com//assets/img/customer-service.png" alt="" />
                                        <p className='text-warning'>SERVICES</p>
                                    </div>
                                </div>
                            </a>
                        </li>

                    </ul>
                    <div className="tab-content" id="tabs-tabContent">
                        <div className="tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
                            <Accounts />
                        </div>
                        <div className="tab-pane fade" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
                            <OurCards />
                        </div>
                        <div className="tab-pane fade" id="tabs-messages" role="tabpanel" aria-labelledby="tabs-profile-tab">
                            <Loan />
                        </div>
                        <div className="tab-pane fade" id="tabs-contact" role="tabpanel" aria-labelledby="tabs-contact-tab">
                            <Service />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default RetailBanking;