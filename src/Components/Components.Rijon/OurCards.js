import React from 'react';
import { Slide } from 'react-reveal';

const OurCards = () => {
  return (
    <div className='max-w-7xl mx-auto '>
      <div className='flex flex-col md:flex-row gap-2 justify-around items-center py-20 px-2 '>
        <Slide left>
          <div>
            <img src="https://i.ibb.co/gdsXHLQ/card-removebg-preview.png" alt="" />
          </div>
        </Slide>
        <Slide right>
          <div className="text-left">
            <h3 className="text-3xl lg:text-5xl font-serif font-bold lg:pb-4">Our Cards</h3>
            <p className="font-bold text-2xl">Make Your life Eassy. Be a Smarter and Digitalized <br />
              your money, It's safe and secured.</p>

          </div>
        </Slide>

      </div>


      {/* card section  */}
      <div className='grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto gap-5'>

        <div className="card lg:card-side bg-slate-50 shadow-xl">
          <figure>
            <img className='rounded-xl h-52 max-w-xs p-5' src="https://ck-content.imgix.net/pcm/content/c591eff40c74098ad56e-da9c50dd3e30c3572f9f-CDP_Card_Art_12_11.png?auto=compress%2Cformat" alt="Album" />

          </figure>
          <div className="card-body ">
            <h2 className="card-title font-bold">Platinum Cradit Card</h2>
            <p className='text-left'>Platinum Cradit Card</p>

            <div className="card-actions justify-end">
              <button className="btn btn-ghost">Get It Now</button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-slate-50 shadow-xl">
          <figure>
            <img className='rounded-xl h-52 max-w-xs p-5' src="https://freepngimg.com/save/26058-credit-card-transparent/1102x688" alt="Album" />

          </figure>
          <div className="card-body ">
            <h2 className="card-title font-bold">Master Card</h2>
            <p className='text-left'>Online Bank BD Master Card</p>

            <div className="card-actions justify-end">
              <button className="btn btn-ghost">Get It Now</button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-slate-50 shadow-xl">
          <figure>
            <img className='rounded-xl h-52 max-w-xs p-5' src="https://cdn.gobankingrates.com/wp-content/uploads/2016/02/2_Visa-Infinite-Eurasian-Diamond-Card.jpg" alt="Album" />

          </figure>
          <div className="card-body ">
            <h2 className="card-title font-bold">Diamond Card</h2>
            <p className='text-left'>Diamond Cradit Card</p>

            <div className="card-actions justify-end">
              <button className="btn btn-ghost">Get It Now</button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-slate-50 shadow-xl">
          <figure>
            <img className='rounded-xl h-52 max-w-xs p-5' src="https://ck-content.imgix.net/pcm/content/c591eff40c74098ad56e-da9c50dd3e30c3572f9f-CDP_Card_Art_12_11.png?auto=compress%2Cformat" alt="Album" />

          </figure>
          <div className="card-body ">
            <h2 className="card-title font-bold">Platinum Cradit Card</h2>
            <p className='text-left'>Platinum Cradit Card</p>

            <div className="card-actions justify-end">
              <button className="btn btn-ghost">Get It Now</button>
            </div>
          </div>
        </div>



      </div>

    </div>
  );
};

export default OurCards;