import {
  faArrowLeftLong,
  faArrowRightLong,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
// import 'date-fns';
import { useState } from "react";
import { useCountries } from "./useCountries";

const MoneyConverter = () => {
  const countries = useCountries();


  const [leftCurrency, setLeftCurrency] = useState(countries[0] ?? "");
  const [rightCurrency, setRightCurrency] = useState(countries[0] ?? "");

  const [leftValue, setLeftValue] = useState("");
  const [convertedRate, setConvertedRate] = useState("");

  const convert = () => {
    const parsed = parseInt(leftValue) ?? 0;

    const leftRate = countries[leftCurrency] ?? 0;
    const rightRate = countries[rightCurrency] ?? 0;

    const EUR = parsed / leftRate;

    setConvertedRate(EUR * rightRate ?? "0");
  };

  useEffect(() => {
    convert();
  }, [leftCurrency, rightCurrency, leftValue]);

  return (
    <div className="container mx-auto my-14 lg:w-3/6">
      <div className="title">
        <h6 className="text-slate-500 tracking-widest">
          ONLINE BANK BD CURRENCY CONVERTER
        </h6>
        <h1 className="font-bold text-4xl mt-3">1 Bitcoin to US Dollar</h1>
      </div>

      <div class="card bg-base-100 shadow-xl mt-8">
        <div class="card-body">
          <div className="select-input lg:flex ml-6">
            <select
              onChange={({ target }) => setLeftCurrency(target.value)}
              value={leftCurrency}
              autoComplete="off"
              class="select select-bordered select-lg w-full max-w-sm mr-20 mb-4 lg:mb-0 text-gray-500"
            >
              {Object.keys(countries).map((value, index) => (
                <option key={index} value={value}>
                  {value}
                </option>
              ))}
            </select>
            <select
              onChange={({ target }) => setRightCurrency(target.value)}
              value={rightCurrency}
              autoComplete="off"
              class="select select-bordered select-lg w-full max-w-sm text-gray-500"
            >
              {Object.keys(countries).map((value, index) => (
                <option key={index} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>

          <div className="form-input value-input lg:flex mx-auto lg:ml-6 mt-3">
            <input
              type="number"
              onChange={({ target }) => setLeftValue(target.value)}
              value={leftValue}
              className="select bg-gray-100 border-x-0 border-t-0 border-b-1 border-black pointer-border-none rounded-none select-lg w-full max-w-sm"
            />
            <div className="left-arrow mt-2 ml-4">
              <FontAwesomeIcon
                icon={faArrowLeftLong}
                className="text-green-600 text-2xl"
              />
            </div>
            <div className="right-arrow mb-8 mr-4">
              <FontAwesomeIcon
                icon={faArrowRightLong}
                className="text-green-600 text-2xl"
              />
            </div>
            <input
              type="number"
              disabled
              value={convertedRate}
              className="select bg-gray-100 border-x-0 border-t-0 border-b-1 border-black rounded-none select-lg w-full max-w-sm"
            />
          </div>

          {/* ----------------------- */}
          <div className="flex justify-between">
            <div className="leftBtn ml-2 mt-2">
              {["BTC", "AED", "GBP", "USD"].map((currency, i) => {
                return (
                  <button
                    key={i}
                    onClick={() => setLeftCurrency(currency)}
                    class="btn ml-4 btn-xs hover:bg-gray-100 px-5 pb-8 pt-1 rounded-3xl bg-white text-black border-none text-lg font-thin "
                  >
                    {currency}
                  </button>
                );
              })}
            </div>
            <div className="leftBtn mx-auto ml-28 mt-2">
              {["BDT", "CLP", "GBP", "ETH"].map((currency, i) => {
                return (
                  <button
                    key={i}
                    onClick={() => setRightCurrency(currency)}
                    class="btn ml-4 btn-xs hover:bg-gray-100 px-5 pb-8 pt-1 rounded-3xl bg-white text-black border-none text-lg font-thin "
                  >
                    {currency}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="date-and-bank-rate lg:flex justify-between mx-6 mb-6 mt-7">
            <div className="date-picker flex">
              <span className="text-lg mr-3 mt-2">Date </span>
              <input
                className="border-gray-300 w-full px-8 py-3 rounded-md hover:border-black"
                type="date"
                name="date"
                id="date"
              />
            </div>

            <div className="preview-bank-rate flex mt-6 lg:mt-0">
              <div className="bank-rate mt-6 lg:mt-0">
                <span className="text-lg mr-4">Preview interbank rate</span>
                <select
                  name=""
                  id=""
                  className="w-28 border-gray-300 px-7 py-3 rounded-md hover:border-black"
                >
                  <option value="1">+/- 0% </option>
                  <option value="2">+/- 1% </option>
                  <option value="3">+/- 2% (Typical ATM rate)</option>
                  <option value="4">+/- 3% (Typical Credit Card rate)</option>
                  <option value="5">+/- 4% </option>
                  <option value="6">+/- 5% (Typical Kiosk rate)</option>
                </select>
              </div>
              <div className="question-symbol lg:mt-3 mt-16">
                <span className="ml-3 px-2 bg-slate-800 hover:bg-sky-500 text-white text-lg rounded-full">
                  ?
                </span>
              </div>
            </div>
          </div>

          <p className="mx-6 mt-2 flex justify-between">
            <a href="" className="text-lg text-blue-600 underline">
              Hide Advanced Currency Data
            </a>{" "}
            <span>
              <FontAwesomeIcon
                className="text-xl mr-4 text-slate-600"
                icon={faPrint}
              />
              <a href="" className="text-blue-500 underline text-lg">
                Print
              </a>
            </span>
          </p>
          <small className="mx-6 mt-6 text-xs text-gray-500">
            ONLINE BANK BD's currency calculator tools use ONLINE BANK BD Rates{" "}
            <sup>TM</sup>, the touchstone FX rates compiled from leading market
            data contributors.
          </small>
        </div>
      </div>
    </div>
  );
};

export default MoneyConverter;
