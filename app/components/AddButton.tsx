"use client"
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react'

const AddButton = ({ user } : { user : string | undefined }) => {
  const { data } = useSession();
  return (
    <div>
      {
        data?.user?.email === user && <Link href={"/blogs/add-blog"}>
      <button className="text-white p-2 bg-gray-600 my-4 rounded-md">
        Add More +
      </button>
      </Link>
      }
    </div>
  )
}

export default AddButton
