import { Loader2Icon } from 'lucide-react'
import React from 'react'

const Loading = () => {
  return (
    <div className='w-full h-screen bg-black/80 z-20 absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center'>
      <div className='flex flex-row space-y-2 space-x-3 justify-center items-center'>
        <Loader2Icon className='animate-spin text-yellow-100 text-xl' />
        <p className='text-xl font-semibold'>Please wait...</p>
      </div>
    </div>
  )
}

export default Loading
