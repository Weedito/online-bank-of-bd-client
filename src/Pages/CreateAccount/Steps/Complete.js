import React from 'react';

const Complete = () => {

  // console.log(CAData);
  // console.log(accountDetails);

  return (
    <div className="container md:mt-10">
      <div className="flex flex-col items-center">

        <div className=" text-xl font-semibold uppercase text-green-500">
          <img className='object-cover p-5 mx-auto w-3/5' src="https://i.ibb.co/XDSKKXM/Well-Done.png" alt="" />
        </div>

        <div className="mt-3 text-xl font-bold uppercase text-green-600">
          Congratulations!
        </div>
        <div className="text-lg font-semibold text-gray-500">
          Your Account Has Been Created.
        </div>
        <a className="mt-10" href="/dashboard">
          <button className="h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100">
            Close
          </button>
        </a>
      </div>
    </div>
  );
}

export default Complete;