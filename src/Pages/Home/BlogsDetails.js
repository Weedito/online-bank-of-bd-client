import React, { useEffect, useState } from 'react';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Blogs.css"
import { useParams } from 'react-router-dom';
const BlogsDetails = () => {
    const {id}=useParams()
    const [blog,setblog]=useState({})
    const [spinner,setSpinner]=useState(true)
    useEffect(()=>{
        const url= `http://localhost:5000/blog/${id}`
        fetch(url).then(res=>res.json()).then(data=>{
            setblog(data)
            setSpinner(false)
        })
    },[id])
    if(spinner){
        return<p>Loading...</p>
    }
    return (
        <section className='w-full mx-auto pb-5  mb-5  justify-center rounded-[27px] relative'>
        <div className='blogDetailsBanner'>
        </div>
        <div class="bg-base-100 shadow-xl mt-[80px] mx-auto max-w-[1280px] p-4 ">
           
            <div class="  text-center text-gray-700 my-5">
                <h2 class="font-bold text-4xl my-2">
                    CATAGORI-1!
                </h2>
                    <div class="card-actions  text-black flex justify-center ">
                        <FontAwesomeIcon icon={faHeart} className="mr-2 hover:text-red-500 cursor-pointer" />
                        <FontAwesomeIcon icon={faShare} className="hover:text-green-500 cursor-pointer" />
                    </div>
                    <div>
                        <h2 className='text-center text-2xl tracking-wide '>{blog.date}</h2>
                    </div>
                    <div className='blog-descriptio md:mx-12 mx-2 mt-[80px] flex flex-col justify-start'>
                        <h4 className='md:text-4xl text-xl font-medium text-start '>{blog?.title}</h4>
                        <hr/>
                        <blockquote className='mt-4'>
                            <p className='text-justify md:text-xl text-sm'>
                                {blog?.description}
                            </p>
                        </blockquote>

                        
                    </div>
                
            </div>
        </div>
            <div className='blog-img-container'>
            <figure><img className='blog-img shadow-xl' src={blog?.picture} alt="Shoes" /></figure>

            </div>
        </section>
    );
};

export default BlogsDetails;