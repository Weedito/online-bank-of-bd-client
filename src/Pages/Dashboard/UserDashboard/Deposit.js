import React from "react";
import { Link } from "react-router-dom";

const Deposit = () => {
  return (
    <div className="w-full lg:h-full p-12">
      <h1 className="font-bold text-2xl pb-4 text-green-500">Deposit Money</h1>
      <div class="card w-96 h-60 bg-base-100 shadow-2xl mx-auto">
        <div class="card-body">
          <h2 class="card-title">Deposite Your Money!</h2>
          <input type="number" placeholder="0" class="input mt-4 input-bordered input-lg w-full max-w-xs" />
          <div class="card-actions my-3">
            <Link to={'dashboard/deposit/${}'} className="mx-auto"><button class="btn bg-green-700 mx-auto">Deposit</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
