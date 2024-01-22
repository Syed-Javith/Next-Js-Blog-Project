import { Loader2 } from 'lucide-react'
import React from 'react'

const loading = () => {
  return (
    <div className="w-full h-screen">
    <div className="flex flex-col items-center justify-center">
      <p>User Data is loading</p>
      <Loader2 className="animate-spin" />
    </div>
  </div>
  )
}

export default loading
