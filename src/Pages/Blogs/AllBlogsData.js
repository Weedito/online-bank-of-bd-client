import React from 'react';
import useBlogs from '../../Hook/useBlogs';
import Blog2 from './Blog2';

const AllBlogsData = () => {
    const {blogData,spinner}=useBlogs()
    if(spinner){
        return <p>Loading... </p>
    }
    return (
        <div >
            <div className='blog-header md:my-12 py-6 bg-[#EDFFD4]'>
            <h3 className='text-4xl font-bold uppercase text-center '>Our Blogs</h3>
            </div>
            <div className='blog mt-12 md:mt-28 mx-auto max-w-[1280px] px-2 grid grid-cols-1 lg:grid-cols-2 gap-12'>
                 {
                    blogData?.map(blog=><Blog2 key={blog._id} blog={blog}/>)
                 }
            </div>
        </div>
    );
};

export default AllBlogsData;