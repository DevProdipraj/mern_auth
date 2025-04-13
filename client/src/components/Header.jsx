import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate()

  return (
    <div className="container  ">
      <img className="w-[240px] mx-auto mt-34" src={assets.header_img} alt="" />
      <div className="flex items-center justify-center">
        <h2 className="text-center text-4xl">Hey Developer</h2>
        <img className="w-[60px] ms-2" src={assets.hand_wave} alt="" />
      </div>
      <h1 className="text-center py-3 text-5xl font-bold">
        Welcome to our app
      </h1>
      <p className="mb-8 max-w-md mx-auto text-center">
        Let's start with a quick product tour and we will have you up and
        running in no time!
      </p>
      <div className="w-[180px] mx-auto text-center mt-8 cursor-pointer rounded-md bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 py-2 px-5 ">
        <input 
          onClick={()=> navigate("/login")}
          className="text-xl  text-white cursor-pointer"
          type="button"
          value="Get Started"
        />
      </div>
    </div>
  );
};

export default Header;
