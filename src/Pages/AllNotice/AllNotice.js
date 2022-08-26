import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useNotice from '../../Hook/useNotice';

const AllNotice = () => {
    const {allNotice}=useNotice();
    const [noticeIndex,setNoticeIndex]=useState(0)
    return (
        <div className='min-h-screen bg-transparent md:my-12  my-6 mx-auto max-w-[1280px] w-full flex  md:flex-row flex-col '>
            <div  className='noticeSiderbar rounded-md min-h-screen overflow-y-scroll md:w-[40%] w-[100%] p-4 shadow-lg border md:order-1 order-2 mr-0 md:mr-6 '>
                <h3 className='text-2xl text-center'>Select  Notice</h3>
                <hr/>
                {
                    allNotice?.map((notice,index)=> {
                        return<div
                        index={index}
                        onClick={()=>setNoticeIndex(index)}
                        className={`p-4 my-2 cursor-pointer rounded-md shadow-xl flex ${index===noticeIndex? "border-2 border-primary ":"border"}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-primary">
                                <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clipRule="evenodd" />
                                </svg>
                                <h2  className='text-xl capitalize '>{notice?.title}</h2>
                              </div>
                    })
                }
            </div>
            <div className='noticeBody  min-h-screen overflow-y-scroll md:order-2 order-1 md:w-[60%] w-[100%]  shadow-lg border rounded-md p-4'>
                <div className='mb-6'>
                    <h4 className=' text-xl font-bold '>
                        {
                            allNotice[noticeIndex]?.title
                        }
                    </h4>
                    <p>
                        <small className='text-xs'>Hello! User</small>
                    </p>
                </div>
                <p className=' tracking-tight'>
                    {
                        allNotice[noticeIndex]?.message
                    }
                </p>
               {
                allNotice[noticeIndex].link&&
                  <Link className='text-xl my-4 underline text-primary' to="google.com">Our Meeting</Link>
               }
            </div>
        </div>
    );
};

export default AllNotice;