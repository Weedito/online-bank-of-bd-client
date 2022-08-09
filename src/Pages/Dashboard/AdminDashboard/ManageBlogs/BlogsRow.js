import React from 'react';

const BlogsRow = ({blog,index}) => {
    const {title,picture,description,date}=blog
    return (
        <tr title={title} className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
            <td className="w-full lg:w-auto p-2 text-sm text-gray-800 text-center border border-b block font-semibold lg:table-cell relative lg:static">
                {index}
            </td>
            <td className="w-full lg:w-auto p-2 text-sm text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
            <img src={picture} alt="blog-img" className='h-12 rounded-3xl'/>
            </td>
            <td className="w-full lg:w-auto p-2 text-sm text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span className='text-xl'>{title}</span>
            </td>
            <td className="w-full lg:w-auto p-2 text-sm text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
            <span className='text-xl'>{date}</span>
            </td>
            <td className="w-full lg:w-auto p-2 text-sm text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <button className="btn btn-xs btn-outline btn-primary">Update</button>
            </td>
            <td className="w-full lg:w-auto p-2 text-sm text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
            <button className="btn btn-xs btn-outline btn-secondary">Delete</button>
            </td>
    </tr>
    );
};

export default BlogsRow;