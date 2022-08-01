import React from 'react';

const SMEBanking = () => {
    return (
        <div className='max-w-7xl mx-auto'>


            <div class="hero bg-slate-100">

                <div class="hero-content flex-col lg:flex-row pt-8">
                    <img src="https://i.ibb.co/s2DSzq8/what-is-sme-loan-png-min.jpg" class="max-w-sm rounded-lg shadow-2xl" alt='sme img' />
                    <div>
                        <h2 className="text-3xl font-bold">Grow Your Business</h2>
                        <h3 className="text-2xl">With our quick & simplified</h3>
                        <h3 className="text-2xl font-bold">SME FINANCING</h3>

                    </div>
                </div>
            </div>



            <div className='grid grid-cols-1 lg:grid-cols-4 pt-8 gap-5 bg-slate-100 px-8'>
                <div className="card card-compact max-w-max bg-base-100 shadow-xl">
                    <figure><img src="https://www.thefinancialexpress.com.bd/uploads/1601092496.jpg" alt="agriculture img" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Agriculture Loans </h2>
                        <p className='text-left'>To help farmers financially, we have arranged agriculture loans. Through these loans, farmers can easily overcome the financial crisis.</p>
                        <div className="card-actions justify-end">
                            <button className='btn btn-xs bg-green-700 border-0'>Loan Now</button>

                        </div>
                    </div>
                </div>
                <div className="card card-compact max-w-max bg-base-100 shadow-xl">
                    <figure><img className="" src='https://tearsheet.co/wp-content/uploads/2017/11/operational-efficiency.jpeg' alt="engineering img" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Engineering Loans</h2>
                        <p className='text-left'>Learning engineering requires a lot of money. We have arranged this loan for becoming an engineer.</p>
                        <div className="card-actions justify-end">
                            <button className='btn btn-xs bg-green-700 border-0'>Loan Now</button>

                        </div>
                    </div>
                </div>

                <div className="card card-compact max-w-max bg-base-100 shadow-xl">
                    <figure><img className="" src='https://images.business.com/app/uploads/2022/03/23023458/loandulko-3.jpg' alt="review icon" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Entrepreneur Loans</h2>
                        <p className='text-left'>New small-business owners can also access financing through personal business loans, such as those offered by online or other lenders.</p>
                        <div className="card-actions justify-end">
                            <button className='btn btn-xs bg-green-700 border-0'>Loan Now</button>

                        </div>
                    </div>
                </div>
                <div className="card card-compact max-w-max bg-base-100 shadow-xl">
                    <figure><img className="" src='https://www.unwomen.org/sites/default/files/Headquarters/Images/Sections/News/Stories/2019/10/Bangladesh_IELD_Oct2019_12_960x640.JPG' alt="review icon" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Women Entrepreneur Loans</h2>
                        <p className='text-left'>Online Bank BD offers specialized services to Women Entrepreneurs through dedicated service desks. </p>
                        <div className="card-actions justify-end">
                            <button className='btn btn-xs bg-green-700 border-0'>Loan Now</button>

                        </div>
                    </div>
                </div>

            </div>




        </div>
    );
};

export default SMEBanking;