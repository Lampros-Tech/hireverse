import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import "../Images/close-svgrepo-com.svg";
import { Navigate, useNavigate } from "react-router-dom";
import profilePicture from "../Images/ProfileLetter.svg";
import companyLogo from "../Images/Lampros_Tech_Logo2.png";
import axios from "axios";
import env from "react-dotenv";
import useQuestions from "../hooks/useQuestions";
import { ethers } from "ethers";
import { connect } from "@tableland/sdk";
// import useActive from './userActive';

// import useActive from './userActive';
import userAnswer from "./userAnswer";
import contract from "../../Contracts/artifacts/superfluid_contract.json";
export const CONTRACT_ADDRESS_POLYGON =
  "0x1fAFFec79B44Ae0a4A2bB35a02E056B69489Cfc4";

function Landingpage() {
  const [tempData, setTempData] = useState([]);
  const [credError, setCredError] = useState(false);
  const [credErrorString, setCredErrorString] = useState("");
  const navigator = useNavigate();
  var urlSegment = null;

  useEffect((e) => {
    // Pointer Event None
    window.onload = function () {
      document.onkeydown = function (e) {
        return (e.which || e.keyCode) != 116;
      };

      // document.addEventListener("keydown", function(event) {
      //     if(event.keyCode === 27){
      //        //Esc key was pressed
      //        alert('as')
      //    }
      // });
    };

    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });

    const disableselect = (e) => {
      return false;
    };
    document.onselectstart = disableselect;
    document.onmousedown = disableselect;
  }, []);

  const storeTime = async() => {
    const currentTime = new Date().toLocaleString();
    //getting all the data from tableland

    console.log("loading data from tableland");
    const tableland = await connect({
      network: "testnet",
      chain: "polygon-mumbai",
    });
    const job_table = "job_table_80001_2018";
    const company_table = "company_table_80001_1730";
    const assessment_table = "creators_assesment_table_80001_2849";
    const readRes = await tableland.read(
      `SELECT company_id,assesment_id FROM ${job_table} where job_id=8`
    );
    let company_id = readRes["rows"][0][0];
    let assessment_id = readRes["rows"][0][1];
    const response = await tableland.read(
      `SELECT wallet_address FROM ${company_table} where company_id=${company_id}`
    );
    let company_address = response["rows"][0][0];
    const res = await tableland.read(
      `SELECT creators_id FROM ${assessment_table} where assesment_id=${assessment_id}`
    );
    let creator_id = res["rows"][0][0];
    const res1 = await tableland.read(
      `SELECT wallet_address FROM creators_table_80001_2155 where creator_id=${creator_id}`
    );
    const creator_address = res1["rows"][0][0];
    const res2 = await tableland.read(
      `SELECT candidate_id FROM candidate_table_80001_1648 where wallet_address='0x19193e458590f15A0180042E3518634165BADe39'`
    );
    const candidate_id = res2["rows"][0][0];
    //contract integration

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
        if (chainId === 80001) {
          const con = new ethers.Contract(
            CONTRACT_ADDRESS_POLYGON,
            contract,
            signer
          );

          const tx = await con.startTest(
            creator_address,
            company_id,
            8,
            candidate_id,
            "0x19193e458590f15A0180042E3518634165BADe39"
          );
          tx.wait();
        }
      }
    } catch (error) {
      console.log(error);
    }
    // navigator("/test");
    // let json_data = {
    //   job_id: 8,
    //   wallet: "0x19193e458590f15A0180042E3518634165BADe39",
    // };
    navigator("/test");
  };

  {
    return (
      <>
        <div className="u_landingPage">
          {/* 1 */}
          <div className="u_sideNavabar" id="u_sideID">
            <div className="u_sideNavDetails">
              <div>
                <img
                  alt="CompanyLogo"
                  id="u_CompanyLogo"
                  src="./DEHITAS.png"
                ></img>
              </div>
              {/* <div className="u_profileInfo">
                <div className="u_welcomeUser">Welcome</div>
                <div className="u_profilePic" id="u_landingProfile">
                  <div className="u_profileText">RR</div>
                </div>
                <img alt='ProfilePic' id="u_landingProfile" src={profilePicture}></img>
              </div> */}
              {/* <div id="u_sideNavbarItem">Start</div>
                            <div id="u_sideNavbarItem">Aptitude</div>
                            <div id="u_sideNavbarItem">Reasoning</div>
                            <div id="u_sideNavbarItem">Programming</div>
                            <div id="u_sideNavbarItem">End</div> */}
            </div>
            {/* <div><img src={sideArrow}></img></div> */}
          </div>

          {/* 2
                <div className='u_profileInfo'>
                    <div className='u_welcomeUser'>Welcome, Avi Shihora</div>
                    <img id="u_landingProfile" src={profilePicture}></img>
                </div> */}

          {/* 2 */}
          <div className="u_dashBoard">
            <h1 className="u_testName">Online Assessment</h1>
            <div id="u_landingtext">
              {" "}
              Welcome To Divine Tech Online Exam Portal. Kindly, Read all the
              instructions carefully. Candidates are requested to take the test
              honestly, ethically, and should follow all the instructions.
            </div>
            <p className="u_heading">Instruction</p>
            <div className="u_instruction">
              <p>1. Exam has total 20 Questions.</p>
              <p>2. All questions are compulsory and each carries One mark.</p>
              <p>3. Total Time for exam is 60 Minutes.</p>
              <p>
                4. Negative marking is applicable for wrong or unchecked
                answers.
              </p>
              <p>
                5. The students just need to click on the right choice / correct
                option from the multiple choices /options given with each
                question. For Multiple Choice Questions, each question has four
                options, and the candidate has to click the appropriate option.
              </p>
            </div>
            <h1 className="u_wish">Best Of Luck For Your Assessment</h1>

            <button
              className="u_startButton"
              onClick={() => {
                storeTime();
              }}
            >
              Start
            </button>
          </div>
        </div>
        {credError ? (
          <div
            style={{
              position: "fixed",
              backgroundColor: "#262626",
              color: "white",
              right: "15px",
              bottom: "10px",
              padding: "10px",
            }}
          >
            <span>{credErrorString}</span>
          </div>
        ) : null}
      </>
    );
  }
}
export default Landingpage;
