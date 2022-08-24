import React from 'react';

const NewNotice = ({setModal}) => {
    return (
        <div className=" mx-5 absolute top-0 right-0 left-0 bottom-0 z-30 flex justify-center ">
            <div className=" md:w-2/3 w-full  my-12 md:mx-2 mx-4  relative  shadow-xl flex flex-col items-center justify-center bg-base-100 md:p-4 p-2 rounded-md shadow-3xl">
                    <span
                    onClick={()=>setModal(false)}
                    className='p-2  rounded-full absolute top-2 right-2  bg-base-200 md:mr-[-10px] md:mt-[-10px] md:mb-[10px] mr-0 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-red-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </span>

            </div>
        </div>
    );
};

export default NewNotice;