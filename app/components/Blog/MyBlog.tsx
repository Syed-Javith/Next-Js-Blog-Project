import { Blog } from '@/types'
import Link from 'next/link'
import React from 'react'
import UpdateDeleteButton from '../Buttons/UpdateDeleteButtons'

const MyBlog = ({ blog  , email } : { blog : any , email : string }) => {
  return (
    <div className="flex flex-col">
            <h4 className="font-bold py-2">{blog.title}</h4>
            <p>
                {
                <>
                {blog?.description?.substring(0, 100)}
                <Link className="text-blue-400" href={`/blogs/${blog.id}`} >...Read more</Link>
                </>
                }
            </p>
            <UpdateDeleteButton id={blog?.id} email={email} />
    </div>
  )
}

export default MyBlog
