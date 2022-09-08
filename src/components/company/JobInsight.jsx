import React, { useState } from "react";
import "../company/styles/jobinsights.css";

function Jobinsights() {
  const [showCalender, setShowCalender] = useState(false);
  return (
    <>
      <div className="jobinsights-main-content">
        <div className="jobinsights-title">
          <h2 class="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">
            JOB INSIGHTS
          </h2>
        </div>

        <div className="jobinsights-main-information">
          <div className="jobinsights-user-icon">
            <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 ">
              <svg
                className=""
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="jobinsights-username">
              <label
                for="first_name"
                class="block text-large font-medium text-gray-900 dark:text-gray-300 jobinsights-name"
              >
                Username
              </label>
            </div>
            <div className="jobinsights-main-score">
              <div className="jobinsights-score">
                <label
                  for="first_name"
                  class="block text-large font-medium text-gray-900 dark:text-gray-300 jobinsights-score-name"
                >
                  Score:
                </label>
              </div>

              <div className="jobinsights-score">
                <label
                  for="first_name"
                  class="block text-large font-medium text-gray-900 dark:text-gray-300 jobinsights-score-number"
                >
                  10
                </label>
              </div>
            </div>

            <div className="jobinsights-button">
              <button
                onClick={() => {
                  setShowCalender(true);
                }}
                type="button"
                value={showCalender}
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 jobsights-button-interview"
              >
                Schedule Interview
              </button>
            </div>
            {showCalender === true ? (
              <div>
                <input type="date"></input>
              </div>
            ) : null}
          </div>

          <div className="jobinsights-user-icon">
            <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 ">
              <svg
                className=""
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="jobinsights-username">
              <label
                for="first_name"
                class="block text-large font-medium text-gray-900 dark:text-gray-300 jobinsights-name"
              >
                Username
              </label>
            </div>
            <div className="jobinsights-main-score">
              <div className="jobinsights-score">
                <label
                  for="first_name"
                  class="block text-large font-medium text-gray-900 dark:text-gray-300 jobinsights-score-name"
                >
                  Score:
                </label>
              </div>

              <div className="jobinsights-score">
                <label
                  for="first_name"
                  class="block text-large font-medium text-gray-900 dark:text-gray-300 jobinsights-score-number"
                >
                  10
                </label>
              </div>
            </div>

            <div className="jobinsights-button">
              <button
                onClick={() => {
                  setShowCalender(true);
                }}
                type="button"
                value={showCalender}
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 jobsights-button-interview"
              >
                Schedule Interview
              </button>
            </div>
            {showCalender === true ? (
              <div>
                <input type="date"></input>
              </div>
            ) : null}
          </div>

          <div className="jobinsights-user-icon">
            <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 ">
              <svg
                className=""
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="jobinsights-username">
              <label
                for="first_name"
                class="block text-large font-medium text-gray-900 dark:text-gray-300 jobinsights-name"
              >
                Username
              </label>
            </div>
            <div className="jobinsights-main-score">
              <div className="jobinsights-score">
                <label
                  for="first_name"
                  class="block text-large font-medium text-gray-900 dark:text-gray-300 jobinsights-score-name"
                >
                  Score:
                </label>
              </div>

              <div className="jobinsights-score">
                <label
                  for="first_name"
                  class="block text-large font-medium text-gray-900 dark:text-gray-300 jobinsights-score-number"
                >
                  10
                </label>
              </div>
            </div>

            <div className="jobinsights-button">
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 jobsights-button-interview"
              >
                Schedule Interview
              </button>
            </div>
            {showCalender === true ? (
              <div>
                <input type="date"></input>
              </div>
            ) : null}
          </div>

          <div className="jobinsights-user-icon">
            <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 ">
              <svg
                className=""
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="jobinsights-username">
              <label
                for="first_name"
                class="block text-large font-medium text-gray-900 dark:text-gray-300 jobinsights-name"
              >
                Username
              </label>
            </div>
            <div className="jobinsights-main-score">
              <div className="jobinsights-score">
                <label
                  for="first_name"
                  class="block text-large font-medium text-gray-900 dark:text-gray-300 jobinsights-score-name"
                >
                  Score:
                </label>
              </div>

              <div className="jobinsights-score">
                <label
                  for="first_name"
                  class="block text-large font-medium text-gray-900 dark:text-gray-300 jobinsights-score-number"
                >
                  10
                </label>
              </div>
            </div>

            <div className="jobinsights-button">
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 jobsights-button-interview"
              >
                Schedule Interview
              </button>
            </div>
            {showCalender === true ? (
              <div>
                <input type="date"></input>
              </div>
            ) : null}
          </div>

          <div className="jobinsights-user-icon">
            <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 ">
              <svg
                className=""
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="jobinsights-username">
              <label
                for="first_name"
                class="block text-large font-medium text-gray-900 dark:text-gray-300 jobinsights-name"
              >
                Username
              </label>
            </div>
            <div className="jobinsights-main-score">
              <div className="jobinsights-score">
                <label
                  for="first_name"
                  class="block text-large font-medium text-gray-900 dark:text-gray-300 jobinsights-score-name"
                >
                  Score:
                </label>
              </div>

              <div className="jobinsights-score">
                <label
                  for="first_name"
                  class="block text-large font-medium text-gray-900 dark:text-gray-300 jobinsights-score-number"
                >
                  10
                </label>
              </div>
            </div>

            <div className="jobinsights-button">
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 jobsights-button-interview"
              >
                Schedule Interview
              </button>
            </div>
            {showCalender === true ? (
              <div>
                <input type="date"></input>
              </div>
            ) : null}
          </div>

          <div className="jobinsights-user-icon">
            <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 ">
              <svg
                className=""
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="jobinsights-username">
              <label
                for="first_name"
                class="block text-large font-medium text-gray-900 dark:text-gray-300 jobinsights-name"
              >
                Username
              </label>
            </div>
            <div className="jobinsights-main-score">
              <div className="jobinsights-score">
                <label
                  for="first_name"
                  class="block text-large font-medium text-gray-900 dark:text-gray-300 jobinsights-score-name"
                >
                  Score:
                </label>
              </div>

              <div className="jobinsights-score">
                <label
                  for="first_name"
                  class="block text-large font-medium text-gray-900 dark:text-gray-300 jobinsights-score-number"
                >
                  10
                </label>
              </div>
            </div>

            <div className="jobinsights-button">
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 jobsights-button-interview"
              >
                Schedule Interview
              </button>
            </div>
            {showCalender === true ? (
              <div>
                <input type="date"></input>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
export default Jobinsights;