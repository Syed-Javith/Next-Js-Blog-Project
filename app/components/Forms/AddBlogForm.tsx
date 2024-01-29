"use client"
import { addBlog } from "@/actions/blogs.actions";
import Button from "@/app/ui/Button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Toaster, toast } from "sonner";

export default function AddBlogForm() {

    const { data } = useSession();
    const router = useRouter();
    const [isPending, setIsPending] = useState<boolean>(false)
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
        try {
            setIsPending(true)
            await addBlog(formData, { author: data?.user?.name + "", authorEmail: data?.user?.email + "" })
            toast.success("Added successfully!!")
            router.refresh()
            setIsPending(false)
        } catch (error) {
            toast.error(JSON.stringify(error))
        }
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
            <Toaster richColors />
            {
                isPending 
                ? <button className={"bg-green-400 hover:bg-green-300 rounded-md p-4 text-white "}>
                    Adding...
                </button> : <Button label={'Add New Blog'} />
            }

        </form>
    )
}