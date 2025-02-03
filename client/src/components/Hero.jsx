import React, { useContext, useEffect, useState } from 'react'
import { Appcontext } from '../Context/Appcontext';

const Hero = () => {
  const [location, setLocation] = useState('');
  const [bikeName, setbikeName] = useState('');
  const {setSearchData,serchData}=useContext(Appcontext);

  const onSearchHandle=()=>{
     setSearchData({bikeName})
  }


  return (
    <div className='md:px-20 px-5 w-full bg-gradient-to-r from-pink-100 to-yellow-300  max-sm:10 py-32'>
        <div className='flex flex-col items-center gap-4'>
            <h2 className='text-green-700 font-bold max-sm:text-2xl text-4xl '>Find Your Perfect Bike Today!"</h2>
            <p className='text-lg text-center text-gray-600'>Whether you're looking to buy a brand-new bike or sell your old one, our platform makes it 
                easy to connect with<br /> riders like you. Explore, discover, and ride off into your next adventure!</p>
        </div>

       <div className='flex items-center justify-center'>
       <div className='flex items-center shadow-2xl min-w-[50%] justify-center my-11'>
            <div className='bg-white gap-4 max-sm:flex-col flex px-5 w-full justify-center items-center py-3 rounded '>
            <input value={bikeName} onChange={e=>setbikeName(e.target.value)} placeholder='serch for bike'  type="text" className=' w-full rounded border px-3 text-gray-600 text-xl py-2 outline-none' />
             <button onClick={onSearchHandle} className='bg-blue-600 px-6 text-lg py-2 cursor-pointer rounded-md text-white m-1'>Search</button>
            </div> 
           
        </div >
       </div>

          {serchData  && 
           <div className='flex flex-col  items-center justify-center'>
           <h3 className='text-xl font-light text-gray-600'>Your Searches </h3>
           <div className='flex gap-2 mt-2'> 
             {serchData.location && <p className='flex gap-1 text-lg bg-white px-2 py-1 text-gray-600'>{serchData.location}  <span onClick={()=>setSearchData(prev=>({...prev,location:''}))} className='cursor-pointer text-2xl'><i class="ri-close-line"></i></span></p>}
            { serchData.bikeName && <p className='flex gap-1 text-lg bg-white px-2 py-1 text-gray-600'>{serchData.bikeName}  <span onClick={()=>setSearchData(prev=>({...prev,bikeName:''}))}  className='cursor-pointer text-2xl'><i class="ri-close-line"></i></span></p>}
           </div>
         </div>
          }
       
    </div>
  )
}

export default Hero