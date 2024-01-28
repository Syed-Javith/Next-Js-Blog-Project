import { findBlog } from "@/actions/blogs.actions";
import { MailIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Blog({ params }: {params: {id: string}}) 
{

    const id = params.id;
    console.log(id);
    const blog = await findBlog(id);
    if(blog==null){
        notFound();
    }
    return <div className="my-4">
        <h2 className="text-center font-bold text-4xl my-4">{blog?.title}</h2>
        <img className="mx-auto" src={blog?.imageUrl || ""} alt="" />
        <p className="px-8 mt-4 text-justify md:px-[25%]">
            {blog?.description}
        
        <hr className="my-2" />
        <h1 className="font-bold text-xl">Written by</h1>
        <Link href={`/user/${blog.authorEmail}`}><p> {blog.author}</p></Link>
        <p className="flex gap-2"> <MailIcon /> {blog.authorEmail} </p>
        </p>
    </div>
}