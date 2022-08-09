import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateBlog = () => {
    const {id}=useParams()
    return (
        <div>
            {
                id
            }
            <h3>Update blog</h3>
        </div>
    );
};

export default UpdateBlog;