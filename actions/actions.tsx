'use server';
import { Blog } from "@/models/model";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
const prisma = new PrismaClient();

export async function addBlog(formData : FormData) {
    const imageUrl = formData.get('imageUrl');
    const title = formData.get('title');
    const category = formData.get('category');
    const description = formData.get('descrption');

    const newBlog : Blog = await prisma.blog.create({
        data : {
            imageUrl : imageUrl || null,
            title : title ,
            category : category,
            description : description
        }
    })
    revalidatePath("/blogs/add-blog");
    redirect("/blogs");
}

export async function findBlogs() {
  return await prisma.blog.findMany({});
}
