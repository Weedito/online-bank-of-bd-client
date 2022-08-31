import { faBuildingColumns, faMoneyBillTrendUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MakeAPayment = () => {
  return (
    <div className="bg-white mx-10 mt-10 mb-40 pb-40 px-8 rounded-md w-fit lg:w-auto">
      <div className="head-line pb-4 pt-5">
        <h1 className=""><div className="text-2xl font-bold">Make a Payment</div><div className="text-lg text-right -mt-7"><span className="border rounded-full border-slate-300 px-4 text-lg py-2">?</span></div></h1>
        
      </div>
      <hr />
      <div className="payment-card mt-10 lg:flex gap-10 w-fit">
        <div className=" bg-slate-50 lg:w-96 shadow-xl lg:h-60 mb-4 lg:mb-0 rounded-2xl">
          <figure className="px-10 pt-10 text-purple-600 text-3xl">
          <img src="https://i.ibb.co/X4rwpKC/payment-req.png" alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="items-center text-center">
            <p className="py-6 lg:px-0 px-4">To a Recipient's Online Bank BD Account</p>
           <div className="hr mx-8 bg-slate-500">
            <hr />
           </div>
            <div className="mt-6 cursor-pointer">
              <button className="cursor-pointer">Pay for free</button>
            </div>
          </div>
        </div>
        {/*  */}
        <div className=" bg-slate-50 lg:w-96 shadow-xl lg:h-60 rounded-2xl">
          <figure className="px-10 pt-10 text-purple-600 text-3xl">
          <FontAwesomeIcon icon={faBuildingColumns} className="border p-4 rounded-full border-slate-300"/>
          </figure>
          <div className="items-center text-center">
            <p className="py-6">To a Recipient's Online Bank BD Account</p>
           <div className="hr mx-8 bg-slate-500">
            <hr />
           </div>
            <div className="mt-6">
              <button className="cursor-pointer">Pay for free</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MakeAPayment;
