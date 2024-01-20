'use server';

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function loginUser(email : string , password : string){
    const user = await prisma.user.findFirst({ where : {
        email , password
      } })
      return user;
}

export async function findUser(email : string){
  const user = await prisma.user.findFirst({
    where : {
      email
    }
  });
  return user;
}