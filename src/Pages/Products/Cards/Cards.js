import React from 'react';
import cardsImages from '../../../Assets/Images/products/bankCardbanner.jpg'
const Cards = () => {
    return (
        <div className='bg-slate-100'>
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

            <h3 className="text-3xl pt-10">Cards <span className='text-green-700 font-bold'>Services</span></h3>
            <section className='pb-8'>
                <div className=" grid grid-cols-1 lg:grid-cols-3 pt-8 gap-5 bg-slate-100 px-8">


                    {/* Card-1 */}
                    <div class="card card-compact max-w-max bg-base-100 shadow-xl">
                        <figure>
                            <img src="https://ck-content.imgix.net/pcm/content/c591eff40c74098ad56e-da9c50dd3e30c3572f9f-CDP_Card_Art_12_11.png?auto=compress%2Cformat" alt="cradit" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Platinum Cradit Card</h2>
                            <p>Online Bank BD Platinum Cradit </p>
                            <div class="cardCard-actions">
                                <button className='btn btn-xs bg-green-700 border-0'>Show Details</button>
                            </div>
                        </div>
                    </div>

                    {/*Card-2 */}
                    <div class="card card-compact max-w-max bg-base-100 shadow-xl">
                        <figure >
                            <img src="https://freepngimg.com/save/26058-credit-card-transparent/1102x688" alt="maaster" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Master Card</h2>
                            <p>Online Bank BD Master Card</p>
                            <div class="card-actions">
                                <button className='btn btn-xs bg-green-700 border-0'>Show Details</button>
                            </div>
                        </div>
                    </div>
                    {/* Card-3 */}
                    <div class="card card-compact max-w-max bg-base-100 shadow-xl">
                        <figure >
                            <img src="https://cdn.gobankingrates.com/wp-content/uploads/2016/02/2_Visa-Infinite-Eurasian-Diamond-Card.jpg" alt="student" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Student Card</h2>
                            <p>Online Bank BD Student Card</p>
                            <div class="card-actions">
                                <button className='btn btn-xs bg-green-700 border-0'>Show Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>

    );
};

export default Cards;