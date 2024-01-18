import { findBlog } from "@/actions/actions";
import { notFound } from "next/navigation";

export default async function Blog({ params }: {params: {id: string}}) 
{

    const id = params.id;
    console.log(id);
    const blog = await findBlog(id);
    if(blog==null){
        notFound();
    }
    return <div>
        <h1>Blog {id} </h1>
        <img src={blog?.imageUrl || ""} alt="" />
        <h2>{blog?.title}</h2>
        <p>
            {blog?.description}
        </p>
    </div>
}