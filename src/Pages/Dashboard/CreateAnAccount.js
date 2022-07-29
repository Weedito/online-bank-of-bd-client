import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./CreateAnAccount.css";

const CreateAnAccount = () => {

  const [user, loading, error] = useAuthState(auth);

  

  const legaleNameRef = useRef('');
  const phoneRef = useRef('');
  const nidRef = useRef('');


  const createAccount = e => {
    e.preventDefault();
    const name = legaleNameRef.current.value;
    const phone = phoneRef.current.value;
    const nid = nidRef.current.value;
    const email = user.email;

    

    const accoutnDetails = {
      name: name,
      phone: phone,
      NID: nid,
      AccNo: Math.floor(Math.random() * 10000000000),
      balance: 0,
      email: email,
    }

    fetch('http://localhost:5000/account', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(accoutnDetails)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }

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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                required
                type="number"
                placeholder="Phone Number"
                className="input input-bordered"
                ref={phoneRef}
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
              <input type="date" id="birthday" name="birthday" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-email">Email</span>
              </label>
              <input type="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Country</span>
              </label>
              <input
                type="text"
                placeholder="Country"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Current City</span>
              </label>
              <input
                
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
                
                type="number"
                placeholder="Phone -"
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
                ref={nidRef}
              />
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn bg-green-700"
                value="Create Account"
              />
            </div>
          </form>


        </div>
      </div>
    </div>
  );
};

export default CreateAnAccount;
