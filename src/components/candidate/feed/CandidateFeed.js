import React, { useState, useRef, useEffect } from "react";
import data from "../data";
import Popup from "../popup/CandidatePopup";
// import Upload from "./upload";
import CompanyLogo from "../../assets/images/companyprofile.png";
import GoogleLogo from "../../assets/images/google.png";
import TwitterLogo from "../../assets/images/twitter.png";
import LinkedlnLogo from "../../assets/images/linkedin.png";
import FacebookLogo from "../../assets/images/facebook.png";
import Upload from "../../assets/images/uploadimg.svg";
import "./feed.css";

const CandidateFeed = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [newData, setNewData] = useState();

  const boxRef = useRef(null);

  const togglePopup = (newId) => {
    setNewData(data[newId]);
    console.log(data[newId]);
    setIsOpen(!isOpen);
  };

  const upload_img = useRef(null);

  const [isForm, setIsForm] = useState(false);

  const [formData, setFormData] = useState();

  const formPopup = (formId) => {
    setFormData(data[formId]);
    console.log(data[formId]);
    setIsForm(!isForm);
  };

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);

    // console.log("value is:", event.target.value);
  };
  function useOutsideAlerter(ref, setIsForm, isForm, setIsOpen, isOpen) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          // alert("You clicked outside of me!");
          if (isForm) {
            setIsForm(!isForm);
          }
          if (isOpen) {
            setIsOpen(!isOpen);
          }
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [boxRef, isForm, isOpen]);
  }

  useOutsideAlerter(boxRef, setIsForm, isForm, setIsOpen, isOpen);

  return (
    <>
      <div className="candidate-jobfeed-main-content">
        <div className="candidate-jobfeed-main-right">
          <div className="candidate-jobfeed-header">Job Feed</div>
          {data.map((jobs) => {
            return (
              <div className="candidate-right-side">
                <div className="candidate-jobfeed-outer">
                  <div className="candidate-jobfeed-top">
                    <img
                      className="candidate-jobfeed-logo"
                      src={CompanyLogo}
                      alt="company-logo"
                    />
                    <div className="candidate-jobfeed-title">{jobs.title}</div>
                  </div>
                  <div className="candidate-jobfeed-middle">
                    <div className="candidate-jobfeed-companyname">
                      {jobs.companyName}
                    </div>
                    <div className="candidate-jobfeed-location">
                      {jobs.location}
                    </div>
                    <div className="candidate-jobfeed-experience">
                      {jobs.experience}
                    </div>
                  </div>
                  <div className="candidate-jobfeed-basic-des">
                    {jobs.description}
                  </div>

                  <button
                    onClick={() => togglePopup(jobs.id)}
                    className="candidate-jobfeed-button-more"
                  >
                    More
                  </button>
                  {isOpen && (
                    <div ref={boxRef}>
                      <Popup
                        content={
                          <>
                            <div className="popup-form">
                              <div className="main-sidebar-popup">
                                <div className="popup1">
                                  <div className="candidate-more-top">
                                    <img
                                      className="candidate-more-logo"
                                      src={CompanyLogo}
                                      alt="company-logo"
                                    />
                                    <div className="candidate-more-title">
                                      {newData.title}
                                    </div>
                                  </div>
                                  <div className="candidate-more-middle">
                                    <div className="candidate-more-companyname">
                                      {newData.companyName}
                                    </div>
                                    <div className="candidate-more-location">
                                      {newData.location}
                                    </div>
                                  </div>
                                  <div className="candidate-more-desc">
                                    {newData.moredescription}
                                  </div>
                                </div>
                                <div className="popup-sidebar">
                                  <div className="candidate-more-top-sidebar">
                                    <img
                                      className="candidate-more-logo-sidebar"
                                      src={CompanyLogo}
                                      alt="company-logo"
                                    />
                                  </div>
                                  <div className="candidate-more-location-sidebar">
                                    <div className="candidate-more-companyname">
                                      {newData.companyName}
                                    </div>
                                  </div>
                                  <div className="candidate-more-location-sidebar">
                                    <span className="sidebar2-span">
                                      Location
                                    </span>
                                    {newData.location}
                                  </div>
                                  <div className="candidate-more-location-sidebar">
                                    <span className="sidebar2-span">
                                      Experience
                                    </span>
                                    {newData.experience}
                                  </div>
                                  <div className="candidate-more-location-sidebar">
                                    <span className="sidebar2-span">
                                      Posted a job
                                    </span>
                                    {newData.time}
                                  </div>
                                  <div className="candidate-more-location-sidebar">
                                    <span className="sidebar2-span">
                                      Share Job
                                    </span>
                                    <div className="sharejob-icon">
                                      <a href="https://accounts.google.com/">
                                        <img
                                          src={GoogleLogo}
                                          className="candidate-form-upload-sharejob"
                                          alt="upload_img"
                                        />
                                      </a>
                                      <a href="https://twitter.com/login">
                                        <img
                                          src={TwitterLogo}
                                          className="candidate-form-upload-sharejob"
                                          alt="upload_img"
                                        />
                                      </a>
                                      <a href="https://www.facebook.com/login/">
                                        <img
                                          src={FacebookLogo}
                                          className="candidate-form-upload-sharejob"
                                          alt="upload_img"
                                        />
                                      </a>
                                      <a href="https://www.linkedin.com/login">
                                        <img
                                          src={LinkedlnLogo}
                                          className="candidate-form-upload-sharejob"
                                          alt="upload_img"
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <span className="primaryskill-span ">
                                Primary Skills:
                              </span>
                              <div className="candidate-more-skills-tag">
                                <div className="candidate-more-skills">
                                  {newData.Skills1}
                                </div>
                                <div className="candidate-more-skills">
                                  {newData.Skills2}
                                </div>
                                <div className="candidate-more-skills">
                                  {newData.Skills3}
                                </div>
                                <div className="candidate-more-skills">
                                  {newData.Skills4}
                                </div>
                              </div>
                              <span className="primaryskill-span ">
                                Secondary Skills:
                              </span>
                              <div className="candidate-more-skills-tag">
                                <div className="candidate-more-skills">
                                  {newData.Skills5}
                                </div>
                                <div className="candidate-more-skills">
                                  {newData.Skills6}
                                </div>
                                <div className="candidate-more-skills">
                                  {newData.Skills7}
                                </div>
                                <div className="candidate-more-skills">
                                  {newData.Skills8}
                                </div>
                              </div>

                              <div className="popup2">
                                <div className="candidate-more-btn-size">
                                  <button
                                    className="candidate-more-button"
                                    onClick={() => {
                                      formPopup(jobs.id);
                                    }}
                                  >
                                    Apply
                                  </button>
                                </div>
                              </div>
                            </div>
                          </>
                        }
                        handleClose={togglePopup}
                      />
                    </div>
                  )}

                  <button
                    className="candidate-jobfeed-button"
                    onClick={() => {
                      formPopup(jobs.id);
                    }}
                  >
                    Apply
                  </button>

                  {isForm && (
                    <div ref={boxRef}>
                      <Popup
                        content={
                          <>
                            <div>
                              <div className="candidate-form-header">
                                Application Form
                              </div>
                              <div className="candidate-form-attachment-header">
                                Attachments
                              </div>
                              {/* <input className="form-upload-btn" type="file" /> */}
                              <div
                                className="candidate-form-upload-imgdiv"
                                onClick={(e) => {
                                  upload_img.current.click();
                                }}
                              >
                                <img
                                  src={Upload}
                                  className="candidate-form-upload-img"
                                  alt="upload_img"
                                />
                              </div>
                              <input
                                className="candidate-form-upload-imginput"
                                type="file"
                                hidden
                                // defaultValue={nameOfUser}
                                ref={upload_img}
                              />
                              <div className="applicationform-block">
                                <div className="candidate-form-title">
                                  {formData.title}
                                </div>
                                <div className="candidate-form-desc">
                                  {formData.description}
                                </div>
                                <div className="candidate-skills-header">
                                  Skills and Expertise
                                </div>
                                <div className="candidate-more-skills-tag">
                                  <div className="candidate-form-skills">
                                    {formData.Skills1}
                                  </div>
                                  <div className="candidate-form-skills">
                                    {formData.Skills2}
                                  </div>
                                  <div className="candidate-form-skills">
                                    {formData.Skills3}
                                  </div>
                                  <div className="candidate-form-skills">
                                    {formData.Skills4}
                                  </div>
                                </div>
                                <div className="candidate-cover-header">
                                  Cover Letter
                                </div>
                                <textarea
                                  className="candidate-text-box"
                                  name="message"
                                  onChange={handleChange}
                                  value={message}
                                />
                                <div className="candidate-form-question">
                                  {formData.Question1}
                                </div>
                                <textarea
                                  className="candidate-form-question-box"
                                  name="message"
                                  onChange={handleChange}
                                  value={message}
                                />
                                <div className="candidate-form-question">
                                  {formData.Question2}
                                </div>
                                <textarea
                                  className="candidate-form-question-box"
                                  name="message"
                                  onChange={handleChange}
                                  value={message}
                                />

                                <div className="candidate-more-btn-size-application">
                                  <button className="candidate-form-btn">
                                    Submit
                                  </button>
                                </div>
                              </div>
                            </div>
                          </>
                        }
                        handleClose={formPopup}
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="candidate-jobfeed-main-left">
          <div className="cancel-filter-apply">
            {/* <button type="button" class="candidate-cancel-btn">
              Cancel
            </button> */}
            <span>Filter by</span>
            <button
              type="button"
              class="text-white   font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  candidate-apply-btn"
            >
              Apply
            </button>
          </div>
          <div className="expriencelevel-candidate">
            <h3 class=" font-semibold text-gray-900 dark:text-white font-['Montserrat'] ex-level-candidates">
              Exprience Level:
            </h3>
            <div class="flex items-center pl-3 font-['Open_Sans']">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                class="  w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                class="py-3 ml-2 w-full text-lg font-medium text-gray-900 dark:text-gray-300 font-['Open_Sans']"
              >
                Entry Level
              </label>
            </div>
            <div class="flex items-center pl-3">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 "
              />
              <label
                for="vue-checkbox"
                class="py-3 ml-2 w-full text-lg font-medium text-gray-900 dark:text-gray-300 font-['Open_Sans']"
              >
                Associate Level
              </label>
            </div>
            <div class="flex items-center pl-3">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                class="py-3 ml-2 w-full text-lg font-medium text-gray-900 dark:text-gray-300 font-['Open_Sans']"
              >
                Expert Level
              </label>
            </div>
          </div>
          <div className="jobtype-candidate">
            <h3 class=" font-semibold text-gray-900 dark:text-white font-['Montserrat'] ex-level-candidates">
              Job Type:
            </h3>
            <div class="flex items-center pl-3">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                class="py-3 ml-2 w-full text-lg font-medium text-gray-900 dark:text-gray-300 font-['Open_Sans']"
              >
                On-Site
              </label>
            </div>
            <div class="flex items-center pl-3">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                class="py-3 ml-2 w-full text-lg font-medium text-gray-900 dark:text-gray-300 font-['Open_Sans']"
              >
                Hybrid
              </label>
            </div>
            <div class="flex items-center pl-3">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                class="py-3 ml-2 w-full text-lg font-medium text-gray-900 dark:text-gray-300 font-['Open_Sans']"
              >
                Remote
              </label>
            </div>
          </div>
          <div className="technology-candidate">
            <h3 class=" font-semibold text-gray-900 dark:text-white font-['Montserrat'] ex-level-candidates">
              Technology:
            </h3>

            <div class="flex items-center pl-3">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                class="py-3 ml-2 w-full text-lg font-medium text-gray-900 dark:text-gray-300 font-['Open_Sans']"
              >
                Vue JS
              </label>
            </div>

            <div class="flex items-center pl-3">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                class="py-3 ml-2 w-full text-lg font-medium text-gray-900 dark:text-gray-300 font-['Open_Sans']"
              >
                Blockchain
              </label>
            </div>

            <div class="flex items-center pl-3">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                class="py-3 ml-2 w-full text-lg font-medium text-gray-900 dark:text-gray-300 font-['Open_Sans']"
              >
                Wordpress
              </label>
            </div>

            <div class="flex items-center pl-3">
              <input
                id="react-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="react-checkbox"
                class="py-3 ml-2 w-full text-lg font-medium text-gray-900 dark:text-gray-300 font-['Open_Sans']"
              >
                React
              </label>
            </div>

            <div class="flex items-center pl-3">
              <input
                id="angular-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="angular-checkbox"
                class="py-3 ml-2 w-full text-lg font-medium text-gray-900 dark:text-gray-300 font-['Open_Sans']"
              >
                Angular
              </label>
            </div>

            <div class="flex items-center pl-3">
              <input
                id="laravel-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="laravel-checkbox"
                class="py-3 ml-2 w-full text-lg font-medium text-gray-900 dark:text-gray-300 font-['Open_Sans']"
              >
                Laravel
              </label>
            </div>
          </div>
          <div className="expriencelevel-candidate">
            <h3 class=" font-semibold text-gray-900 dark:text-white font-['Montserrat'] ex-level-candidates">
              Location:
            </h3>
            <div class="flex items-center pl-3">
              <input
                id="angular-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="angular-checkbox"
                class="py-3 ml-2 w-full text-lg font-medium text-gray-900 dark:text-gray-300 font-['Open_Sans']"
              >
                Brazil
              </label>
            </div>
            <div class="flex items-center pl-3">
              <input
                id="angular-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="angular-checkbox"
                class="py-3 ml-2 w-full text-lg font-medium text-gray-900 dark:text-gray-300 font-['Open_Sans']"
              >
                India
              </label>
            </div>
            <div class="flex items-center pl-3">
              <input
                id="angular-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="angular-checkbox"
                class="py-3 ml-2 w-full text-lg font-medium text-gray-900 dark:text-gray-300 font-['Open_Sans']"
              >
                China
              </label>
            </div>
            <div class="flex items-center pl-3">
              <input
                id="angular-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="angular-checkbox"
                class="py-3 ml-2 w-full text-lg font-medium text-gray-900 dark:text-gray-300 font-['Open_Sans']"
              >
                France
              </label>
            </div>
            <div class="flex items-center pl-3">
              <input
                id="angular-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="angular-checkbox"
                class="py-3 ml-2 w-full text-lg font-medium text-gray-900 dark:text-gray-300 font-['Open_Sans']"
              >
                Canada
              </label>
            </div>
            <div class="flex items-center pl-3">
              <input
                id="angular-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="angular-checkbox"
                class="py-3 ml-2 w-full text-lg font-medium text-gray-900 dark:text-gray-300 font-['Open_Sans']"
              >
                Australlia
              </label>
            </div>
            <div class="flex items-center pl-3">
              <input
                id="angular-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-500 dark:border-gray-500"
              />
              <label
                for="angular-checkbox"
                class="py-3 ml-2 w-full text-lg font-medium text-gray-900 dark:text-gray-300 font-['Open_Sans']"
              >
                Japan
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CandidateFeed;
