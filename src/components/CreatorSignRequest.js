import { useState, useEffect } from "react";
import "./styles/login.css";
import logo from "./assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import {
  create_creators_question_table,
  create_creators_assessment_table,
  create_creators_repo_table,
} from "./TableQueries";
import { useConnect, useAccount } from "wagmi";

function CreatorSignRequest() {
  let navigate = useNavigate();

  const [value, setValue] = useState("");
  const [questionTable, setQuestionTable] = useState("");
  const [repoTable, setRepoTable] = useState("");
  const [questionTableCheck, setQuestionTableCheck] = useState(false);
  const address = useAccount();
  
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const getQuestionTable = async() =>{
    const data = await   create_creators_question_table()
    setQuestionTable(data.name);
    
    console.log(data.name);
  }
  const getRepoTable = async() =>
  {
    const data = await create_creators_repo_table()
    // console.log(data);
    setRepoTable(data);
    console.log(repoTable)

  }
  const sendTableName=() =>
  {
    const data = {
      walletAddress:address,
      data: {
        question_table:questionTable,
        repo_table: repoTable
      }

    }
      axios.post(`${process.env.REACT_APP_API_URL}/creator/addTableNames`,data )
      .then((res)=>{
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  useEffect(() => {
    if(questionTable){
      console.log(questionTable);
      setQuestionTableCheck(true)
      
      
    }
  }, [questionTable])
  return (
    <>
      <section className="login-main">
        <img className="f-logo-img" src={logo} alt="logo" />
        <section className="login-inside">
          <section className="wrap-role">
            <div className="email-pic role-guide">
              Some Information
              {/* <img src={emailpic} alt="img" /> */}
            </div>

            {/* <form action="" className="email-form"> */}
            {/* <h1 className="email-form-title">Request</h1> */}
            <div className="email-form">
              <div className="wrap-input validate-input">
                <button
                  className={questionTableCheck? "table-button cursor-not-allowed" : "table-button"}
                  onClick={() => {getQuestionTable()} }
                  disabled={questionTableCheck}
                >
                  Add Question Table
                </button>
                <button
                  className="table-button"
                  onClick={() => getRepoTable()}
                >
                  Add Repo Table
                </button>
              </div>
              <div className="btn-container">
                <button
                  className="email-verify-button"
                  onClick={() => {
                    sendTableName();
                  }}
                >
                  Skip
                </button>
              </div>
            </div>
            {/* </form> */}
          </section>
        </section>
      </section>
    </>
  );
}

export default CreatorSignRequest;
