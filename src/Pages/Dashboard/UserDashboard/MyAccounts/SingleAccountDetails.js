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
            <img class=" object-cover  md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={acc?.acImage} alt="" />
            <div class="p-6 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-semibold mb-2">Name: <span className="text-green-700">{acc?.name}</span></h5>
                <p class="text-gray-700 text-xs md:text-base font-semibold mb-4">Account Type: <span className=" text-xs md:text-base px-3 py-1 rounded-full bg-rose-700 text-white">{acc?.actype}</span></p>
                <p class="text-gray-700 text-xs md:text-base font-semibold mb-4">Account Number: {acc?.AccNo}</p>
                <p class="text-gray-700 text-xs md:text-base font-semibold mb-4">Balance: $ {acc?.balance}</p>
                <p class="text-gray-700 text-xs md:text-base font-semibold mb-4">Email: {acc?.AccNo}</p>
                <p class="text-gray-700 text-xs md:text-base font-semibold mb-4">NID Number: {acc?.NID}</p>
                <p class="text-gray-700 text-xs md:text-base font-semibold mb-4">Phone: {acc?.phone}</p>
                <p class="text-gray-700 text-xs md:text-base font-semibold mb-4">Date of Birth: {acc?.dateOfBirth}</p>
                <p class="text-gray-700 text-xs md:text-base font-semibold mb-4">Gender: {acc?.gender}</p>
                <p class="text-gray-700 text-xs md:text-base font-semibold mb-4">Country: {acc?.country}</p>
                <p class="text-gray-700 text-xs md:text-base font-semibold mb-4">Address: {acc?.address}</p>
                <p class="text-gray-600 text-xs">Account Created {acc?.crDate}</p>
            </div>
        </div>
        </div>
    );
};

export default SingleAccountDetails;