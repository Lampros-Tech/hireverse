import React from "react";
import "./test.css";
import testdata from "../testdata";

const CandidateTestResults = () => {
  return (
    <>
      <div>
        <div className="test-header">Test Result</div>
        <div className="test-outer">
          <div className="candidate-name">Name</div>
          <div className="test-info">
            {testdata.map((testinfo) => {
              return (
                <div className="candidate-info">
                  <div className="all-info">{testinfo.test}</div>
                  <div className="result-info">{testinfo.result}</div>
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
