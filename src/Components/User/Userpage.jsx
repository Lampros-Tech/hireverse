import "./user.css";
import React from "react";
import { useState, useEffect, useRef } from "react";
import MyTimer from "./Mytimer";
import UserQuestion from "./Userquestion";
import UserAnswer from "./userAnswer";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom';
import axios from "axios";
import env from "react-dotenv";
import $ from "jquery";
import Timer from "./Timer";
import { useAccount } from "wagmi";
// import { stringify } from "flatted";
import { toJSON } from "flatted";
// Data
// import { userQuestionData } from '../Data/userQuestion';
import { Squash as Hamburger } from "hamburger-react";

// Images
// import a from '../Images/profilePicture.png'
import companyLogo from "../Images/Lampros_Tech_Logo2.png";
import companyLogoResponsive from "../Images/LT_logo.png";

const Userpage = () => {
  const Navigator = useNavigate();
  const cookies = new Cookies();
  const [allQuestions, setAllQuestions] = useState([]);
  const [countDown, setCountDown] = useState(null);
  const { address } = useAccount();
  // Whole Data
  // const [data, setData] = useState(userQuestionData[0].module.categories)
  const [setQuestion, setSetQuestion] = useState();
  const [cookieTime, setCookieTime] = useState();
  const [currentQuestion, setCurrentQuestion] = useState();
  const [questionArray, setQuestionArray] = useState();
  const [questionsArray, setQuestionsArray] = useState([]);
  const [selectedSets, setSelectedSets] = useState([]);
  const [attendedQuestions, setAttendedQuestions] = useState([]);
  const [attendedAnswer, setAttendedAnswer] = useState([]);
  const [categoryNum, setCategoryNum] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const [timer, setTimer] = useState();

  // Side Bar
  const [isOpen, setOpen] = useState(false);

  const get_questions = () => {
    // console.log(cookies.get('Token'));
    const data = {};
    axios
      .post(`${env.API_URI}/getTestQuestion`, {
        assessment_id: "6",
      })
      .then((res) => {
        console.log("start test");
        console.log(res.data.questions);
        let QuestionData = [];
        // console.log(res.data.data.categories);
        setCategoryNum(res.data.questions);
        QuestionData = res.data.questions;
        console.log(QuestionData);
        setAllQuestions(QuestionData);
        setQuestionArray(QuestionData.length);
        // console.log(QuestionData.length);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(questionArray);
  };

  function checkEndStatus() {
    // axios
    //   .get(`${env.API_URI}/getteststatus`, {
    //     headers: { token: cookies.get("Token") },
    //   })
    //   .then((res) => {
    //     const a = res.data.data;
    //     console.log(a);
    //     if (a === true) {
    //       console.log("You have already taken the test.");
    //       Navigator("/test_taken");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  function logKey(e) {
    if (e.keyCode === 27) {
      alert("Pyltjhjybhjhj");
    }
    e.preventDefault();
  }

  // window.document.addEventListener("keypress", function (event) {
  //     if (event.keyCode == 27) {
  //         alert('hi.');
  //     }
  // });

  useEffect(() => {
    attendedQuestions.push(0);
    get_questions();
    toggleFullScreen();
    document.addEventListener("keydown", logKey);
  }, []);

  useEffect(() => {
    const newTime = new Date();
    newTime.setSeconds(newTime.getSeconds() + 3600);
    setTimer(newTime);
  }, []);

  useEffect(() => {
    checkEndStatus();
  }, []);

  useEffect(() => {
    // if (!cookies.get("Token")) {
    //   window.location.reload();
    //   Navigator("/errorLogin");
    // }

    document.onkeydown = function (e) {
      return (e.which || e.keyCode) != 116;
    };

    const disableselect = (e) => {
      return false;
    };
    document.onselectstart = disableselect;
    document.onmousedown = disableselect;

    const arr = [];
    for (var i = 0; i < questionArray; i++) {
      if (i == 0) {
        arr.push({
          q_no: i,
          status: true,
          answered: false,
          question: allQuestions[i],
          UserAns: null,
        });
      } else {
        arr.push({
          q_no: i,
          status: false,
          answered: false,
          question: allQuestions[i],
          UserAns: null,
        });
      }
    }
    setQuestionsArray(arr);
    setCurrentQuestion(arr[0]);
    window.onbeforeunload = function () {
      return "Are you sure you want to leave?";
    };
  }, [questionArray]);

  useEffect(() => {
    const stored = questionsArray;
    addFinalQuestion(stored);
  }, [questionsArray]);

  const addFinalQuestion = (stored) => {
    UserAnswer(stored);
  };

  //Previous Button

  // const previous = (val) => {
  //     try {
  //         const data = userQuestionData[0].questions[val]
  //         setSetQuestion(data)
  //     }
  //     catch (e) {
  //         console.log(e)
  //         const data = userQuestionData[0].questions[val + 1]
  //         setSetQuestion(data)
  //     }
  // }

  const next = (val) => {
    // let prevVal = val;
    while (attendedQuestions.includes(val)) {
      // for(var i=0;i<attendedQuestions.length;i++){
      //     console.log(val);
      //     if(!attendedQuestions.includes(i)){
      //         val = i;
      //         break;
      //     }
      // }
      val = val + 1;
      console.log("Included");
      console.log("Attended Questions:", attendedQuestions);
      if (val === questionArray) {
        if (attendedQuestions.length === questionArray) {
          setPopUp(true);
          // alert('You have attented all the Question.')
          break;
        }
        next(1);
      }
    }

    const newArr = [...questionsArray];
    console.log("NEW ARRAY:", newArr);
    newArr[val].status = true;
    setCurrentQuestion(newArr[val]);
    setSelectedSets(...newArr);
    setAttendedQuestions(
      [...attendedQuestions, val].sort(function (a, b) {
        return a - b;
      })
    );
    console.log(allQuestions);
    const data = allQuestions[val];
    setSetQuestion(data);
    addFinalQuestion(questionsArray);
  };

  const chooseAnswer = (questionNo, questionData, selectedAns) => {
    console.log(questionData);
    // questionNo = questionNo;
    if (questionNo === 1) {
      const newArr = [...questionsArray];
      newArr[questionNo].status = true;
      newArr[questionNo].answered = true;
      newArr[questionNo].QuestionData = questionData;
      newArr[questionNo].UserAns = selectedAns;
      addFinalQuestion(newArr);
      console.log("CHOOSE ANSWER:", newArr);
    } else {
      const newArr = [...questionsArray];
      newArr[questionNo].answered = true;
      newArr[questionNo].QuestionData = questionData;
      newArr[questionNo].UserAns = selectedAns;
      addFinalQuestion(newArr);
      console.log("CHOOSE ANSWER:", newArr);
      // console.log(newArr[questionNo]);
    }
  };

  const takeQuestionNo = (value) => {
    const questions = allQuestions;
    const singleQuestion = questions.filter((i, index) => {
      if (index === value) {
        return i;
      }
    });
    setSetQuestion(singleQuestion[0]);
    const newArr = [...questionsArray];
    newArr[value].status = true;
    setCurrentQuestion(newArr[value]);
    setSelectedSets(...newArr);
    setAttendedQuestions(
      [...attendedQuestions, value].sort(function (a, b) {
        return a - b;
      })
    );
    // console.log([...attendedQuestions, value].sort(function (a, b) { return a - b }));
    addFinalQuestion(questionsArray);
  };

  useEffect(() => { }, [attendedQuestions]);

  // Final Submit of code.

  const finalSubmit = () => {
    addFinalQuestion(questionsArray);
    console.log(questionsArray);

    const data = questionsArray.map((i, index)=>{
      return({q_no:i.q_no, answered:i.answered,question:i.question, UserAns:i.UserAns, status:i.status})
    })

    // console.log(data);

    const reqData = {
      assessment_id: 6,
      candidate_wallet_address: address,
      duration: 8,
      data: data
    };

    console.log(reqData);
    axios.post(`${env.API_URI}/getResult`, reqData)
      .then((res) => {
        // console.log(res);
        console.log(res.data.percentage)
        cookies.set("percentage", res.data.percentage);
      })
      .catch((err) => {
        console.log(err);
      })
      Navigator("/test_taken");
    // cookies.remove("Timer");
  };

  if (questionArray > 0) {
    console.log("in else...");
    return (
      <>
        <div className="u_mainBody">
          {/* NAVBAR */}
          <div className="u_navbar">
            <div id="u_imageDeails">
              <div className="u_logo">
                <img
                  alt="Company Logo"
                  id="u_profilePic"
                  src="DEHITAS.png"
                ></img>
              </div>
              <div className="u_logoResponsive">
                <img
                  alt="Company Logo"
                  id="u_profilePicResponsive"
                  src="DEHITAS-SMALL.png"
                ></img>
              </div>

              <div className="u_welcomeText">Welcome User</div>
              {/* <div id='u_examTypeItem'>Logical Reasoning Test</div> */}
            </div>
            <div className="u_timer">
              <MyTimer expiryTimestamp={timer} />
            </div>
          </div>

          {/* DASHBOARD */}
          <div className="u_mainBoard">
            <div className="u_gridContainer">
              <div className="u_gridItem1">
                {/* <div className='u_examType'></div> */}
                <UserQuestion
                  item={currentQuestion}
                  next={next}
                  last={questionArray}
                  chooseAnswer={chooseAnswer}
                />
                {/* <UserQuestion item={setQuestion} next={next} previous={previous} last={questionArray} chooseAnswer={chooseAnswer} /> */}
                {/* <UserQuestion item={setSet}  next={next} previous={previous} last={questionArray} chooseAnswer={chooseAnswer} />*/}
              </div>
              <div className="u_gridItem2">
                <div className="u_attemptSummary">Attempt Summary</div>
                <div className="u_markedQuestion">
                  {questionsArray.map((element, index) => {
                    return (
                      <div key={index} style={{ cursor: "not-allowed" }}>
                        {element.status ? (
                          <div
                            style={{
                              backgroundColor: "#134e6f",
                              color: "#eff0ee",
                              opacity: "0.8",
                              pointerEvents: "none",
                            }}
                            className="u_clipArtNo"
                            id="u_markedQuestion"
                            key={index}
                          >
                            <p style={{ fontWeight: "bold" }}>{index + 1}</p>
                          </div>
                        ) : (
                          <div
                            style={{ backgroundColor: "white" }}
                            className="u_clipArtNo"
                            onClick={() => {
                              takeQuestionNo(index);
                            }}
                            key={index}
                          >
                            <p>{index + 1}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="u_meaningGridBox">
                  <div className="u_meaingGridItems">
                    <div className="u_attempted"></div>
                    <div className="u_textMeaning">Attempted</div>
                  </div>
                  <div className="u_meaingGridItems">
                    <div className="u_unAttempted"></div>
                    <div className="u_textMeaning">Not Attempted</div>
                  </div>
                  {/* <div className='u_meaingGridItems'>
                                    <div className='u_reviewed'></div><div className='u_textMeaning'>To be reviewed</div>
                                </div>
                                <div className='u_meaingGridItems'>
                                    <div className='u_notViewed'></div><div className='u_textMeaning'>Not viewed yet</div>
                                </div> */}
                </div>

                {/* <div>
                  <table className="u_catagoryWiseQuestion">
                    <tbody>
                      <tr>
                        <td>Verbal&nbsp;&nbsp;</td>
                        <td>Logical&nbsp;&nbsp;</td>
                        <td>Judgement</td>
                      </tr>
                      <tr>
                                                <td>{categoryNum[0]}</td>
                                                <td>{categoryNum[1]}</td>
                                                <td>{categoryNum[2]}</td>
                                            </tr>
                    </tbody>
                  </table>
                </div> */}
                <div>
                  <button
                    className="u_submitButton"
                    onClick={() => {
                      finalSubmit();
                      checkEndStatus();
                    }}
                  >
                    End Test
                  </button>
                </div>
              </div>
              <Hamburger toggled={isOpen} toggle={setOpen} id="u_hamburger" />

              {/* <div id="#u_hamburgerbtn" >
                            <img className="ham" src={Hamburgerbtn} onClick={() => { setIsopen(!isOpen) }}></img>
                        </div> */}
              {isOpen === true ? (
                <>
                  <div className="u_sideBar">
                    <div className="u_attemptSummarySideBar">
                      Attempt Summary
                    </div>
                    <div className="u_markedQuestionSideBar">
                      {questionsArray.map((element, index) => {
                        return (
                          <div key={index} style={{ cursor: "not-allowed" }}>
                            {element.status ? (
                              <div
                                style={{
                                  backgroundColor: "green",
                                  opacity: "0.8",
                                  pointerEvents: "none",
                                }}
                                className="u_clipArtNo"
                                id="u_markedQuestion"
                                key={index}
                              >
                                <p style={{ fontWeight: "bold" }}>
                                  {index + 1}
                                </p>
                              </div>
                            ) : (
                              <div
                                style={{ backgroundColor: "#134e6f" }}
                                className="u_clipArtNo"
                                onClick={() => {
                                  takeQuestionNo(index);
                                }}
                                key={index}
                              >
                                <p>{index + 1}</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    <div className="u_meaningGridBoxSideBar">
                      <div className="u_meaingGridItems">
                        <div className="u_attempted"></div>
                        <div className="u_textMeaning">Attempted</div>
                      </div>
                      <div className="u_meaingGridItems">
                        <div className="u_unAttempted"></div>
                        <div className="u_textMeaning">Not Attempted</div>
                      </div>
                    </div>

                    <div>
                      {/* <table className="u_responsive_catagoryWiseQuestion">
                        <tr>
                          <td>Verbal&nbsp;&nbsp;</td>
                          <td>Logical&nbsp;&nbsp;</td>
                          <td>Judgement</td>
                        </tr>
                        <tr>
                                                        <td>{categoryNum[0]}</td>
                                                        <td>{categoryNum[1]}</td>
                                                        <td>{categoryNum[2]}</td>
                                                    </tr>
                      </table> */}
                    </div>
                    <div>
                      <button
                        className="u_submitButtonSideBar"
                        onClick={() => {
                          finalSubmit();
                          checkEndStatus();
                        }}
                      >
                        End Test
                      </button>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
        <div className="u_mainBodyResponsive">
          <h1>This Website is not supported in Mobile.</h1>
        </div>
        {popUp == true ? (
          <div className="u_popUpAttendedQuestion">
            <div className="u_popUpText">
              You have attented all the question. You can sumbit your answer to
              click on End Test Button.
            </div>
            <button
              className="u_popButton"
              onClick={() => {
                finalSubmit();
                checkEndStatus();
              }}
            >
              END TEST
            </button>
          </div>
        ) : null}
      </>
    );
  } else {
    console.log("in if...");
    console.log(questionsArray);
    return "Loading .......";
  }
};

export default Userpage;
