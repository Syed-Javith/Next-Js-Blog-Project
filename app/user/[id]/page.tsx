import { findUser, getMyBlogs } from '@/actions/user.actions';
import AddButton from '@/app/components/AddButton';
import MyBlog from '@/app/components/Blog/MyBlog';
import UpdateDeleteButton from '@/app/components/Buttons/UpdateDeleteButtons';
import { notFound } from 'next/navigation';
import React from 'react'

const page = async ({ params }: { params: { id: string } }) => {
  const email = decodeURIComponent(params.id);
  const user = await findUser(email);
  if(user == null){
    notFound();
  }
  // console.log("mail " ,email);
  // console.log(params);
  // console.log("the user found as ",user);
  const myBlogs = await getMyBlogs(email);
  return (
    <div className="flex flex-col items-start content-center px-[25%]">
      <div className="self-center h-[200px] w-[200px] bg-gray-300 rounded-[50%] my-2"></div>
      <p>  {user?.username}  </p>
      <p> {user?.email} </p>
      <h3 className="font-bold py-4 text-4xl">My Blogs</h3>
      {
        myBlogs.map((blog) => {
          return <MyBlog email={user?.email} blog={blog} />
        })
      }
      
      <AddButton user={user?.email} />
    </div>
  )
}

export default page
