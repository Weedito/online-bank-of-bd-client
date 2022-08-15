import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const AddBlog = ({refresh, setRefresh, setModal}) => {
    const { register, handleSubmit,reset } = useForm();
    const date = new Date().toLocaleDateString()
    const navigate = useNavigate()
    const onSubmit = (data) => {
        const blogData= {...data, date,}
        
        const url = 'http://localhost:5000/blog'
        fetch(url,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(blogData)
        }).then(res=>res.json()).then(result=>{
            toast.success("Successfully Your Blog Post!")
            reset()
            navigate("/cpanel/manageBlogs")
        })
    }
    return (
        <div
        style={{backgroundColor:"rgba(000,000,000,0.6)"}}
        className=" mx-5 absolute top-0 right-0 left-0 bottom-0 z-30 flex justify-center">
            
            <div className=" md:w-2/3 w-full  my-12 md:mx-2 mx-4  flex flex-col items-center justify-center bg-white md:p-4 p-2 rounded-md shadow-3xl">
                <div className='cross-btn flex justify-end w-full'>
                    <span
                    onClick={()=>setModal(false)}
                    className='p-2 rounded-full bg-gray-100 md:mr-[-10px] md:mt-[-10px] md:mb-[10px] mr-0 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-red-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </span>
            </div>
                <div className='max-h-[500px] overflow-y-scroll md:p-6 p-2 w-full'>
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
                        className="px-5 py-2 my-2 bg-green-700 rounded-full cursor-pointer hover:bg-green-400 transition text-white"
                        type="submit"
                        value="POST"
                    />
                </form>

                </div>
            </div>
        </div>
    );
};

export default AddBlog;