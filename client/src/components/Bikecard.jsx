import React from 'react'
import { useNavigate } from 'react-router-dom'

const Bikecard = ({bike}) => {
  const navigate=useNavigate();
  
  return (
    <div onClick={()=>navigate(`/bike/${bike._id}`)} className='shadow bg-amber-100 transition-transform duration-300 ease-in-out transform hover:scale-110  mx-auto cursor-pointer  rounded-md'>
       
            <img   className=" object-center rounded-tr-md rounded-tl-md h-72 w-80"  src={bike.photo[0]} alt="" />
           <div className='flex-col flex gap-3 mt-3 px-3'>
           <h2 className='text-2xl font-medium'>Bike Name : {bike.name}</h2>
           <h2 className='text-base  text-gray-700'>Company : {bike.company}</h2>
           <h2 className='text-base  text-gray-700'> Color : {bike.color} <span className= {`ml-2 inline-block items-center ${bike.color.toLowerCase()==='black'?'bg-black':`bg-${bike.color}-500`}  rounded-full p-1`}></span></h2>
           </div>
       
    </div>
  )
}

export default Bikecard