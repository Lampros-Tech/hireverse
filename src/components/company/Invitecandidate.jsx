import React, { useState } from "react";
import "../company/styles/invitecandidate.css";
import fileupload from "../company/styles/fileupload.svg";

function InviteCandidate() {
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <>
      <div className="invitecandidate-main">
        <div className="invticandidate-header">
          <h2 class="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600 invitecandidate-title">
            INVITE CANDIDATES
          </h2>

          <img src={fileupload} alt="file" className="uploadfile-icon" />

          <div class="invitecandidate-file">
            <i class="fal fa-cloud-upload-alt"></i>
            <input
              class="form-control
                        block
                        w-full
                        px-20
                        py-0.4
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none invitecandidate-fileupload"
              type="file"
              id="invitecandidate-fileupload
                "
            />
          </div>

          <div className="invitecandidate-page-content">
            <div className="invitecandidate-main-form">
              <div className="invitecandidate-information">
                <div className="invitecandidate-user-icon">
                  <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 ">
                    <svg
                      class=""
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>

                  <div className="candidate-username">
                    <label
                      for="first_name"
                      class="block  text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Username
                    </label>
                  </div>
                </div>

                <div className="invitecandidate-years-qualification">
                  <div className="candidate-qualification">
                    <div className="candidate-year">
                      <label
                        for="first_name"
                        class="block  text-sm font-medium text-gray-900 dark:text-gray-300 candidate-year-name"
                      >
                        Year of Exprience:
                      </label>

                      <label
                        for="first_name"
                        class="block text-sm font-medium text-gray-900 dark:text-gray-300 candidate-year-no"
                      >
                        5
                      </label>
                    </div>

                    <label
                      for="first_name"
                      class="block text-sm font-medium text-gray-900 dark:text-gray-300 qualification-name qualification-main"
                    >
                      Qualification:
                    </label>
                    <label
                      for="first_name"
                      class="block  text-sm font-medium text-gray-900 dark:text-gray-300 qualification-bech qualification-main"
                    >
                      M.Tech
                    </label>

                    <div className="invitecandidate-main-button">
                      <div className="invitecandidate-button">
                        <button
                          type="button"
                          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-9 py-3 mr-3 mb-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 candidate-invite-button"
                        >
                          Invite
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="candidate-description">
                  <label
                    for="first_name"
                    class="block  text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </label>
                </div>
              </div>
            </div>

            <div className="invitecandidate-main-form">
              <div className="invitecandidate-information">
                <div className="invitecandidate-user-icon">
                  <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 ">
                    <svg
                      class=""
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>

                  <div className="candidate-username">
                    <label
                      for="first_name"
                      class="block  text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Username
                    </label>
                  </div>
                </div>

                <div className="invitecandidate-years-qualification">
                  <div className="candidate-qualification">
                    <div className="candidate-year">
                      <label
                        for="first_name"
                        class="block  text-sm font-medium text-gray-900 dark:text-gray-300 candidate-year-name"
                      >
                        Year of Exprience:
                      </label>

                      <label
                        for="first_name"
                        class="block text-sm font-medium text-gray-900 dark:text-gray-300 candidate-year-no"
                      >
                        5
                      </label>
                    </div>

                    <label
                      for="first_name"
                      class="block text-sm font-medium text-gray-900 dark:text-gray-300 qualification-name qualification-main"
                    >
                      Qualification:
                    </label>
                    <label
                      for="first_name"
                      class="block  text-sm font-medium text-gray-900 dark:text-gray-300 qualification-bech qualification-main"
                    >
                      M.Tech
                    </label>

                    <div className="invitecandidate-main-button">
                      <div className="invitecandidate-button">
                        <button
                          type="button"
                          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-9 py-3 mr-3 mb-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 candidate-invite-button"
                        >
                          Invite
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="candidate-description">
                  <label
                    for="first_name"
                    class="block  text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </label>
                </div>
              </div>
            </div>

            <div className="invitecandidate-main-form">
              <div className="invitecandidate-information">
                <div className="invitecandidate-user-icon">
                  <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 ">
                    <svg
                      class=""
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>

                  <div className="candidate-username">
                    <label
                      for="first_name"
                      class="block  text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Username
                    </label>
                  </div>
                </div>

                <div className="invitecandidate-years-qualification">
                  <div className="candidate-qualification">
                    <div className="candidate-year">
                      <label
                        for="first_name"
                        class="block  text-sm font-medium text-gray-900 dark:text-gray-300 candidate-year-name"
                      >
                        Year of Exprience:
                      </label>

                      <label
                        for="first_name"
                        class="block text-sm font-medium text-gray-900 dark:text-gray-300 candidate-year-no"
                      >
                        5
                      </label>
                    </div>

                    <label
                      for="first_name"
                      class="block text-sm font-medium text-gray-900 dark:text-gray-300 qualification-name qualification-main"
                    >
                      Qualification:
                    </label>
                    <label
                      for="first_name"
                      class="block  text-sm font-medium text-gray-900 dark:text-gray-300 qualification-bech qualification-main"
                    >
                      M.Tech
                    </label>

                    <div className="invitecandidate-main-button">
                      <div className="invitecandidate-button">
                        <button
                          type="button"
                          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-9 py-3 mr-3 mb-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 candidate-invite-button"
                        >
                          Invite
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="candidate-description">
                  <label
                    for="first_name"
                    class="block  text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </label>
                </div>
              </div>
            </div>

            <div className="invitecandidate-main-form">
              <div className="invitecandidate-information">
                <div className="invitecandidate-user-icon">
                  <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 ">
                    <svg
                      class=""
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>

                  <div className="candidate-username">
                    <label
                      for="first_name"
                      class="block  text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Username
                    </label>
                  </div>
                </div>

                <div className="invitecandidate-years-qualification">
                  <div className="candidate-qualification">
                    <div className="candidate-year">
                      <label
                        for="first_name"
                        class="block  text-sm font-medium text-gray-900 dark:text-gray-300 candidate-year-name"
                      >
                        Year of Exprience:
                      </label>

                      <label
                        for="first_name"
                        class="block text-sm font-medium text-gray-900 dark:text-gray-300 candidate-year-no"
                      >
                        5
                      </label>
                    </div>

                    <label
                      for="first_name"
                      class="block text-sm font-medium text-gray-900 dark:text-gray-300 qualification-name qualification-main"
                    >
                      Qualification:
                    </label>
                    <label
                      for="first_name"
                      class="block  text-sm font-medium text-gray-900 dark:text-gray-300 qualification-bech qualification-main"
                    >
                      M.Tech
                    </label>

                    <div className="invitecandidate-main-button">
                      <div className="invitecandidate-button">
                        <button
                          type="button"
                          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-9 py-3 mr-3 mb-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 candidate-invite-button"
                        >
                          Invite
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="candidate-description">
                  <label
                    for="first_name"
                    class="block  text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </label>
                </div>
              </div>
            </div>

            <div className="invitecandidate-main-form">
              <div className="invitecandidate-information">
                <div className="invitecandidate-user-icon">
                  <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 ">
                    <svg
                      class=""
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>

                  <div className="candidate-username">
                    <label
                      for="first_name"
                      class="block  text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Username
                    </label>
                  </div>
                </div>

                <div className="invitecandidate-years-qualification">
                  <div className="candidate-qualification">
                    <div className="candidate-year">
                      <label
                        for="first_name"
                        class="block  text-sm font-medium text-gray-900 dark:text-gray-300 candidate-year-name"
                      >
                        Year of Exprience:
                      </label>

                      <label
                        for="first_name"
                        class="block text-sm font-medium text-gray-900 dark:text-gray-300 candidate-year-no"
                      >
                        5
                      </label>
                    </div>

                    <label
                      for="first_name"
                      class="block text-sm font-medium text-gray-900 dark:text-gray-300 qualification-name qualification-main"
                    >
                      Qualification:
                    </label>
                    <label
                      for="first_name"
                      class="block  text-sm font-medium text-gray-900 dark:text-gray-300 qualification-bech qualification-main"
                    >
                      M.Tech
                    </label>

                    <div className="invitecandidate-main-button">
                      <div className="invitecandidate-button">
                        <button
                          type="button"
                          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-9 py-3  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 candidate-invite-button"
                        >
                          Invite
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="candidate-description">
                  <label
                    for="first_name"
                    class="block  text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </label>
                </div>
              </div>
            </div>
            <div className="invitecandidate-button-published">
              <button
                onClick={() => {
                  setShowPopUp(true);
                }}
                type="button"
                value={showPopUp}
                className="button-save inline-block  bg-blue-600 text-white font-medium text-xs leading-tight rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out candidate-button-published"
              >
                Published
              </button>
            </div>
          </div>
          {showPopUp === true ? (
            <div>
              <span class="popuptext" id="myPopup">
                A Simple Popup!
              </span>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
export default InviteCandidate;