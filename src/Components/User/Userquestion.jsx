import "./user.css";
import { useEffect, useState } from "react";
import parse from "html-react-parser";

const UserQuestion = ({ item, next, previous, last, chooseAnswer }) => {
  // const [options, setOptions] = useState(item[0].question.option) // Options form the data
  const [selected, setSelected] = useState();
  const [selectedAns, setSelectedAns] = useState();
  const [example, setExample] = useState([]);
  // const options = [{ 1: 'A' }, { 2: 'B' }, { 3: 'C' }, { 4: 'D' }, { 5: 'E' }]
  useEffect(() => {
    console.log("Item:", item);
    // setOptions(item.currentAnswer)
    setSelected("");
  }, [item]);

  useEffect(() => {
    console.log(item);
  }, []);

  useEffect(() => {
    // console.log(selected)      // log
  }, [selected]);

  useEffect(() => {
    // console.log(selectedAns);  // log
  }, [selectedAns]);

  useEffect((e) => {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
    const disableselect = (e) => {
      return false;
    };
    document.onselectstart = disableselect;
    document.onmousedown = disableselect;
  }, []);
  // console.log(answers)
  if (item !== undefined) {
    return (
      <>
        <div className="u_qustionPart">
          <div className="u_questionDiv">
            {console.log(item)}
            <div className="u_questionNo">{item.q_no + 1}</div> <br />
            {item.question.set ? (
              <p>Question: {parse(item.question.set)}</p>
            ) : null}
            <br />
            <p className="u_questionNo">{parse(item.question.question)}</p>{" "}
            <br />
            {/* <p>{item.set}</p>
                            <p>{item.questionSet}</p>
                            <p>{item.question}</p> */}
          </div>
          <div className="u_optionDiv">
            {item.question.options.map((i, index) => {
              if (i) {
                return (
                  <div
                    className="u_option"
                    value={i}
                    style={
                      index === selected
                        ? { backgroundColor: "#262626", color: "white" }
                        : null
                    }
                    key={index}
                    // onClick={() => { chooseAnswer(i); setSelected(index); setSelectedAns(i); }} >
                    onClick={(e) => {
                      chooseAnswer(item.q_no, item, i);
                      setSelected(index);
                    }}
                  >
                    <div className="u_optionAlpha">{index + 1}</div>
                    <div className="u_optionText">{parse(i)}</div>
                  </div>
                );
              }
            })}
          </div>
          <div className="u_buttons">
            <div>
              {/* <button
                        // className={item.number < 2 ? "u_buttonPreviousDisable" : 'u_buttonPrevious'}
                        className='u_buttonPrevious'
                        onClick={() => { previous(item.number - 2) }}>
                        Previous
                    </button> */}
            </div>
            <div>
              <button
                className={
                  last === item.q_no ? "u_buttonNextDisable" : "u_buttonNext"
                }
                // className="u_buttonNext"
                onClick={() => {
                  next(item.q_no);
                }}
              >
                Next
              </button>

              {/* <button
                            className={last === item.number ? 'u_buttonNextDisable' : "u_buttonNext"}
                            // className="u_buttonNext"
                            onClick={() => { next(item.number); chooseAnswer(selectedAns, item.number) }}>
                            Next
                        </button> */}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return "Loading.............";
  }
};

export default UserQuestion;
