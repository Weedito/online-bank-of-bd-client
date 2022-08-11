import React from 'react';
import { useNavigate } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { blogData } from '../../Components/Components.Nahidul/Data';
const BlogDetails = () => {
    const navigate = useNavigate();
    return (
        <section className='w-full mx-auto py-5  my-5  justify-center rounded-[27px]'>
            
            <figure><img className='' src="https://i.ibb.co/N3XWhrR/blog1.jpg" alt="Shoes" /></figure>
        <div class="bg-base-100 shadow-xl  ">
           
            <div class="  text-center text-gray-700 my-5">
                <h2 class="font-bold text-4xl">
                    CATAGORI-1!
                    
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?
                    If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end text-black ">
                    <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon icon={faShare} />
                </div>
            </div>
        </div>
        </section>
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
        // <div className=" mx-5">
        //     {blogData.map(item => {
        //         return (
        //             <div key={item.id} class="card card-compact w-96 bg-base-100 shadow-xl rounded-[27px] ">
        //                 <figure>
        //                     <img src={item.img} alt="blogs" class="rounded-[27px]" />
        //                 </figure>
        //                 <div class="card-body text-center">
        //                     <h2 class="card-title text-[#027358] text-xl">{item.blogTitle}</h2>
        //                     <a  onClick={() => navigate(`/blog/:${item.id}`)} className='font-semibold text-lg '>{item.description} </a>


        //                     <div class="card-actions justify-end text-black ">
        //                         <FontAwesomeIcon icon={faHeart} />
        //                         <FontAwesomeIcon icon={faShare} />
        //                     </div>
        //                 </div>
        //             </div>
        //         )
        //     })}

        // </div>


        
    );
};

export default BlogDetails;