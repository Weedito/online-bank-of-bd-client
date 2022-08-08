import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import useAccount from '../../../../Components/Components.Nahid/Hooks/useAccount';
import CreateAnAccount from '../../CreateAnAccount';

const TopOverview = ({ handleSelect }) => {

    const { myAccount } = useAccount();






    return (
        <div className="flex justify-between items-center text-gray-700 gap-3 h-20 w-full">

            <div className="text-gray-700 flex items-center justify-center gap-2 font-semibold text-xl lg:text-3xl">
                <h3 className="text-sm md:text-md pr-2">Overview of</h3>
                <div className="">

                    <select onChange={handleSelect} class="select focus:outline-none select-ghost w-full text-md">
                        <option selected disabled >Select</option>
                        {
                            myAccount?.map(account => <option >{account?.AccNo}</option>)
                        }
                    </select>
                </div>
            </div>

            <div className="hidden lg:block">
                <div className="flex  items-center gap-4">
                    <FontAwesomeIcon icon={faSearch} />
                    <FontAwesomeIcon icon={faBell} />
                    <div class="avatar">
                        <div class="w-10 rounded-full">
                            <img src="https://placeimg.com/192/192/people" alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopOverview;