import { faDeleteLeft, faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './MyAccount.css';

const MyAccount = () => {
  return (
    <div className="myAccount">
    <div className="header-bg"></div>
      <div className="myProfile lg:w-11/12 lg:mx-16 md:mx-6 mx-1 lg:flex gap-10 -mt-72 mb-20">

        <div className="profile lg:mt-28 mt-32">
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
              <img
                src="https://i.ibb.co/J2bCs3B/Profile.jpg"
                alt="Shoes"
                class="rounded-full w-36 h-36"
              />
            </figure>
            <div class="card-body">
              <h2 class="font-bold text-2xl text-center">Luchiya</h2>
              <p className="text-green-500 text-center">Active</p>
              <div className="hr text-black py-2">
                <hr />
              </div>
              <div className="account-details">
                <p className="account-id">
                 <div className="text-left">Account ID:</div>
                 <div className="text-right -mt-5 text-slate-400">Rex49484</div>
                </p>
                <p className="accountOpening-date my-6">
                 <div className="text-left">Joined:</div>
                 <div className="text-right -mt-5 text-slate-400">Aug 25,2021</div>
                </p>
                <p className="accountOpening-date my-6">
                 <div className="text-left">Confirm Status:</div>
                 <div className="text-right -mt-5 text-slate-400">80%</div>
                </p>
                <div className="logout-btn text-center">
                  <button className="btn border-slate-200 normal-case text-slate-600 bg-slate-100 btn-ghost w-full rounded-2xl"><FontAwesomeIcon icon={faLongArrowRight} className="mr-4 text-slate-500" />Logout</button>
                </div>
                <div className="accountDelete-btn text-center mt-6">
                  <button className="btn border-slate-200 normal-case text-red-500 bg-slate-100 btn-ghost w-full rounded-2xl"><FontAwesomeIcon icon={faDeleteLeft} className="mr-4 text-red-500" />Delete Account</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-customize w-full h-screen lg:mt-28 mt-10">
          <div class="h-full bg-base-100 shadow-xl rounded-2xl">
            <div class="card-body">
              <div className="head lg:flex md:gap-3 justify-between">
                <div className="account"><button className="btn normal-case border-slate-200 hover:text-white bg-slate-100 hover:bg-indigo-700 px-10 btn-ghost  rounded-2xl">Account</button></div>
                <div className="security"><button className="btn normal-case my-4 lg:my-0 border-slate-200 hover:text-white bg-slate-100 hover:bg-indigo-700 px-10 btn-ghost  rounded-2xl">Security</button></div>
                <div className="payment-method"><button className="btn normal-case border-slate-200 hover:text-white bg-slate-100 hover:bg-indigo-700 px-10 btn-ghost  rounded-2xl">Payment Methods</button></div>
                <div className="notification"><button className="btn normal-case my-4 lg:my-0 border-slate-200 hover:text-white bg-slate-100 hover:bg-indigo-700 px-10 btn-ghost  rounded-2xl">Notification</button></div>
              </div>

            </div>
          </div>
        </div>

      </div>
  </div>
  );
};

export default MyAccount;
