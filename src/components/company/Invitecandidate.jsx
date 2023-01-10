import React, { useState, useRef, useEffect } from "react";
import LoadingIcon from "../walletconnect/LoadingIcon";
import "../company/styles/invitecandidate.css";
import Upload from "../company/styles/fileuploads.svg";
import Successpopup from "./Successpopup";
import avtar from "../company/styles/companyprofile.png";
import { connect } from "@tableland/sdk";
import { useAccount } from "wagmi";
import * as PushAPI from "@pushprotocol/restapi";
import { ethers } from "ethers";
import contract from "../../Contracts/artifacts/superfluid_contract.json";
import { type } from "jquery";

export const CONTRACT_ADDRESS_POLYGON =
  "0x77F0A41DfA59B6dC1E7f1388eF88117C146b4C8d";

function InviteCandidate() {
  const { address, isConnected } = useAccount();
  const [isOpen, setIsOpen] = useState(false);
  const [companyId, setCompanyId] = useState();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const showCandidates = async (e) => {
    const name = "candidate_table_80001_1648";
    const tableland = await connect({
      network: "testnet",
      chain: "polygon-mumbai",
    });
    const readRes = await tableland.read(`SELECT * FROM ${name}`);
    console.log(readRes);
    for (let i = 0; i < readRes["rows"].length; i++) {
      let login_id = readRes["rows"][i][1];
      const response = await tableland.read(
        `SELECT degree FROM education_table_80001_2259 where login_id=${login_id}`
      );
      console.log(response);
      let url = "https://ipfs.io/ipfs/" + readRes["rows"][i][4];
      console.log(data);
      if (!data.find((item) => readRes["rows"][i][0] === item[5])) {
        data.push([
          url,
          readRes["rows"][i][2],
          // response["rows"][0][0],
          response.rows.length > 0 ? response.rows[0][0] : "N/A",
          readRes["rows"][i][3],
          readRes["rows"][i][6],
          readRes["rows"][i][0],
        ]);
      }
    }
    // setData(data);
    // console.log(data);
    setLoading(true);
  };

  //send notification code start

  const Pkey = `0x${process.env.REACT_APP_PK}`;
  const signer = new ethers.Wallet(Pkey);

  const sendNotification = async (receiver) => {
    try {
      const apiResponse = await PushAPI.payloads.sendNotification({
        signer: signer,
        type: 3, // target
        identityType: 2, // direct payload
        notification: {
          title: `Helloooo`,
          body: `Hello you have been invited to the interview, The interview details will be shared soon `,
        },
        payload: {
          title: `[sdk-test] payload title `,
          body: `Congratulation`,
          cta: "https://office.dehitas.xyz/?id=cZJte9SEh",
          img: "",
        },
        recipients: "eip155:42:" + receiver, // recipient address
        channel: "eip155:5:0x28AECC0D973F486F9Bfd38085f39Da5c9d82a4E5", // your channel address
        env: "staging",
      });

      // apiResponse?.status === 204, if sent successfully!
      console.log("API repsonse: ", apiResponse);
      alert("Notification sent to the candidate");
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  ///send motification code ends
  const inviteCandidates = async (e) => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        if (!provider) {
          console.log("Metamask is not installed, please install!");
        }

        const { chainId } = await provider.getNetwork();
        console.log("switch case for this case is: " + chainId);
        if (chainId === 5) {
          // const currentLocation = window.location.href;
          // const param = currentLocation.split("=");
          // const job_id = param[1];
          const user = [e.target.id];
          // const con = new ethers.Contract(
          //   CONTRACT_ADDRESS_POLYGON,
          //   contract,
          //   signer
          // );
          // const tx = await con.InviteCandidatesToDrive(companyId, job_id, user);
          // tx.wait();
          sendNotification(user);
        }

        if (chainId === 80001) {
          const currentLocation = window.location.href;
          const param = currentLocation.split("=");
          const job_id = param[1];
          const user = [e.target.id];
          const con = new ethers.Contract(
            CONTRACT_ADDRESS_POLYGON,
            contract,
            signer
          );
          const tx = await con.InviteCandidatesToDrive(companyId, job_id, user);
          tx.wait();
          sendNotification(user);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const forId = async () => {
    const name = "company_table_80001_1730";
    const tableland = await connect({
      network: "testnet",
      chain: "polygon-mumbai",
    });
    const readRes = await tableland.read(
      `SELECT company_id FROM ${name} where wallet_address='${address}'`
    );
    console.log(readRes);
    setCompanyId(readRes["rows"][0][0]);
    console.log("done");
  };
  useEffect(() => {
    forId();
  }, [address]);

  useEffect(() => {
    showCandidates();
  });
  if (loading) {
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
              {data.map((inde) => {
                return (
                  <div className="invitecandidate-main-form">
                    <div className="invitecandidate-information">
                      <div className="invitecandidate-user-icon">
                        <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-600 ">
                          <img
                            class="w-10 h-10 rounded-full"
                            src={inde[0]}
                            alt="Rounded avatar"
                          />
                        </div>

                        <div className="candidate-username">
                          <label
                            for="first_name"
                            class="block  text-sm font-medium candidate-username-all"
                          >
                            {inde[1]}
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
                              Years of Exprience:
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
                            Qualifications:
                          </label>
                          <label
                            for="first_name"
                            class="block  text-sm font-medium text-gray-900 dark:text-gray-300 qualification-bech qualification-main"
                          >
                            {inde[2]}
                          </label>

                          <div className="invitecandidate-main-button">
                            <div className="invitecandidate-button">
                              <button
                                id={inde[4]}
                                type="button"
                                class="text-white   font-medium rounded-lg text-sm px-12 py-3 mr-3 mb-3  candidate-invite-button"
                                onClick={(e) => inviteCandidates(e)}
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
                          {inde[3]}
                        </label>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {isOpen && (
              <Successpopup
                content={
                  <>
                    <b className="invite-success-popup">Successfull Invited</b>
                  </>
                }
                handleClose={togglePopup}
              />
            )}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="test-loader">
        <LoadingIcon />
      </div>
    );
  }
}
export default InviteCandidate;
