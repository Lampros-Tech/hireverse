import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../company/styles/availabletest.css";
import avtar from "../company/styles/companyprofile.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AvailableTest() {
  let navigate = useNavigate();
  const [purchased, setPurchased] = useState(true);
  const [created, setCreated] = useState();
  const [jobId, setJobId] = useState();

  const updateAssessmentId = (e) => {
    var data = JSON.stringify({
      job_id: jobId,
      assesment_id: e.target.id,
    });

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/addJobAssessment`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        // navigate(
        //   `/company/invitecandidates/?dummy=${JSON.stringify(
        //     response.data["job_id"]
        //   )}`
        // );
        navigate("/company/invitecandidates/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    const currentLocation = window.location.href;
    const param = currentLocation.split("=");
    setJobId(param[1]);
    console.log(jobId);
    console.log("hi");
    console.log(param[1]);
    // console.log(currentLocation);
    // const params = new URLSearchParams(currentLocation.search);
    // console.log(params);
  }, []);

  return (
    <>
      <div className="availabletest-main-content">
        <div className="availabletest-header">
          <h2 class="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600 availabletest-main-title">
            AVAILABLE TEST
          </h2>
        </div>
        <div className="avilabletest-front-buttons">
          <button
            onClick={() => {
              setPurchased(true);
              setCreated(false);
            }}
            for="first_name"
            className={
              purchased
                ? "block text-large font-medium text-gray-900 dark:text-gray-300 purchased-name pc-tab-button"
                : "block text-large font-medium text-gray-900 dark:text-gray-300 purchased-name"
            }
            value={purchased}
          >
            Purchased
          </button>

          <button
            onClick={() => {
              setCreated(true);
              setPurchased(false);
            }}
            for="first_name"
            className={
              created
                ? "block text-large font-medium text-gray-900 dark:text-gray-300 created-name pc-tab-button"
                : "block text-large font-medium text-gray-900 dark:text-gray-300 created-name"
            }
            value={created}
          >
            Created
          </button>
        </div>

        {/* created----------------------------------------------------------------------------------- */}
        {created === true ? (
          <div className="availabletest-main-information">
            <div className="available-information">
              <div className="availabletest-title">
                <label
                  for="first_name"
                  class="block mb-2 text-large font-medium text-gray-900 dark:text-gray-300 jobtitle-name"
                >
                  Title
                </label>
              </div>
              <div className="availabletest-description-to-button">
                <div className="availabletest-description">
                  <label
                    for="first_name"
                    class="block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </label>
                </div>

                <div className="availabletest-user-icon">
                  <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-600 ">
                    <img
                      class="w-10 h-10 rounded-full"
                      src={avtar}
                      alt="Rounded avatar"
                    />
                  </div>
                  <div className="available-creator-name">
                    <label
                      for="first_name"
                      class="block  text-sm font-medium text-gray-900 dark:text-gray-300  availabletest-creator-block"
                    >
                      Creator Name
                    </label>
                  </div>

                  <div className="availabletest-usetest-button">
                    <button
                      type="button"
                      class="text-white   font-medium rounded-lg text-sm px-8 py-3 text-center  availabletest-creator-cost-button"
                    >
                      Cost: $50
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="available-information">
              <div className="availabletest-title">
                <label
                  for="first_name"
                  class="block mb-2 text-large font-medium text-gray-900 dark:text-gray-300 jobtitle-name"
                >
                  Title
                </label>
              </div>
              <div className="availabletest-description-to-button">
                <div className="availabletest-description">
                  <label
                    for="first_name"
                    class="block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </label>
                </div>

                <div className="availabletest-user-icon">
                  <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-600 ">
                    <img
                      class="w-10 h-10 rounded-full"
                      src={avtar}
                      alt="Rounded avatar"
                    />
                  </div>
                  <div className="available-creator-name">
                    <label
                      for="first_name"
                      class="block  text-sm font-medium text-gray-900 dark:text-gray-300  availabletest-creator-block"
                    >
                      Creator Name
                    </label>
                  </div>

                  <div className="availabletest-usetest-button">
                    <button
                      type="button"
                      class="text-white font-medium rounded-lg text-sm px-8 py-3 text-center   availabletest-creator-cost-button"
                    >
                      Cost: $30
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="available-information">
              <div className="availabletest-title">
                <label
                  for="first_name"
                  class="block mb-2 text-large font-medium text-gray-900 dark:text-gray-300 jobtitle-name"
                >
                  Title
                </label>
              </div>
              <div className="availabletest-description-to-button">
                <div className="availabletest-description">
                  <label
                    for="first_name"
                    class="block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </label>
                </div>

                <div className="availabletest-user-icon">
                  <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-600 ">
                    <img
                      class="w-10 h-10 rounded-full"
                      src={avtar}
                      alt="Rounded avatar"
                    />
                  </div>
                  <div className="available-creator-name">
                    <label
                      for="first_name"
                      class="block  text-sm font-medium text-gray-900 dark:text-gray-300  availabletest-creator-block"
                    >
                      Creator Name
                    </label>
                  </div>

                  <div className="availabletest-usetest-button">
                    <button
                      type="button"
                      class="text-white font-medium rounded-lg text-sm px-8 py-3 text-center   availabletest-creator-cost-button"
                    >
                      Cost: $14
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="available-information">
              <div className="availabletest-title">
                <label
                  for="first_name"
                  class="block mb-2 text-large font-medium text-gray-900 dark:text-gray-300 jobtitle-name"
                >
                  Title
                </label>
              </div>
              <div className="availabletest-description-to-button">
                <div className="availabletest-description">
                  <label
                    for="first_name"
                    class="block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </label>
                </div>

                <div className="availabletest-user-icon">
                  <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-600 ">
                    <img
                      class="w-10 h-10 rounded-full"
                      src={avtar}
                      alt="Rounded avatar"
                    />
                  </div>
                  <div className="available-creator-name">
                    <label
                      for="first_name"
                      class="block  text-sm font-medium text-gray-900 dark:text-gray-300  availabletest-creator-block"
                    >
                      Creator Name
                    </label>
                  </div>

                  <div className="availabletest-usetest-button">
                    <button
                      type="button"
                      class="text-white   font-medium rounded-lg text-sm px-8 py-3 text-center   availabletest-creator-cost-button"
                    >
                      Cost: $20
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="available-information">
              <div className="availabletest-title">
                <label
                  for="first_name"
                  class="block mb-2 text-large font-medium text-gray-900 dark:text-gray-300 jobtitle-name"
                >
                  Title
                </label>
              </div>
              <div className="availabletest-description-to-button">
                <div className="availabletest-description">
                  <label
                    for="first_name"
                    class="block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </label>
                </div>

                <div className="availabletest-user-icon">
                  <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-600 ">
                    <img
                      class="w-10 h-10 rounded-full"
                      src={avtar}
                      alt="Rounded avatar"
                    />
                  </div>
                  <div className="available-creator-name">
                    <label
                      for="first_name"
                      class="block  text-sm font-medium text-gray-900 dark:text-gray-300  availabletest-creator-block"
                    >
                      Creator Name
                    </label>
                  </div>

                  <div className="availabletest-usetest-button">
                    <button
                      type="button"
                      class="text-white   font-medium rounded-lg text-sm px-8 py-3 text-center   availabletest-creator-cost-button"
                    >
                      Cost: $35
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="availabletest-submit">
              <a
                href="/company/invite-candidate"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  class="text-white  font-medium rounded-lg text-sm px-8 py-3 text-center    availabletest-save-button"
                >
                  Save & Continue
                </button>
              </a>
            </div>
          </div>
        ) : (
          // purchased----------------------------------------------------------------------
          <div className="availabletest-main-information">
            <div className="available-information">
              <div className="availabletest-title">
                <label
                  for="first_name"
                  class="block  text-large font-medium text-gray-900 dark:text-gray-300 jobtitle-name"
                >
                  Title
                </label>
              </div>
              <div className="availabletest-variable-cost">
                <label
                  for="first_name"
                  class="block  text-large font-medium text-gray-900 dark:text-gray-300 variable-cost-name"
                >
                  Variable Cost:
                </label>
                <label
                  for="first_name"
                  class="block  text-large font-medium text-gray-900 dark:text-gray-300 variable-cost-price"
                >
                  $20
                </label>
              </div>
              <div className="availabletest-description-to-button">
                <div className="availabletest-description">
                  <label
                    for="first_name"
                    class="block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </label>
                </div>

                <div className="availabletest-user-icon">
                  <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-600 ">
                    <img
                      class="w-10 h-10 rounded-full"
                      src={avtar}
                      alt="Rounded avatar"
                    />
                  </div>
                  <div className="available-creator-name">
                    <label
                      for="first_name"
                      class="block  text-sm font-medium text-gray-900 dark:text-gray-300 availabletest-creator-block"
                    >
                      Creator Name
                    </label>
                  </div>

                  <div className="availabletest-usetest-button">
                    <button
                      type="button"
                      id="2"
                      class="text-white   font-medium rounded-lg text-sm px-8 py-3 text-center   availabletest-creator-cost-button use-test-button"
                      onClick={(e) => {
                        updateAssessmentId(e);
                      }}
                    >
                      Use This Test
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="available-information">
              <div className="availabletest-title">
                <label
                  for="first_name"
                  class="block  text-large font-medium text-gray-900 dark:text-gray-300 jobtitle-name"
                >
                  Title
                </label>
              </div>
              <div className="availabletest-variable-cost">
                <label
                  for="first_name"
                  class="block  text-large font-medium text-gray-900 dark:text-gray-300 variable-cost-name"
                >
                  Variable Cost:
                </label>
                <label
                  for="first_name"
                  class="block  text-large font-medium text-gray-900 dark:text-gray-300 variable-cost-price"
                >
                  $20
                </label>
              </div>
              <div className="availabletest-description-to-button">
                <div className="availabletest-description">
                  <label
                    for="first_name"
                    class="block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </label>
                </div>

                <div className="availabletest-user-icon">
                  <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-600 ">
                    <img
                      class="w-10 h-10 rounded-full"
                      src={avtar}
                      alt="Rounded avatar"
                    />
                  </div>
                  <div className="available-creator-name">
                    <label
                      for="first_name"
                      class="block  text-sm font-medium text-gray-900 dark:text-gray-300  availabletest-creator-block"
                    >
                      Creator Name
                    </label>
                  </div>

                  <div className="availabletest-usetest-button">
                    <button
                      type="button"
                      class="text-white font-medium rounded-lg text-sm px-8 py-3 text-center   availabletest-creator-cost-button use-test-button"
                    >
                      Use This Test
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="available-information">
              <div className="availabletest-title">
                <label
                  for="first_name"
                  class="block text-large font-medium text-gray-900 dark:text-gray-300 jobtitle-name"
                >
                  Title
                </label>
              </div>
              <div className="availabletest-variable-cost">
                <label
                  for="first_name"
                  class="block  text-large font-medium text-gray-900 dark:text-gray-300 variable-cost-name"
                >
                  Variable Cost:
                </label>
                <label
                  for="first_name"
                  class="block  text-large font-medium text-gray-900 dark:text-gray-300 variable-cost-price"
                >
                  $20
                </label>
              </div>
              <div className="availabletest-description-to-button">
                <div className="availabletest-description">
                  <label
                    for="first_name"
                    class="block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </label>
                </div>

                <div className="availabletest-user-icon">
                  <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-600 ">
                    <img
                      class="w-10 h-10 rounded-full"
                      src={avtar}
                      alt="Rounded avatar"
                    />
                  </div>
                  <div className="available-creator-name">
                    <label
                      for="first_name"
                      class="block  text-sm font-medium text-gray-900 dark:text-gray-300  availabletest-creator-block"
                    >
                      Creator Name
                    </label>
                  </div>

                  <div className="availabletest-usetest-button">
                    <button
                      type="button"
                      class="text-white  font-medium rounded-lg text-sm px-8 py-3 text-center   availabletest-creator-cost-button use-test-button"
                    >
                      Use This Test
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="available-information">
              <div className="availabletest-title">
                <label
                  for="first_name"
                  class="block text-large font-medium text-gray-900 dark:text-gray-300 jobtitle-name"
                >
                  Title
                </label>
              </div>
              <div className="availabletest-variable-cost">
                <label
                  for="first_name"
                  class="block  text-large font-medium text-gray-900 dark:text-gray-300 variable-cost-name"
                >
                  Variable Cost:
                </label>
                <label
                  for="first_name"
                  class="block  text-large font-medium text-gray-900 dark:text-gray-300 variable-cost-price"
                >
                  $20
                </label>
              </div>

              <div className="availabletest-description-to-button">
                <div className="availabletest-description">
                  <label
                    for="first_name"
                    class="block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </label>
                </div>

                <div className="availabletest-user-icon">
                  <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-600 ">
                    <img
                      class="w-10 h-10 rounded-full"
                      src={avtar}
                      alt="Rounded avatar"
                    />
                  </div>
                  <div className="available-creator-name">
                    <label
                      for="first_name"
                      class="block  text-sm font-medium text-gray-900 dark:text-gray-300  availabletest-creator-block"
                    >
                      Creator Name
                    </label>
                  </div>

                  <div className="availabletest-usetest-button">
                    <button
                      type="button"
                      class="text-white   font-medium rounded-lg text-sm px-8 py-3 text-center   availabletest-creator-cost-button use-test-button"
                    >
                      Use This Test
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="available-information">
              <div className="availabletest-title">
                <label
                  for="first_name"
                  class="block  text-large font-medium text-gray-900 dark:text-gray-300 jobtitle-name"
                >
                  Title
                </label>
              </div>
              <div className="availabletest-variable-cost">
                <label
                  for="first_name"
                  class="block  text-large font-medium text-gray-900 dark:text-gray-300 variable-cost-name"
                >
                  Variable Cost:
                </label>
                <label
                  for="first_name"
                  class="block  text-large font-medium text-gray-900 dark:text-gray-300 variable-cost-price"
                >
                  $20
                </label>
              </div>
              <div className="availabletest-description-to-button">
                <div className="availabletest-description">
                  <label
                    for="first_name"
                    class="block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </label>
                </div>

                <div className="availabletest-user-icon">
                  <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-600 ">
                    <img
                      class="w-10 h-10 rounded-full"
                      src={avtar}
                      alt="Rounded avatar"
                    />
                  </div>
                  <div className="available-creator-name">
                    <label
                      for="first_name"
                      class="block  text-sm font-medium text-gray-900 dark:text-gray-300  availabletest-creator-block"
                    >
                      Creator Name
                    </label>
                  </div>

                  <div className="availabletest-usetest-button">
                    <button
                      type="button"
                      class="text-white  font-medium rounded-lg text-sm px-8 py-3 text-center availabletest-creator-cost-button use-test-button"
                    >
                      Use This Test
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="availabletest-submit">
              <a
                href="/company/invitecandidates"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  class="text-white font-medium rounded-lg text-sm px-8 py-3 text-center   availabletest-creator-cost-button availabletest-save-button"
                >
                  Save & Continue
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default AvailableTest;
