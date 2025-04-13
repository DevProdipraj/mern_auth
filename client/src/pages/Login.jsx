import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState("login");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-300 via-blue-500 to-purple-400 flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-md text-white min-w-90">
        {login === "login" ? (
          <h1 className="text-2xl font-bold text-white text-center">Login</h1>
        ) : (
          <h1 className="text-2xl font-bold text-white text-center">
            Create Account
          </h1>
        )}
        <form action="" method="get">
          {login === "signup" && (
            <input
              className="border-2 border-white mt-4 w-full rounded-md px-2 py-2"
              placeholder="Full Name"
              type="text"
              name="fullName"
              id="fullName"
            />
            
          )}
          <input
            className="border-2 border-white mt-4 w-full rounded-md px-2 py-2"
            placeholder="Email"
            type="email"
            name="userEmail"
            id="userEmail"
          />
          <br />
          <input
            className="border-2 border-white mt-4 w-full rounded-md px-2 py-2"
            placeholder="Password"
            type="password"
            name="password"
            id="passworrd"
          />
          {
            login === "login" && (
              <input
              className="text-blue-300 my-4"
              onClick={() => navigate("/reset-password")}
              type="button"
              value="Forgot Password"
            />
            )
          }
          <br />
          {login === "login" ? (
            <input
              className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-400 py-2 text-xl font-bold cursor-pointer  rounded-full w-full "
              type="submit"
              value="Login"
            />
          ) : (
            <input
              className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-400 py-2  text-xl font-bold cursor-pointer rounded-full w-full mt-5"
              type="submit"
              value="Sign Up"
            />
          )}
        </form>
        <div className="">
          {login === "login" ? (
            <p className="my-4 text-sm">
              Don't hav an account?{" "}
              <span
                onClick={() => setLogin("signup")}
                className="text-blue-400 cursor-pointer"
              >
                Sign Up
              </span>
            </p>
          ) : (
            <p className="my-4 text-sm">
              Already have an Account?{" "}
              <span
                onClick={() => setLogin("login")}
                className="text-blue-400 cursor-pointer"
              >
                Login Here
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
