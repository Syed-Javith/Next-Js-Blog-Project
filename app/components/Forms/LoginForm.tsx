"use client";
import { FormEvent, useState } from "react"
import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { loginUser } from "@/actions/user.actions";
import z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginUser } from "@/types";

export default function LoginForm() {

  const router = useRouter();
  const schema = z.object({
    email: z.string().email(),
    password: z.string(),
  })

  async function loginUserData(formData: LoginUser) {
    const email = formData.email;
    const password = formData.password
    try {
      console.log({
        email, password
      });
      // const user = await loginUser(email,password);
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      console.log(res);
      if (!res) {
        redirect("/login")
      }
      redirect("/")
    } catch (error) {
      console.log(error);
    }
  }
  const { register, handleSubmit, formState: {
    errors
  } } = useForm<LoginUser>({
    resolver: zodResolver(schema),
  });
  return (
    <div className="md:w-[500px] w-auto m-auto p-4">
      <div className="drop-shadow-xl p-2 shadow-blue-500/50  bg-blue-200 rounded-md ">
        <form onSubmit={handleSubmit(loginUserData)} className="flex flex-col gap-4 items-center">
          <h1 className="text-[30px]">Login Here</h1>
          <div className="flex flex-col">
            <label htmlFor="email">Email Id</label>
            <input className="border-2 border-blue-300 h-10 rounded-md" type="email" {...register("email")} />
          </div>
          {
            errors && <span>{errors.email?.message}</span>
          }
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input className="border-2 border-blue-300 h-10 rounded-md" type="password"  {...register("password")} />
          </div>
          {
            errors && <span>{errors.password?.message}</span>
          }

          <input className="cursor-pointer p-2 rounded-md text-white px-4 bg-green-500 hover:bg-green-400 hover:shadow-lg" type="submit" value="register" />
        </form>
        <p className="text-center my-2">or</p>
      <button className="shadow-md bg-white mx-auto p-2 border-2 rounded-md w-32 hover:shadow-xl flex" onClick={() => signIn("google")}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
          <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
        </svg>
        <p className="ml-2 text-xl">Google</p>
      </button>
      </div>
    </div>
  )
}
