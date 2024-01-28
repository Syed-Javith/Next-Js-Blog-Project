"use client"
import { findBlog, updateBlog } from '@/actions/blogs.actions'
import Button from '@/app/ui/Button'
import React, { useEffect, useState } from 'react'
import {useMutation} from "@tanstack/react-query"
import {Toaster, toast} from "sonner"
import { Blog } from '@/types'
const UpdateBlogForm = ({id} : {id : string}) => {
    const [blog , setBlog] = useState<Blog>({
        author : '',
        authorEmail : '',
        category : '',
        comments : [],
        title : '',
        id : '',
        createdAt : new Date(),
        updatedAt : new Date()
    });
    async function updateBlogHandeler(formData: FormData){
        console.log(formData);
        await updateBlog(formData,id)
    }

    const { mutate , isPending } = useMutation({
        mutationFn : async ({id} : {id:string}) => {
            const res = await findBlog(id); 
            return res;
        },
        onError : (err) => {
            console.log("error found as");            
            console.log(err);
            toast.error(err.message);
        },
        onSuccess : (data) => {
            if(data)
            setBlog({...data , comments : []});
            console.log(data);
            toast.success("Got Blog!")
        }
    })

    useEffect(()=>{
        mutate({id})
        toast.info("Your Blog is loading please wait...")
    },[])
    return (
        <form action={updateBlogHandeler} className="max-w-md mx-auto mt-8 p-8 bg-white rounded shadow-md">
            <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-600">
                    Upload Image Link
                </label>
                <input
                    value={blog.imageUrl+""}
                    onChange={(e) => setBlog({...blog , imageUrl : e.target.value})}
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    className="mt-1 p-2 w-full border text-gray-600 rounded-md"
                    placeholder="Enter imageUrl"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-600">
                    Title
                </label>
                <input
                    value={blog.title}
                    onChange={(e) => setBlog({...blog , title : e.target.value})}
                    type="text"
                    id="title"
                    name="title"
                    className="mt-1 p-2 w-full border text-gray-600 rounded-md"
                    placeholder="Enter title"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-600">
                    Description
                </label>
                <textarea
                    value={blog.description}
                    onChange={(e) => setBlog({...blog , description : e.target.value})}
                    id="description"
                    name="description"
                    className="mt-1 p-2 text-gray-600 w-full border rounded-md"
                    placeholder="Enter description"
                ></textarea>
            </div>

            <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-medium text-gray-600">
                    Category
                </label>
                <input
                    value={blog.category}
                    onChange={(e) => setBlog({...blog , category : e.target.value})}
                    type="text"
                    id="category"
                    name="category"
                    className="mt-1 p-2 text-gray-600 w-full border rounded-md"
                    placeholder="Enter category"
                />
            </div>

            <Button label={'Update Blog'} />
            {/* {
                isPending && <p>Your blog is loading...</p>
            } */}
            <Toaster richColors />
        </form>
    )
}

export default UpdateBlogForm
