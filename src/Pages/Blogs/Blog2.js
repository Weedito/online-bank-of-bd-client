import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blog2 = ({blog}) => {
    const {title,description, date,picture,_id}=blog;
    const navigate =useNavigate()
    return (
        <div className="p-8 rounded-3xl bg-[#F3F3F3] flex flex-col md:flex-row w-[100%] shadow-md">
            <div className='md:w-[40%] w-[100%] flex justify-center md:mb-0 mb-4'>
                <img src={picture} className=" rounded-3xl" alt='blog-img'/>
            </div>
            <div className='md:w-[60%] w-[100%] md:ml-4  ml-0 flex flex-col justify-between '>
                <h4 className='text-xl mb-2 md:text-2xl capitalize font-blod  text-gray-600 '>{title}</h4>
                <p className='text-sm text-gray-600'>{description.length > 50 ? description.slice(0,50)+"...": description}</p>
                <div className='flex justify-between mt-6'>
                    <p className='md:text-xl text-sm'>{date}</p>
                    <button
                    onClick={()=>navigate(`/blogDetails/${_id}`)}
                     className='py-2 px-4 rounded-2xl md:text-xl text-sm bg-[#D9D9D9] hover:bg-green-400 duration-300 hover:text-white'>Read More</button>
                </div>
            </div>
            
        </div>
    );
};

export default Blog2;