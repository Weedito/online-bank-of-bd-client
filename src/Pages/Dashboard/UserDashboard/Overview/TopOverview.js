import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import useAccount from '../../../../Components/Components.Nahid/Hooks/useAccount';

const TopOverview = ({ handleSelect, frstacc }) => {

    const { myAccount } = useAccount();
    const [noticeDropDown,setNoticeDropDown]=useState(false);



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
                    <FontAwesomeIcon icon={faSearch} />
                    <div className='p-2 cursor-pointer '
                    onClick={()=>setNoticeDropDown(!noticeDropDown)}
                    >
                        <label tabindex="12" class=" m-1">
                        <FontAwesomeIcon icon={faBell}  />
                        </label>
                    </div>
                    {
                        noticeDropDown&& 
                        <div className='absolute top-8 right-12'>
                            <ul tabindex="12" class="dropdown-content menu p-2 shadow bg-base-100 min-h-52 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
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