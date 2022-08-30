import React from 'react';


const PendingAcc = () => {

    return (
        <div className="-mt-16">
            <div class="flex items-center justify-center py-12">
        <div class="bg-white dark:bg-gray-800 border dark:border-gray-900 rounded-md flex items-center justify-center mx-4 md:w-2/3">
            
   
            <div class="flex flex-col items-center py-16">
            <div class="px-4 py-12 bg-white">
      <div class="mx-auto flex justify-center">
        <div class="relative">
          <div
            class="w-[160px] h-[160px] border border-green-400 rounded-full"
          ></div>
          <div
            class="w-[140px] h-[140px] border border-green-400 rounded-full absolute top-2.5 right-2.5"
          ></div>
          <div>
            <svg
              class="absolute top-[22px] right-[26px] animate-spin"
              width="113"
              height="113"
              viewBox="0 0 113 113"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M56.7631 110.374C46.061 110.374 35.5993 107.2 26.7008 101.255C17.8023 95.3088 10.8668 86.8579 6.77128 76.9704C2.67576 67.083 1.60419 56.2031 3.69207 45.7066C5.77994 35.2102 10.9335 25.5686 18.501 18.001C26.0686 10.4335 35.7102 5.27994 46.2066 3.19207C56.7031 1.10419 67.583 2.17576 77.4704 6.27128C87.3579 10.3668 95.8088 17.3023 101.755 26.2008C107.7 35.0993 110.874 45.561 110.874 56.2631"
                stroke="#4338CA"
                stroke-width="3"
                stroke-linecap="round"
                stroke-dasharray="16 16"
              />
            </svg>
          </div>
        </div>
      </div>

    </div>
                <h1 class="px-4 pt-8 pb-4 text-center dark:text-white text-5xl font-bold leading-10 text-gray-800">Account Under Review!</h1>
                <p class="px-4 pb-10 text-base leading-none dark:text-gray-200 text-center text-gray-600">Please Wait for Approve your Account.</p>
                <a href='/' className="mx-4 px-7 py-2 rounded-md text-white text-base bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800">Go Back to Homepage</a>
            </div>
        </div>
    </div>
        </div>
    );
};

export default PendingAcc;