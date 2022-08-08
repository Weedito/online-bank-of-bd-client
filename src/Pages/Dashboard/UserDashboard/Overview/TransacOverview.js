import { faListAlt } from '@fortawesome/free-regular-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const TransacOverview = () => {
    return (
        <div className='w-full bg-gray-300 rounded-md p-5'>
            <div className="">
                <h3 className="text-md text-green-700 font-semibold"> <FontAwesomeIcon icon={faListAlt} /> My Transactions</h3>
            </div>

            <div className=" w-full md:w-3/5 py-2 mx-auto">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm">02-07-2022</h3>
                    <h3 className="text-sm">Deposit</h3>
                    <h3 className="text-sm">$ 745</h3>
                </div>
                <div className="flex items-center justify-between">
                    <h3 className="text-sm">02-07-2022</h3>
                    <h3 className="text-sm">Deposit</h3>
                    <h3 className="text-sm">$ 745</h3>
                </div>
                <div className="flex items-center justify-between">
                    <h3 className="text-sm">02-07-2022</h3>
                    <h3 className="text-sm">Deposit</h3>
                    <h3 className="text-sm">$ 745</h3>
                </div>
                <div className="text-center py-3 cursor-pointer hover:text-orange-500 ease-linear duration-200">
                    See More <FontAwesomeIcon icon={faAngleRight} />
                </div>
            </div>

        </div>
    );
};

export default TransacOverview;