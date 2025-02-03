import React, { useContext } from "react";
import { Appcontext } from "../Context/Appcontext";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";

const BikeDetail = () => {
  const { bikeData } = useContext(Appcontext);
  const { id } = useParams();
  
  const [MobileNo, setMobileNo] = useState(false);

  const matchbikedata = bikeData.filter((data) => data._id === id);
   const data=matchbikedata[0]
   
  
   const [currentIndex, setCurrentIndex] = useState(0); 

  // Function to go to the previous image
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.photo.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next image
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.photo.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <Navbar/>
      {matchbikedata && (
        
        <div className="w-full min-h-screen max-sm-10 px-10 md:px-30 py-10 ">
          <h2 className="font-medium text-3xl text-center">
            Bike Is Here{" "}
          </h2>
          <div className="bg-gradient-to-r shadow-2xl from-blue-200 to to-blue-400 flex flex-col items-center my-5 p-2 rounded-md justify-center ">
            <div className="flex items-center max-sm:flex-col gap-3 justify-between w-full md:px-20 ">
              <div>
                <h2 className="text-lg text px-2 py-1 roundd">
                  Owner : <span> {data.owner} </span>
                </h2>
                <h2 className="text-lg text  px-2 py-1 roundd">
                  Model : <span>{data.model}</span>
                </h2>
                <h2 className="text-lg text  mt-1 px-2 py-1 roundd">
                  Running :<span>{data.running} KM</span>
                </h2>
                <h2 className="text-xl bg-yellow-100 rounded-md font-bold text  mt-1 px-3 py-2 roundd">
                  Pricing :
                  <span className="p-1 text-red-800 font-bold text-xl">
                    ₹{ data.price}
                  </span>
                </h2>
              </div>
              <button
                onClick={() => setMobileNo((prev) => !prev)}
                className="px-6 py-2 text-xl cursor-pointer shadow-2xl  bg-green-700 text-white rounded-md"
              >
                {MobileNo ? "8767042661" : "Contact to owner"}
              </button>
            </div>
          </div>

          <div className="px-3 md:w-1/2 items-center justify-center flex p-2 bg-black">
            <div className="flex items-center gap-3 max-sm:justify-center">

            <span onClick={handlePrev}  className="text-5xl cursor-pointer"><i className="text-white max-sm:text-black  ri-arrow-left-s-line"></i></span>
            <img className="h-99" src={data.photo[currentIndex]} alt="" />
            <span onClick={handleNext} className="text-5xl cursor-pointer"><i className=" text-white max-sm:text-black  ri-arrow-right-s-line"></i></span>
            </div>
           
          </div>
          <div className="descriptionbike mt-3">
                <h2 className="text-lg font-semibold ">Descriptiion:</h2>
                <p className="mb-4"> {data.description}</p>
                <h2 className="text-lg font-semibold ">Address:</h2>
                <p>{data.address}</p>

            </div>
        </div>
      )}
    </div>
  );
};

export default BikeDetail;



