import React, { useEffect, useState } from "react";
import "../company/styles/recruitdetails.css";
import Select from "react-select";
<<<<<<< HEAD
=======
import plus from "../company/styles/plus.svg";

>>>>>>> 4887b84e5e22aaedd7714a4f30824474c9d42e32
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RecruitmentDetails() {
  let navigate = useNavigate();

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOptions1, setSelectedOptions1] = useState();
  const [selectedOptionsLocation, setSelectedOptionsLocation] = useState([]);
  const [jobLocation, setJoblocation] = useState("");
  const [singleQuestion, setSingleQuestion] = useState("");
  const [additionalQuestion, setAdditionalQuestion] = useState([]);
  const [counter, setCounter] = useState(0);

  const optionListPrimary = [
    { value: "java", label: "Java" },
    { value: "python", label: "Python" },
    { value: "oracle", label: "Oracle" },
    { value: "C++", label: "C++" },
    { value: "blockchain", label: "Blockchain" },
    { value: "Reactjs", label: "ReactJs" },
    { value: "angular", label: "Angular" },
    { value: "data structure", label: "Data Structure" },
    { value: "Nodejs", label: "Nodejs" },
    { value: "dotnet", label: "DotNet" },
  ];
  const optionListSecondary = [
    { value: "Java", label: "Java" },
    { value: "python", label: "Python" },
    { value: "oracle", label: "Oracle" },
    { value: "C++", label: "C++" },
    { value: "blockchain", label: "Blockchain" },
    { value: "Reactjs", label: "ReactJs" },
    { value: "angular", label: "Angular" },
    { value: "data structure", label: "Data Structure" },
    { value: "Nodejs", label: "Nodejs" },
    { value: "dotnet", label: "DotNet" },
  ];
  const optionListLocation = [
    { value: "Brazil", label: "Brazil" },
    { value: "Canada", label: "Canada" },
    { value: "India", label: "India" },
    { value: "Bhutan", label: "Bhutan" },
    { value: "Japan", label: "Japan" },
    { value: "Nepal", label: "Nepal" },
    { value: "France", label: "France" },
    { value: "Astrallia", label: "Australlia" },
    { value: "China", label: "China" },
    { value: "Mexico", label: "Mexico" },
  ];

  const [btnloading, setbtnLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    company_id: 2,
    assesment_id: 1,
    title: "",
    description: "",
    location: [],
    status: 1,
    type: "",
    addition_question: "",
    experience_level: "",
    primary_skill1: "",
    primary_skill2: "",
    primary_skill3: "",
    primary_skill4: "",
    primary_skill5: "",
    secondary_skills: "",
  });

  const addJobDetails = () => {
    var data = JSON.stringify({
      company_id: 2,
      title: credentials.title,
      description: credentials.description,
      location: credentials.location,
      status: 1,
      type: credentials.type,
      addition_question: credentials.addition_question,
      experience_level: credentials.experience_level,
      primary_skill1: credentials.primary_skill1,
      primary_skill2: credentials.primary_skill2,
      primary_skill3: credentials.primary_skill3,
      primary_skill4: credentials.primary_skill4,
      primary_skill5: credentials.primary_skill5,
      secondary_skills: credentials.secondary_skills,
    });
    var config = {
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/addJob`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    console.log(config.url);
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setbtnLoading(false);
        navigate(
          `/company/availabletests/?dummy=${JSON.stringify(
            response.data["job_id"]
          )}`
        );
      })
      .catch(function (error) {
        console.log(error);
        setbtnLoading(false);
      });
  };
  // useEffect(() => {
  //   console.log(jobLocation);
  // }, [jobLocation]);
  const handleClick = () => {
    setAdditionalQuestion((additionalQuestion) => [
      ...additionalQuestion,
      singleQuestion,
    ]);
    document.getElementById("question-input").value = "";

    setCounter(counter + 1);
  };

  const deleteTag = (index) => {
    setAdditionalQuestion((singleQuestion) =>
      singleQuestion.filter((tag, i) => i !== index)
    );
  };
  function handleSelect(selectedOptions) {
    if (selectedOptions.length > 5) {
      alert("not selected");
    } else {
      setSelectedOptions(selectedOptions);
      if (selectedOptions[0]["value"]) {
        setCredentials({
          ...credentials,
          primary_skill1: selectedOptions[0]["value"],
        });
      }
      if (selectedOptions[1]["value"]) {
        setCredentials({
          ...credentials,
          primary_skill2: selectedOptions[1]["value"],
        });
      }
      if (selectedOptions[2]["value"]) {
        setCredentials({
          ...credentials,
          primary_skill3: selectedOptions[2]["value"],
        });
      }
      if (selectedOptions[3]["value"]) {
        setCredentials({
          ...credentials,
          primary_skill4: selectedOptions[3]["value"],
        });
      }
      if (selectedOptions[4]["value"]) {
        setCredentials({
          ...credentials,
          primary_skill5: selectedOptions[4]["value"],
        });
      }
    }
  }
  function handleSelect1(selectedOptions1) {
    setSelectedOptions1(selectedOptions1);
    let myarr = [];
    for (let i = 0; i < selectedOptions1.length; i++) {
      myarr.push(selectedOptions1[i]["value"]);
    }
    setCredentials({
      ...credentials,
      secondary_skills: myarr,
    });
  }
  function handleSelectLocation(selectedOptionsLocation) {
    setSelectedOptionsLocation(selectedOptionsLocation);
    let myarr = [];
    for (let i = 0; i < selectedOptionsLocation.length; i++) {
      myarr.push(selectedOptionsLocation[i]["value"]);
    }
    setCredentials({
      ...credentials,
      location: myarr,
    });
  }

  // const handleSelectLocation = (e) => {
  //   selectedOptionsLocation.push(e.target.value);
  //   setSelectedOptionsLocation(selectedOptionsLocation);
  //   console.log(selectedOptionsLocation);
  // };
  const handleClick1 = (e) => {
    setJoblocation(e.target.value);
  };

  // const showInput = (inputfield) => {
  //   setPlusIcon(inputfield);
  // };

  const style = {
    control: (base, state) => ({
      ...base,
      border: "1px solid gray",

      boxShadow: "none",
      "&:hover": {
        border: "1px solid gray",
      },
    }),
  };

  useEffect(() => {
    console.log(credentials);
  }, [credentials]);

  useEffect(() => {}, [selectedOptionsLocation]);

  return (
    <>
      <div className="recruitment-main">
        <div className="recruitment-header">
          <div className="recruitment-content">
            <h2 className="font-medium leading-tight text-4xl  text-600 recruit-details">
              JOB DETAILS
            </h2>

            <form id="recruitment-details-main-form">
              <div>
                <label id="recruit-label">Job Title:</label>
              </div>
              <div className="recruit-components">
                <input
                  type="text"
                  required
                  className="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-500
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-700 focus:bg-white focus:border-600 focus:outline-none
                      "
                  id="jobtitle-inputfield"
                  defaultValue={credentials.title}
                  onChange={(e) => {
                    setCredentials({ ...credentials, title: e.target.value });
                  }}
                />
              </div>

              <div>
                <label id="recruit-label">Job Description: </label>
              </div>
              <div className="recruit-components">
                <textarea
                  required
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
                      border border-solid border-gray-500
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-600 focus:outline-none
                    "
                  id="jobdescription-textarea"
                  rows="3"
                  defaultValue={credentials.description}
                  onChange={(e) => {
                    setCredentials({
                      ...credentials,
                      description: e.target.value,
                    });
                  }}
                ></textarea>
              </div>

              <div>
                <label id="recruit-label">Additional Questions:</label>
              </div>

              <div className="recruit-components-question">
                <div className="img-input-submit-section">
                  {/* <img
                    onClick={handleClick}
                    src={plus}
                    alt="file"
                    className="plus-icon"
                    id={plus}
                  /> */}

                  <input
                    id="question-input"
                    type="text"
                    required
                    defaultValue={credentials.addition_question}
                    onChange={(e) => {
                      setCredentials({
                        ...credentials,
                        addition_question: e.target.value,
                      });
                      setSingleQuestion(e.target.value);
                    }}
                    className="
                      form-control
                  
                      
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-500
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-600 focus:outline-none all-inputfield
                    "

                    // id="job-radio"
                  />
                  <button
                    type="button"
                    id="submit-job"
                    onClick={() => handleClick()}
                    className="inline-block px-6 py-2.5 bg-blue-600
                text-white font-medium text-xs leading-tight  rounded-lg
                shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700
                focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg transition duration-150
                ease-in-out"
                  >
                    Submit
                  </button>
                </div>
                <div className="grid-recruitdetails grid-col-2">
                  {additionalQuestion.map((c, index) => {
                    return (
                      <div className="tag-outer">
                        <span id="tag-span-job" key={index}>
                          {c}{" "}
                        </span>
                        <button
                          className="tag-input-btn"
                          onClick={() => deleteTag(index)}
                        >
                          x
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="recruit-location">
                <div>
                  <label id="recruit-label">Job Type:</label>
                </div>
                <label id="recruit-label">
                  <input
                    type="radio"
                    name="location"
                    className="inline-radio radio-location"
                    onClick={(e) => handleClick1(e)}
                    defaultValue="Remote"
                    onChange={(e) => {
                      setCredentials({
                        ...credentials,
                        type: e.target.value,
                      });
                    }}
                  />{" "}
                  <span className="radio-remote">Remote</span>
                </label>

                <label id="recruit-label">
                  <input
                    type="radio"
                    name="location"
                    className="inline-radio radio-location "
                    onClick={(e) => handleClick1(e)}
                    defaultValue="Onsite"
                    onChange={(e) => {
                      setCredentials({
                        ...credentials,
                        type: e.target.value,
                      });
                    }}
                  />{" "}
                  <span className="radio-remote">Onsite</span>
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
                      border border-solid border-gray-500
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-600 focus:outline-none
                    "
                    id="job-radio"
                  />
                ) : null}

                <label id="recruit-label">
                  <input
                    type="radio"
                    name="location"
                    className="inline-radio radio-location"
                    defaultValue="Hybrid"
                    onChange={(e) => {
                      setCredentials({
                        ...credentials,
                        type: e.target.value,
                      });
                    }}
                    onClick={(e) => {
                      handleClick1(e);
                    }}
                  />
                  <span className="radio-remote">Hybrid</span>
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
                      border border-solid border-gray-500
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-600 focus:outline-none
                      "
                    id="job-radio"
                  />
                ) : null}
              </div>

              <div>
                <label id="recruit-label">Experience Level: </label>
              </div>
              <div className="recruit-components">
                <input
                  type="number"
                  min="0"
                  required
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
                      border border-solid border-gray-500
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-600 focus:outline-none ex-level-select
                    "
                  defaultValue={credentials.experience_level}
                  onChange={(e) => {
                    setCredentials({
                      ...credentials,
                      experience_level: e.target.value,
                    });
                  }}
                />
                {/* <label id="number-label">To</label>
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
                  border border-solid border-gray-500
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-600 focus:outline-none
                "
                /> */}
              </div>
              <div>
                <label id="recruit-label">Job Location: </label>
              </div>
              <div className="recruit-components">
                <div className="dropdown-container">
                  <Select
                    options={optionListLocation}
                    placeholder=""
                    required
                    value={selectedOptionsLocation}
                    onChange={(e) => {
                      handleSelectLocation(e);
                    }}
                    // onChange={(e) => {
                    //   handleSelectLocation(e);
                    // }}
                    isSearchable={true}
                    isMulti
                    styles={style}
                  />
                </div>
              </div>
              <div>
                <label id="recruit-label">Primary Skills: </label>
              </div>
              <div className="recruit-components">
                <div className="dropdown-container">
                  <Select
                    options={optionListPrimary}
                    placeholder=""
                    required
                    value={selectedOptions}
                    onChange={(e) => {
                      handleSelect(e);
                    }}
                    isSearchable={true}
                    isOptionDisabled={() => selectedOptions.length >= 5}
                    isMulti
                    styles={style}
                  />
                </div>
              </div>
              <div>
                <label id="recruit-label">Secondary Skills: </label>
              </div>
              <div className="recruit-components">
                <div className="dropdown-container">
                  <Select
                    options={optionListSecondary}
                    placeholder=""
                    required
                    value={selectedOptions1}
                    onChange={(e) => {
                      handleSelect1(e);
                    }}
                    isSearchable={true}
                    isMulti
                    styles={style}
                  />
                </div>
              </div>

              <div className="recruit-submit">
                <a
                  href="/company/availabletests"
                  // target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="submit"
                    className="text-white    font-medium rounded-lg text-sm px-8 py-3 text-center  recruit-save-continue-button
                    "
                    onClick={() => {
                      setbtnLoading(true);
                      addJobDetails();
                    }}
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
