import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TransactionsHistory = () => {
  return (
    <div>
      <div className="head bg-violet-800 py-6 px-10 flex flex-col lg:flex-row gap-4 gap">
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
                className="text-white"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Type to search..."
              class="input px-11 placeholder-slate-300 text-white bg-violet-700 hover:border-none border-none focus:ring-0 focus:ring-offset-0 text-lg"
            />
          </div>
        </div>
        <div className="filteringBy-A-to-Z">
          <select class="select w-full max-w-xs input px-11 placeholder-white bg-violet-700 hover:border-none border-none focus:ring-0 focus:ring-offset-0 text-white text-lg">
            <option disabled selected>
              Sort by: A-Z
            </option>
            <option>Name</option>
            <option>Date</option>
            <option>Type</option>
            <option>Lists</option>
            <option>Size</option>
          </select>
        </div>
        <div className="allStatus">
          <select class="select w-full max-w-xs px-11 placeholder-white bg-violet-700 hover:border-none border-none focus:ring-0 focus:ring-offset-0 text-white text-lg">
            <option disabled selected>
              All Status
            </option>
            <option>Recently</option>
            <option>Last day</option>
            <option>Last week</option>
            <option>Last month</option>
            <option>Last year</option>
          </select>
        </div>
        <div className="recipients">
          <button className="input px-11 text-white placeholder-white bg-violet-700 hover:border-none border-none focus:ring-0 focus:ring-offset-0 text-white-50 text-lg">
            <span className="font-bold text-md">
              <FontAwesomeIcon className="mr-4" icon={faPlus} />
            </span>
            New Recipients
          </button>
        </div>
      </div>
      <div className="body"></div>
    </div>
  );
};

export default TransactionsHistory;
