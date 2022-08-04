import { faBattleNet } from "@fortawesome/free-brands-svg-icons";
import { faContactBook } from "@fortawesome/free-regular-svg-icons";
import {
  faAddressBook,
  faBook,
  faBookBookmark,
  faBookDead,
  faBookOpen,
  faBookSkull,
  faMoneyBillTransfer,
  faMoneyBillTrendUp,
  faMoneyCheck,
  faMoneyCheckDollar,
  faNotEqual,
  faNotesMedical,
  faSwatchbook,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const UserDashboard = () => {
  return (
    <div className="w-full h-full lg:h-full lg:mt-8 bg-slate-100 mb-8 mt-60">
      <div className="UD pl-20 pt-10">
        <h3 className="text-end">
          <button className="btn bg-blue-700 border-none btn-sm rounded-none pr-10">
            <FontAwesomeIcon icon={faMoneyCheck} className="mr-1" />
            withdraw
          </button>
          <button className="btn bg-green-600 border-none btn-sm ml-20 mr-20 rounded-none pr-10">
            <FontAwesomeIcon icon={faMoneyBillTransfer} className="mr-1" />
            transfer
          </button>
        </h3>
        <h3 className="font-bold text-start text-2xl -mt-8">Account Summary</h3>
      </div>

      <div className="accountSummary pt-12 flex-col lg:flex-row flex lg:justify-around">
        <div className="card w-1/5 bg-white rounded p-8">
          <div className="w-18 d-flex flex">
            <b className=" px-5 py-4 mr-2 rounded-full text-green-700 lg:text-4xl">
              <FontAwesomeIcon icon={faMoneyCheckDollar} className="mr-1" />
            </b>
            <div className="">
              <span className="font-bold text-slate-500 text-3xl">$33</span>
              <br />
              <span>Balanc</span>
            </div>
          </div>
        </div>
        <div className="card w-1/5 bg-white rounded p-8">
          <div className="w-18 d-flex flex">
            <b className=" px-5 py-4 mr-2 rounded-full text-green-700 lg:text-4xl">
              <FontAwesomeIcon icon={faMoneyBillTransfer} className="mr-1" />
            </b>
            <div className="">
              <span className="font-bold text-slate-500 text-3xl">$60</span>
              <br />
              <span>Transferred</span>
            </div>
          </div>
        </div>
        <div className="card w-1/5 bg-white rounded p-8">
          <div className="w-18 d-flex flex">
            <b className=" px-5 py-4 mr-2 rounded-full text-green-700 lg:text-4xl">
              <FontAwesomeIcon icon={faMoneyBillTrendUp} className="mr-1" />
            </b>
            <div className="">
              <span className="font-bold text-slate-500 text-3xl">$467</span>
              <br />
              <span>Withdrawn</span>
            </div>
          </div>
        </div>
      </div>

      <div className="recentTransactions">
        <h4 className="text-start lg:ml-20 text-2xl pt-10">Recent Transactions</h4>
        <p className="text-left lg:ml-24 mt-4">
          <input className="border-none rounded-md p-1 text-slate-400" type="text" value="Status All" disabled/>
          <input className="border-none rounded-md p-1 ml-4 text-slate-400" type="text" value="Date: This Month" disabled />
        </p>
      </div>

      <div className="transactions m-4 lg:mx-20 max:w-3xl h-2xl bg-white">
          <div className="show-transaction">
            <div className="transaction-icon w-10 h-10 justify-center text-center align-center rounded-full border border-green-200 bg-green-100">
            <FontAwesomeIcon icon={faBook} className="text-green-600 mt-3" />
            </div>
            <p className="text-slate-400">No Transactions Found</p>
          </div>
      </div>

    </div>
  );
};

export default UserDashboard;
