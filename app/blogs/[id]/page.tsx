import { findBlog } from "@/actions/blogs.actions";
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
        {/* <h1>Blog {id} </h1> */}
        <h2 className="text-center font-bold text-4xl my-4">{blog?.title}</h2>
        <img className="mx-auto" src={blog?.imageUrl || ""} alt="" />
        <p className="px-[25%] mt-4 text-justify">
            {blog?.description}
        </p>
    </div>
}