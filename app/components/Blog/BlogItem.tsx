import { Blog } from "@prisma/client";
import Link from "next/link";

export default function BlogItem(blog: Blog) {
    const { title, id, imageUrl, author, description, category, authorEmail } = blog;

    return (
        <div className="py-8 px-12 flex gap-8" id={id}>
            <img src={imageUrl || ""} alt="" height={20} width={'50%'} className="md:h-[200px] md:w-[50%] md:rounded-none md:mt-0 h-14 w-14 rounded-[100%] mt-4" />
            <div>
                <h1 className="text-4xl font-bold my-4">{title}</h1>
                <span className="md:hidden">{`${description.slice(0, 150)}...`}</span>
                <span className="max-[1000px]:hidden">{`${description.slice(0, 300)}...`}</span>
                <Link className="text-blue-400 hover:text-blue-300" href={`/blogs/${id}`}>Visit for more</Link>
                <hr />
                <div className="mt-2">
                    <p className="font-bold">Category : <span className="font-light">{category}</span></p>
                    <p>Written by <Link href={`/user/${authorEmail}`}><span className="font-serif font-extrabold text-blue-400">{author}</span></Link>
                    </p>
                </div>
            </div>
        </div>
    )
}