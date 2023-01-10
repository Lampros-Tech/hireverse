import React from "react";
import "../company/styles/jobinsights.css";
import avtar from "../company/styles/companyprofile.png";
import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";

function Jobinsights() {
  //send notification code start

  const Pkey = `0x${process.env.REACT_APP_PK}`;

  const signer = new ethers.Wallet(Pkey);

  const sendNotification = async (receiver) => {
    try {
      const apiResponse = await PushAPI.payloads.sendNotification({
        signer: signer,
        type: 3, // target
        identityType: 2, // direct payload
        notification: {
          title: `Job Interview Scheduled`,
          body: `Hello you Interview is Scheduled for the Job. good luck `,
        },
        payload: {
          title: `[sdk-test] payload title `,
          body: `Congratulation`,
          cta: "https://office.dehitas.xyz/?id=cZJte9SEh",
          img: "",
        },
        recipients: "eip155:5:0x6Ea2D65538C1eAD906bF5F7EdcfEa03B504297ce", // recipient address
        channel: "eip155:5:0x28AECC0D973F486F9Bfd38085f39Da5c9d82a4E5", // your channel address
        env: "staging",
      });

      // apiResponse?.status === 204, if sent successfully!
      console.log("API repsonse: ", apiResponse);
      alert("Notification sent to the candidate");
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  ///send notification code ends
  return (
    <>
      <div className="jobinsights-title">
        <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-black-600">
          JOB INSIGHTS
        </h2>
      </div>
      <div className="jobinsights-main-content">
        <div className="jobinsights-main-information">
          <div className="jobinsights-user-icon">
            <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 ">
              <img
                className="w-10 h-10 rounded-full"
                src={avtar}
                alt="Rounded avatar"
              />
            </div>

            <div className="jobinsights-username">
              <label
                for="first_name"
                className="block text-large font-medium text-gray-900 dark:text-gray-300 jobinsights-name"
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
            <div className="jobinsights-select-date">
              <input
                type="date"
                placeholder="date"
                className="jobinsight-select-date-input"
              />
            </div>

            <div className="jobinsights-button">
              <button
                class="text-white  font-medium rounded-lg text-sm px-3 py-2   jobsights-button-interview"
                onClick={() => {
                  sendNotification(
                    "0x19193e458590f15A0180042E3518634165BADe39"
                  );
                }}
              >
                Schedule Interview
              </button>
            </div>
          </div>
          <div className="jobinsights-user-icon">
            <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 ">
              <img
                className="w-10 h-10 rounded-full"
                src={avtar}
                alt="Rounded avatar"
              />
            </div>

            <div className="jobinsights-username">
              <label
                for="first_name"
                className="block text-large font-medium text-gray-900 dark:text-gray-300 jobinsights-name"
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
            <div className="jobinsights-select-date">
              <input
                type="date"
                placeholder="date"
                className="jobinsight-select-date-input"
              />
            </div>

            <div className="jobinsights-button">
              <button class="text-white  font-medium rounded-lg text-sm px-3 py-2   jobsights-button-interview">
                Schedule Interview
              </button>
            </div>
          </div>
          <div className="jobinsights-user-icon">
            <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 ">
              <img
                class="w-10 h-10 rounded-full"
                src={avtar}
                alt="Rounded avatar"
              />
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
            <div className="jobinsights-select-date">
              <input
                type="date"
                placeholder="date"
                className="jobinsight-select-date-input"
              />
            </div>

            <div className="jobinsights-button">
              <button class="text-white   font-medium rounded-lg text-sm px-3 py-2  jobsights-button-interview">
                Schedule Interview
              </button>
            </div>
          </div>
          <div className="jobinsights-user-icon">
            <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 ">
              <img
                class="w-10 h-10 rounded-full"
                src={avtar}
                alt="Rounded avatar"
              />
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
            <div className="jobinsights-select-date">
              <input
                type="date"
                placeholder="date"
                className="jobinsight-select-date-input"
              />
            </div>

            <div className="jobinsights-button">
              <button
                type="button"
                class="text-white   font-medium rounded-lg text-sm px-3 py-2  f jobsights-button-interview"
              >
                Schedule Interview
              </button>
            </div>
          </div>
          <div className="jobinsights-user-icon">
            <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 ">
              <img
                class="w-10 h-10 rounded-full"
                src={avtar}
                alt="Rounded avatar"
              />
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
            <div className="jobinsights-select-date">
              <input
                type="date"
                placeholder="date"
                className="jobinsight-select-date-input-btn"
              />
            </div>

            <div className="jobinsights-button">
              <button
                type="button"
                class="text-white  font-medium rounded-lg text-sm px-3 py-2   jobsights-button-interview"
              >
                Schedule Interview
              </button>
            </div>
          </div>
          <div className="jobinsights-user-icon">
            <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 ">
              <img
                class="w-10 h-10 rounded-full"
                src={avtar}
                alt="Rounded avatar"
              />
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
            <div className="jobinsights-select-date">
              <input
                type="date"
                placeholder="date"
                className="jobinsight-select-date-input"
              />
            </div>
            <div className="jobinsights-button">
              <button
                type="button"
                class="text-white  font-medium rounded-lg text-sm px-3 py-2  jobsights-button-interview"
              >
                Schedule Interview
              </button>
            </div>
          </div>
          <div className="jobinsights-user-icon">
            <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 ">
              <img
                class="w-10 h-10 rounded-full"
                src={avtar}
                alt="Rounded avatar"
              />
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
            <div className="jobinsights-select-date">
              <input type="date" className="jobinsight-select-date-input" />
            </div>
            <div className="jobinsights-button">
              <button
                type="button"
                class="text-white font-medium rounded-lg text-sm px-3 py-2   jobsights-button-interview"
              >
                Schedule Interview
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Jobinsights;
