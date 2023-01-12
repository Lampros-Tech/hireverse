import React, { useEffect, useState } from "react";
import "./companylist.css";
import liveStream from "../company/stream/livestream.json";
import { ethers } from "ethers";
import { connect } from "@tableland/sdk";
import Livepeer from "livepeer-nodejs";
import { useNavigate } from "react-router-dom";

const CandidateCompanyList = () => {
  const navigate = useNavigate();
  const livepeerObject = new Livepeer("2219207c-552d-4847-abf1-425386027cfa");
  const [streams, setStreams] = useState([]);
  var contrat_address = "0x6acf713321f539d4749108338534e2b79403f8dc";
  const [companiesAddress, setCompaniesAddress] = useState([]);
  const [companyList, setCompanyList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [liveStreamData, setLiveStreamData] = useState([]);

  const getAllCompanies = async () => {
    const name = "company_table_80001_1730";
    const tableland = await connect({
      network: "testnet",
      chain: "polygon-mumbai",
    });
    const readRes = await tableland.read(`SELECT * FROM ${name}`);
    console.log(readRes["rows"]);
    setCompanyList(readRes["rows"]);
    for (let i = 0; i < readRes["rows"].length; i++) {
      if (companiesAddress.length < readRes["rows"].length) {
        companiesAddress.push(readRes["rows"][i][5]);
      }
      if (i === readRes["rows"].length - 1) {
        setLoading(true);
      }
      // if (companyaddress.length === readRes["rows"].length) setLoading(true);
    }

    console.log(companiesAddress);
  };

  const getStream = async () => {
    console.log(companiesAddress);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const streamInstance = new ethers.Contract(
      contrat_address,
      liveStream,
      signer
    );
    const getStream = await streamInstance.getAllStream(companiesAddress);
    console.log(getStream);
    for (let i = 0; i < getStream.length; i++) {
      if (liveStreamData.length < getStream.length)
        liveStreamData.push({
          address: getStream[i][0],
          pbId:
            getStream[i][1].length > 0
              ? getStream[i][1][getStream[i][1].length - 1]
              : null,
        });
      console.log(liveStreamData);
    }
  };

  const getAllLiveStreams = async () => {
    const streams = await livepeerObject.Stream.getAll(1, true, true);
    console.log(streams);
    setStreams(streams);
  };

  useEffect(() => {
    getStream();
    return () => setLoading(false);
  }, [loading]);

  useEffect(() => {
    getAllLiveStreams();
    getAllCompanies();
    // getStream();
  }, []);
  return (
    <>
      <div className="candidate-companylist-main">
        <h2 className="font-medium leading-tight text-4xl mt-0 ">Companies</h2>
      </div>
      {companyList.length > 0 ? (
        <>
          {companyList.map((item, key) => {
            return (
              <div key={key}>
                <div className="myjobpost-main-content-application">
                  <div className="myjobpost-main-form">
                    <div className="myjobpost-information">
                      <div className="jobpost-username">
                        <label
                          htmlFor="first_name"
                          className="block mb-2 text-large font-medium text-gray-900 dark:text-gray-300 jobtitle-name"
                        >
                          {item[2]}
                        </label>
                      </div>

                      <div className="jobapplicant-years-qualification">
                        <div className="jobapplication-qualification">
                          <div className="jobapplicant-year">
                            <label
                              htmlFor="first_name"
                              className="block  text-sm font-medium text-gray-900 dark:text-gray-300 companyname-application "
                            >
                              <button
                                onClick={() => {
                                  window.open(item[7]);
                                }}
                              >
                                Website
                              </button>
                            </label>

                            <label
                              htmlFor="first_name"
                              className="block text-sm font-medium text-gray-900 dark:text-gray-300 jobapplications-name-section2 jobapplication-qualification-main"
                            >
                              Location - {item[10]}
                            </label>
                          </div>
                          <label
                            htmlFor="first_name"
                            className="block  text-sm font-medium text-gray-900 dark:text-gray-300 jobapplicant-bech jobapplicant-qualification-main"
                          ></label>
                        </div>

                        <div className="candidatelist-main-button">
                          <div className="candidatelist-button">
                            {liveStreamData.length > 0 &&
                            streams.length > 0 &&
                            streams[0]["playbackId"] ==
                              liveStreamData[key]["pbId"] ? (
                              <span
                                className="text-white live-button font-medium rounded-lg text-sm px-9 py-3 mr-3  jobapplicant-invite-button2"
                                onClick={() => {
                                  navigate("/candidate/view-livepeer-stream", {
                                    state: {
                                      id:
                                        streams.length > 0
                                          ? streams[0]["playbackId"]
                                          : null,
                                    },
                                  });
                                }}
                              >
                                LIVE
                              </span>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div className="candidatelist-description-section2">
                        <label
                          htmlFor="first_name"
                          className="block  text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          {item[6]}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : null}
    </>
  );
};

export default CandidateCompanyList;
