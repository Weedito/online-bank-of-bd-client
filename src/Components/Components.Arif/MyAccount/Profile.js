import {
  faCheckDouble,
  faDeleteLeft,
  faLongArrowRight,
  faStopwatch,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import InputField from "./InputField/InputField";
import "./MyAccount.css";

const Profile = () => {
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
                  <div className="text-right -mt-5 text-slate-400">
                    Rex49484
                  </div>
                </p>
                <p className="accountOpening-date my-6">
                  <div className="text-left">Joined:</div>
                  <div className="text-right -mt-5 text-slate-400">
                    Aug 25,2021
                  </div>
                </p>
                <p className="accountOpening-date my-6">
                  <div className="text-left">Confirm Status:</div>
                  <div className="text-right -mt-5 text-slate-400">80%</div>
                </p>
                <div className="logout-btn text-center">
                  <button className="btn border-slate-200 normal-case text-slate-600 bg-slate-100 btn-ghost w-full rounded-2xl">
                    <FontAwesomeIcon
                      icon={faLongArrowRight}
                      className="mr-4 text-slate-500"
                    />
                    Logout
                  </button>
                </div>
                <div className="accountDelete-btn text-center mt-6">
                  <button className="btn border-slate-200 normal-case text-red-500 bg-slate-100 btn-ghost w-full rounded-2xl">
                    <FontAwesomeIcon
                      icon={faDeleteLeft}
                      className="mr-4 text-red-500"
                    />
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-customize w-full lg:mt-28 mt-10">
          <div class="h-fit bg-base-100 shadow-xl rounded-2xl">
            <div class="card-body tab-content" id="tabs-tabContentFill">
              <div className="profileCustomizeHead md:gap-3 justify-between">
                <ul
                  class="nav nav-tabs flex flex-col md:flex-row  list-none border-b-0 pl-0 mb-4"
                  id="tabs-tabFill"
                  role="tablist"
                >
                  <li
                    class="nav-item flex-auto text-center"
                    role="presentation"
                  >
                    <a
                      href="#tabs-accountFill"
                      class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      active
    "
                      id="tabs-account-tabFill"
                      data-bs-toggle="pill"
                      data-bs-target="#tabs-accountFill"
                      role="tab"
                      aria-controls="tabs-accountFill"
                      aria-selected="true"
                    >
                      <div className="account">
                        <button className="btn normal-case my-4 lg:my-0 border-slate-200 hover:text-white bg-slate-100 hover:bg-indigo-700 px-10 btn-ghost  rounded-2xl">
                          Account
                        </button>
                      </div>
                    </a>
                  </li>
                  <li
                    class="nav-item flex-auto text-center"
                    role="presentation"
                  >
                    <a
                      href="#tabs-securityFill"
                      class="
                      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
    "
                      id="tabs-security-tabFill"
                      data-bs-toggle="pill"
                      data-bs-target="#tabs-securityFill"
                      role="tab"
                      aria-controls="tabs-securityFill"
                      aria-selected="false"
                    >
                      <div className="security">
                        <button className="btn normal-case my-4 lg:my-0 border-slate-200 hover:text-white bg-slate-100 hover:bg-indigo-700 px-10 btn-ghost  rounded-2xl">
                          Security
                        </button>
                      </div>
                    </a>
                  </li>
                  <li
                    class="nav-item flex-auto text-center"
                    role="presentation"
                  >
                    <a
                      href="#tabs-paymentFill"
                      class="
                      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
    "
                      id="tabs-payment-tabFill"
                      data-bs-toggle="pill"
                      data-bs-target="#tabs-paymentFill"
                      role="tab"
                      aria-controls="tabs-paymentFill"
                      aria-selected="false"
                    >
                      <div className="payment-method">
                        <button className="btn normal-case border-slate-200 hover:text-white bg-slate-100 hover:bg-indigo-700 px-10 btn-ghost  rounded-2xl">
                          Payment Methods
                        </button>
                      </div>
                    </a>
                  </li>
                  <li
                    class="nav-item flex-auto text-center"
                    role="presentation"
                  >
                    <a
                      href="#tabs-notificationFill"
                      class="
                      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
    "
                      id="tabs-notification-tabFill"
                      data-bs-toggle="pill"
                      data-bs-target="#tabs-notificationFill"
                      role="tab"
                      aria-controls="tabs-notificationFill"
                      aria-selected="false"
                    >
                      <div className="notification">
                        <button className="btn normal-case my-4 lg:my-0 border-slate-200 hover:text-white bg-slate-100 hover:bg-indigo-700 px-10 btn-ghost  rounded-2xl">
                          Notification
                        </button>
                      </div>
                    </a>
                  </li>

                </ul>

                <div class="tab-content" id="tabs-tabContentFill">
                  <div
                    class="tab-pane fade show active"
                    id="tabs-accountFill"
                    role="tabpanel"
                    aria-labelledby="tabs-account-tabFill"
                  >
                    <div className="profileCustomizeBody">
                      <div className="avatarUpdate mt-8 flex justify-between bg-indigo-50 px-6 py-6 rounded-xl">
                        <td>
                          <div class="flex items-center lg:space-x-3">
                            <div class="avatar">
                              <div class="mask mask-squircle w-12 h-12 rounded-full">
                                <img
                                  src="https://i.ibb.co/J2bCs3B/Profile.jpg"
                                  alt="Avatar"
                                />
                              </div>
                            </div>
                            <div>
                              <div class="font-bold">Your Avatar</div>
                              <div class="text-sm opacity-50">
                                Profile picture size: 400px x 400px
                              </div>
                            </div>
                          </div>
                        </td>

                        <th className="mt-1">
                          <button class="btn btn-md hover:bg-slate-200 normal-case text-black font-normal rounded-lg bg-white border-inherit border-none">
                            Upload new avatar
                          </button>
                        </th>
                      </div>

                      <div className="infoUpdate mt-10">
                        <form>
                          <div className="fullNameField lg:flex gap-8">
                            <div className="w-full mt-5 pr-5">
                              <label>First Name</label>
                              <input
                                type="text"
                                name="firstName"
                                placeholder="John"
                                className="input w-full bg-indigo-50 border-slate-300"
                              />
                            </div>
                            <InputField
                              label="Last Name"
                              name="Dev"
                            ></InputField>
                          </div>
                          <div className="emailField lg:flex gap-8">
                            <InputField
                              label="Email"
                              name="example@gmail.com"
                            ></InputField>
                            <button className="input text-left mt-10 w-full ml-5 border-indigo-700 bg-indigo-50 border-slate-300 text-indigo-700">
                              <FontAwesomeIcon
                                icon={faStopwatch}
                                className="mr-3"
                              />
                              E-mail confirmation in pending
                            </button>
                          </div>

                          <div className="phoneNumberField lg:flex gap-8">
                            <InputField
                              label="Phone"
                              name="+8801303984576"
                            ></InputField>
                            <button className="input text-left mt-10 w-full ml-5 border-green-500 bg-indigo-50 border-slate-300 text-green-500">
                              <FontAwesomeIcon
                                icon={faCheckDouble}
                                className="mr-3"
                              />
                              Phone number confirm
                            </button>
                          </div>

                          <div className="idConfirmation lg:flex gap-8">
                            <InputField
                              label="ID Confirmation documents"
                              name="Not uploaded"
                            ></InputField>
                            <button className="input text-left mt-10 w-full ml-5 border-red-600 bg-indigo-50 border-slate-300 text-red-500">
                              <FontAwesomeIcon
                                icon={faWarning}
                                className="mr-3"
                              />
                              Person not confirmed
                            </button>
                          </div>

                          <div className="address">
                            <InputField
                              label="Address"
                              name="2972 Westheimer Rd. Santa Ana, Illinois 85486"
                            ></InputField>
                          </div>

                          <div className="submit mt-10 ">
                            <button className="btn normal-case border-slate-200 text-white bg-indigo-700 px-14 btn-ghost rounded-2xl hover:text-black hover:bg-indigo-400">
                              <input type="submit" value="Update Profile" />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="tabs-securityFill"
                    role="tabpanel"
                    aria-labelledby="tabs-security-tabFill"
                  >
                    <h1 className="text-center">Security tab is Empty</h1>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="tabs-paymentFill"
                    role="tabpanel"
                    aria-labelledby="tabs-payment-tabFill"
                  >
                    <h1 className="text-center">Payment tab is Empty</h1>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="tabs-notificationFill"
                    role="tabpanel"
                    aria-labelledby="tabs-notification-tabFill"
                  >
                    <h1 className="text-center">Notification tab is Empty</h1>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
