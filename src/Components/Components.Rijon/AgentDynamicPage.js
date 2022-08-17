import React from 'react';
import { useParams } from 'react-router-dom';
import { AgentBankingData } from '../../Components/Components.Rijon/Data'


const AgentDynamicPage = () => {
  const { id } = useParams();

  const data = AgentBankingData.filter(name => name._id === id)
  const singleData = (data[0]);
  const Branch1Data = (singleData.Branch1)
  const Branch2Data = (singleData.Branch2)
  const Branch3Data = (singleData.Branch3)



  const [openTab, setOpenTab] = React.useState(1);


  return (
    <div>
      <h1 class="text-5xl font-bold my-8 text-center">{singleData.title} <span className='text-3xl'>({singleData.EnglishTitle})</span></h1>

      <>
        <div className="flex flex-wrap">
          <div className="w-full">
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 1
                      ? "text-white bg-green-700"
                      : "text-green-700 bg-white")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  {Branch1Data?.Branch}
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 2
                      ? "text-white bg-green-700"
                      : "text-green-700 bg-white")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  {Branch2Data?.Branch}
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 3
                      ? "text-white bg-green-700"
                      : "text-green-700 bg-white")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  {Branch3Data?.Branch}
                </a>
              </li>
            </ul>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                    <h1 className='text-2xl font-bold'> Manager: {Branch1Data?.Manager}<br />
                      District: {Branch1Data?.District}<br />
                      Upazila: {Branch1Data?.Upazila}<br />
                      Branch: {Branch1Data?.Branch}</h1>
                    <address className='font-bold'>
                      Address :{Branch1Data?.Address}
                    </address>


                  </div>
                  <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                    <h1 className='text-2xl font-bold'> Manager: {Branch2Data?.Manager}<br />
                      District: {Branch2Data?.District}<br />
                      Upazila: {Branch2Data?.Upazila}<br />
                      Branch: {Branch2Data?.Branch}</h1>
                    <address className='font-bold'>
                      Address :{Branch2Data?.Address}
                    </address>
                  </div>
                  <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                    <h1 className='text-2xl font-bold'> Manager: {Branch3Data?.Manager}<br />
                      District: {Branch3Data?.District}<br />
                      Upazila: {Branch3Data?.Upazila}<br />
                      Branch: {Branch3Data?.Branch}</h1>
                    <address className='font-bold'>
                      Address :{Branch3Data?.Address}
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

    </div>
  );
};

export default AgentDynamicPage;