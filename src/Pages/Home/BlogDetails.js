import React from 'react';
import { useForm } from "react-hook-form";
const BlogDetails = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://nis-books.herokuapp.com/inventory`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert("Inventory added successfully");
        data.target.reset();
      });
  };
    return (
        <div className="mx-5">
            {/* <PageTitle title={"Add Inventory"}></PageTitle> */}
            <h2 className="font-bold text-4xl text-gray-700 my-5">
                Please Add a Blog
            </h2>

            <div className="grid">
                <form
                    className="grid grid-cols-2 gap-4"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        {...register("name", { required: true, maxLength: 50 })}
                        className="border-2 border-gray-500 rounded mb-2 py-3 px-5"
                        placeholder="Add Title"
                        required
                    />
                    <textarea
                        className="border-2 border-gray-500 rounded mb-2 py-3 px-5"
                        {...register("description")}
                        placeholder="Blog Description"
                        required
                    />
                
                 
                    <input
                        type="text"
                        {...register("picture")}
                        placeholder="Add Image URL"
                        className="border-2 border-gray-500 rounded mb-2 py-3 px-5"
                        required
                    />
                    <input
                        type="text"
                        {...register("supplier")}
                        placeholder="Add a Date"
                        className="border-2 border-gray-500 rounded mb-2 py-3 px-5"
                        required
                    />
                    <input
                        className="px-5 py-2 my-2 bg-green-700 rounded hover:bg-green-400 transition hover:text-white"
                        type="submit"
                        value="post Blog"
                    />
                </form>
            </div>
        </div>
    );
};

export default BlogDetails;