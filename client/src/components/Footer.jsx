import React from 'react'
import github from '../assets/img/github.png'
import instagram from '../assets/img/instagram.png'
import linkdin from '../assets/img/linkedin.png'
import motor from '../assets/img/motorcycle.png'

const Footer = () => {
  return (
    <div className='px-20 max-sm:px-10 flex max-sm:flex-col max-sm:gap-5 items-center justify-between bg-blue-950 mx-auto '>
          <div onClick={()=>navigate('/')} className='flex gap-1 items-center  cursor-pointer'> <img className='h-20 object-contain max-sm:12' src={motor} alt="" />
                <p className='text-xl  text-white font-bold '>Bikey</p>
            </div>
            <p className=' text-lg  text-gray-400 '>Copyright © 2024-2025 Ashoka. All rights reserved.</p>
            <div className='flex gap-4 p-3'>
                <img className='h-10 w-10 cursor-pointer' src={github} alt="" />
                <img className='h-10 w-10 cursor-pointer' src={instagram} alt="" />
                <img className='h-10 w-10 cursor-pointer' src={linkdin} alt="" />
            </div>
    </div>
  )
}

export default Footer