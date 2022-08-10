import { useEffect, useState } from "react"

const useBlogs=()=>{
    const[blogData,setBlogDate]=useState([])
    const [spnnier,setSpinner]=useState(true)
    useEffect(()=>{
        const url = "http://localhost:5000/blogs"
        fetch(url).then(res=>res.json()).then(data=>{
            const blogreverse= data.reverse()
            const blogslice = blogreverse.slice(0,3)
            setBlogDate(blogslice)
            setSpinner(false)
        })
    },[spnnier])
    return{blogData,spnnier}
}
export default useBlogs;