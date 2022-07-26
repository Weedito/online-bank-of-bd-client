import React from 'react';
import corporateBankingIMG from '../../../Assets/Images/corporate-banking-img/BG-Web-banner-1366-x-400-pxl-01-scaled.jpg'

const CorporateBanking = () => {
    return (
        <div>
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
                        <figure><img src="https://cdn.wallstreetmojo.com/wp-content/uploads/2019/06/CORPORATE-FINANCE-COURSE.jpg" alt="school bank img" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Corporate Finance</h2>
                            <p>We provide credit facility and services to all general corporate houses to finance current assets and fixed assets in the form of different Term Finance, Working Capital Finance, Capital Machinery Finance, Real Estate Finance, Work order /Construction Business Financing, and Trade Finance.</p>
                            <div className="card-actions justify-end">
                                <button className='btn btn-xs bg-green-700 border-0'>Read More</button>

                            </div>
                        </div>
                    </div>
                    <div className="card card-compact max-w-max bg-base-100 shadow-xl">
                        <figure><img className="" src='https://www.investopedia.com/thmb/3RzLj_FkBXcr55bac57dMIa8F10=/2121x1414/filters:fill(auto,1)/financial-advisor-having-a-meeting-with-clients-1063753064-1e0883ec234c4dfea7dcc7d5b0795cc4.jpg' alt="Locker Service img" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Syndications & Structured Finance</h2>
                            <p>We have an impressive track record of syndication financing both as a member bank and a lead arranger. We also provide club financing. We have provided syndication financing in setting up, upgrade and expansion of Textiles and Readymade garments, telecom, pharmaceuticals, chemical, cement, ceramic, steel,, power generation, food and allied industries.</p>
                            <div className="card-actions justify-end">
                                <button className='btn btn-xs bg-green-700 border-0'>Read More</button>

                            </div>
                        </div>
                    </div>

                    <div className="card card-compact max-w-max bg-base-100 shadow-xl">
                        <figure><img className="" src='https://financialyard.com/wp-content/uploads/2020/07/Cash-Management-Models-1024x576.jpg' alt="review icon" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Cash Management Solution</h2>
                            <p>Online Bank BD offers a wide range of cash management services to meet the specific requirements of the clients. These services are flexible and customizable as per the requirements of the different clients. Within a very short span of time we have been able to establish our foothold very sharply by providing different types of collection solutions to the different types of organizations such as Government organizations, autonomous bodies, large local conglomerates, developments organizations, MNCs etc.</p>
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

export default CorporateBanking;