import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className="container py-5 flex justify-between items-center">
      <div className="text-2xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 px-3 py-1 bg-clip-text text-transparent">MERN AUTH</div>
      <div className=" cursor-pointer rounded-md bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 py-1.5 px-5 hover:bg-gray-200 transition-all duration-300">
        <button onClick={()=> navigate("/login")} className="text-xl text-white cursor-pointer" to="#">Login <FaArrowRight className="inline-block" /></button>
      </div>
    </div>
  );
};

export default Navbar;
