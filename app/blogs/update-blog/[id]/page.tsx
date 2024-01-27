import UpdateBlogForm from '@/app/components/Forms/UpdateBlogForm'
import React from 'react'

const page = ({params} : {params : { id : string}}) => {
   const id = params.id
    
  return (
    <div>
      <UpdateBlogForm id={id} />
    </div>
  )
}

export default page
