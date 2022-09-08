import React from "react";
import "../company/styles/jobpost.css";

function Jobpost() {
  return (
    <>
      <div className="myjobpost-main-content">
        <div className="myjobpost-title">
          <h2 class="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">
            POSTED JOBS
          </h2>
        </div>

        <div className="myjobpost-main-form">
          <div className="myjobpost-information">
            <div className="jobpost-username">
              <label
                for="first_name"
                class="block mb-2 text-large font-medium text-gray-900 dark:text-gray-300 jobtitle-name"
              >
                Title
              </label>
            </div>

            <div className="myjobpost-years-qualification">
              <div className="jobpost-qualification">
                <div className="jobpost-year">
                  <label
                    for="first_name"
                    class="block  text-sm font-medium text-gray-900 dark:text-gray-300 job-applicant-name"
                  >
                    No. of applicants:
                  </label>

                  <label
                    for="first_name"
                    class="block text-sm font-medium text-gray-900 dark:text-gray-300 job-applicant-no"
                  >
                    10
                  </label>
                </div>

                <label
                  for="first_name"
                  class="block text-sm font-medium text-gray-900 dark:text-gray-300 applied-name applied-main"
                >
                  Last Applied:
                </label>
                <label
                  for="first_name"
                  class="block  text-sm font-medium text-gray-900 dark:text-gray-300 applied-time applied-main"
                >
                  2 hour ago
                </label>

                <div className="myjobpost-main-button">
                  <div className="myjobpost-button">
                    <a
                      href="/company/job-insights"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 mr-3 mb-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 job-insights-button"
                      >
                        Insights
                      </button>
                    </a>
                  </div>
                  <div className="myjobpost-button">
                    <a
                      href="/company/job-applicant"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 mr-3 mb-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 jobpost-applicant-button"
                      >
                        Applicants
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="jobpost-description">
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </label>
            </div>
          </div>
        </div>

        <div className="myjobpost-main-form">
          <div className="myjobpost-information">
            <div className="jobpost-username">
              <label
                for="first_name"
                class="block mb-2 text-large font-medium text-gray-900 dark:text-gray-300 jobtitle-name"
              >
                Title
              </label>
            </div>

            <div className="myjobpost-years-qualification">
              <div className="jobpost-qualification">
                <div className="jobpost-year">
                  <label
                    for="first_name"
                    class="block  text-sm font-medium text-gray-900 dark:text-gray-300 job-applicant-name"
                  >
                    No. of applicants:
                  </label>

                  <label
                    for="first_name"
                    class="block text-sm font-medium text-gray-900 dark:text-gray-300 job-applicant-no"
                  >
                    10
                  </label>
                </div>

                <label
                  for="first_name"
                  class="block text-sm font-medium text-gray-900 dark:text-gray-300 applied-name applied-main"
                >
                  Last Applied:
                </label>
                <label
                  for="first_name"
                  class="block  text-sm font-medium text-gray-900 dark:text-gray-300 applied-time applied-main"
                >
                  2 hour ago
                </label>

                <div className="myjobpost-main-button">
                  <div className="myjobpost-button">
                    <a
                      href="/company/job-insights"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 mr-3 mb-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 job-insights-button"
                      >
                        Insights
                      </button>
                    </a>
                  </div>
                  <div className="myjobpost-button">
                    <a
                      href="/company/job-applicant"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 mr-3 mb-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 jobpost-applicant-button"
                      >
                        Applicants
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="jobpost-description">
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </label>
            </div>
          </div>
        </div>

        <div className="myjobpost-main-form">
          <div className="myjobpost-information">
            <div className="jobpost-username">
              <label
                for="first_name"
                class="block mb-2 text-large font-medium text-gray-900 dark:text-gray-300 jobtitle-name"
              >
                Title
              </label>
            </div>

            <div className="myjobpost-years-qualification">
              <div className="jobpost-qualification">
                <div className="jobpost-year">
                  <label
                    for="first_name"
                    class="block  text-sm font-medium text-gray-900 dark:text-gray-300 job-applicant-name"
                  >
                    No. of applicants:
                  </label>

                  <label
                    for="first_name"
                    class="block text-sm font-medium text-gray-900 dark:text-gray-300 job-applicant-no"
                  >
                    10
                  </label>
                </div>

                <label
                  for="first_name"
                  class="block text-sm font-medium text-gray-900 dark:text-gray-300 applied-name applied-main"
                >
                  Last Applied:
                </label>
                <label
                  for="first_name"
                  class="block  text-sm font-medium text-gray-900 dark:text-gray-300 applied-time applied-main"
                >
                  2 hour ago
                </label>

                <div className="myjobpost-main-button">
                  <div className="myjobpost-button">
                    <a
                      href="/company/job-insights"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 mr-3 mb-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 job-insights-button"
                      >
                        Insights
                      </button>
                    </a>
                  </div>
                  <div className="myjobpost-button">
                    <a
                      href="/company/job-applicant"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 mr-3 mb-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 jobpost-applicant-button"
                      >
                        Applicants
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="jobpost-description">
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </label>
            </div>
          </div>
        </div>

        <div className="myjobpost-main-form">
          <div className="myjobpost-information">
            <div className="jobpost-username">
              <label
                for="first_name"
                class="block mb-2 text-large font-medium text-gray-900 dark:text-gray-300 jobtitle-name"
              >
                Title
              </label>
            </div>

            <div className="myjobpost-years-qualification">
              <div className="jobpost-qualification">
                <div className="jobpost-year">
                  <label
                    for="first_name"
                    class="block  text-sm font-medium text-gray-900 dark:text-gray-300 job-applicant-name"
                  >
                    No. of applicants:
                  </label>

                  <label
                    for="first_name"
                    class="block text-sm font-medium text-gray-900 dark:text-gray-300 job-applicant-no"
                  >
                    10
                  </label>
                </div>

                <label
                  for="first_name"
                  class="block text-sm font-medium text-gray-900 dark:text-gray-300 applied-name applied-main"
                >
                  Last Applied:
                </label>
                <label
                  for="first_name"
                  class="block  text-sm font-medium text-gray-900 dark:text-gray-300 applied-time applied-main"
                >
                  2 hour ago
                </label>

                <div className="myjobpost-main-button">
                  <div className="myjobpost-button">
                    <a
                      href="/company/job-insights"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 mr-3 mb-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 job-insights-button"
                      >
                        Insights
                      </button>
                    </a>
                  </div>
                  <div className="myjobpost-button">
                    <a
                      href="/company/job-applicant"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 mr-3 mb-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 jobpost-applicant-button"
                      >
                        Applicants
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="jobpost-description">
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
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
export default Jobpost;