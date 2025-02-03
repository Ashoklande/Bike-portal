import React, { useContext, useEffect } from "react";

import "remixicon/fonts/remixicon.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Showbike from "./pages/Showbike";
import BikeDetail from "./pages/BikeDetail";
import AddbikeData from "./pages/AddbikeData";
import IsLogin from "./UserAuthentication/IsLogin";
import BikeUploadedData from "./pages/BikeUploadedData";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showbikes" element={<Showbike />} />
        <Route path="/bike/:id" element={<BikeDetail />} />

        <Route
          path="BikeData"
          element={
            <IsLogin>
              <BikeUploadedData />            
            </IsLogin>
          }
        />
        <Route
          path="/Addbikedata"
          element={
            <IsLogin>
              <AddbikeData />
            </IsLogin>
          }
        />
      </Routes>
    </>
  );
};

export default App;
