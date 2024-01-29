"use client"
import React from 'react'
import z from "zod"
import { useForm } from "react-hook-form"
import { RegisterUser } from '../../../types'
import { zodResolver } from '@hookform/resolvers/zod'
import { registrUser } from '@/actions/user.actions'
import Link from 'next/link'
const RegisterForm = () => {

  const schema = z.object({
    email: z.string().email().min(8).max(128),
    password: z.string().min(6).max(20),
    username: z.string().min(6).max(128),
  })
  async function registerUserData(formData: RegisterUser) {
    console.log(formData);

    const res = await registrUser(formData)
    console.log(res);

  }
  const { register, handleSubmit, formState: {
    errors
  } } = useForm<RegisterUser>({
    resolver: zodResolver(schema),
  });
  return (
    <div className="md:w-[500px] w-auto m-auto p-4">
      <div className="drop-shadow-xl p-2 shadow-blue-500/50  bg-blue-200 rounded-md ">
        <form onSubmit={handleSubmit(registerUserData)} className="flex flex-col gap-4 items-center">
          <h1 className="text-[30px]">Register Here</h1>
          <div className="flex flex-col">
            <label htmlFor="username">Username </label>
            <input className="border-2 border-blue-300 h-10 rounded-md" type="text" {...register("username")} />
            {
            errors && <span className="text-red-500 text-sm">{errors.username?.message}</span>
          }
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email Id</label>
            <input className="border-2 border-blue-300 h-10 rounded-md" type="email" {...register("email")} />
            {
            errors && <span className="text-red-500 text-sm">{errors.email?.message}</span>
          }
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input className="border-2 border-blue-300 h-10 rounded-md" type="password"  {...register("password")} />
            {
            errors && <span className="text-red-500 text-sm">{errors.password?.message}</span>
          }
          </div>     
          <input className="cursor-pointer p-2 rounded-md text-white px-4 bg-green-400" type="submit" value="register" />
        </form>
      </div>
      <Link href={'/login'} className="text-center underline my-4 mx-auto">Registered User? login here</Link>
    </div>
  )
}

export default RegisterForm
