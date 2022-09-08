import React, { useEffect, useState } from "react";
import "../company/styles/recruitdetails.css";
import Select from "react-select";
import plus from "../company/styles/plus.svg";

function RecruitmentDetails() {
  const [selectedOptions, setSelectedOptions] = useState();
  const [jobLocation, setJoblocation] = useState("");
  const [counter1, setCounter1] = useState(0);
  const [plusIcon, setPlusIcon] = useState("");

  const optionList = [
    { value: "java", label: "Java" },
    { value: "python", label: "Python" },
    { value: "oracle", label: "Oracle" },
    { value: "C++", label: "C++" },
    { value: "blockchain", label: "Blockchain" },
    { value: "Reactjs", label: "ReactJs" },
    // { value: "angular", label: "Angular" },
    // { value: "data structure", label: "Data Structure" },
    // { value: "Nodejs", label: "Nodejs" },
    // { value: "dotnet", label: "DotNet" },
  ];
  useEffect(
    () => {
      console.log(jobLocation);
      console.log(plusIcon);
    },
    [jobLocation],
    [plusIcon]
  );

  function handleSelect(data) {
    setSelectedOptions(data);
  }

  const handleClick1 = (e) => {
    setJoblocation(e.target.value);
  };

  const showInput = (inputfield) => {
    setPlusIcon(inputfield);
  };

  return (
    <>
      <div className="recruitment-main">
        <div className="recruitment-header">
          <div className="recruitment-content">
            <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600 recruit-details">
              JOB DETAILS
            </h2>

            <form id="recruitment-details-main-form">
              <div>
                <label id="recruit-label">Job Title:</label>
              </div>
              <div className="recruit-components">
                <input
                  type="text"
                  className="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                      "
                  id="jobtitle-inputfield"
                />
              </div>

              <div>
                <label id="recruit-label">Job Description: </label>
              </div>
              <div className="recruit-components">
                <textarea
                  className="
                      form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                  id="jobdescription-textarea"
                  rows="3"
                ></textarea>
              </div>

              <div>
                <label id="recruit-label">Additional Questions:</label>
              </div>

              <div className="recruit-components">
                <button onClick={(inputfield) => showInput(inputfield)}>
                  <img src={plus} alt="file" className="plus-icon" id={plus} />
                </button>

                {plusIcon === "plus" ? (
                  <input
                    type="text"
                    // onClick={(e) => handleClick1(e)}
                    className="
                      form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                    // id="job-radio"
                  />
                ) : (
                  <input
                    type="text"
                    className="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                  "
                    id="jobquestion-inputfield"
                  />
                )}

                <button
                  type="button"
                  id="submit-job"
                  className="inline-block px-6 py-2.5 bg-blue-600
                text-white font-medium text-xs leading-tight  rounded-full
                shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700
                focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg transition duration-150
                ease-in-out"
                >
                  Submit
                </button>
              </div>

              <div className="recruit-location">
                <div>
                  <label id="recruit-label">Job Location:</label>
                </div>
                <label id="recruit-label">
                  <input
                    type="radio"
                    name="location"
                    className="inline"
                    onClick={(e) => handleClick1(e)}
                    value="Remote"
                  />{" "}
                  Remote
                </label>
                <label id="recruit-label">
                  <input
                    type="radio"
                    name="location"
                    className="inline"
                    onClick={(e) => handleClick1(e)}
                    value="Onsite"
                  />{" "}
                  Onsite
                </label>

                {jobLocation === "Onsite" ? (
                  <input
                    type="text"
                    // onClick={(e) => handleClick1(e)}
                    className="
                      form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                    id="job-radio"
                  />
                ) : null}

                <label id="recruit-label">
                  <input
                    type="radio"
                    name="location"
                    className="inline"
                    value="Hybrid"
                    onClick={(e) => {
                      handleClick1(e);
                    }}
                  />
                  Hybrid
                </label>
                {jobLocation === "Hybrid" ? (
                  <input
                    type="text"
                    // onClick={(e) => handleClick1(e)}
                    className="
                      form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                      "
                    id="job-radio"
                  />
                ) : null}
              </div>

              <div>
                <label id="recruit-label">Year Of Experience: </label>
              </div>
              <div className="recruit-components">
                <input
                  type="number"
                  min="0"
                  max="10"
                  id="number"
                  className="
                      form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                />
                <label id="number-label">To</label>
                <input
                  type="number"
                  min="0"
                  max="10"
                  id="number"
                  className="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                />
              </div>

              <div>
                <label id="recruit-label">Area Of Expertise: </label>
              </div>
              <div className="recruit-components">
                <div className="dropdown-container">
                  <Select
                    options={optionList}
                    placeholder=""
                    value={selectedOptions}
                    onChange={handleSelect}
                    isSearchable={true}
                    isMulti
                  />
                </div>
              </div>

              <div className="recruit-submit">
                <a
                  href="/company/job-availabletest"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-3 text-center    dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Save & Continue
                  </button>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecruitmentDetails;