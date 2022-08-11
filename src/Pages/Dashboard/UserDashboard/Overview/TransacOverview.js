import { faListAlt } from '@fortawesome/free-regular-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const TransacOverview = ({ myTransactions }) => {
    const navigate = useNavigate();
    const trTranc = myTransactions?.slice().reverse();

    return (
        <div className='w-full bg-gray-300 rounded-md p-5'>
            <div className="">
                <h3 className="text-md text-green-700 font-semibold"> <FontAwesomeIcon icon={faListAlt} /> My New Transactions</h3>
            </div>

            <div className=" w-full md:w-3/5 py-2 mx-auto">
                {
                    trTranc?.slice(0,3)
                    .map(transaction => {
                        return (
                            <div className="flex w-full items-center justify-between">
                                <h3 className="text-sm w-2/6">{transaction?.date}</h3>
                                <h3 className="text-sm w-3/6 text-rose-700">{transaction?.statement}</h3>
                                <h3 className="text-sm w-1/6">$ {(transaction?.deposit > 0 && transaction?.withdraw <= 0) ? transaction?.deposit : null || (transaction?.withdraw > 0 && transaction?.deposit <= 0) ? transaction?.withdraw : null }</h3>
                            </div>
                        )
                    })
                }
                <div onClick={() => navigate('/dashboard/mytransactions')} className="text-center py-3 cursor-pointer hover:text-orange-500 ease-linear duration-200">
                    See More <FontAwesomeIcon icon={faAngleRight} />
                </div>
            </div>

        </div>
    );
};

export default TransacOverview;