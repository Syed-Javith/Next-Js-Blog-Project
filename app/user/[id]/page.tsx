import { findUser } from '@/actions/user.actions';
import React from 'react'

const page = async ({ params } : { params : { email : string } }) => {
    const email = params.email;
    const user = await findUser(email);
  return (
    <div>
      <p>  { user?.username }  </p>
      <p> { user?.email } </p>
    </div>
  )
}

export default page
