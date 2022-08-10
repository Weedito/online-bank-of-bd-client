import React from 'react';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Blog = ({blog}) => {
    const {title,picture, description}=blog
    return (
        <div  class="card card-compact w-96 bg-base-100 shadow-xl rounded-[27px] cursor-pointer "
                            // onClick={() => navigate(`/blog/${blog.id}`)}
                    
                    >
                        <figure>
                            <img src={picture} alt="blogs" class="rounded-[27px]" />
                        </figure>
                        <div class="card-body text-center">
                            <h2 class="card-title text-[#027358] text-xl">category</h2>
                            <a
                            href='https://www.facebook.com/groups/programmingHero'
                             className='font-semibold text-lg hover:text-[#569601] hover:underline' target='_blank'>{title} </a>
                           

                            <div class="card-actions justify-end text-black ">
                                <FontAwesomeIcon icon={faHeart} />
                                <FontAwesomeIcon icon={faShare} />
                            </div>
                        </div>
                    </div>
    );
};

export default Blog;