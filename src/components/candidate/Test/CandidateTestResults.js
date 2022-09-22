import React from "react";
import "./test.css";
import TestNFT from "../../assets/images/exam-result.jpg";
import CompanyLogo from "../../assets/images/companyprofile.png";
import testdata from "../testdata";

const CandidateTestResults = () => {
  return (
    <>
      <div className="test-result-main-content">
        <div className="candidate-test-header">Test Result</div>
        <div className="candidate-test-outer">
          <div className="profile-name-merge-div">
            <img
              className="candidate-more-logo-test-result"
              src={CompanyLogo}
              alt="company-logo"
            />
            <div className="candidate-test-name">John Smith</div>
          </div>
          <div className="candidate-test-info">
            {testdata.map((testinfo) => {
              return (
                <div className="candidate-info">
                  <div className="candidate-all-info">{testinfo.test}</div>
                  <div className="candidate-result-info">
                    Score: {testinfo.result}
                  </div>
                  <div className="candidate-company-info">
                    {testinfo.company}
                  </div>
                  <div className="candidate-time-info">{testinfo.time}</div>
                  <img
                    className="candidate-test-nft"
                    src={TestNFT}
                    alt="Test-NFT"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CandidateTestResults;
