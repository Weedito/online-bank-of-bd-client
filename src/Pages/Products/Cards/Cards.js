import React from 'react';
import { useNavigate } from 'react-router-dom';
import cardsImages from '../../../Assets/Images/products/bankCardbanner.jpg';
import { cardData } from '../../../Components/Components.Nahidul/Data';
import Flip from 'react-reveal/Flip';
import { Zoom } from 'react-reveal';

const Cards = () => {

    const navigate = useNavigate();



    return (
        <div className='bg-slate-100'>
            <Zoom>
                <section style={{
                    backgroundImage: `url(${cardsImages})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
                    className='flex justify-center items-center  bg-cover pt-24 px-10 mt-8' >
                    <div className='flex-1 hidden lg:block'>
                        <img className='mt-[-130px]' src='https://www.freeiconspng.com/thumbs/bank-icon/blue-bank-icon-in-flat-style-with-the-building-facade-with-three--26.png' alt="" />

                    </div>
                    <div className='flex-1'>
                        <h2 className='text-primary text-2xl'>Make Your life Eassy</h2>
                        <h3 className='text-3xl'>Be a Smarter and Digitalized your money, It's safe and secured. </h3>
                    </div>
                </section>
            </Zoom>

            <h3 className="text-3xl pt-10">Cards <span className='text-green-700 font-bold'>Services</span></h3>
            <section className='pb-8'>
                <div className=" grid grid-cols-1 lg:grid-cols-3 pt-8 gap-5 bg-slate-100 px-8 ">
                    <Flip top>


                        {/* Card-1 */}
                        {cardData.map(item => {
                            return (
                                <div key={item.id} class="card card-compact max-w-max bg-base-300 shadow-xl hover:bg-base-100">
                                    <figure>
                                        <img src={item.img} alt="cradit" class="rounded-xl" />
                                    </figure>
                                    <div class="card-body items-center text-center">
                                        <h2 class="card-title">{item.cardTitle}</h2>
                                        <p>{item.description} </p>
                                        <div class="cardCard-actions">
                                            <button onClick={() => navigate(`/card/:${item.id}`)} className='btn btn-xs bg-green-700 border-0'>Show Details</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </Flip>
                </div>
            </section>
        </div>

    );
};

export default Cards;