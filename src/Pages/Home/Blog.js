import React from 'react';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
const Blog = ({ blog }) => {
    const { title, picture, _id, blogLink, date } = blog;
    const navigate = useNavigate()
    return (
        <div className="card card-compact bg-base-100 shadow-xl rounded-[27px] cursor-pointer " onClick={() => navigate(`/blogDetails/${_id}`)} >
            <figure>
                <img src={picture} alt="blogs" className="rounded-[27px] w-full h-[250px] object-cover" />
            </figure>
            <div className="card-body text-center">
                <h2 className="card-title text-[#027358] text-xl uppercase">category</h2>
                <a href={blogLink && blogLink} className='font-semibold text-start text-lg hover:text-[#569601] hover:underline' target='_blank'>{title} </a>
                <div className="flex justify-between text-gray-500  ">
                    <div className='date'>
                        <p className='text-md'>{date}</p>
                    </div>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faHeart} className="hover:text-red-600   cursor-poitner mr-2" />
                        <FontAwesomeIcon icon={faShare} className="hover:text-green-600 cursor-poitner  mr-2" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Blog;