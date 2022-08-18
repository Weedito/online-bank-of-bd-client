import React from "react";
import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center mt-2 w-full h-screen py-10">
      <HashLoader color="#137c38" size={70} cssOverride />

    </div>
  );
};

export default Loading;
