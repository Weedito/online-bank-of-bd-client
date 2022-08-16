import { useEffect, useState } from "react";
import { Slide } from 'react-reveal';

const RetailBanking = () => {

    const [retailBanking, setRetailBanking] = useState([]);


    useEffect(() => {
        fetch('https://bank-of-bd.herokuapp.com/retailbanking')
            .then(res => res.json())
            .then(data => setRetailBanking(data))
    }, [])
    return (
        <div className=' max-w-7xl mx-auto'>

            <div className='flex flex-col md:flex-row gap-2 justify-center items-center py-20 px-2'>
                <Slide left>
                    <div className="text-left">

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

            </div>



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
            </section>

        </div>
    );
};

export default RetailBanking;