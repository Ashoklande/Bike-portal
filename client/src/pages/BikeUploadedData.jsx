import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import { toast,ToastContainer } from "react-toastify";
import axios from "axios";
import { useState } from "react";
import { Appcontext } from "../Context/Appcontext";
import Footer from "../components/Footer";

const BikeUploadedData = () => {
  const [Bikedata, setBikedata] = useState('');
  const {setDataAdded}=useContext(Appcontext);
  const LoadData = async () => {
    try {
      if (Bikedata.length === 0) {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/user/getbikeData`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Pass token in Authorization header
            },
          }
        );

        if (response.data.status === "sucess") {
          setBikedata(response.data.userwithData);
          lo;
        } else {
        }
      }
    } catch (err) {
      toast.error(err);
    }
  };

  const onDeleteHandle=async(_id)=>{

    const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/bike/Deletebike`,{_id});
      
    if (response.data.status==='sucess') {
       toast.success("data deleted");
       setBikedata('');
       setDataAdded(prev=>!prev);
       
    }
      
  }

  useEffect(() => {
    LoadData();
  }, [Bikedata]);

  return (
    < div className="h-screen">
      <Navbar />
      <ToastContainer
        position='top-right'
        autoClose={5000} // 5 seconds auto-close
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h2 className="text-center my-10 text-2xl font-medium">Your Active For Selling Bike Data</h2>
      <div className="px-20 h-[72%] flex ">
        <table className="px-4 my-5 w-full h-10">
         <tr className=" border-4 bg-green-500 text-black">
            <th className="px-4 py-2 text-lg text-start   w-1/5  text-gray-900 font-medium">
              Sr
            </th>
            <th className="px-4 py-2 text-lg text-start  w-1/5 text-gray-900 font-medium">
              Bike-Name
            </th>
            <th className="px-4 py-2 text-lg text-start  w-1/5 text-gray-900 font-medium">
              Bike Img
            </th>
            <th className="px-4 py-2 max-sm:hidden text-lg text-start  w-1/5 text-gray-900 font-medium">
              {" "}
              Date
            </th>
            <th className="px-4 py-2 text-lg text-start w-1/5 text-gray-900 font-medium">
              Status
            </th>
          </tr>
          <tbody>
            {Bikedata.bikeid && Bikedata.bikeid.length > 0 ? (
              Bikedata.bikeid.map((bike, index) => {
                return (
                  <tr className="border-4 rounded-full border-green-600" key={bike._id}>
                    <td className="px-4 py-2 text-lg text-start text-gray-700">
                      {index + 1}
                    </td>
                    <td className="px-4 py-2 text-lg text-start  text-gray-700">
                      {bike.name}
                    </td>
                    <td className="px-4 py-2 text-lg text-start  text-gray-700">
                      <img className="h-10 transition-transform duration-300 ease-in-out  transform hover:scale-500 rounded-md" src={bike.photo[0]} alt="" />
                    </td>
                    <td className="px-4 py-2 max-sm:hidden text-lg text-start  text-gray-700">
                      12/3/2024
                    </td>
                    <td className="px-4 py-2 text-lg text-start  font-semibold text-green-800">
                     <div className="flex gap-3 cursor-pointer items-center relative group"><span>Active</span> <div onClick={()=>onDeleteHandle(bike._id)} className="bg-red-400 absolute ml-20 group-hover:block hover:bg-red-500 hidden px-4 py-1 text-white rounded">Delete</div></div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-2xl  px-4 py-2">
                  No bikes available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Footer/>
    </div>
  );
};

export default BikeUploadedData;
