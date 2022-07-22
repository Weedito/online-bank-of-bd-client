import React from 'react';
import clockIMG from '../../Assets/Images/why-choose-section-img/clock.png'
import securityIMG from '../../Assets/Images/why-choose-section-img/security.png'
import dollarIMG from '../../Assets/Images/why-choose-section-img/dollar.png'

const WhyChooseOBB = () => {
  return (
    <div className='bg-slate-100 py-10 px-2'>
      <div className='py-10 px-2'>
      <h2 className="section-title text-center font-semibold text-2xl md:text-4xl lg:text-6xl ">
          Why Choose <span className="text-green-700">Bank Of BD</span>
        </h2>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-10 mt-5 '>

        <div className="card  bg-base-200 hover:bg-base-100 shadow-xl">
          <figure className="w-2/4 m-auto">
            <img src={clockIMG} alt="clock" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">We’re Fast</h2>
            <p>We provide fastest service to customers. Our aim is to provide fast service.</p>
            <div className="card-actions">
              <button className="text-1xl px-4 py-1 text-white bg-green-700 rounded-full ">See More</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-200 hover:bg-base-100 shadow-xl">
          <figure className="w-2/4 m-auto">
            <img src={securityIMG} alt="security" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">We’re Safe</h2>
            <p>Our bank provides maximum security to customers. Our job is to provide security for your money.</p>
            <div className="card-actions">
              <button className="text-1xl px-4 py-1 text-white bg-green-700 rounded-full ">See More</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-200 hover:bg-base-100 shadow-xl">
          <figure className="w-2/4 m-auto">
            <img src={dollarIMG} alt="dollar" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">We’re Low Cost</h2>
            <p>We provide low cost services. We provide low interest loans.</p>
            <div className="card-actions">
              <button className="text-1xl px-4 py-1 text-white bg-green-700 rounded-full ">See More</button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default WhyChooseOBB;
