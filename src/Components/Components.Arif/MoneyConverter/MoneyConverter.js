import { faArrowLeftLong, faArrowRightLong, faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import 'date-fns';




const MoneyConverter = () => {
   
  return (
    <div className="container mx-auto my-14 lg:w-3/6">
      <div className="title">
        <h6 className="text-slate-500 tracking-widest">OANDA CURRENCY CONVERTER</h6>
        <h1 className="font-bold text-4xl mt-3">1 Bitcoin to US Dollar</h1>
      </div>

      <div class="card bg-base-100 shadow-xl mt-8">
        <div class="card-body">
          <div className="select-input lg:flex ml-6">
            <select class="select select-bordered select-lg w-full max-w-sm mr-20 mb-4 lg:mb-0 text-gray-500">
              <option disabled selected>
                Pick your favorite country
              </option>
             <option><b>GBP</b></option>
             <option><b>AED</b></option>
             <option><b>SAR</b></option>
             <option><b>USD</b></option>
             <option><b>DTC</b></option>
             <option><b>JPY</b></option>
             <option><b>AFL</b></option>
             <option><b>ALL</b></option>
             <option><b>AMD</b></option>
             <option><b>ANG</b></option>
             <option><b>AOA</b></option>
             <option><b>ARS</b></option>
             <option><b>AUD</b></option>
             <option><b>AWG</b></option>
             <option><b>AZN</b></option>
             <option><b>BAM</b></option>
             <option><b>BBD</b></option>
             <option><b>BDT</b></option>
             <option><b>BGN</b></option>
             <option><b>CLP</b></option>
             <option><b>CAD</b></option>
             <option><b>ANK</b></option>
             <option><b>VUV</b></option>
             <option><b>TTD</b></option>
             <option><b>XAU</b></option>
             
            </select>
            <select class="select select-bordered select-lg w-full max-w-sm text-gray-500">
            <option disabled selected>
                Pick your favorite country
              </option>
             <option><b>BDT</b></option>
             <option><b>AED</b></option>
             <option><b>SAR</b></option>
             <option><b>USD</b></option>
             <option><b>DTC</b></option>
             <option><b>JPY</b></option>
             <option><b>AFL</b></option>
             <option><b>ALL</b></option>
             <option><b>AMD</b></option>
             <option><b>ANG</b></option>
             <option><b>AOA</b></option>
             <option><b>ARS</b></option>
             <option><b>AUD</b></option>
             <option><b>AWG</b></option>
             <option><b>AZN</b></option>
             <option><b>BAM</b></option>
             <option><b>BBD</b></option>
             <option><b>GBT</b></option>
             <option><b>BGN</b></option>
             <option><b>CLP</b></option>
             <option><b>CAD</b></option>
             <option><b>ANK</b></option>
             <option><b>VUV</b></option>
             <option><b>TTD</b></option>
             <option><b>XAU</b></option>
            </select>
          </div>

        <div className="value-input lg:flex mx-auto lg:ml-6 mt-3">
            <input type="number" className="select bg-gray-100 border-x-0 border-t-0 border-b-1 border-black pointer-border-none rounded-none select-lg w-full max-w-sm"/>
            <div className="left-arrow mt-2 ml-4">
            <FontAwesomeIcon icon={faArrowLeftLong} className="text-green-600 text-2xl"/>
            </div>
            <div className="right-arrow mb-8 mr-4">
            <FontAwesomeIcon icon={faArrowRightLong} className="text-green-600 text-2xl"/>
            </div>
            <input type="number" className="select bg-gray-100 border-x-0 border-t-0 border-b-1 border-black rounded-none select-lg w-full max-w-sm"/>
        </div>
        <div className="textValue">
            <h1>
              <div className="leftBtn ml-2 mt-2">
                <button class="btn ml-4 btn-xs hover:bg-gray-100 px-5 pb-8 pt-1 rounded-3xl bg-white text-black border-none text-lg font-thin text-gray-500">BTC</button>
                <button class="btn btn-xs hover:bg-gray-100 px-5 pb-8 pt-1 rounded-3xl bg-white text-black border-none text-lg font-thin text-gray-500">AED</button>
                <button class="btn btn-xs hover:bg-gray-100 px-5 pb-8 pt-1 rounded-3xl bg-white text-black border-none text-lg font-thin text-gray-500">GBP</button>
                <button class="btn btn-xs hover:bg-gray-100 px-5 pb-8 pt-1 rounded-3xl bg-white text-black border-none text-lg font-thin text-gray-500">BDT</button>
              </div>
                
            </h1>
            <h1 className="lg:ml-24">
              <div className="rightBtn lg:ml-96 -mt-9">
                <button class="btn ml-3 btn-xs hover:bg-gray-100 px-5 pb-8 pt-1 rounded-3xl bg-white text-black border-none text-lg font-thin text-gray-500">USD</button>
                <button class="btn btn-xs hover:bg-gray-100 px-5 pb-8 pt-1 rounded-3xl bg-white text-black border-none text-lg font-thin text-gray-500">BDT</button>
                <button class="btn btn-xs hover:bg-gray-100 px-5 pb-8 pt-1 rounded-3xl bg-white text-black border-none text-lg font-thin text-gray-500">GBP</button>
                <button class="btn btn-xs hover:bg-gray-100 px-5 pb-8 pt-1 rounded-3xl bg-white text-black border-none text-lg font-thin text-gray-500">ETH</button>
              </div>
            </h1>
        </div>

        <div className="date-and-bank-rate lg:flex justify-between mx-6 mb-6 mt-7">
         <div className="date-picker flex">
         <span className="text-lg mr-3 mt-2">Date </span><input className="border-gray-300 w-full px-8 py-3 rounded-md hover:border-black" type="date" name="date" id="date" />
         </div>
         
         <div className="preview-bank-rate flex mt-6 lg:mt-0">
         <div className="bank-rate mt-6 lg:mt-0">
         <span className="text-lg mr-4">Preview interbank rate</span>
         <select name="" id="" className="w-28 border-gray-300 px-7 py-3 rounded-md hover:border-black">
         <option value="1">+/- 0% </option>
         <option value="2">+/- 1% </option>
         <option value="3">+/- 2%  (Typical ATM rate)</option>
         <option value="4">+/- 3%  (Typical Credit Card rate)</option>
         <option value="5">+/- 4% </option>
         <option value="6">+/- 5%  (Typical Kiosk rate)</option>
         </select>
         </div>
         <div className="question-symbol lg:mt-3 mt-16">
          <span className="ml-3 px-2 bg-slate-800 hover:bg-sky-500 text-white text-lg rounded-full">?</span> 
          </div>
         </div>
        </div>

        <p className="mx-6 mt-2 flex justify-between"><a href="" className="text-lg text-blue-600 underline">Hide Advanced Currency Data</a> <span><FontAwesomeIcon className="text-xl mr-4 text-slate-600" icon={faPrint} /><a href="" className="text-blue-500 underline text-lg">Print</a></span></p>
        <small className="mx-6 mt-6 text-xs text-gray-500">ONLINE BANK BD's currency calculator tools use ONLINE BANK BD Rates <sup>TM</sup>, the touchstone FX rates compiled from leading market data contributors.</small>
        </div>
      </div>
    </div>
  );
};

export default MoneyConverter;
