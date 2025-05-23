import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { appContent } from "../contex/AppContext";

export const EmailVerify = () => {
  axios.defaults.withCredentials = true;

  const { backendUrl, isLoggedIn, userData, getUserData } =
    useContext(appContent);

  const navigate = useNavigate();
  const inputRefs = React.useRef([]);

  const handleInput = (e, index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handlKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    const pasteArray = paste.split("");
    pasteArray.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    });
  };

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const otpArray = inputRefs.current.map((e) => e.value);
      const otp = otpArray.join("");

      const { data } = await axios.post(
        backendUrl + "/api/auth/verify-account",
        { otp }
      );

      if (data.success) {
        toast.success(data.message);
        getUserData();
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    isLoggedIn && userData && userData.isAccountVirefy && navigate("/");
  }, [isLoggedIn, userData]);

  return (
    <div className='h-screen w-screen bg-[url("./assets/bg_img.png")] bg-cover bg-center'>
      <div
        onClick={() => navigate("/")}
        className="container text-2xl pt-5 font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 px-3 py-1 bg-clip-text text-transparent cursor-pointer"
      >
        MERN AUTH
      </div>
      <div className="flex items-center justify-center min-h-[90vh]  ">
        <form
          onSubmit={onSubmitHandler}
          className="bg-slate-900 p-8 rounded-1g shadow-1g w-96 text-sm"
        >
          <h1 className="text-white text-2xl Font-semibold text-center mb-4">
            Email Verify OTP
          </h1>
          <p className="text-center mb-6 text-indigo-300">
            Enter the 6-digit code sent to your email id.
          </p>
          <div className="flex justify-between mb-8" onPaste={handlePaste}>
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <input
                  type="text"
                  maxLength="1"
                  key={index}
                  required
                  className="w-12 h-12 bg-[#333A5C] text-white text-center text-xl rounded-md"
                  ref={(e) => (inputRefs.current[index] = e)}
                  onInput={(e) => handleInput(e, index)}
                  onKeyDown={(e) => handlKeyDown(e, index)}
                />
              ))}
          </div>
          <button
            className="w-full py-3 bg-gradient-to-r from-indigo-500
          to-indigo-900 text-white rounded-full"
          >
            Verify email
          </button>
        </form>
      </div>
    </div>
  );
};
