import React, { useState, useRef } from "react";
import data from "../data";
import Popup from "../popup/popup";
// import Upload from "./upload";
import CompanyLogo from "../../assets/images/profile.png";
import Upload from "../../assets/images/uploadimg.svg";
import "./feed.css";

const CandidateFeed = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [newData, setNewData] = useState();

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

  return (
    <>
      <div>
        <div className="candidate-jobfeed-header">Job Feed</div>
        {data.map((jobs) => {
          return (
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
                <h2 className="candidate-jobfeed-companyname">
                  {jobs.companyName}
                </h2>
                <h2 className="candidate-jobfeed-location">{jobs.location}</h2>
                <h2 className="candidate-jobfeed-experience">
                  {jobs.experience}
                </h2>
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
                <Popup
                  content={
                    <>
                      <div>
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
                          <div className="candidate-more-experience">
                            {newData.experience}
                          </div>
                        </div>
                        <div className="candidate-more-desc">
                          {newData.moredescription}
                        </div>
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
                    </>
                  }
                  handleClose={togglePopup}
                />
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
                <Popup
                  content={
                    <>
                      <div>
                        <div className="candidate-form-header">
                          Application Form
                        </div>
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
                        <div className="candidate-more-btn-size">
                          <button className="candidate-form-btn">Submit</button>
                        </div>
                      </div>
                    </>
                  }
                  handleClose={formPopup}
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CandidateFeed;
