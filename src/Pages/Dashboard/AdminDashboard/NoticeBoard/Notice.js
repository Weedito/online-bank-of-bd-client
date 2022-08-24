import React from 'react';
import {faEdit, faBan}from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Notice = ({notice}) => {
    return (
        <div className='notice  border rounded-md md:px-4 py-4 bg-base-300 px-2 relative overflow-hidden shadow-md'>
                    <div className='noticeHeader flex mt-6'>
                      <h2 className='text-3xl mb-2 '>{notice?.title}</h2>
                    </div>
                    <div className='absolute top-[-50px] right-0 noticeIcon bg-transparent shadow-xl rounded-md '>
                    <button className='p-2 mx-2 hover:text-green-500 duration-200'>
                            {<FontAwesomeIcon className='text-2xl' icon={faEdit} />}
                        </button>
                        <button className='p-2 mx-2 hover:text-red-600 duration-200'>
                            {<FontAwesomeIcon className='text-2xl' icon={faBan} />}
                        </button>
                    </div>
                    <blockquote className='notice text-sm'>
                   {
                    notice?.message
                   }
                    </blockquote>
                </div>
    );
};

export default Notice;