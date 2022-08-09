import React from 'react';
import { useNavigate } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bgImg from '../../../src/Assets/Images/products/blog-bg.jpg'
import { blogData } from '../../Components/Components.Nahidul/Data';
const Blog = () => {
    const navigate = useNavigate();
   
    return (
        <div className='bg-gradient-to-r from-[#027358] to-[#569601]  py-10 px-2 ' >
            
            <div className='py-10 px-2'>

                <h2 className="section-title text-center font-semibold text-2xl md:text-4xl lg:text-6xl text-white ">
                    Read Our Blogs
                </h2>
            </div>
            {/* card start */}
            <div class="card w-96 bg-base-100 shadow-xl rounded-[27px]">
                <figure><img className="rounded-[27px]" src="https://i.ibb.co/N3XWhrR/blog1.jpg" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-[#027358] text-xl">Shoes!</h2>
                    <a href='' className='font-semibold text-lg hover:text-[#569601] hover:underline' target='_blank'>If a dog chews shoes whose shoes does he choose?</a>
                    <div class="card-actions justify-end text-black">
                         <FontAwesomeIcon icon={faHeart} />
                         <FontAwesomeIcon icon={faShare} />
                    </div>
                   
                </div>
               
            </div>


             

                
           
       
        </div>
    );
};

export default Blog;