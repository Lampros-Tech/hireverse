import React from "react";

function CandidateApplications() {
  return (
    <>
      <div className="myjobpost-title">
        <h2 class="font-medium leading-tight text-4xl mt-0 ">
          MY APPLICATIONS
        </h2>
      </div>
      <div className="myjobpost-main-content">
        <div className="myjobpost-main-form">
          <div className="myjobpost-information">
            <div className="jobpost-username">
              <label
                for="first_name"
                class="block mb-2 text-large font-medium text-gray-900 dark:text-gray-300 jobtitle-name"
              >
                Blockchain Developer
              </label>
            </div>

            <div className="jobapplicant-years-qualification">
              <div className="jobapplicant-qualification">
                <div className="jobapplicant-year">
                  <label
                    for="first_name"
                    class="block  text-sm font-medium text-gray-900 dark:text-gray-300 jobapplicant-year-name"
                  >
                    Lampros Tech
                  </label>
                  ​
                </div>
                ​
                <label
                  for="first_name"
                  class="block text-sm font-medium text-gray-900 dark:text-gray-300 jobapplications-name-section2 jobapplicant-qualification-main"
                >
                  Status
                </label>
                <label
                  for="first_name"
                  class="block  text-sm font-medium text-gray-900 dark:text-gray-300 jobapplicant-bech jobapplicant-qualification-main"
                ></label>
                ​
                <div className="jobapplicant-main-button">
                  <div className="jobapplicant-button">
                    <button
                      type="button"
                      class="text-white  font-medium rounded-lg text-sm px-9 py-3 mr-3  jobapplicant-invite-button2"
                    >
                      Start Test
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="jobapplications-description-section2">
              <label
                for="first_name"
                class="block  text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CandidateApplications;
