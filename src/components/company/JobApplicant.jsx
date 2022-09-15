import React from "react";
import "../company/styles/jobapplicant.css";

function JobApplicant() {
  return (
    <>
      <div className="jobapplicant-main-content1">
        <h2 class="font-medium leading-tight text-4xl mt-0  text-black-600 jobapplicant-title2">
          JOB APPLICANTS
        </h2>
        <div className="myjobpost-information-header">
          <label
            for="first_name"
            class="block  text-large font-medium text-gray-900 dark:text-gray-300 jobapplicant-title1"
          >
            Candidates Requesting Approval:
          </label>
        </div>

        <div className="jobapplicant-main-form">
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

              <div className="jobapplicant-username">
                <label
                  for="first_name"
                  class="block  text-sm font-medium text-gray-900 dark:text-gray-300 applicant-username-block"
                >
                  Username
                </label>
              </div>
            </div>

            <div className="jobapplicant-years-qualification">
              <div className="jobapplicant-qualification">
                <div className="jobapplicant-year">
                  <label
                    for="first_name"
                    class="block  text-sm font-medium text-gray-900 dark:text-gray-300 jobapplicant-year-name "
                  >
                    Years of Exprience:
                  </label>

                  <label
                    for="first_name"
                    class="block text-sm font-medium text-gray-900 dark:text-gray-300 jobapplicant-year-no"
                  >
                    5
                  </label>
                </div>

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
                  M.Tech
                </label>

                <div className="jobapplicant-main-button">
                  <div className="jobapplicant-button">
                    <a
                      href="/company/job-insights"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        type="button"
                        class="text-white  font-medium rounded-lg text-sm px-9 py-3 mr-3 jobapplicant-invite-button1"
                      >
                        Approve
                      </button>
                    </a>
                  </div>

                  <div className="jobapplicant-button">
                    <a
                      href="/company/job-insights"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        type="button"
                        class="text-white  font-medium rounded-lg text-sm px-9 py-3 mr-3  jobapplicant-invite-button2"
                      >
                        Disapprove
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="jobapplicant-description">
              <label
                for="first_name"
                class="block  text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </label>
            </div>
          </div>

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

              <div className="jobapplicant-username">
                <label
                  for="first_name"
                  class="block  text-sm font-medium text-gray-900 dark:text-gray-300  applicant-username-block"
                >
                  Username
                </label>
              </div>
            </div>

            <div className="jobapplicant-years-qualification">
              <div className="jobapplicant-qualification">
                <div className="jobapplicant-year">
                  <label
                    for="first_name"
                    class="block  text-sm font-medium text-gray-900 dark:text-gray-300 jobapplicant-year-name"
                  >
                    Years of Exprience:
                  </label>

                  <label
                    for="first_name"
                    class="block text-sm font-medium text-gray-900 dark:text-gray-300 jobapplicant-year-no"
                  >
                    5
                  </label>
                </div>

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
                  M.Tech
                </label>

                <div className="jobapplicant-main-button">
                  <div className="jobapplicant-button">
                    <a
                      href="/company/job-insights"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        type="button"
                        class="text-white   font-medium rounded-lg text-sm px-9 py-3 mr-3 mb-3   jobapplicant-invite-button1"
                      >
                        Approve
                      </button>
                    </a>
                  </div>

                  <div className="jobapplicant-button">
                    <a
                      href="/company/job-insights"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        type="button"
                        class="text-white  font-medium rounded-lg text-sm px-9 py-3 mr-3 mb-3   jobapplicant-invite-button2"
                      >
                        Disapprove
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="jobapplicant-description">
              <label
                for="first_name"
                class="block  text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </label>
            </div>
          </div>

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

              <div className="jobapplicant-username">
                <label
                  for="first_name"
                  class="block  text-sm font-medium text-gray-900 dark:text-gray-300  applicant-username-block"
                >
                  Username
                </label>
              </div>
            </div>

            <div className="jobapplicant-years-qualification">
              <div className="jobapplicant-qualification">
                <div className="jobapplicant-year">
                  <label
                    for="first_name"
                    class="block  text-sm font-medium text-gray-900 dark:text-gray-300 jobapplicant-year-name"
                  >
                    Years of Exprience:
                  </label>

                  <label
                    for="first_name"
                    class="block text-sm font-medium text-gray-900 dark:text-gray-300 jobapplicant-year-no"
                  >
                    5
                  </label>
                </div>

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
                  M.Tech
                </label>

                <div className="jobapplicant-main-button">
                  <div className="jobapplicant-button">
                    <a
                      href="/company/job-insights"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        type="button"
                        class="text-white  font-medium rounded-lg text-sm px-9 py-3 mr-3 mb-3  jobapplicant-invite-button1"
                      >
                        Approve
                      </button>
                    </a>
                  </div>

                  <div className="jobapplicant-button">
                    <a
                      href="/company/job-insights"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        type="button"
                        class="text-white  font-medium rounded-lg text-sm px-9 py-3 mr-3 mb-3  jobapplicant-invite-button2"
                      >
                        Disapprove
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="jobapplicant-description">
              <label
                for="first_name"
                class="block  text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </label>
            </div>
          </div>
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

              <div className="jobapplicant-username">
                <label
                  for="first_name"
                  class="block  text-sm font-medium text-gray-900 dark:text-gray-300  applicant-username-block"
                >
                  Username
                </label>
              </div>
            </div>

            <div className="jobapplicant-years-qualification">
              <div className="jobapplicant-qualification">
                <div className="jobapplicant-year">
                  <label
                    for="first_name"
                    class="block  text-sm font-medium text-gray-900 dark:text-gray-300 jobapplicant-year-name"
                  >
                    Years of Exprience:
                  </label>

                  <label
                    for="first_name"
                    class="block text-sm font-medium text-gray-900 dark:text-gray-300 jobapplicant-year-no"
                  >
                    5
                  </label>
                </div>

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
                  M.Tech
                </label>

                <div className="jobapplicant-main-button">
                  <div className="jobapplicant-button">
                    <a
                      href="/company/job-insights"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        type="button"
                        class="text-white  font-medium rounded-lg text-sm px-9 py-3 mr-3  jobapplicant-invite-button1"
                      >
                        Approve
                      </button>
                    </a>
                  </div>

                  <div className="jobapplicant-button">
                    <a
                      href="/company/job-insights"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        type="button"
                        class="text-white  font-medium rounded-lg text-sm px-9 py-3 mr-3 jobapplicant-invite-button2"
                      >
                        Disapprove
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="jobapplicant-description">
              <label
                for="first_name"
                class="block  text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------table2------------------------------------------------------- */}
      <div className="jobapplicant-main-content1">
        <div className="myjobpost-information-header">
          <label
            for="first_name"
            class="block  text-large font-medium text-gray-900 dark:text-gray-300 jobapplicant-title1"
          >
            Candidates Who Are Approved:
          </label>
        </div>
        <div className="jobapplicant-main-form">
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

              <div className="jobapplicant-username">
                <label
                  for="first_name"
                  class="block  text-sm font-medium text-gray-900 dark:text-gray-300  applicant-username-block"
                >
                  Username
                </label>
              </div>
            </div>

            <div className="jobapplicant-years-qualification">
              <div className="jobapplicant-qualification">
                <div className="jobapplicant-year">
                  <label
                    for="first_name"
                    class="block  text-sm font-medium text-gray-900 dark:text-gray-300 jobapplicant-year-name"
                  >
                    Year of Exprience:
                  </label>

                  <label
                    for="first_name"
                    class="block text-sm font-medium text-gray-900 dark:text-gray-300 jobapplicant-year-no"
                  >
                    5
                  </label>
                </div>

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
                  M.Tech
                </label>

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
            <div className="jobapplicant-description">
              <label
                for="first_name"
                class="block  text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </label>
            </div>
          </div>
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

              <div className="jobapplicant-username">
                <label
                  for="first_name"
                  class="block  text-sm font-medium text-gray-900 dark:text-gray-300  applicant-username-block"
                >
                  Username
                </label>
              </div>
            </div>

            <div className="jobapplicant-years-qualification">
              <div className="jobapplicant-qualification">
                <div className="jobapplicant-year">
                  <label
                    for="first_name"
                    class="block  text-sm font-medium text-gray-900 dark:text-gray-300 jobapplicant-year-name"
                  >
                    Years of Exprience:
                  </label>

                  <label
                    for="first_name"
                    class="block text-sm font-medium text-gray-900 dark:text-gray-300 jobapplicant-year-no"
                  >
                    5
                  </label>
                </div>

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
                  M.Tech
                </label>

                <div className="jobapplicant-main-button">
                  <div className="jobapplicant-button">
                    <button
                      type="button"
                      class="text-white cursor-not-allowed font-medium rounded-lg text-sm px-9 py-3 mr-3 text-center jobapplicant-approved-button01"
                      disabled=""
                    >
                      Approved
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="jobapplicant-description">
              <label
                for="first_name"
                class="block  text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </label>
            </div>
          </div>
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

              <div className="jobapplicant-username">
                <label
                  for="first_name"
                  class="block  text-sm font-medium text-gray-900 dark:text-gray-300  applicant-username-block"
                >
                  Username
                </label>
              </div>
            </div>

            <div className="jobapplicant-years-qualification">
              <div className="jobapplicant-qualification">
                <div className="jobapplicant-year">
                  <label
                    for="first_name"
                    class="block  text-sm font-medium text-gray-900 dark:text-gray-300 jobapplicant-year-name"
                  >
                    Years of Exprience:
                  </label>

                  <label
                    for="first_name"
                    class="block text-sm font-medium text-gray-900 dark:text-gray-300 jobapplicant-year-no"
                  >
                    5
                  </label>
                </div>

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
                  M.Tech
                </label>

                <div className="jobapplicant-main-button">
                  <div className="jobapplicant-button">
                    <button
                      type="button"
                      class="text-white cursor-not-allowed font-medium rounded-lg text-sm px-9 py-3 mr-3 text-center jobapplicant-approved-button01"
                      disabled=""
                    >
                      Approved
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="jobapplicant-description">
              <label
                for="first_name"
                class="block  text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </label>
            </div>
          </div>
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

              <div className="jobapplicant-username">
                <label
                  for="first_name"
                  class="block  text-sm font-medium text-gray-900 dark:text-gray-300  applicant-username-block"
                >
                  Username
                </label>
              </div>
            </div>

            <div className="jobapplicant-years-qualification">
              <div className="jobapplicant-qualification">
                <div className="jobapplicant-year">
                  <label
                    for="first_name"
                    class="block  text-sm font-medium text-gray-900 dark:text-gray-300 jobapplicant-year-name"
                  >
                    Years of Exprience:
                  </label>

                  <label
                    for="first_name"
                    class="block text-sm font-medium text-gray-900 dark:text-gray-300 jobapplicant-year-no"
                  >
                    5
                  </label>
                </div>

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
                  M.Tech
                </label>

                <div className="jobapplicant-main-button">
                  <div className="jobapplicant-button">
                    <button
                      type="button"
                      class="text-white cursor-not-allowed font-medium rounded-lg text-sm px-9 py-3 mr-3 text-center jobapplicant-approved-button01"
                      disabled=""
                    >
                      Approved
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="jobapplicant-description">
              <label
                for="first_name"
                class="block  text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default JobApplicant;
