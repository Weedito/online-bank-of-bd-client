import React from 'react';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
const Blog = ({blog}) => {
    const {title,picture, description, _id,blogLink}=blog;
    const  navigate = useNavigate()
    console.log(blogLink);
    return (
        <div  class="card card-compact bg-base-100 shadow-xl rounded-[27px] cursor-pointer "
                            onClick={() => navigate(`/blogDetails/${_id}`)}
                    >
                        <figure>
                            <img src={picture} alt="blogs" className="rounded-[27px] w-full" />
                        </figure>
                        <div class="card-body text-center">
                            <h2 class="card-title text-[#027358] text-xl">category</h2>
                            <a
                            href={blogLink&& blogLink}
                             className='font-semibold text-lg hover:text-[#569601] hover:underline' target='_blank'>{title} </a>
                            <div class="card-actions justify-end text-black ">
                                <FontAwesomeIcon icon={faHeart} className="hover:text-red-600" />
                                <FontAwesomeIcon icon={faShare} />
                            </div>
                        </div>
                    </div>
    );
};

export default Blog;