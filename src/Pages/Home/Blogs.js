import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import BgImage from "../../Assets/Images/blog/blog-bg.jpg"
import Blog from './Blog';
import "./Blogs.css";
const Blogs = () => {
    const navigate =useNavigate()
    const[blogData,setBlogDate]=useState([])
    const [spnnier,setSpinner]=useState(true)
    useEffect(()=>{
        const url = "http://localhost:5000/blogs"
        fetch(url).then(res=>res.json()).then(data=>{
            const blogreverse= data.reverse()
            const blogslice = blogreverse.slice(0,3)
            setBlogDate(blogslice)
        })

    },[])
   
    return (
        <div
         className=' blog-container  py-10 px-2 ' >

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