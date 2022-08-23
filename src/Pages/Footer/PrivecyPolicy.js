import React from 'react';

const PrivecyPolicy = () => {
    return (
        <div className="py-10">
            <div className="flex flex-col items-center justify-around md:flex-row gap5">
                <div className="">
                    <h3 className="text-3xl md:text-5xl lg:text-7xl text-black">Privacy of</h3>
                    <h3 className="text-2xl md:text-3xl lg:text-5xl text-green-700 font-bold">Online Bank BD</h3>

                </div>
                <div className="">
                    <img src="https://cdn4.iconfinder.com/data/icons/digital-banking-and-finance-1/64/Security-Banking-privacy-financial-money-512.png" alt="" className="object-cover p-5" />

                </div>
            </div>
            {/*  */}
            <div className='max-w-7xl py-20 mx-auto'>
                <h3 className="text-3xl md:text-4xl lg:text-5xl text-black">WE'RE ALWAYS LOOKING FOR NEW WAYS TO PROVIDE PRIVACY FOR OUR CUSTOMERS.</h3>
                <div className="p-5 md:p-10">

                    <div className=" items-center w-full justify-around md:flex-row gap-5 text-2xl">
                        <div className=" mx-auto">
                            <p className="text-justify">
                                Bank Of BD (The Bank) recognizes the expectations of its customers with regard to privacy, confidentiality and security of their personal information that resides with the Bank. Keeping personal information of customers secure and using it solely for activities related to the Bank and preventing any misuse thereof is a top priority of the Bank. The Bank has adopted the privacy policy aimed at protecting the personal information entrusted and disclosed by the customers [“the Policy”]. This policy governs the way in which the Bank collects, uses, discloses, stores, secures and disposes of personal information and sensitive personal data or information.
                            </p>
                            <h3 className='my-5 font-bold'> Definitions:</h3>
                            <p className="text-justify">
                                ”Personal information” means any information that relates to a natural person, which either directly or indirectly, in combination with other information available or likely to be available with the Bank, is capable of identifying such person.
                                “Sensitive personal data or information” of a person means such personal information which consists of information relating to:
                            </p>
                            <ul className='my-5'>
                                <li>1. password;</li>
                                <li>2. financial information such as Bank account or credit card or debit card or other payment instrument details;</li>
                                <li>3. physical, physiological and mental health condition;</li>
                                <li>4. sexual orientation;</li>
                                <li>5. medical records & history;</li>
                                <li>6. biometric information;</li>
                                <li>7. any detail relating to the above clauses as provided to body corporate for providing service;</li>
                                <li>8. any of the information received under above clauses by body corporate for processing, stored or processed under lawful contract or otherwise. Provided that, any information that is freely available or accessible in public domain or furnished under the right to information act, 2005 or any other law for the time being in force shall not be regarded as sensitive personal data or information for the purposes of this policy.</li>

                            </ul>
                            <h3 className='my-5 font-bold'>Applicability:</h3>
                            <p className="text-justify">This Policy is applicable to personal information and sensitive personal data or information collected by the Bank or it’s affiliates directly from the customer or through the Bank’s online portals, mobile apps and electronic communications as also any information collected by the Bank’s server from the customer’s browser.</p>

                            <h3 className='my-5 font-bold'>Purpose of Collection and Use of Personal Information:</h3>
                            <p className="text-justify">The Bank collects and uses the financial information and other personal information from its customers. This information is collected and used for specific business purposes or for other related purposes designated by the Bank or for a lawful purpose to comply with the applicable laws and regulations. The Bank shall not divulge any personal information collected from the customer, for cross selling or any other purposes.
                                The authenticity of the personal information provided by the customer shall not be the responsibility of the Bank.
                                Any information that is freely available or accessible in public domain or furnished under the Right to Information Act, 2005 or any other law for the time being in force shall not be regarded as personal information for the purposes of this Policy and the Bank shall not be responsible for the same.</p>

                            <h3 className='my-5 font-bold'>Notice of change:</h3>
                            <p className="text-justify">The Bank may, from time to time, change this Policy. The effective date of this Policy, as stated below, indicates the last time this Policy was revised or materially changed.</p>

                            <h3 className='my-5 font-bold'>Cookie policy:</h3>
                            <p className="text-justify"> Bank of BD’s digital platforms use various third party analytical tools. These tools use cookies which are downloaded to your device when you visit a website in order to provide a personalized browsing experience. Cookies are used for lots of tasks like remembering your preferences & settings, provide personalized browsing experience and analyze site operations. These cookies collect information about how users use a website, for instance, how often visited pages. All information collected by third party cookies is aggregated and anonymous. By using our website user/s agree that these types of cookies can be placed on his/her device. User/s is free to disable/delete these cookies by changing his/her device / browser settings.  Bank of BD is not responsible for cookies placed in the device of user/s by any other website and information collected thereto.</p>

                            <h3 className='my-5 font-bold'>Effective Date:</h3>
                            <p className="text-justify">30th October, 2022</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default PrivecyPolicy;