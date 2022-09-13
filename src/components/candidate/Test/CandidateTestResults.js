import React from "react";
import "./test.css";
import testdata from "../testdata";
import TestNFT from "../../assets/images/profile.png";

const CandidateTestResults = () => {
  return (
    <>
      <div>
        <div className="candidate-test-header">Test Result</div>
        <div className="candidate-test-outer">
          <h1 className="candidate-test-name">John Smith</h1>
          <div className="candidate-test-info">
            {testdata.map((testinfo) => {
              return (
                <div className="candidate-info">
                  <div className="candidate-all-info">{testinfo.test}</div>
                  <div className="candidate-result-info">
                    Score: {testinfo.result}
                  </div>
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
