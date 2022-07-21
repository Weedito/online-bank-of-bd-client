import React from "react";
import { useNavigate } from "react-router-dom";

const SignupLeft = () => {
  const navigate = useNavigate();
  return (
    <div className="w-4/6 mx-auto text-center rounded text-white my-10">
      <h2 className="text-3xl font-bold py-3">Welcome Back!</h2>
      <p className="py-5">
        To Keep Connected With us Please Signin with Your Personal Account.
      </p>
      <button
        onClick={() => navigate("/signin")}
        className="btn btn-outline px-7 border-white text-white hover:bg-white hover:text-gray-900"
      >
        SIGN IN
      </button>
    </div>
  );
};

export default SignupLeft;
