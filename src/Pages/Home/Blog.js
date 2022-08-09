import React from 'react';
import { useNavigate } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
            <div className=" grid grid-cols-1 lg:grid-cols-3 pt-8 gap-5  px-20 rounded-[27px]">
            {/* <div class="card w-96 bg-base-100 shadow-xl rounded-[27px]">
                <figure><img className="rounded-[27px]" src="https://i.ibb.co/N3XWhrR/blog1.jpg" alt="blogs" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-[#027358] text-xl">CATAGORY!</h2>
                    <a href='' className='font-semibold text-lg hover:text-[#569601] hover:underline' target='_blank'>Digital Card  security Now days.Ctypto currency Changing world Today. </a>
                    <div class="card-actions justify-end text-black">
                        <FontAwesomeIcon icon={faHeart} />
                        <FontAwesomeIcon icon={faShare} />
                    </div>

                </div>

            </div> */}


                {blogData.map(item => {
                    return (
                        <div key={item.id} class="card card-compact w-96 bg-base-100 shadow-xl rounded-[27px] ">
                            <figure>
                                <img src={item.img} alt="blogs" class="rounded-[27px]" />
                            </figure>
                            <div class="card-body text-center">
                                <h2 class="card-title text-[#027358] text-xl">{item.blogTitle}</h2>
                                <a onClick={() => navigate(`/blog/:${item.id}`)} className='font-semibold text-lg hover:text-[#569601] hover:underline' target='_blank'>{item.description} </a>
                                {/* <div class="cardCard-actions">
                                    <button onClick={() => navigate(`/card/:${item.id}`)} className='btn btn-xs bg-green-700 border-0'>Show Details</button>
                                </div> */}

                                <div class="card-actions justify-end text-black ">
                                    <FontAwesomeIcon icon={faHeart} />
                                    <FontAwesomeIcon icon={faShare} />
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>





        </div>
    );
};

export default Blog;