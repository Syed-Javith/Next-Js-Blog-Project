import { findBlogs } from "@/actions/actions";
import { Blog } from "@/models/model";
import { PrismaClient } from "@prisma/client"

export default async function Blogs() {

  const prisma = new PrismaClient();
  const blogs : Blog[] = await findBlogs();
  console.log(blogs);
  

  return (
    <div>
      <h1>Blogs Page</h1>
    </div>
  )
}


