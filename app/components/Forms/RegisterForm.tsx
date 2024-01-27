"use client"
import React from 'react'
import z from "zod"
import {useForm} from "react-hook-form"
import { RegisterUser } from '../../../types'
import { zodResolver } from '@hookform/resolvers/zod'
import { registrUser } from '@/actions/user.actions'
const RegisterForm = () => {

    const schema = z.object({
      email : z.string().email(),
      password : z.string(),
      username : z.string(),
    })
    async function registerUserData(formData : RegisterUser){
      console.log(formData);
      
      const res = await registrUser(formData)
      console.log(res);
      
    }
    const { register , handleSubmit , formState : {
      errors
    } }= useForm<RegisterUser>({
      resolver : zodResolver(schema),
    });
  return (
    <div >
      <form onSubmit={handleSubmit(registerUserData)} className="flex flex-col gap-4 w-[50%] items-center">
          <input className="border-2 border-blue-300 " type="text" {...register("username")} />
          {
            errors.username?.message
          }
          <input className="border-2 border-blue-300 " type="password"  {...register("password")} />
          {
            errors.password?.message
          }
          <input className="border-2 border-blue-300 " type="email" {...register("email")} />
          {
            errors.email?.message
          }
          <input type="submit" value="register" />
      </form>
    </div>
  )
}

export default RegisterForm
