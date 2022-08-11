/* 
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const UpdateProfile = () => {
  return (
    <div>
      <div className="card max:w-7xl bg-base-200 shadow-2xl mx-auto">
        <div className="card-body">
          <h1 className="text-green-400 text-2xl font-bold">Update Profile</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-email">Email</span>
            </label>
            <input
              type="email"
              value="Email"
              className="input input-bordered"
            />
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
              placeholder="Phone"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              className="btn bg-green-700"
              value="Update Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
 */