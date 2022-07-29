import React, { useEffect, useState } from "react";
import "./CreateAnAccount.css";

const CreateAnAccount = () => {
  const [country, setCountry] = useState([]);
  useEffect(() =>{
    fetch("https://restcountries.com/v2/all")
  .then(res => res.json())
  .then(data => setCountry(data));
  }, []);
  console.log(country)
  return (
    <div className="h-auto lg:h-auto mt-96 lg:mt-12 w-full">
      <div className="card w-auto bg-green-50 shadow-2xl lg:my-8 mx-auto lg:w-1/2 h-full lg:h-auto py-10 lg:py-0 ">
        <div className="card-body">
          <h1 className="text-green-400 text-2xl font-bold">
            Create An Bank Account
          </h1>

          <form action="" onSubmit={createAccount}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                required
                type="text"
                placeholder="Legal Name"
                className="input input-bordered"
                ref={legaleNameRef}
              />
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
          <form/>
        </div>
      </div>
    </div>
  );
};

export default CreateAnAccount;
