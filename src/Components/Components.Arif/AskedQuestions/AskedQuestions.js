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
      {/* --------Frequently asked questions & ans--------- */}
      <div className="grid grid-cols-2 w-4/5 mx-auto gap-8">
        <div className="w-full  mx-auto py-10">
          <div
            className="accordion grid gap-4 grid-cols-1"
            id="accordionExample"
          >
            {QuestionsData.slice(0, 5).map(({ ans, index, question }) => {
              return (
                <div className="accordion-item ">
                  <h2 className="accordion-header mb-0" id={`heading_${index}`}>
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left  bg-white border-0 transition focus:outline-none marker:"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse_${index}`}
                      aria-expanded="false"
                      aria-controls={`collapse_${index}`}
                    >
                      <span className="text-green-700 font-bold">
                        <span className="font-bold text-xl mr-6">
                          <FontAwesomeIcon icon={faPlus} />
                        </span>
                        {question}
                      </span>
                    </button>
                  </h2>
                  <div
                    id={`collapse_${index}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`heading_${index}`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body bg-white text-gray-800 p-2 border-t-0">
                      {ans}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full  mx-auto py-10">
          <div
            className="accordion grid gap-4 grid-cols-1"
            id="accordionExample"
          >
            {QuestionsData.slice(5).map(({ ans, index, question }) => {
              return (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header mb-0" id={`heading_${index}`}>
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left  bg-white border-0 transition focus:outline-none marker:"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse_${index}`}
                      aria-expanded="false"
                      aria-controls={`collapse_${index}`}
                    >
                      <span className="text-green-700 font-bold">
                        <span className="font-bold text-xl mr-6">
                          <FontAwesomeIcon icon={faPlus} />
                        </span>
                        {question}
                      </span>
                    </button>
                  </h2>
                  <div
                    id={`collapse_${index}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`heading_${index}`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body bg-white text-gray-800 p-2 border-t-0">
                      {ans}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AskedQuestions;
