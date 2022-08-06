
import { faBriefcase, faCheck, faCheckCircle, faClock, faLocationDot, faMessage, faSpa, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";


const UserAccount = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;

  return (
    <div className="w-full h-full lg:h-full lg:mt-8 bg-slate-100 mb-8">
      <div className="m-20 bg-white p-8 rounded border-2">
        <div className="text-right">
          <button className="btn btn-xs bg-green-50 border-none text-green-700">
            Edit
          </button>
        </div>
        <div className="profile text-left">
          <div class="avatar flex-col lg:flex-row">
            <div class="w-24 rounded align-left m-3">
              <img src="https://placeimg.com/192/192/people" alt="" />
            </div>
            <h3 className="mt-3 d-inline-block">
              <b className="p-4">Amal Clooney </b>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>
                <button className="btn mb-5 btn-sm bg-blue-100 text-green-600 border-none mx-4">
                  Litigation
                </button>
              </span>
              <span>
                <button className="btn btn-sm bg-green-100 text-green-600 border-none mx-4">
                  Real State
                </button>
              </span>
              <span>
                <button className="btn btn-sm bg-amber-100 text-green-600 border-none mx-4">
                  Business
                </button>
              </span>
              <p>
                <span className="mx-4 py-6 text-zinc-300">
                  <FontAwesomeIcon icon={faLocationDot} />{" "}
                  <span>October 24, 2018</span>
                </span>
                <span className="mx-4 text-zinc-300">
                  <FontAwesomeIcon icon={faMessage} className="pr-3" />
                  Johnsmith@gmail.com
                </span>
                <span className="mx-4 text-zinc-300">
                  <FontAwesomeIcon icon={faCheck} className="pr-2" />
                  Licensed for 10 years
                </span>
              </p>
              <p className="ml-4 text-zinc-400 text-sm">
                <span>
                  {" "}
                  Bellevue attorney maxim Lissak's practice focuses on business,
                  real estate and tort litigtion. Mr. Lissak has successfully{" "}
                  <br />
                  represented clients in real estate, commercial and property
                  disputes, Prior to becoming an attoreney Maxim spent over 17{" "}
                  <br />
                  Year in banking. For the last 10 years of his banking career
                  Maxim spent as VP in commercial lending Read More...
                </span>
              </p>
            </h3>
          </div>
        </div>

        <div className="my-20">
          <div className="details flex lg:flex-row flex-col justify-around">
            <div className="w-18 d-flex flex">
              <b className="bg-blue-100 px-5 py-4 mr-2 rounded-full text-blue-700">
                %
              </b>
              <div>
                <span className="font-bold">100%</span>
                <br />
                <span>Job Success</span>
              </div>
            </div>
            <div className="w-18 d-flex flex">
              <b className="bg-yellow-100 px-6 py-4 mr-2 rounded-full text-yellow-700">
                $
              </b>
              <div>
                <span className="font-bold">$100k+</span>
                <br />
                <span>Total Earned</span>
              </div>
            </div>
            <div className="w-18 d-flex flex">
              <b className="bg-red-100 pl-5 pr-2 py-4 mr-2 rounded-full text-red-700">
                <FontAwesomeIcon icon={faBriefcase} className="pr-3" />
              </b>
              <div>
                <span className="font-bold">450</span>
                <br />
                <span>Jobs</span>
              </div>
            </div>
            <div className="w-18 d-flex flex">
              <b className="bg-green-100 pl-5 pr-2 py-4 mr-2 rounded-full text-green-700">
                <FontAwesomeIcon icon={faClock} className="pr-3" />
              </b>
              <div>
                <span className="font-bold">4500</span>
                <br />
                <span>Hours Worked</span>
              </div>
            </div>
            <div className="w-18 d-flex flex">
              <b className="bg-violet-100 pl-5 pr-2 py-4 mr-2 rounded-full text-violet-700">
                <FontAwesomeIcon icon={faSpa} className="pr-3" />
              </b>
              <div>
                <span className="font-bold">Specializes in</span>
                <br />
                <span>Real Estate</span>
              </div>
            </div>
          </div>
        </div>
        <div className="chart px-20">
          <h2 className="text-start text-2xl">PRACTICE AREAS</h2>


        </div>
      </div>
    </div>
  );
};

export default UserAccount;
