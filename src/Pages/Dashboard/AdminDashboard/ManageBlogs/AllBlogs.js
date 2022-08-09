import React, { useEffect, useState } from 'react';
import BlogsRow from './BlogsRow';

const AllBlogs = () => {
    const [blogs,setBlogs]=useState([])
    const [smSpinner,setSmSpinner ]=useState(true)
    useEffect(()=>{
        const url = 'http://localhost:5000/blogs'
        fetch(url).then(res=>res.json()).then(data=>{
            const reversBlog = data.reverse()
            setBlogs(reversBlog)
            setSmSpinner(false)
        })
    },[])
    if(smSpinner){
        return <p className='text-green text-xl my-12 text-center'>Loading...</p>
    }
    console.log(blogs);
    return (
        <div className=" text-left h-full w-full">

        <div className="w-full flex items-center justify-center my-12">
            <div className="bg-white shadow rounded py-12 px-4 mb-20">
            <p className="md:text-3xl text-xl font-bold pb-10 leading-7 text-center text-gray-700">All Blogs </p>
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
                    blogs?.map((blog,index)=><BlogsRow key={blog._id} blog={blog} index={index+1} />)
                   }
                </tbody>
                </table>
            </div>

         

        </div>
        </div>
    );
};

export default AllBlogs;