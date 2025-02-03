import React from 'react'

const Loading = () => {
  return (
    <div className='min-h-screen min-w-full z-10 absolute  top-0 backdrop-blur-xs  flex items-center justify-center'>
    <div className='w-20 h-20 border-4 border-gray-400 border-t-4 border-t-blue-500 animate-spin rounded-full'></div>
  </div>
  )
}

export default Loading