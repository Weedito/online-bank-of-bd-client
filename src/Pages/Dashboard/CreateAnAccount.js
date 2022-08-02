import React, { useEffect, useState } from "react";

const CreateAnAccount = () => {
  const [country, setCountry] = useState([]);
  useEffect(() =>{
    fetch("https://restcountries.com/v2/all")
  .then(res => res.json())
  .then(data => setCountry(data));
  }, []);
  console.log(country)
  return (
    <div className="h-full mt-96 lg:mt-12 w-full">
      <div className="card w-1/2 bg-green-50 shadow-2xl lg:my-8 mx-auto h-full lg:h-auto py-10 lg:py-0">
        <div className="card-body">
          <h1 className="text-green-400 text-2xl font-bold">
            Create An Bank Account
          </h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              required
              type="text"
              placeholder="Enter your First Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              required
              type="text"
              placeholder="Enter your Last Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control text-left">
            <span class="text-gray-700">Gender</span>
            <div class="mt-2">
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  class="form-radio"
                  name="accountType"
                  value="personal"
                />
                <span class="ml-2">Male</span>
              </label>
              <label class="inline-flex items-center ml-6">
                <input
                  type="radio"
                  class="form-radio"
                  name="accountType"
                  value="busines"
                />
                <span class="ml-2">Female</span>
              </label>
            </div>
            <label className="mt-4" for="birthday">Birthday</label>
            <input required type="date" id="birthday" name="birthday" className="input input-bordered"/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-email">Email</span>
            </label>
            <input required type="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Country</span>
            </label>
            <select className="input input-bordered">
              {
                country.map(c => <option>{c.name}</option>)
              }
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Current City</span>
            </label>
            <input
              required
              type="text"
              placeholder="City"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-number">Your phone</span>
            </label>
            <input
              required
              type="number"
              placeholder="Phone"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-number">Your NID Number</span>
            </label>
            <input
              required
              type="number"
              placeholder="NID Number"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              className="btn bg-green-700"
              value="Create Account"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAnAccount;
