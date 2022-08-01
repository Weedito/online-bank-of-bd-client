import React from 'react';
import corporateBankingIMG from '../../../Assets/Images/corporate-banking-img/BG-Web-banner-1366-x-400-pxl-01-scaled.jpg'

const CorporateBanking = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <section style={{
                backgroundImage: `url(${corporateBankingIMG})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
                className='flex justify-center items-center  bg-cover pt-28 px-10 py-10' >
                <div className='flex-1 hidden lg:block'>


                </div>
                <div className='flex-1'>
                    <h2 className=' text-2xl font-bold bg-slate-100'>Online <span className='text-primary'>Bank BD</span> Corporate Banking</h2>
                    <h3 className='text-3xl'>Let Our financial Expertise power your Business</h3>
                </div>


            </section>
            <h1 className='text-3xl font-bold py-10 bg-slate-100'>Corporate <span className='text-primary'>Banking</span></h1>
            <section className=''>
                <div className='grid grid-cols-1 lg:grid-cols-3 pt-8 gap-5 bg-slate-100 px-8'>
                    <div className="card card-compact max-w-max bg-base-100 shadow-xl">
                        <figure><img src="https://ghalibzahirinvestmentholdings.com/public/uploads/service-6.jpg" alt="Corporate Finance img" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Corporate Finance</h2>
                            <p>We provide credit facility and services to all general corporate houses to finance current assets.</p>
                            <div className="card-actions justify-end">

                                <label for="corporateFinance" className='btn btn-xs bg-green-700 border-0'>Read More</label>

                            </div>
                        </div>
                    </div>
                    <div className="card card-compact max-w-max bg-base-100 shadow-xl">
                        <figure><img className="" src='https://i.ibb.co/JKZPbh3/New-Project.jpg' alt="Locker Service img" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Syndications & Structured Finance</h2>
                            <p>We have an impressive track record of syndication financing both as a member bank and a lead arranger.</p>
                            <div className="card-actions justify-end">
                                <label for="structuredFinance" className='btn btn-xs bg-green-700 border-0'>Read More</label>

                            </div>
                        </div>
                    </div>

                    <div className="card card-compact max-w-max bg-base-100 shadow-xl">
                        <figure><img className="" src='https://i.ibb.co/CBcVtbk/New-Project-1.jpg' alt="Cash Management Solution" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Cash Management Solution</h2>
                            <p>Online Bank BD offers a wide range of cash management services to meet the specific requirements of the clients.</p>
                            <div className="card-actions justify-end">
                                <label for="cashManagementSolution" className='btn btn-xs bg-green-700 border-0'>Read More</label>

                            </div>
                        </div>
                    </div>

                </div>
            </section>


            {/* corporateFinance Information */}
            <input type="checkbox" id="corporateFinance" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="corporateFinance" class="btn btn-sm btn-circle hover:bg-red-700 absolute right-2 top-2">✕</label>
                    <figure className='w-6/12 m-auto'><img src="https://ghalibzahirinvestmentholdings.com/public/uploads/service-6.jpg" alt="Corporate Finance img" /></figure>
                    <h3 class="font-bold text-lg">Corporate Finance</h3>
                    <p class="py-4">We provide credit facility and services to all general corporate houses to finance current assets and fixed assets in the form of different Term Finance, Working Capital Finance, Capital Machinery Finance, Real Estate Finance, Work order /Construction Business Financing, and Trade Finance.</p>

                </div>
            </div>

            {/* Structured Finance Information */}
            <input type="checkbox" id="structuredFinance" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="structuredFinance" class="btn btn-sm btn-circle hover:bg-red-700 absolute right-2 top-2">✕</label>
                    <figure className='w-6/12 m-auto'><img src="https://i.ibb.co/JKZPbh3/New-Project.jpg" alt="Structured Finance img" /></figure>
                    <h3 class="font-bold text-lg">Syndications & Structured Finance</h3>
                    <p class="py-4">We have an impressive track record of syndication financing both as a member bank and a lead arranger. We also provide club financing. We have provided syndication financing in setting up, upgrade and expansion of Textiles and Readymade garments, telecom, pharmaceuticals, chemical, cement, ceramic, steel,, power generation, food and allied industries.</p>

                </div>
            </div>

            {/* Cash Management Solution Information */}

            <input type="checkbox" id="cashManagementSolution" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="cashManagementSolution" class="btn btn-sm btn-circle hover:bg-red-700 absolute right-2 top-2">✕</label>
                    <figure className='w-6/12 m-auto'><img src="https://i.ibb.co/CBcVtbk/New-Project-1.jpg" alt="Structured Finance img" /></figure>
                    <h3 class="font-bold text-lg">Cash Management Solution</h3>
                    <p class="py-4">Online Bank BD offers a wide range of cash management services to meet the specific requirements of the clients. These services are flexible and customizable as per the requirements of the different clients. Within a very short span of time we have been able to establish our foothold very sharply by providing different types of collection solutions to the different types of organizations such as Government organizations, autonomous bodies, large local conglomerates, developments organizations, MNCs etc.</p>

                </div>
            </div>


        </div>
    );
};

export default CorporateBanking;