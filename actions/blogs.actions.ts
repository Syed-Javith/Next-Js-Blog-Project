'use server';
import { Blog, PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
const prisma = new PrismaClient();

export async function addBlog(formData : FormData) {
    const imageUrl = formData.get('imageUrl') as string;
    const title = formData.get('title') as string;
    const category = formData.get('category') as string;
    const description = formData.get('description') as string;
    console.log(description);
    const blog = {
        imageUrl: imageUrl,
        title: title,
        category: category,
        description: description,
        comments: {}
    } as unknown as Blog
    
    try {
        const newBlog = await prisma.blog.create({
            data : blog
        })
    } catch (error) {
        
    }
    revalidatePath("/blogs/add-blog");
    redirect("/blogs");
}

export async function findBlogs() {
  return await prisma.blog.findMany({
    take : 15 ,
    orderBy : {
        title : 'asc'
    }
  });
}
export async function findBlog(id : string){
    const blog = await prisma.blog.findFirst({
        where : {
            id : id
        }
    })
    return blog;
}