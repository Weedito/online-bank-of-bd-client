import React from "react";
import { CirclesWithBar } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center mt-2 w-full h-screen py-10">
      <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel='circles-with-bar-loading'
      />
    </div>
  );
};

export default Loading;
