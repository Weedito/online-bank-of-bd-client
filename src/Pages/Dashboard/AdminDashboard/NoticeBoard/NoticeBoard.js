import React, { useState } from 'react';
import {faEdit, faBan}from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NewNotice from './NewNotice';
const NoticeBoard = () => {
    const [modal,setModal]=useState(false);
    return (
        <div className='md:px-4 px-2 my-6 bg-base-100'>
            <div className='w-full flex flex-col  '>
            <h2 className='text-4xl '> Notice Board</h2>
           <div className='flex justify-end w-full mb-4'>
           <button
           onClick={()=>setModal(true)}
           className='outline-0 border py-2 px-4 rounded-md bg-primary text-white flex items-center text-xl font-sans font-medium shadow-md'>New Notice</button>
           </div>
            <div className='all Notice grid gap-4 grid-cols-1 md:grid-cols-2 my-4'>
               {/* all notice Container  */}
                <div className='notice  border rounded-md md:px-4 py-4 bg-base-300 px-2 relative overflow-hidden shadow-md'>
                    <div className='noticeHeader flex mt-6'>
                      <h2 className='text-3xl '>Notice Title</h2>
                    </div>
                    <div className='absolute top-[-50px] right-0 noticeIcon bg-transparent shadow-xl rounded-md '>
                    <button className='p-2 mx-2 hover:text-green-500 duration-200'>
                            {<FontAwesomeIcon className='text-2xl' icon={faEdit} />}
                        </button>
                        <button className='p-2 mx-2 hover:text-red-600 duration-200'>
                            {<FontAwesomeIcon className='text-2xl' icon={faBan} />}
                        </button>
                    </div>
                    <blockquote className='notice text-justify'>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.


                    </blockquote>
                </div>
                <div className='notice  border rounded-md md:px-4 py-4 bg-base-300 px-2 relative overflow-hidden shadow-md'>
                    <div className='noticeHeader flex mt-6'>
                      <h2 className='text-3xl '>Notice Title</h2>
                    </div>
                    <div className='absolute top-[-50px] right-0 noticeIcon bg-transparent shadow-xl rounded-md  '>
                    <button className='p-2 mx-2 hover:text-green-500 duration-200'>
                            {<FontAwesomeIcon className='text-2xl' icon={faEdit} />}
                        </button>
                        <button className='p-2 mx-2 hover:text-red-600 duration-200'>
                            {<FontAwesomeIcon className='text-2xl' icon={faBan} />}
                        </button>
                    </div>
                    <blockquote className='notice text-justify'>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </blockquote>
                </div>

            </div>
                {
                    modal && <NewNotice setModal={setModal}/>
                }
            </div>
            
        </div>
    );
};

export default NoticeBoard;