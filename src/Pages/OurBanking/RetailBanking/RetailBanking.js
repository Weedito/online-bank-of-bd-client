import React from 'react';
import retailBankingIMG from '../../../Assets/Images/retail-Banking-img/61+oIVFF7FL.png'

const RetailBanking = () => {
    return (
        <div className='bg-slate-100'>
            <h3 className="text-3xl pt-10">Retail <span className='text-green-700 font-bold'>Banking</span></h3>
            <section style={{
                backgroundImage: `url(${retailBankingIMG})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
                className='flex justify-center items-center  bg-cover pt-24 px-10 mt-8' >
                <div className='flex-1 hidden lg:block'>
                    <img className='mt-[-130px]' src='https://ngdata-web.s3.us-east-2.amazonaws.com/2021/01/bank2020-small.png' alt="" />

                </div>
                <div className='flex-1'>
                    <h2 className='text-primary text-2xl'>ACHIEVE  LIFE  GOALS</h2>
                    <h3 className='text-3xl'>Make Small Savings Today To Have A BIGGER HAPPINESS TOMORROW</h3>
                </div>


            </section>
            <section className='pb-8'>
                <div className='grid grid-cols-1 lg:grid-cols-3 pt-8 gap-5 bg-slate-100 px-8'>
                    <div className="card card-compact max-w-max bg-base-100 shadow-xl">
                        <figure><img src="https://thefinancialexpress.com.bd/uploads/1519911621.jpg" alt="school bank img" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">School Banking</h2>
                            <p>An exclusive payment solution for tuition fee payment at your convenience</p>
                            <div className="card-actions justify-end">
                                <button className='btn btn-xs bg-green-700 border-0'>Read More</button>

                            </div>
                        </div>
                    </div>
                    <div className="card card-compact max-w-max bg-base-100 shadow-xl">
                        <figure><img src='https://media.istockphoto.com/photos/self-service-automated-delivery-machine-picture-id1338373369?b=1&k=20&m=1338373369&s=170667a&w=0&h=fELOxG5FzpmpIeE0yWV6VrH1eSeiZwcbhdLLWjnNQuA=' alt="Locker Service img" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Locker Service</h2>
                            <p>Locker service offered by the online Bank BD provides customers a completely secured facility for safekeeping of his/her valuable items, confidential documents and other valuables.</p>
                            <div className="card-actions justify-end">
                                <button className='btn btn-xs bg-green-700 border-0'>Read More</button>

                            </div>
                        </div>
                    </div>

                    <div className="card card-compact max-w-max bg-base-100 shadow-xl">
                        <figure><img className="" src='https://www.paulhillrealty.com.au/wp-content/uploads/2021/11/Paul-Hill-Reality-First-Home-Loan-Keys-1024x683.jpg' alt="review icon" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Home Loan</h2>
                            <p>Purchasing dwelling for Residential purpose. Apartments under construction are also applicable for New Home facility</p>
                            <div className="card-actions justify-end">
                                <button className='btn btn-xs bg-green-700 border-0'>Read More</button>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default RetailBanking;