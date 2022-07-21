import React from "react";
import { useNavigate } from "react-router-dom";

const SigninRight = () => {
  const navigate = useNavigate();
  return (
    <div className="w-4/6 mx-auto text-center rounded text-white my-10">
      <h2 className="text-3xl font-bold py-3">Hello, Friend!</h2>
      <p className="py-5">
        Enter Your Personal Details and Start Journey With Us.
      </p>
      <button
        onClick={() => navigate("/signup")}
        className="btn btn-outline px-7 border-white text-white hover:bg-white hover:text-gray-900"
      >
        SIGN UP
      </button>
    </div>
  );
};

export default SigninRight;
