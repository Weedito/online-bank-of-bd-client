import React, { useEffect, useState } from 'react';
import BlogsRow from './BlogsRow';

const AllBlogs = () => {
    const [blogs,setBlogs]=useState([])
    const [smSpinner,setSmSpinner ]=useState(true)
    const [refresh,setRefresh]=useState(false)
    const [modal,setModal]=useState(false)
    useEffect(()=>{
        const url = 'http://localhost:5000/blogs'
        fetch(url).then(res=>res.json()).then(data=>{
            const reversBlog = data.reverse()
            setBlogs(reversBlog)
            setSmSpinner(false)
        })
    },[refresh])
    if(smSpinner){
        return <p className='text-green text-xl my-12 text-center'>Loading...</p>
    }
    console.log(modal);
    return (
        <div className=" text-left h-full w-full">

        <div className="w-full flex items-center justify-center my-12">
            <div className="bg-white shadow rounded py-12 px-4 mb-20">
           <div className='blogM-header flex justify-between'>
            <div className='add-btn'>
            <button
            onClick={()=>setModal(true)}
            className="outline-0 border py-2 px-4 rounded-md text-green-500 flex items-center text-xl font-sans font-medium shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                Add
            </button>
            </div>
            <p className="md:text-3xl text-xl font-bold pb-10 leading-7 text-center text-gray-700">All Blogs </p>
            <div className='search-container'>
                <form>
                    <input type="text" className='input input-primary' placeholder="Search Blog Title"/>
                    <button type='submit' className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                    </button>
                </form>

            </div>

           </div>
                <table className="border-collapse w-full bg-slate-200">
                    {/* <!-- head --> */}
                    <thead>
                        <tr className='text-center'>
                            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Index</th>
                            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Image</th>
                            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Title</th>
                            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Date</th>
                            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Update</th>
                            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                   {
                    blogs?.map((blog,index)=><BlogsRow key={blog._id} blog={blog} index={index+1} refresh={refresh} setRefresh={setRefresh} />)
                   }
                </tbody>
                </table>
            </div>

         

        </div>
        </div>
    );
};

export default AllBlogs;