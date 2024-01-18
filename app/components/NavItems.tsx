"use client"

import { signOut, useSession } from "next-auth/react"
import Link from "next/link";

const NavItems = () => {
    const { data } = useSession();
    const link = "text-white hover:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
  return (
    <ul className="flex flex-row">
      <li className={link}>
        <Link href="/">Home</Link>
      </li>
      {
        data?.user ? 
        <>
         <li className={link}>
            <Link href={'/add-blog'}>Create</Link>
        </li>
        <li className={link}>
            <button onClick={() => signOut()}>Logout</button>
        </li>
        </> :
        <li className={link}>
            <Link href={'/login'}>Login</Link>
        </li>
      }
      
    </ul>
  )
}

export default NavItems
