import { findUser, getMyBlogs } from '@/actions/user.actions';
import AddButton from '@/app/components/AddButton';
import MyBlog from '@/app/components/Blog/MyBlog';
import UpdateDeleteButton from '@/app/components/Buttons/UpdateDeleteButtons';
import { notFound } from 'next/navigation';
import React from 'react'

const page = async ({ params }: { params: { id: string } }) => {
  const email = decodeURIComponent(params.id);
  const user = await findUser(email);
  if (user == null) {
    notFound();
  }
  const myBlogs = await getMyBlogs(email);
  return (
    <div className="flex flex-col items-start content-center px-[20%] md:px-[25%]">
      <div className="self-center h-[200px] w-[200px] bg-gray-300 rounded-[50%] my-2"></div>
      <p className='font-bold text-lg'>  {user?.username}  </p>
      <p> {user?.email} </p>
      <p>Total blogs : {myBlogs.length} </p>
      {
        myBlogs.length > 0 && 
      <p>Last update :{myBlogs[0].updatedAt.toLocaleDateString('in')} </p>
      }
      <h3 className="font-bold py-4 text-4xl">My Blogs</h3>
      <div className='mb-4'>
        {
          myBlogs.length === 0 && 
          <p>
            No Blogs by the user
          </p>
        }
        {
          myBlogs.map((blog) => {
            return <MyBlog key={blog.id} email={user?.email} blog={blog} />
          })
        }
      </div>
      <AddButton user={user?.email} />
    </div>
  )
}

export default page
