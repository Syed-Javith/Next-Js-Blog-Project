"use client";
import { deleteBlog } from '@/actions/blogs.actions';
import { Delete, Edit } from 'lucide-react';
import { useSession } from 'next-auth/react'
import React from 'react'

const UpdateDeleteButton = ({ email , id } : { email : string , id : string}) => {
    const { data } = useSession();
    if(!email  || email != data?.user?.email)
     return <></>;

  async function deleteHandler(id : string) {
    await deleteBlog(id);
  }
  return (
    <div className="flex flex-row gap-4 my-4">
      <button onClick={() => deleteHandler(id)}> <Delete /> </button>
      <button> <Edit /> </button>
    </div>
  )
}

export default UpdateDeleteButton
