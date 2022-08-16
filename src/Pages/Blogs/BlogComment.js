import React from 'react';
import Avatar from "../../Assets/Images/blog/undraw_profile_pic_ic5t.png"

const BlogComment = ({comment}) => {
    console.log(comment);
    
    return (
        <div className='my-12 md:mx-12 mx-4 flex items-center p-4 bg-gray-100 rounded-md shadow-md'>
            <div className='avatar h-12 w-12 border-2 border-green-500 rounded-full mr-2 '>
                {
                    comment.user.photoURL? 
                    <img src={comment?.user?.photoURL} alt="avatar" className='rounded-full'/>:
                    <img src={Avatar} alt="avatar" className='rounded-full'/>
                }
            </div>
            <div className='user-info text-start'>
                <h2 className='text-gray-500 text-xl my-0'>{comment?.user?.displayName? comment.user.displayName : comment?.user?.email}</h2>
                <h2 className='text-gray-500'>{comment?.comment}</h2>
            </div>
        </div>
    );
};

export default BlogComment;