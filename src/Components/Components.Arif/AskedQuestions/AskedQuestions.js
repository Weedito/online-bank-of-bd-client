import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { QuestionsData } from "../../Components.Arif/Data";

const AskedQuestions = () => {
  return (
    <div className="">
      <div className="title">
        <h3 className="text-blue-800 text-3xl text-center mt-5 font-bold">
          Frequently Asked Questions
        </h3>
        <b className="text-center text-blue-900">
          <h1 className="font-bold text-6xl mt-6">If you got questions we</h1>
          <h1 className="font-bold text-6xl">have answer</h1>
        </b>
        <p className="my-8 text-center text-2xl text-blue-900">
          We have a list of frequently asked questions about us
        </p>
      </div>
      {/* ----------------------------------- */}
      <div className="collapse-items">
        <div className="w-full md:w-4/5 mx-auto py-10">
          <div
            className="accordion grid gap-4 grid-cols-1 lg:grid-cols-2"
            id="accordionExample"
          >
            {QuestionsData.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="accordion-item mb-4 bg-white border border-gray-200"
                >
                  <h2 className="accordion-header mb-0" id="headingOne">
                    <button
                      className=" accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left  bg-white border-0 transition focus:outline-none marker:"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${item?.index}`}
                      aria-expanded="true"
                      aria-controls={item?.index}
                    >
                      <span className="text-green-700 font-bold">
                        <span className="font-bold text-md">
                          <FontAwesomeIcon icon={faPlus} />
                        </span>
                        {item?.question}
                      </span>
                    </button>
                  </h2>
                  <div
                    id={item?.index}
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body py-4 px-5 flex justify-around items-center">
                      <div className="w-full">
                        <p className="text-lg text-left">{item.ans}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ---------------------------- */}

        
      </div>
    </div>
  );
};

export default AskedQuestions;
