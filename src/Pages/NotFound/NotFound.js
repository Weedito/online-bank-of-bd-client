import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full h-full'>
            
        <div class="flex items-center justify-center py-12">
            <div class="bg-white dark:bg-gray-800 border dark:border-gray-900 rounded-md flex items-center justify-center mx-4 md:w-2/3">
                <div class="flex flex-col items-center py-16">
                    <img class="px-4 hidden md:block" alt='' src="https://i.ibb.co/9Vs73RF/undraw-page-not-found-su7k-1-3.png" />
                    <img class="md:hidden" alt='' src="https://i.ibb.co/RgYQvV7/undraw-page-not-found-su7k-1.png" />
                    <h1 class="px-4 pt-8 pb-4 text-center dark:text-white text-5xl font-bold leading-10 text-gray-800">OOPS!</h1>
                    <p class="px-4 pb-10 text-base leading-none dark:text-gray-200 text-center text-gray-600">No signal here! we cannot find the page you are looking for</p>
                    <button onClick={() => navigate('/')} class="mx-4 h-10 w-44  rounded-md text-white text-base bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800">Go Back to Homepage</button>
                </div>
            </div>
        </div>
    
        </div>
    );
};

export default NotFound;