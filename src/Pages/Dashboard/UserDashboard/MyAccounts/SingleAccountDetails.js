import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAccount from '../../../../Components/Components.Nahid/Hooks/useAccount';

const SingleAccountDetails = () => {
    const { myAccount } = useAccount();
    const [acc, setAcc] = useState();
    const { id } = useParams();

    useEffect(() => {
        const account = myAccount?.find(ac => ac?.AccNo == id);
        setAcc(account);
    }, [myAccount, id]);

    // console.log(acc);

    return (
        <div className="flex w-full mx-auto items-center justify-center h-full">
            <div class="flex flex-col md:flex-row w-full rounded-lg bg-white shadow-lg">
                <div className="w-full p-5 md:w-2/5 mx-auto">
                    <img class=" object-cover rounded-t-lg md:rounded-none md:rounded-l-lg" src={acc?.ahimage} alt="" />
                </div>
                <div class="p-6 w-full md:w-2/5 mx-auto flex flex-col justify-start">
                    <h5 class="text-gray-900 text-xl font-semibold mb-2">Name: <span className="text-green-700">{acc?.name}</span></h5>
                    <p class="text-gray-700 text-xs md:text-base font-semibold mb-4">Account Type: <span className=" text-xs md:text-base px-3 py-1 rounded-full bg-rose-700 text-white">{acc?.actype}</span></p>
                    <p class="text-gray-700 text-xs md:text-base font-semibold mb-4">Account Number: {acc?.AccNo}</p>
                    <p class="text-gray-700 text-xs md:text-base font-semibold mb-4">Balance: $ {acc?.balance}</p>
                    <p class="text-gray-700 text-xs md:text-base font-semibold mb-4">Email: {acc?.accEmail}</p>
                    <p class="text-gray-700 text-xs md:text-base font-semibold mb-4">NID Number: {acc?.NIDno}</p>
                    <p class="text-gray-700 text-xs md:text-base font-semibold mb-4">Phone: {acc?.phone}</p>
                    <p class="text-gray-700 text-xs md:text-base font-semibold mb-4">Date of Birth: {acc?.DOB}</p>
                    <p class="text-gray-700 text-xs md:text-base font-semibold mb-4">Gender: {acc?.gender}</p>
                    <p class="text-gray-700 text-xs md:text-base font-semibold mb-4">Country: {acc?.country}</p>
                    <p class="text-gray-700 text-xs md:text-base font-semibold mb-4">Address: {acc?.address}</p>
                    <p class="text-gray-600 text-xs">Account Created {acc?.OpeningDate}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleAccountDetails;