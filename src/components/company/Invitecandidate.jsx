import React, { useState, useRef } from "react";
import "../company/styles/invitecandidate.css";
import Upload from "../company/styles/fileuploads.svg";
import Successpopup from "./Successpopup";
import avtar from "../company/styles/companyprofile.png";

function InviteCandidate() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="invitecandidate-main">
        <div className="invticandidate-header">
          <h2 class="font-medium leading-tight text-4xl mt-0 mb-2 text-black-600 invitecandidate-title">
            INVITE CANDIDATES
          </h2>

          <div
            className="invitecandidate-fileupload"
            onClick={(e) => {
              // upload_img.current.click();
            }}
          >
            <img src={Upload} className="upload-image" alt="user_avatar" />
          </div>
          <input
            className="invitecandidate-fileupload-picture"
            type="file"
            hidden
            // defaultValue={nameOfUser}
            // ref={upload_img}
          />
          <span id="file-span">Upload File (.csv file)</span>

          <div className="invitecandidate-page-content">
            <div className="invitecandidate-main-form">
              <div className="invitecandidate-information">
                <div className="invitecandidate-user-icon">
                  <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-600 ">
                    <img
                      class="w-10 h-10 rounded-full"
                      src={avtar}
                      alt="Rounded avatar"
                    />
                  </div>

                  <div className="candidate-username">
                    <label
                      for="first_name"
                      class="block  text-sm font-medium candidate-username-all"
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
                          class="text-white   font-medium rounded-lg text-sm px-12 py-3 mr-3 mb-3  candidate-invite-button"
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
                  <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-600 ">
                    <img
                      class="w-10 h-10 rounded-full"
                      src={avtar}
                      alt="Rounded avatar"
                    />
                  </div>

                  <div className="candidate-username">
                    <label
                      for="first_name"
                      class="block  text-sm font-medium candidate-username-all"
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
                          class="text-white  font-medium rounded-lg text-sm px-12 py-3 mr-3 mb-3   candidate-invite-button"
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
                  <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-600 ">
                    <img
                      class="w-10 h-10 rounded-full"
                      src={avtar}
                      alt="Rounded avatar"
                    />
                  </div>

                  <div className="candidate-username">
                    <label
                      for="first_name"
                      class="block  text-sm font-medium candidate-username-all"
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
                          class="text-white    font-medium rounded-lg text-sm px-12 py-3 mr-3 mb-3   candidate-invite-button"
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
                  <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-600 ">
                    <img
                      class="w-10 h-10 rounded-full"
                      src={avtar}
                      alt="Rounded avatar"
                    />
                  </div>

                  <div className="candidate-username">
                    <label
                      for="first_name"
                      class="block  text-sm font-medium candidate-username-all"
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
                          class="text-white  font-medium rounded-lg text-sm px-12 py-3 mr-3 mb-3   candidate-invite-button"
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
                  <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-600 ">
                    <img
                      class="w-10 h-10 rounded-full"
                      src={avtar}
                      alt="Rounded avatar"
                    />
                  </div>

                  <div className="candidate-username">
                    <label
                      for="first_name"
                      class="block  text-sm font-medium candidate-username-all"
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
                          class="text-white   font-medium rounded-lg text-sm px-12 py-3    candidate-invite-button"
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
              <div class="btn-contain">
                <button
                  onClick={togglePopup}
                  type="button"
                  className="button-save inline-block   text-white font-medium text-xs leading-tight rounded-lg    transition duration-150 ease-in-out candidate-button-published"
                >
                  Publish
                </button>
                <div class="btn-particles"></div>
              </div>
            </div>
          </div>
          {isOpen && (
            <Successpopup
              content={
                <>
                  <b>Successfull Invited</b>
                </>
              }
              handleClose={togglePopup}
            />
          )}
        </div>
      </div>
    </>
  );
}
export default InviteCandidate;
