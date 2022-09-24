import React, { useEffect, useState } from "react";
import "../company/styles/jobapplicant.css";
import { connect } from "@tableland/sdk";
import axios from "axios";

function JobApplicant() {
  const [approval, setApproval] = useState(true);
  const [approved, setApproved] = useState();
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [loading, setLoading] = useState(false);
  const showApplicants = async () => {
    const currentLocation = window.location.href;
    const param = currentLocation.split("=");
    const name = "application_details_table_80001_2806";
    const table = "candidate_table_80001_1648";
    const table1 = "education_table_80001_2259";
    const tableland = await connect({
      network: "testnet",
      chain: "polygon-mumbai",
    });
    const readRes = await tableland.read(
      `SELECT candidate_id FROM ${name} where job_id=${param[1]} and status=0`
    );
    for (let i = 0; i < readRes["rows"].length; i++) {
      const response = await tableland.read(
        `SELECT * FROM ${table} where candidate_id=${readRes["rows"][i][0]}`
      );
      let login_id = response["rows"][0][1];
      const response1 = await tableland.read(
        `SELECT degree FROM ${table1} where login_id=${login_id}`
      );
      console.log(response1);
      data.push([
        response["rows"][0][4],
        response["rows"][0][2],
        response1["rows"][0][0],
        response["rows"][0][3],
        param[1],
        readRes["rows"][i][0],
      ]);
    }
    setData(data);
    //
    const res = await tableland.read(
      `SELECT candidate_id FROM ${name} where job_id=${param[1]} and status=1`
    );
    for (let i = 0; i < res["rows"].length; i++) {
      const response = await tableland.read(
        `SELECT * FROM ${table} where candidate_id=${res["rows"][i][0]}`
      );
      console.log(response);
      let login_id = response["rows"][0][1];
      const response1 = await tableland.read(
        `SELECT degree FROM ${table1} where login_id=${login_id}`
      );
      data2.push([
        response["rows"][0][4],
        response["rows"][0][2],
        response1["rows"][0][0],
        response["rows"][0][3],
      ]);
    }
    setData2(data2);
    console.log(res);
    setLoading(true);
  };
  const updateApproveDisapprove = async (job_id, candidate_id, ans) => {
    const tableland = await connect({
      network: "testnet",
      chain: "polygon-mumbai",
    });
    const table = "application_details_table_80001_2806";
    const readRes = await tableland.read(
      `SELECT application_id FROM ${table} where job_id=${job_id} and candidate_id=${candidate_id}`
    );
    var data = JSON.stringify({
      application_id: readRes["rows"][0][0],
      status: ans,
    });
    var config = {
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/updateApproveDisapprove`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    showApplicants();
  }, []);

  if (loading) {
    return (
      <>
        <div className="jobapplicant-main-content1">
          <h2 class="font-medium leading-tight text-4xl mt-0  text-black-600 jobapplicant-title2">
            JOB APPLICANTS
          </h2>
          <div className="jobapplicant-front-buttons">
            <button
              onClick={() => {
                setApproval(true);
                setApproved(false);
              }}
              for="first_name"
              className={
                approval
                  ? "block text-large font-medium text-gray-900 dark:text-gray-300 purchased-name pc-tab-button"
                  : "block text-large font-medium text-gray-900 dark:text-gray-300 purchased-name"
              }
              value={approval}
            >
              Approval
            </button>
            ​
            <button
              onClick={() => {
                setApproved(true);
                setApproval(false);
              }}
              for="first_name"
              className={
                approved
                  ? "block text-large font-medium text-gray-900 dark:text-gray-300 created-name pc-tab-button"
                  : "block text-large font-medium text-gray-900 dark:text-gray-300 created-name"
              }
              value={approved}
            >
              Approved
            </button>
          </div>
          {approval === true ? (
            <div className="jobapplicant-main-form">
              {data.map((inde) => {
                return (
                  <div className="jobapplicant-information">
                    <div className="jobapplicant-user-icon">
                      <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 ">
                        <svg
                          class=""
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
                      ​
                      <div className="jobapplicant-username">
                        <label
                          for="first_name"
                          class="block  text-sm font-medium text-gray-900 dark:text-gray-300 applicant-username-block"
                        >
                          {inde[1]}
                        </label>
                      </div>
                    </div>
                    ​
                    <div className="jobapplicant-years-qualification">
                      <div className="jobapplicant-section1">
                        <div className="jobapplicant-qualification">
                          <div className="jobapplicant-year">
                            <label
                              for="first_name"
                              class="block  text-sm font-medium text-gray-900 dark:text-gray-300 jobapplicant-year-name "
                            >
                              Years of Exprience:
                            </label>
                            ​
                            <label
                              for="first_name"
                              class="block text-sm font-medium text-gray-900 dark:text-gray-300 jobapplicant-year-no"
                            >
                              5
                            </label>
                          </div>
                          ​
                          <label
                            for="first_name"
                            class="block text-sm font-medium text-gray-900 dark:text-gray-300 jobapplicant-name jobapplicant-qualification-main"
                          >
                            Qualifications:
                          </label>
                          <label
                            for="first_name"
                            class="block  text-sm font-medium text-gray-900 dark:text-gray-300 jobapplicant-bech jobapplicant-qualification-main"
                          >
                            {inde[2]}
                          </label>
                        </div>
                        <div className="jobapplicant-description">
                          <label
                            for="first_name"
                            class="block  text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            {inde[3]}
                          </label>
                        </div>
                      </div>
                      ​
                      <div className="jobapplicant-main-button">
                        <div className="jobapplicant-button">
                          <button
                            type="button"
                            class="text-white  font-medium rounded-lg text-sm px-9 py-3 mr-3 jobapplicant-invite-button1"
                            onClick={() => {
                              updateApproveDisapprove(inde[4], inde[5], 1);
                            }}
                          >
                            Approve
                          </button>
                        </div>
                        ​
                        <div className="jobapplicant-button">
                          <button
                            type="button"
                            class="text-white  font-medium rounded-lg text-sm px-9 py-3 mr-3  jobapplicant-invite-button2"
                            onClick={() => {
                              updateApproveDisapprove(inde[4], inde[5], 0);
                            }}
                          >
                            Disapprove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <>
              {/* -------------------table2------------------------------------------------------- */}
              <div className="jobapplicant-main-content1">
                <div className="jobapplicant-main-form">
                  {data2.map((inde) => {
                    return (
                      <div className="jobapplicant-information">
                        <div className="jobapplicant-user-icon">
                          <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 ">
                            <svg
                              class=""
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
                          ​
                          <div className="jobapplicant-username">
                            <label
                              for="first_name"
                              class="block  text-sm font-medium text-gray-900 dark:text-gray-300  applicant-username-block"
                            >
                              {inde[1]}
                            </label>
                          </div>
                        </div>
                        ​
                        <div className="jobapplicant-years-qualification">
                          <div className="jobapplicant-qualification">
                            <div className="jobapplicant-year">
                              <label
                                for="first_name"
                                class="block  text-sm font-medium text-gray-900 dark:text-gray-300 jobapplicant-year-name"
                              >
                                Year of Exprience:
                              </label>
                              ​
                              <label
                                for="first_name"
                                class="block text-sm font-medium text-gray-900 dark:text-gray-300 jobapplicant-year-no"
                              >
                                5
                              </label>
                            </div>
                            ​
                            <label
                              for="first_name"
                              class="block text-sm font-medium text-gray-900 dark:text-gray-300 jobapplicant-name-section2 jobapplicant-qualification-main"
                            >
                              Qualifications:
                            </label>
                            <label
                              for="first_name"
                              class="block  text-sm font-medium text-gray-900 dark:text-gray-300 jobapplicant-bech jobapplicant-qualification-main"
                            >
                              {inde[2]}{" "}
                            </label>
                            ​
                            <div className="jobapplicant-main-button">
                              <div className="jobapplicant-button">
                                <button
                                  type="button"
                                  class="text-white  cursor-not-allowed font-medium rounded-lg text-sm px-9 py-3 mr-3 text-center jobapplicant-approved-button01"
                                  disabled=""
                                >
                                  Approved
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="jobapplicant-description-section2">
                          <label
                            for="first_name"
                            class="block  text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            {inde[3]}
                          </label>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}
export default JobApplicant;
