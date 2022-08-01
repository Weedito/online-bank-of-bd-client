import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../../../Components/Components.Nahid/Loading';
import auth from '../../../../firebase.init';

const SendMoney = () => {

  const [myAccounts, setMyAccounts] = useState([]);
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    const url = `http://localhost:5000/accounts?email=${user.email}`
    fetch(url)
      .then(res => res.json())
      .then(data => setMyAccounts(data))
  }, [user])

  if (loading) {
    return <Loading />
  }

  console.log(myAccounts);

  return (
    <div className="w-full lg:h-full p-12">
      <h1 className="font-bold text-2xl pb-4 text-green-500">Transfer Money</h1>
      <div class="flex flex-col w-full lg:flex-row">
        <div class="grid flex-grow h-full  py-5 card bg-base-300 rounded-box place-items-center">
          <h3 className="text-center font-semibold py-3 text-green-700">My Account</h3>
          <div className="w-2/3 mx-auto text-left">
            <div className="my-2">
              <h3 className="text-gray-700">Account Holer Name</h3>
              <p className=""><FontAwesomeIcon className='pr-2' icon={faArrowRight} /><span className="text-rose-700"> {myAccounts[0]?.name}</span></p>
            </div>
            <div className="my-2">
              <p className="text-gray-700">Account Number</p>
              <p className=""><FontAwesomeIcon className='pr-2' icon={faArrowRight} /><span className="text-rose-700"> {myAccounts[0]?.AccNo}</span></p>
            </div>
            <div className="my-2">
              <p className="text-gray-700">Available Balance</p>
              <p className=""><FontAwesomeIcon className='pr-2' icon={faArrowRight} /><span className="text-rose-700">$ {myAccounts[0]?.balance}</span></p>
            </div>
          </div>

        </div>
        <div class="divider lg:divider-horizontal"></div>
        <div class="grid flex-grow h-full py-5 card bg-base-300 rounded-box place-items-center">
          <h3 className="text-center font-semibold text-green-700 py-3">Transfer Account</h3>
          <div class="relative z-0 my-2">
            <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:green-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
            <label for="floating_standard" class="absolute text-sm text-left w-full justify-start flex text-gray-700 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Account Holder Name</label>
          </div>
          <div class="relative z-0 my-2">
            <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:green-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
            <label for="floating_standard" class="absolute text-sm text-left w-full justify-start flex text-gray-700 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Account Number</label>
          </div>
          <div class="relative z-0 my-2">
            <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:green-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
            <label for="floating_standard" class="absolute text-sm text-left w-full justify-start flex text-gray-700 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Transfer Amount</label>
          </div>
        </div>
      </div>

      <div className="py-10">
      <button type="button"
            class="inline-block px-6 py-2.5 border-2 border-green-700 text-green-700 font-medium text-xs leading-tight uppercase rounded hover:bg-gray-700 hover:text-white hover:border-rose-700 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            data-mdb-ripple="true" data-mdb-ripple-color="light">
            Transfer
          </button>
      </div>

    </div>
  );
};

export default SendMoney;