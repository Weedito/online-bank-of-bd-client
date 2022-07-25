import React from 'react';

const AboutTopSection = () => {
    return (
        <div className="">
            <div className="mb-10">
                <img className='w-full object-cover' src="https://i.ibb.co/XDYbd3g/corporate.jpg" alt="" />
            </div>
            <div className="">
                <div className="title pb-10">
                    <h2 className="section-title text-center font-semibold text-2xl md:text-4xl lg:text-6xl ">
                        An <span className="text-green-700">Overview of OBBD </span>
                    </h2>
                </div>
                <div className="container px-10 lg:px-20 py-10 text-justify">
                    <p className="">
                        Founded in 1995, Online Bank of Bangladesh Ltd. (OBBD) is the country’s leading value-added financial institution based on Shariah' Principles. OBBD comprises of OBBD Securities Ltd, OBBD Investment Ltd, OBBD Foundation Hospital. The three-tier banking model (Formal, Non-formal & Voluntary), the first of its kind in the banking arena of Bangladesh, brings a new dynamism in welfare banking targeting eradication of poverty of the country with a motto of “Working Together for a Caring Society”. Working closely with our valued clients and stakeholders to provide them one-stop services, access to the very latest products using technology. Our unrivaled customer services has made us unparalleled in the industry. We build a long-term business partnership with our clients helping them grow profitable. </p> <br />

                       <p> We are always ready to serve you with 4000 employees in 172  branches and 113  subbranches across the country. It has also 239  Agent Banking Outlets to cater financial services to the remotest parts of the Land.</p> <br />

                        <p>The strong conviction to create a caring society is the cornerstone of SIBL’s all activities. We feel a strong affinity to the emotions of people. We believe that only banking activities can’t usher our society to a just and equitable stage. Thus we are extensively engaged in CSR activities on humanitarian grounds. We work in the fields such as from poverty eradication to family empowerment. Unlike others, the Bank’s criteria for success are not only the key objective to make profit but also landmarks to become the country’s most humanitarian and complete Bank.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutTopSection;