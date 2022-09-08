import React, { useState } from "react";
import data from "../data";
import Popup from "../popup/popup";
import Upload from "./upload";
import "./feed.css";

const CandidateFeed = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [newData, setNewData] = useState();

  const togglePopup = (newId) => {
    setNewData(data[newId]);
    console.log(data[newId]);
    setIsOpen(!isOpen);
  };

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
        <div className="feed-header">Application Feed</div>
        {data.map((jobs) => {
          return (
            <div className="feed-outer">
              <div className="basic-title">{jobs.title}</div>
              <div className="basic-des">{jobs.description}</div>

              <button
                onClick={() => togglePopup(jobs.id)}
                className="feed-button"
              >
                More
              </button>
              {isOpen && (
                <Popup
                  content={
                    <>
                      <div>
                        <b>{newData.title}</b>
                        <p>{newData.description}</p>
                        <button
                          onClick={() => {
                            formPopup(jobs.id);
                          }}
                        >
                          Apply
                        </button>
                      </div>
                    </>
                  }
                  handleClose={togglePopup}
                />
              )}

              <button
                className="feed-button"
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
                        <div className="form-header">Application Form</div>
                        <div>{formData.title}</div>
                        <div>{formData.description}</div>
                        <div className="skills-header">
                          Skills and Expertise
                        </div>
                        <div>{formData.Skills}</div>
                        <div className="cover-header">Cover Letter</div>
                        <textarea
                          className="text-box"
                          name="message"
                          onChange={handleChange}
                          value={message}
                        />
                        <div>{formData.Question1}</div>
                        <textarea
                          className="question-box"
                          name="message"
                          onChange={handleChange}
                          value={message}
                        />
                        <div>{formData.Question2}</div>
                        <textarea
                          className="question-box"
                          name="message"
                          onChange={handleChange}
                          value={message}
                        />
                        <div>Attachments</div>
                        <div>Upload</div>
                        <Upload />
                        <button className="form-btn">Apply</button>
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
