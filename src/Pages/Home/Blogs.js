import React from 'react';
import { useNavigate } from 'react-router-dom';
import useBlogs from '../../Hook/useBlogs';
import Blog from './Blog';
import "../Blogs/Blogs.css";
import Loading from '../../Components/Components.Nahid/Loading';
const Blogs = () => {
    const { blogData, spinner } = useBlogs()
    const navigate = useNavigate()
    const blogsDataSlice = blogData?.slice(0, 3)


    if (spinner) {
        return <Loading />
    }

    return (
        <div className='blog-container  py-10 px-2 ' >
            <div className="max-w-7xl mx-auto">
                <div className='py-10 px-2'>
                    <h2 className="section-title text-center font-semibold text-2xl md:text-4xl lg:text-6xl text-white ">
                        Read Our Blogs
                    </h2>
                </div>
                {/* card start */}
                <div className=" grid grid-cols-1  lg:grid-cols-3 pt-8 gap-6 justify-content-center px-16 rounded-[27px]">
                    {
                        blogsDataSlice?.map(blog => <Blog key={blog._id} blog={blog} />)
                    }
                </div>
                <div className='blog-btn flex justify-center mt-6 items-center '>
                    <button
                        className='my-2 lg:text-xl text-sm  flex items-center text-center text-white  hover:text-green-400 duration-300 ease-in-out'
                        onClick={() => navigate("/allBlogsData")}
                    >See More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Blogs;