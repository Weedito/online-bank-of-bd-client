import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../../firebase.init";

const Deposit = () => {

  const [user] = useAuthState(auth);

  

  

  return (

    <div className="w-full lg:h-full p-12">
      <h1 className="font-bold text-2xl pb-4 text-green-500">Deposit Money</h1>
      <div className="card w-96 h-60 bg-base-100 shadow-2xl mx-auto">
        <div className="card-body">
          <h2 className="card-title">Deposite Your Money!</h2>          

          <input type="number" placeholder="0" className="input mt-4 input-bordered input-lg w-full max-w-xs" />
          <div className="card-actions my-3">
            <Link to={'dashboard/deposit/${}'} className="mx-auto"><button className="btn bg-green-700 mx-auto">Deposit</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;