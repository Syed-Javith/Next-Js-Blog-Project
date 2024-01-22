"use client"

import { addBlog } from "@/actions/blogs.actions";
import Button from "@/app/ui/Button";

export default function AddBlogForm() {

    async function addBlogHandler(formData: FormData){
        await addBlog(formData)
    }
    return (
        <form action={addBlogHandler} className="max-w-md mx-auto mt-8 p-8 bg-white rounded shadow-md">
            <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-600">
                    Upload Image Link
                </label>
                <input
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
                    type="text"
                    id="category"
                    name="category"
                    className="mt-1 p-2 text-gray-600 w-full border rounded-md"
                    placeholder="Enter category"
                />
            </div>

            <Button label={'Add New Blog'} color={'green'} />

        </form>
    )
}