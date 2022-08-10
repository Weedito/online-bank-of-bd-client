import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
const UpdateBlog = () => {
    const {id}=useParams()
    const { register, handleSubmit,reset } = useForm();
    const date = new Date().toLocaleDateString()
    const navigate= useNavigate()
    const onSubmit = (data) => {
        const blogData= {...data, date}
        const url = `http://localhost:5000/blog/${id}`
        fetch(url,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(blogData)
        }).then(res=>res.json()).then(result=>{
            if(result.modifiedCount>0){
                toast.success("Successfully Update Blog Post!");
                navigate("/cpanel/manageBlogs")
            }
        })

    }

    return (
        <div className=" mx-5">
        <div className="grid max-w-6xl w-full mx-auto">
            <h2 className="font-bold text-4xl text-center text-gray-700 my-5">
                Add a Blog
            </h2>
            <form
                className="grid grid-cols-1 gap-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    type="url"
                    {...register("picture")}
                    placeholder="Add Image URL"

                    className="border-2 border-gray-500 rounded mb-2 py-3 px-5"
                    required
                />
                   <input
                        type="url"
                        {...register("blogLink")}
                        placeholder="Blogs Details Link"

                        className="border-2 border-gray-500 rounded mb-2 py-3 px-5"
                        required
                    />
                <input
                    {...register("title", { required: true, maxLength: 200 })}
                    className="border-2 border-gray-500 rounded mb-2 py-3 px-5"
                    placeholder="Add Title"
                    required
                />
                <textarea
                    className="h-48 border-2 border-gray-500 rounded mb-2 py-3 px-5 " maxLength='4000'
                    {...register("description")}
                    placeholder="Add Text Here (Max Character 4000) "
                    required
                />
                <input
                    className="px-5 py-2 my-2 bg-green-700 cursor-pointer rounded-full hover:bg-green-400 transition text-white"
                    type="submit"
                    value="POST"
                />
            </form>
        </div>
    </div>
    );
};

export default UpdateBlog;