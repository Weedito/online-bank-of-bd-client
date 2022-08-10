import React from 'react';
import useBlogs from '../../Hook/useBlogs';
import Blog from './Blog';
import "./Blogs.css";
const Blogs = () => {
    const {blogData,spinner}=useBlogs()
    
if(spinner){
    return <p>Loading.....</p>
}
   
    return (
        <div className=' blog-container  py-10 px-2 ' >
        <div className='py-10 px-2'>
            <h2 className="section-title text-center font-semibold text-2xl md:text-4xl lg:text-6xl text-white ">
                Read Our Blogs
            </h2>
        </div>
        {/* card start */}
        <div className=" grid grid-cols-1 lg:grid-cols-3 pt-8 gap-5  px-20 rounded-[27px]">
                {
                    blogData?.map(blog=> <Blog key={blog._id} blog={blog}/>)
                } 
        </div>





    </div>
    );
};

export default Blogs;