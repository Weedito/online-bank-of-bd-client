import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useAccount from '../../../../Components/Components.Nahid/Hooks/useAccount';

const SingleAccountDetails = () => {
    const { myAccount } = useAccount();
    const [acc, setAcc] = useState();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const account = myAccount?.find(ac => ac?.AccNo == id);
        setAcc(account);
    }, [myAccount, id]);

    // console.log(acc);

    return (
        <div className="">
            <div className="flex w-full mx-auto items-center justify-center h-full">
                <div className="flex flex-col md:flex-row w-full rounded-lg bg-white shadow-lg">
                    <div className="w-full p-5 md:w-2/5 mx-auto">
                        <img className=" object-cover rounded-t-lg md:rounded-none md:rounded-l-lg" src={acc?.ahimage} alt="" />
                    </div>
                    <div className="p-6 w-full md:w-2/5 mx-auto flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-semibold mb-2">Name: <span className="text-green-700">{acc?.name}</span></h5>
                        <p className="text-gray-700 text-xs md:text-base font-semibold mb-4">Account Type: <span className=" text-xs md:text-base px-3 py-1 rounded-full bg-rose-700 text-white">{acc?.actype}</span></p>
                        <p className="text-gray-700 text-xs md:text-base font-semibold mb-4">Account Number: {acc?.AccNo}</p>
                        <p className="text-gray-700 text-xs md:text-base font-semibold mb-4">Balance: $ {acc?.balance}</p>
                        <p className="text-gray-700 text-xs md:text-base font-semibold mb-4">Email: {acc?.accEmail}</p>
                        <p className="text-gray-700 text-xs md:text-base font-semibold mb-4">NID Number: {acc?.NIDno}</p>
                        <p className="text-gray-700 text-xs md:text-base font-semibold mb-4">Phone: {acc?.phone}</p>
                        <p className="text-gray-700 text-xs md:text-base font-semibold mb-4">Date of Birth: {acc?.DOB}</p>
                        <p className="text-gray-700 text-xs md:text-base font-semibold mb-4">Gender: {acc?.gender}</p>
                        <p className="text-gray-700 text-xs md:text-base font-semibold mb-4">Country: {acc?.country}</p>
                        <p className="text-gray-700 text-xs md:text-base font-semibold mb-4">Address: {acc?.address}</p>
                        <p className="text-gray-600 text-xs">Account Created {acc?.OpeningDate}</p>
                    </div>
                </div>

            </div>
            <button onClick={() => navigate(-1)} type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-6 py-2.5 bg-green-700 my-7 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" > <FontAwesomeIcon className='pr-2' icon={faBackward} /> Back to Accounts</button>
        </div>
    );
};

export default SingleAccountDetails;