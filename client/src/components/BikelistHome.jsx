import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { Appcontext } from '../Context/Appcontext';
import { useEffect } from 'react';
import Bikecard from './Bikecard'
import {useNavigate } from 'react-router-dom';

const BikelistHome = () => {

    
  const {bikeData,serchData}=useContext(Appcontext);
   
  const [filterdata, setfilterdata] = useState(bikeData);
  const navigate=useNavigate()
  

  useEffect(()=>{
    const ismatchbike=data=>data.name===''||data.name.toLowerCase().includes(serchData.bikeName.toLowerCase());
    
    const newfilterdata=bikeData.slice().reverse().filter(
      data=>ismatchbike(data)
    );
    setfilterdata(newfilterdata);
  },[bikeData,serchData])
  

  return (
    <div className='px-4 my-10 w-full md:px-20'>
        <h2 className='max-sm-xl text-2xl font-semibold '>"All Available Bikes for You"</h2>
        <p className='text-gray-600 mb-7 ml-5'>Explore Our Full Bike Collection</p>
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 '>
       {filterdata.slice(0,4).map((bike,idx)=>(
           <Bikecard key={idx} bike={bike}/>
       ))}
      
       </div>

      <div className='flex mt-8 items-center justify-center '> <button onClick={()=>navigate('/Showbikes')} className='bg-white cursor-pointer text-gray-700 rounded text-xl px-5 py-2 mt-3 border '>Show All Bikes</button></div>
      </div>
  )
}

export default BikelistHome