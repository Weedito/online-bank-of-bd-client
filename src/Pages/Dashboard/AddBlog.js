import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
const AddBlog = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const url = `https://localhost:5000/`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                toast("Blog added successfully");
                data.target.reset();
            });
    };
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
                        type="text"
                        {...register("picture")}
                        placeholder="Add Image URL"
                        className="border-2 border-gray-500 rounded mb-2 py-3 px-5"
                        required
                    />
                    <input
                        {...register("name", { required: true, maxLength: 50 })}
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
                        type="text"
                        {...register("supplier")}
                        placeholder={new Date().toLocaleDateString()}
                        className="border-2 border-gray-500 rounded mb-2 py-3 px-5"
                        disabled
                    />
                    <input
                        className="px-5 py-2 my-2 bg-green-700 rounded-full hover:bg-green-400 transition text-white"
                        type="submit"
                        value="POST"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddBlog;