import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BikelistHome from "../components/BikelistHome";
import UserLogin from "../components/UserLogin";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../components/Footer";
import { Appcontext } from "../Context/Appcontext";


const Home = () => {
  const {UserLoginpopup}=useContext(Appcontext);
  return (
    <div >
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
      {UserLoginpopup && <UserLogin />}
      <Navbar />
      <Hero />
      <BikelistHome />
      <Footer/>
    </div>
  );
};

export default Home;
