import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AgentBankingData } from '../../Components/Components.Rijon/Data'

const AgentBank = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-slate-100 py-10 px-2 '>

      <div className='grid grid-cols-2 lg:grid-cols-8 gap-5 mx-auto mt-5 max-w-7xl '>

        {   
          AgentBankingData.map((item, idx) => {
            return (
              <div key={idx} className="card hover:bg-base-100 shadow-xl">

                <div className="card-body items-center text-center cursor-pointer">
                  <h2 onClick={() => navigate(`/agentDynamicPage/${item?._id}`)} className="card-title font-bold cursor-pointer">{item?.title}</h2>
                </div>
              </div>
            )
          })
        }




      </div>

    </div>
  );
};

export default AgentBank;