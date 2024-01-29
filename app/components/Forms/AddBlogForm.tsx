"use client"
import { addBlog } from "@/actions/blogs.actions";
import Button from "@/app/ui/Button";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function AddBlogForm() {

    const { data } = useSession();
    if (!data?.user) {
        return <div className="text-center mx-auto">
            <p className="mb-4">please login to continue</p>
            <Link href={'/login'} className="p-2 bg-gray-800 rounded-md text-white">
                <button>
                    Login
                </button>
            </Link>
        </div>
    }

    async function addBlogHandler(formData: FormData) {
        await addBlog(formData, { author: data?.user?.name + "", authorEmail: data?.user?.email + "" })
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

            <Button label={'Add New Blog'} />

        </form>
    )
}