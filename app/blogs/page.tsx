import { findBlogs } from "@/actions/blogs.actions";
import BlogItem from "../components/Blog/BlogItem";

export default async function Blogs() {
  const blogs = await findBlogs();
  console.log(blogs);

  return (
    <div>
      <h1 className="text-center font-bold text-3xl my-2">Daily Blogs</h1>
      {
        blogs.map((blog) => {
          return (
          <BlogItem 
              key={blog.id} 
              author={blog.author} 
              category={blog.category} 
              createdAt={blog.createdAt} 
              description={blog.description} 
              id={blog.id} 
              imageUrl={blog.imageUrl} 
              title={blog.title} 
              updatedAt={blog.updatedAt} 
              authorEmail={blog.authorEmail}
          />
          )
        })
      }
    </div>
  )
}


