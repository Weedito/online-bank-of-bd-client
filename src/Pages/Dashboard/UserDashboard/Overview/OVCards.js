import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const OVCards = ({currentAccount}) => {
    const crAccount = currentAccount[0];
    return (
        <div className='w-full md:w-3/5 lg:w-full mx-auto'>
            <h3 className="text-2xl text-gray-700 font-semibold py-7">Cards</h3>
            <div className="bg-gradient-to-r from-green-700 p-5 to-green-500 rounded-md">
                <div className="flex justify-between">
                    <h2 className="text-mx text-white">
                        Balance
                    </h2>
                    <img className='rotate-45 w-6' src="https://i.ibb.co/vPD3Nqr/rss.png" alt="" />
                </div>
                <div className="">
                    <h3 className="text-2xl py-2 text-white font-bold">
                        <FontAwesomeIcon className='' icon={faDollarSign} /> <span className="">{crAccount?.balance}</span>
                    </h3>
                </div>
                <div className="">
                    <h3 className="text-xl py-2 text-white font-medium">
                        <span className="">{crAccount?.AccNo}</span>
                    </h3>
                </div>
                <div className="flex justify-between">
                    <div className="">
                    <h2 className="text-mx text-white"> Valid Thru </h2>
                    <h2 className="text-mx text-white"> 04/24 </h2>
                    </div>
                    <img className=' w-20' src="https://i.ibb.co/wQ9vZsp/visa-1.png" alt="" />
                </div>
            </div>

        </div>
    );
};

export default OVCards;