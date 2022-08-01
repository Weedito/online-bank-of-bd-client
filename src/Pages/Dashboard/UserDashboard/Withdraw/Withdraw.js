import React from 'react';

const Withdraw = () => {
    return (
        <div className="w-full lg:h-full p-12">
      <h1 className="font-bold text-2xl pb-4 text-green-500">Withdraw Money</h1>
      <div class="card w-96 h-60 bg-base-100 shadow-2xl mx-auto">
        <div class="card-body">
          <h2 class="card-title">Withdraw Your Money!</h2>
          <input type="number" placeholder="0" class="input mt-4 input-bordered input-lg w-full max-w-xs" />
          <div class="card-actions my-3">
            <button class="btn bg-green-700 mx-auto">Withdraw</button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Withdraw;