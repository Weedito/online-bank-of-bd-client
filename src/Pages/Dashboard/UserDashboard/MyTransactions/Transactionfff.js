import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PageTitle from "../../../PageTitle/PageTitle";

const transactionData = [
  {
    id: 1,
    name: "Darlene Robertson",
    image: "https://i.ibb.co/DbF2r7V/avatar-icon-images-4.png",
    mail: "jackson.graham@example.com",
    time: "03:00 PM",
    date: "10 Mar 2022",
    amount: "$106.58",
    amountStatus: "Received",
    status: "Send Fund"
  },
  {
    id: 2,
    name: "Robertson",
    image: "https://i.ibb.co/DbF2r7V/avatar-icon-images-4.png",
    mail: "manikMahi@example.com",
    time: "04:00 PM",
    date: "20 Mar 2022",
    amount: "$406.58",
    amountStatus: "send",
    status: "Send Fund"
  },
  {
    id: 3,
    name: "shawon khan",
    image: "https://i.ibb.co/DbF2r7V/avatar-icon-images-4.png",
    mail: "shawon@example.com",
    time: "01:00 PM",
    date: "16 Mar 2022",
    amount: "$606.58",
    amountStatus: "Received",
    status: "Send Fund"
  },
  {
    id: 4,
    name: "Rabbi khan",
    image: "https://i.ibb.co/DbF2r7V/avatar-icon-images-4.png",
    mail: "rabbi@example.com",
    time: "05:30 PM",
    date: "07 april 2022",
    amount: "$678.58",
    amountStatus: "send",
    status: "Send Fund"
  },
  {
    id: 5,
    name: "kalam khan",
    image: "https://i.ibb.co/DbF2r7V/avatar-icon-images-4.png",
    mail: "kalam@example.com",
    time: "01:00 PM",
    date: "09 Mar 2022",
    amount: "$116.58",
    amountStatus: "Received",
    status: "Send Fund"
  },
  {
    id: 6,
    name: "hero khan",
    image: "https://i.ibb.co/DbF2r7V/avatar-icon-images-4.png",
    mail: "hero@example.com",
    time: "12:40 PM",
    date: "29 Mar 2022",
    amount: "$676.58",
    amountStatus: "send",
    status: "Send Fund"
  },
  {
    id: 7,
    name: "uvhi khan",
    image: "https://i.ibb.co/DbF2r7V/avatar-icon-images-4.png",
    mail: "uvhi@example.com",
    time: "04:00 AM",
    date: "16 Mar 2022",
    amount: "$649.58",
    amountStatus: "Received",
    status: "Send Fund"
  },
  {
    id: 8,
    name: "mira khan",
    image: "https://i.ibb.co/DbF2r7V/avatar-icon-images-4.png",
    mail: "mira@example.com",
    time: "09:27 AM",
    date: "26 Mar 2022",
    amount: "$696.58",
    amountStatus: "Send",
    status: "Send Fund"
  },

];

const Transactionfff = () => {
  return (
    <div className="w-full mx-auto pb-16">
      {/* title */}

      <PageTitle title="Transactions"></PageTitle>

      {/* end */}


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
      <div className="body">
        <div class="overflow-x-auto w-full">
          <table class="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th className="text-sm text-slate-500 bg-slate-100 py-8">Name / Business</th>
                <th className="text-sm text-slate-500 bg-slate-100 py-8">Last transfer date</th>
                <th className="text-sm text-slate-500 bg-slate-100 py-8">Last transfer amount</th>
                <th className="text-sm text-slate-500 bg-slate-100 py-8"> Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                transactionData.map(({ id, name, image, mail, time, date, amount, amountStatus, status }) => {
                  return (
                    <tr key={id}>
                      <td>
                        <div class="flex items-center space-x-3">
                          <div class="avatar">
                            <div class="mask mask-squircle w-12 h-12">
                              <img src={image} alt="Avatar" />
                            </div>
                          </div>
                          <div>
                            <div class="font-bold">{name}</div>
                            <div class="text-sm opacity-50">{mail}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <b>{time}</b>
                        <br />
                        <span class="badge badge-ghost badge-sm">{date}</span>
                      </td>
                      <td>
                        <b>{amount}</b>
                        <br />
                        <span>{amountStatus}</span>
                      </td>
                      <th>
                        <button class="btn btn-md hover:bg-slate-200 hover:border-none normal-case text-black font-normal px-10 rounded-2xl bg-slate-100 border-inherit">{status}</button>
                      </th>
                    </tr>
                  );
                })
              }

            </tbody>
            {/* foot */}
            <tfoot>
              <tr>
                <th>Name</th>
                <th>Last Transfer Date</th>
                <th>Last Transfer Amount</th>
                <th>Action</th>
              </tr>
            </tfoot>

          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactionfff;
