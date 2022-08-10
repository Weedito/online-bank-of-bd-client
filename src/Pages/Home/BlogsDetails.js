import React from 'react';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const BlogsDetails = () => {
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
    );
};

export default BlogsDetails;