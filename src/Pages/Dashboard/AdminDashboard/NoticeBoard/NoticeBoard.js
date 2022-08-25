import React, { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';
import NewNotice from './NewNotice';
import Notice from './Notice';
const NoticeBoard = () => {
    const [modal,setModal]=useState(false);
    const [allNotice,setAllNotice]=useState([]);
    const [smSpinner,setSmSpinner]=useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/allNotice')
            .then(res => res.json())
            .then(data => {
                setAllNotice(data);
                setSmSpinner(false);
            })
    }, [])
    if(smSpinner){
        <HashLoader color="#137c38" size={70} cssOverride />
    }
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
                
                {
                    allNotice.map(notice=><Notice key={notice?.noticeId} notice={notice}/>)
                }

            </div>
                {
                    modal && <NewNotice setModal={setModal} allNotice={allNotice}/>
                }
            </div>
            
        </div>
    );
};

export default NoticeBoard;