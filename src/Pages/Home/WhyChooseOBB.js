import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CommitmentData } from '../../Components/Components.Rijon/Data'

const WhyChooseOBB = () => {

  const navigate = useNavigate()
  return (
    <div className='bg-slate-100 py-10 px-2 '>
      <div className='py-10 px-2'>
        <h2 className="section-title text-center font-semibold text-2xl md:text-4xl lg:text-6xl ">
          Why Choose <span className="text-green-700">Online Bank BD</span>
        </h2>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-auto mt-5 max-w-7xl '>

        {
          CommitmentData.map((item, idx) => {
            return (
              <div data-aos="zoom-in-down" key={idx} className="card hover:bg-base-100 shadow-xl">
                <figure className="w-40 m-auto">
                  <img src={item?.icon} alt="clock" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title font-bold">{item?.title}</h2>
                  <p>{item?.description.slice(0, 70)}</p>
                  <div className="card-actions">
                    <button onClick={() => navigate(`/ourcommitmen/${item?._id}`)} className="text-1xl px-4 py-1 text-white bg-green-700 rounded-full ">See More</button>
                  </div>
                </div>
              </div>
            )
          })
        }




      </div>

    </div>
  );
};

export default WhyChooseOBB;
