'use server';

import { RegisterUser } from "@/types";
import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();
export async function loginUser(email : string , password : string){
    const user = await prisma.user.findFirst({ where : {
        email , password
      } })
      return user;
}

export async function registrUser(user : RegisterUser){
  const { email , username , password } = user;
  const res = await prisma.user.findFirst({
    
    where : {
      email
    },
    select:{
      password : false,
      id : true,
   
     },
  })
  if(res){
    return ({ message : "User alreay exists" , user : res})
  }
  const register = await prisma.user.create({
    data : {
      email ,
      username,
      password
    }
  })
  return  { ...register , password : "" };
}

export async function findUser(email : string){
  const user = await prisma.user.findFirst({
    where : {
      email : {
        equals : email
      }
    },
  });
  return user;
}

export async function getMyBlogs(email : string){
  const myBlogs = prisma.blog.findMany({
    where : {
      authorEmail : email
    },
    orderBy : {
      updatedAt : "desc"
    }
  })
  return myBlogs;
}