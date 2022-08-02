import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const UserDashboard = () => {
  return (
    <div className="w-full h-full lg:h-full lg:mt-8 bg-slate-100 mb-8">
        
      <div className="UD pl-20 pt-10">
      <h3 className="text-end">
      <button className="btn bg-blue-400 border-none btn-sm rounded-none"><FontAwesomeIcon icon={faMoneyBill} />withdraw</button>
      <button className="btn bg-blue-400 border-none btn-sm ml-20 mr-20 rounded-none">transfer</button>
      </h3>
      <h3 className="font-bold text-start text-2xl">Account Summary</h3>
      </div>
      
      <div className="mx-20 mt-10 bg-white p-8 rounded border-2">
        <div className="profile text-left"></div>

        <div className="my-20"></div>
        <div className="chart px-20">
          <h2 className="text-start text-2xl">PRACTICE AREAS</h2>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
