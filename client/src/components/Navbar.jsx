import React, { useContext, useEffect } from "react";
import { Appcontext } from "../Context/Appcontext";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";
import motor from "../assets/img/Motorcycle.png";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const { Logindatauser, setUserLoginpopup, settoken } = useContext(Appcontext);
  const navigate = useNavigate();
  const location = useLocation();
  const [navbaropen, setnavbaropen] = useState(false);

  return (
    <>
      <div
        className={`w-full shadow  ${
          location.pathname !== "/"
            ? "bg-gradient-to-r   from-white to-yellow-200"
            : ""
        } sticky top-0 z-50 shadow-2xl bg-white `}
      >
        <div className="px-20 max-sm:px-5 flex items-center justify-between">
          <div
            onClick={() => navigate("/")}
            className="flex gap-1 items-center  cursor-pointer"
          >
            {" "}
            <img className="h-20 object-contain max-sm:12" src={motor} alt="" />
            <p className=" font-bold text-lg">Bikey</p>
          </div>

          <div className="flex gap-3">
            <div className="flex gap-3 max-sm:hidden">
              <Link
                className="text-xl px-2 py-1 hover:border-b-2 border-black transition-all duration-300  "
                to={"/"}
              >
                Home
              </Link>
              <Link
                className="text-xl px-2 py-1 hover:border-b-2 border-black transition-all duration-300  "
                to={"/BikeData"}
              >
                YourSellingBike
              </Link>
              <Link
                className="text-xl px-2 py-1 hover:border-b-2 border-black transition-all duration-300  "
                to="/Addbikedata"
              >
                SellBike
              </Link>
            </div>
            {Logindatauser && (
              <div className="flex gap-3 items-center relative group">
                <p className="text-xl max-sm:flex max-sm:flex-col">
                  
                  <span className="ml-1  text-red-600 cursor-pointer font-bold">
                  👋 {Logindatauser.fullname}
                  </span>
                </p>
                <div className="mt-8 absolute hidden group-hover:block top-0 right-0 z-10">
                  <button
                    onClick={() => {
                      localStorage.removeItem("token");
                      settoken(null);
                      toast.success("User Logout");
                    }}
                    className="px-6 py-2 text-xl bg-amber-100 rounded hover:bg-white shadow cursor-pointer"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>

          {!Logindatauser && (
            <button
              onClick={() => setUserLoginpopup(true)}
              className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white px-8 text-lg py-2 rounded-md"
            >
              Login
            </button>
          )}
          <p
            onClick={() => setnavbaropen(true)}
            className="text-2xl cursor-pointer font-medium md:hidden"
          >
            <i class="ri-menu-3-line"></i>
          </p>
        </div>
        <div
          className={`w-[80%] h-screen md:hidden absolute top-0 transition-all ${
            navbaropen ? "translate-x-0" : " hidden translate-x-full"
          }  right-0 bg-yellow-400 `}
        >
          <p
            onClick={() => setnavbaropen(false)}
            className="cursor-pointer text-3xl absolute right-2.5 top-1.5"
          >
            <i className="ri-close-line"></i>
          </p>
          <div className="flex flex-col  p-10  gap-5">
            <Link
              className="text-xl px-2 py-1 hover:border-b-2 border-black transition-all duration-300  "
              to={"/"}
            >
              Home
            </Link>
            <Link
              className="text-xl px-2 py-1 hover:border-b-2 border-black transition-all duration-300  "
              to={"/BikeData"}
            >
              YourSellingBike
            </Link>
            <Link
              className="text-xl px-2 py-1 hover:border-b-2 border-black transition-all duration-300  "
              to="/Addbikedata"
            >
              SellBike
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
