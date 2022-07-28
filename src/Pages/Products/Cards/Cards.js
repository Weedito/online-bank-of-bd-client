import React from 'react';

const Cards = () => {
    return (
        <div>
            <h3 className="text-3xl">This is Cards Page</h3>

            <div className="flex justify-center my-5">


                {/* Card-1 */}
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://ck-content.imgix.net/pcm/content/c591eff40c74098ad56e-da9c50dd3e30c3572f9f-CDP_Card_Art_12_11.png?auto=compress%2Cformat" alt="cradit" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Platinum Cradit Card</h2>
                        <p>Online Bank BD Platinum Cradit </p>
                        <div class="cardCard-actions">
                            <button class="btn btn-primary">Show Details</button>
                        </div>
                    </div>
                </div>

                {/*Card-2 */}
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://freepngimg.com/save/26058-credit-card-transparent/1102x688" alt="maaster" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Master Card</h2>
                        <p>Online Bank BD Master Card</p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Show Details</button>
                        </div>
                    </div>
                </div>
                {/* Card-3 */}
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://cdn.gobankingrates.com/wp-content/uploads/2016/02/2_Visa-Infinite-Eurasian-Diamond-Card.jpg" alt="student" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Student Card</h2>
                        <p>Online Bank BD Student Card</p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Show Details</button>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Cards;