import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import useAccount from '../../../../Components/Components.Nahid/Hooks/useAccount';
import useNotice from '../../../../Hook/useNotice';
import NoticeDropDown from './NoticeDropDown';

const TopOverview = ({ handleSelect, frstacc }) => {

    const { myAccount } = useAccount();
    const [noticeDropDown,setNoticeDropDown]=useState(false);
    const {allNotice}=useNotice();
    const [countNotice,setCountNotice]=useState(false)
    console.log(allNotice?.length);

    return (
        <div className="flex justify-between items-center text-gray-700 gap-3 h-20 w-full">

            <div className="text-gray-700 flex items-center justify-center gap-2 font-semibold text-xl lg:text-3xl">
                <h3 className="text-sm md:text-md pr-2">Overview of</h3>
                <div className="">
                    <select onChange={handleSelect} className="select focus:outline-none select-ghost w-full text-md">
                        {
                            myAccount?.map(account => <option >{account?.AccNo}</option>)
                        }
                    </select>
                </div>
            </div>

            <div className="hidden relative lg:block">
                <div className="flex  items-center relative  gap-4">
                    <FontAwesomeIcon icon={faSearch} className="h-8 w-8" />
                    <div className='p-2 cursor-pointer '
                    onClick={()=>setNoticeDropDown(!noticeDropDown)}
                    >
                        <label tabindex="12" className=" m-1 relative flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8  hover:text-primary">
                                <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clipRule="evenodd" />
                                </svg>
                           <div
                            onClick={()=>setCountNotice(true)}
                           className='p-1 h-4 w-4 rounded-full bg-base-100   absolute top-[-2px] right-0'>
                            <sup className=' text-xs text-primary text-semibold' >
                                {
                                    countNotice? "0" : allNotice?.length
                                }
                                </sup>
                           </div>
                        </label>
                    </div>
                    {
                        noticeDropDown&& 
                        <div className='absolute top-12 right-12 z-10'>
                            <ul tabindex="12" class="dropdown-content menu p-2 shadow bg-base-100 min-h-52 flex flex-col text-start rounded-box w-72">
                                    {
                                        allNotice?.map(notice=>  <NoticeDropDown notice={notice} key={notice._id}/>)
                                    }
                                </ul>
                        </div>
                    }
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/192/192/people" alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopOverview;