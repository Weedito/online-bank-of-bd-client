import React, { useEffect, useState } from 'react';
import { Slide } from 'react-reveal';

const RetailBanking = () => {


    const [retailBanking, setRetailBanking] = useState([]);


    useEffect(() => {
        fetch('https://bank-of-bd.herokuapp.com/retailbanking')
            .then(res => res.json())
            .then(data => setRetailBanking(data))
    }, [])

    return (
        <div className=''>
            {/* Image div */}
            <section>
                <img className='w-full' src="https://www.nrbcommercialbank.com/assets/img/banking.jpg" alt="" />
            </section>

            {/* Text work */}


            {/* <section className='max-w-7xl mx-auto'>

                        <h3 className="text-3xl lg:text-5xl text-green-700 font-serif font-bold mb-5">Retail Banking</h3>
                        <p className="font-bold">ACHIEVE LIFE GOALS
                            Make Small Savings Today To Have A BIGGER <br /> HAPPINESS TOMORROW</p>

                    </div>
                </Slide>
                <Slide right>
                    <div>
                        <img className='object-cover' src="https://i.ibb.co/6PtbvVz/retail-banner-removebg-preview.png" alt="" />
                    </div>
                </Slide>

            </div> */}



            <section className='py-12 my-12'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-8'>

                    {
                        retailBanking.map(retailBank => <div key={retailBank._id} className="card hover:bg-base-200 hover:shadow-xl">
                            <figure className="w-2/4 m-auto">
                                <img src={retailBank.img} alt="retail banking img" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title font-bold">{retailBank.name}</h2>
                                <p>{retailBank.description}</p>
                                <div className="card-actions">
                                    <button className="text-1xl px-4 py-1 text-white bg-green-700 rounded-full ">Apply Now</button>
                                </div>
                            </div>
                        </div>
                        )
                    }
                    </div>

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