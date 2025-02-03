import React, { useContext, useState } from "react";
import { Appcontext } from "../Context/Appcontext";
import Bikecard from "../components/Bikecard";
import Navbar from "../components/Navbar";

const Showbike = () => {

  const {bikeData}=useContext(Appcontext);

  
  return (
    <>
    <Navbar/>
    <div className="px-4 my-10 w-full md:px-20">
      <h2 className="max-sm-xl text-2xl font-semibold mb-3.5">
        Motor Cycle & Available Brand
      </h2>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {bikeData.map((bike,idx)=>(
       <Bikecard key={idx} bike={bike}/>
        ))}
      </div>
    </div>
    </>
  );
};

export default Showbike;
