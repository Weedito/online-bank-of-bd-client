import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const RequestPayment = () => {
  return (
    <div className="bg-white mx-10 mt-10 mb-10 py-1 px-8 rounded-md lg:w-cover lg:h-full">
      <div className="head-line pb-4 pt-5">
        <h1 className="">
          <div className="text-2xl font-bold">Request a Payment</div>
          <div className="text-lg text-right -mt-7">
            <span className="border rounded-full border-slate-300 px-4 text-lg py-2">
              ?
            </span>
          </div>
        </h1>
      </div>

      <div className="hr">
        <hr />
      </div>

      <div className="step">
        <p className="mt-5">Step 1 of 4</p>
        <h2 className="font-bold text-xl mt-3">Choose Recipient</h2>
      </div>

      <div className="mostRecent-card mt-10 lg:flex gap-10 w-fit">
        <div class=" bg-purple-600 lg:w-60 shadow-xl lg:h-40 mb-4 lg:mb-0 rounded-2xl">
          <figure class="px-10 pt-10 text-white text-xl">
            <FontAwesomeIcon
              icon={faUser}
              className="p-2 border-2 rounded-full"
            />
          </figure>
          <div class="items-center text-center">
            <p className="py-6 lg:px-0 px-4 text-white">Most Recent</p>
          </div>
        </div>
        {/*  */}
        <div class=" bg-base-200 lg:w-60 shadow-xl lg:h-40 mb-4 lg:mb-0 rounded-2xl">
          <figure class="px-10 pt-10 text-white text-xl">
            <FontAwesomeIcon
              icon={faPlus}
              className="text-slate-400 text-4xl"
            />
          </figure>
          <div class="items-center text-center">
            <p className="py-6 lg:px-0 px-4 text-black">New Recipients</p>
          </div>
        </div>
      </div>
      <div className="totol-recipients">
        <p className="my-8">50 Recipients</p>
      </div>
      <div className="provideEmailInput">
        <div className="searchbar grow">
          <div class="form-control data-svelte-search">
            <svg
              class="text-base-content pointer-events-none absolute mt-3 ml-3 stroke-current opacity-60 "
              width="25"
              height="25"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                className="text-slate-400"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <input
              type="email"
              placeholder="Enter email, name or company"
              class="input px-11 border-2 border-slate-200 placeholder-slate-400 text-black bg-slate-50 focus:ring-0 focus:ring-offset-0 text-sm"
            />
          </div>
        </div>
      </div>
      <div className="hr mt-6">
        <hr />
      </div>
      <div className="usersPaying-details">
        <div className="mt-6 flex justify-between">
          <td>
            <div class="flex items-center lg:space-x-3">
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12 -mt-8">
                  <img
                    src="https://i.ibb.co/DbF2r7V/avatar-icon-images-4.png"
                    alt="Avatar"
                  />
                </div>
              </div>
              <div>
                <div class="font-bold">Hart Hagerty</div>
                <div class="text-sm opacity-50">Hart.hagerty@gmai.com</div>
                <div className="mt-4 w-65 text-xs">
                  ---------------------------------------------
                  <p>
                    <span className="">
                      Last Payment on 17 jul 2022 11.42 PM | 200.00 USD
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </td>

          <th className="mt-5">
            <button class="btn btn-md hover:bg-slate-200 hover:border-none normal-case text-black font-normal lg:px-10 rounded-2xl bg-slate-100 border-inherit">
              Choose
            </button>
          </th>
        </div>
        <div className="hr mt-6">
          <hr />
        </div>
        <div className="mt-6 flex justify-between">
          <td>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12 -mt-8">
                  <img
                    src="https://i.ibb.co/DbF2r7V/avatar-icon-images-4.png"
                    alt="Avatar"
                  />
                </div>
              </div>
              <div>
                <div class="font-bold">Morris Lucas</div>
                <div class="text-sm opacity-50">Morris22@gmai.com</div>
                <div className="mt-4 w-65 text-xs">
                  ---------------------------------------------
                  <p>
                    <span className="">
                      Last Payment on 26 aug 2022 03.53 AM | 780.00 USD
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </td>

          <th className="mt-5">
            <button class="btn btn-md hover:bg-slate-200 hover:border-none normal-case text-black font-normal lg:px-10 rounded-2xl bg-slate-100 border-inherit">
              Choose
            </button>
          </th>
        </div>
        <div className="hr my-6">
          <hr />
        </div>
      </div>
    </div>
  );
};

export default RequestPayment;
