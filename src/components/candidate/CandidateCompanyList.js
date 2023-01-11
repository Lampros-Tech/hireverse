import React, { useEffect, useState } from "react";
import "./companylist.css";
import liveStream from "../company/stream/livestream.json";
import { ethers } from "ethers";
import { connect } from "@tableland/sdk";
import Livepeer from "livepeer-nodejs";

const CandidateCompanyList = () => {
  const livepeerObject = new Livepeer("2219207c-552d-4847-abf1-425386027cfa");
  const [Streams, setStreams] = useState([]);
  var contrat_address = "0x6acf713321f539d4749108338534e2b79403f8dc";

  const getStream = async () => {
    const name = "company_table_80001_1730";
    const tableland = await connect({
      network: "testnet",
      chain: "polygon-mumbai",
    });
    const readRes = await tableland.read(`SELECT * FROM ${name}`);
    console.log(readRes);
    var companyaddress = [];
    for (let i = 0; i < readRes["rows"].length; i++) {
      companyaddress.push(readRes["rows"][i][5]);
    }
    console.log(companyaddress);

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const streamInstance = new ethers.Contract(
      contrat_address,
      liveStream,
      signer
    );

    const getStream = await streamInstance.getAllStream(companyaddress);
    console.log(getStream);
  };

  const getAllLiveStreams = async () => {
    const streams = await livepeerObject.Stream.getAll(1, true, true);
    console.log(streams);

    for (let i = 0; i < streams.length; i++) {}
  };

  useEffect(() => {
    getAllLiveStreams();
    // getStream();
  }, []);
  return (
    <>
      <div className="candidate-companylist-main">
        <h2 className="font-medium leading-tight text-4xl mt-0 ">Companies</h2>
      </div>
      <div className="myjobpost-main-content-application">
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
              <div className="jobapplication-qualification">
                <div className="jobapplicant-year">
                  <label
                    for="first_name"
                    class="block  text-sm font-medium text-gray-900 dark:text-gray-300 companyname-application "
                  >
                    Lampros Tech
                  </label>

                  <label
                    for="first_name"
                    class="block text-sm font-medium text-gray-900 dark:text-gray-300 jobapplications-name-section2 jobapplication-qualification-main"
                  >
                    Status
                  </label>
                </div>
                <label
                  for="first_name"
                  class="block  text-sm font-medium text-gray-900 dark:text-gray-300 jobapplicant-bech jobapplicant-qualification-main"
                ></label>

                <div className="jobapplication-main-button">
                  <div className="jobapplicant-button">
                    <button
                      type="button"
                      class="text-white  font-medium rounded-lg text-sm px-9 py-3 mr-3  jobapplicant-invite-button2"
                      onClick={() => {
                        window.location.href = "https://test.dehitas.xyz";
                      }}
                    >
                      Start
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
};

export default CandidateCompanyList;
