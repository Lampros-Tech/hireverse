import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../company/styles/availabletest.css";
import avtar from "../company/styles/companyprofile.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { connect } from "@tableland/sdk";

function AvailableTest() {
  let navigate = useNavigate();
  const [purchased, setPurchased] = useState(true);
  const [created, setCreated] = useState();
  const [jobId, setJobId] = useState();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const updateAssessmentId = (e) => {
    const currentLocation = window.location.href;
    const param = currentLocation.split("=");
    var data = JSON.stringify({
      job_id: param[1],
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

  const showAvailableTests = async (e) => {
    const name = "creators_assesment_table_80001_2074";
    const tableland = await connect({
      network: "testnet",
      chain: "polygon-mumbai",
    });
    const readRes = await tableland.read(`SELECT * FROM ${name}`);
    console.log(readRes);
    for (let i = 0; i < readRes["rows"].length; i++) {
      let creator_id = readRes["rows"][i][1];
      const response = await tableland.read(
        `SELECT name,profile_image FROM creators_table_80001_2155 where creator_id=${creator_id}`
      );
      let url = "https://ipfs.io/ipfs/" + response["rows"][0][1];
      data.push([
        readRes["rows"][i][0],
        readRes["rows"][i][2],
        readRes["rows"][i][4],
        readRes["rows"][i][3],
        response["rows"][0][0],
        url,
      ]);
    }
    setData(data);
    console.log(data);
    setLoading(true);
  };

  // useEffect(() => {
  //   showAvailableTests();
  // }, []);

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
              showAvailableTests();
            }}
            for="first_name"
            className={
              created
                ? "block text-large font-medium text-gray-900 dark:text-gray-300 created-name pc-tab-button"
                : "block text-large font-medium text-gray-900 dark:text-gray-300 created-name"
            }
            value={created}
          >
            Available Tests
          </button>
        </div>

        {/* created----------------------------------------------------------------------------------- */}
        {created === true ? (
          <div className="availabletest-main-information">
            {data.map((inde) => {
              return (
                <div className="available-information">
                  <div className="availabletest-title">
                    <label
                      for="first_name"
                      class="block mb-2 text-large font-medium text-gray-900 dark:text-gray-300 jobtitle-name"
                    >
                      {inde[1]}
                    </label>
                  </div>
                  <div className="availabletest-description-to-button">
                    <div className="availabletest-description">
                      <label
                        for="first_name"
                        class="block text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {inde[3]}
                      </label>
                    </div>

                    <div className="availabletest-user-icon">
                      <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-600 ">
                        <img
                          class="w-10 h-10 rounded-full"
                          src={inde[5]}
                          alt="Rounded avatar"
                        />
                      </div>
                      <div className="available-creator-name">
                        <label
                          for="first_name"
                          class="block  text-sm font-medium text-gray-900 dark:text-gray-300  availabletest-creator-block"
                        >
                          {inde[4]}
                        </label>
                      </div>

                      <div className="availabletest-usetest-button">
                        <button
                          type="button"
                          class="text-white   font-medium rounded-lg text-sm px-8 py-3 text-center  availabletest-creator-cost-button"
                        >
                          Cost: ${inde[2]}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

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
            {/* {data.map((inde) => {
              return (
                <div className="available-information">
                  <div className="availabletest-title">
                    <label
                      for="first_name"
                      class="block  text-large font-medium text-gray-900 dark:text-gray-300 jobtitle-name"
                    >
                      {inde[1]}
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
                      ${inde[2]}
                    </label>
                  </div>
                  <div className="availabletest-description-to-button">
                    <div className="availabletest-description">
                      <label
                        for="first_name"
                        class="block text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {inde[3]}
                      </label>
                    </div>

                    <div className="availabletest-user-icon">
                      <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-600 ">
                        <img
                          class="w-10 h-10 rounded-full"
                          src={inde[5]}
                          alt="Rounded avatar"
                        />
                      </div>
                      <div className="available-creator-name">
                        <label
                          for="first_name"
                          class="block  text-sm font-medium text-gray-900 dark:text-gray-300 availabletest-creator-block"
                        >
                          {inde[4]}
                        </label>
                      </div>

                      <div className="availabletest-usetest-button">
                        <button
                          type="button"
                          id={inde[0]}
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
              );
            })} */}
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
