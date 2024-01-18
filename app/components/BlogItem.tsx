import { Blog } from "@prisma/client";
import Link from "next/link";

export default function BlogItem(blog : Blog) {
    const { title , id , imageUrl , author , description , category } = blog;

    return (
        <div className="py-8 px-12 flex gap-8" id={id}>
            <img src={imageUrl || ""} alt="" />
            <div>
                <h1 className="=text-2xl font-bold my-4">{title}</h1>
                <p>{description}</p>
                <p>Category {category}</p>
                <p>by <span className="font-serif font-extrabold text-blue-400">{author}</span></p>
                <Link className="text-blue-400 hover:text-blue-300" href={`/blogs/${id}`}>Visit for more</Link>
            </div>
        </div>
    )
}