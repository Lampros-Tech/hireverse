import React, { useEffect, useState, useRef, useCallback, useContext } from "react";
import "../creator/Addquestion.css"
import axios from "axios";
import env from "react-dotenv";
// import { EditorState, convertToRaw, convertFromHTML, convertFromRaw } from "draft-js";
// import { useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import parser from "html-react-parser";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Backlogo from "./Images/back_logo";
import Fyi from "./Images/information.svg";
import Cookies from "universal-cookie";
import Addbtn from "./Images/add-svgrepo-com.svg";


export default function AddQuestion() {
  // let navigate = useNavigate();
  const cookies = new Cookies();
  const [state, setState] = useState(cookies.get("AdminToken"));
  // const [optionList, setOptionList] = useState([]);
  const [setNumber, setSetNumber] = useState(null);
  const [generPlus, setGenerPlus] = useState(false);
  const [customeGener, setCoustomeGener] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [category, setCategory] = useState(null);

  const [correct1, setCorrect1] = useState(-1);
  const [correct2, setCorrect2] = useState(-1);
  
  const [oneQuestion, setOnequestion] = useState("");
  function Switch() {
    setOnequestion("1")
  }
  function Switch1() {
    setOnequestion("")
  }
  

  

  const getCollections = useCallback(() => {
    axios.get(`${env.API_URI}/get_collection`, { headers: { token: cookies.get("AdminToken") } })
      .then((res) => {
        // console.log(res.data.data);
        setSubjects(res.data.data);
        
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  


  //single Question
  const editorRef_singleQ = useRef(null);
  const editorRef_singleoption1 = useRef(null);
  const editorRef_singleoption2 = useRef(null);
  const editorRef_singleoption3 = useRef(null);
  const editorRef_singleoption4 = useRef(null);

  const singleQuestion = () => {
    const parseHtml = editorRef_singleQ.current.getContent();
    console.log(parseHtml, category)
    if (!parseHtml || !category || correct1 === -1) {
      return
    }
    const options = [
      editorRef_singleoption1.current.getContent(),
      editorRef_singleoption2.current.getContent(),
      editorRef_singleoption3.current.getContent(),
      editorRef_singleoption4.current.getContent()
    ]
    const data = {
      set_no: null,
      set: null,
      question: editorRef_singleQ.current.getContent(),
      options: options,
      correct: options[correct1],
      category: category
    }

    axios.post(`${env.API_URI}/add_questions`, data, { headers: { token: cookies.get("AdminToken") } })
      .then((res) => {
        console.log("hello");
        editorRef_singleoption1.current.setContent("");
        editorRef_singleoption2.current.setContent("");
        editorRef_singleoption3.current.setContent("");
        editorRef_singleoption4.current.setContent("");
        editorRef_singleQ.current.setContent("");
        setCategory("");
        setCorrect1(-1);
        
      })
      .catch((err) => {
        console.log(err)
      })
  };

  //Set of Question
  const editorRef_mainQ = useRef(null);
  const editorRef_subQ = useRef(null);
  const editorRef_setoption1 = useRef(null);
  const editorRef_setoption2 = useRef(null);
  const editorRef_setoption3 = useRef(null);
  const editorRef_setoption4 = useRef(null);

  //Function to add Genre

  const addGenre = () => {

    if (!customeGener) {
      return
    }
    const data = {
      name: customeGener
    }
    axios.post(`${env.API_URI}/create_collection`, data, { headers: { token: cookies.get("AdminToken") } })
      .then((res) => {
        console.log("hello")
        getCollections();
        setGenerPlus(false);
      })
      .catch((err) => {
        setGenerPlus(false);
        console.log(err.response.data.message);
      })
  }

  //Function to send data to Backend
  const setQuestion = () => {

    const parseMainHtml = editorRef_mainQ.current.getContent();
    const parseSubHtml = editorRef_subQ.current.getContent();
    if (!parseMainHtml || !parseSubHtml || !category || !setNumber || correct1 === -1) {
      return
    }
    const options = [
      editorRef_setoption1.current.getContent(),
      editorRef_setoption2.current.getContent(),
      editorRef_setoption3.current.getContent(),
      editorRef_setoption4.current.getContent()
    ]
    const data = {
      set_no: setNumber,
      set: editorRef_mainQ.current.getContent(),
      question: editorRef_subQ.current.getContent(),
      options: options,
      correct: options[correct2],
      category: category
    }

    axios.post(`${env.API_URI}/add_questions`, data, { headers: { token: cookies.get("AdminToken") } })
      .then((res) => {
       console.log("hello")
        editorRef_setoption1.current.setContent("");
        editorRef_setoption2.current.setContent("");
        editorRef_setoption3.current.setContent("");
        editorRef_setoption4.current.setContent("");
        // editorRef_mainQ.current.setContent("");
        editorRef_subQ.current.setContent("");
        setCorrect2(-1);
        // setCategory("");
      })
      .catch((err) => {
        console.log(err)
      })

  };

  return (
    <>
      {/* <div className="selection"> */}
        {/* <div onClick={() => { Redirect() }} className="backBtn"><Backlogo comStyle={{ width: '30px', height: '30px', cursor: 'pointer' }} /></div> */}
        {/* <button onClick={() => { Switch1() }} className="single">Enter Question</button>
        <button onClick={() => { Switch() }} className="single" >Enter set of Question</button>
      </div> */}
      <div className="Add-Questionspage">
        <div className="Add-Enter_Questions">
          <div className="Add-type_of_Question">
            <select className="Add-Question-type" defaultValue={""} id="Question" onChange={(e) => { setCategory(e.target.value) }}>
              <option value="">Select genre of Question</option>
              {
                subjects.map((i, index) => (
                  <option value={i} key={index}>{i}</option>
                ))
              }
            </select>
            <div>
              {
                (generPlus === true)
                  ?
                  <div className="Add-custome_gener">
                    <input type="text" className="Add-addgener" onChange={(e) => setCoustomeGener(e.target.value)} />
                    <button className="Add-add_gener_btn" onClick={() => { addGenre() }}  >Add</button>
                  </div>
                  :
                  <img src={Addbtn} className="Add-AddGenre" alt="Genre" onClick={() => {
                    setGenerPlus(true)
                  }} />
              }
            </div>

          </div>
         
            
              {/* // Only for one Question */}
              <div className="Question-parrent">
                <div className="Instruction">
                  Enter Main Question Overehere.
                </div>
                <div>

                </div>
                <div className="Question-field">
                  <input
                    id="my-file"
                    type="file"
                    name="my-file"
                    style={{ display: "none" }}
                    onChange={() => { console.log("data") }}
                  />

                  <Editor
                    apiKey=""
                    onInit={(evt, editor) => (editorRef_singleQ.current = editor)}
                    initialValue="<p></p>"
                    init={{
                      height: 500,
                      menubar: true,
                      plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "code",
                        "help",
                        "wordcount",
                      ],
                      toolbar:
                        "undo redo | blocks | " +
                        "bold italic forecolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | image",
                      image_title: true,
                      automatic_uploads: true,
                      file_picker_types: "image",
                      file_picker_callback: function (callback, value, meta) {
                        if (meta.filetype === "image") {
                          var input = document.getElementById("my-file");
                          input.click();
                          input.onchange = function () {
                            var file = input.files[0];
                            var reader = new FileReader();
                            reader.onload = function (e) {
                              // console.log("name", e.target.result);
                              callback(e.target.result, {
                                alt: file.name,
                              });
                            };
                            reader.readAsDataURL(file);
                          };
                        }
                      },
                      paste_data_images: true,

                      content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                    }}
                  />
                </div>


                <div>
                  <div className="Instruction">
                    Enter option below.
                  </div>
                  <div className="Add-fyi">
                    <span>
                      <img src={Fyi} alt="fyi" className="Add-fyi-image" />
                    </span>
                    <span className="info">Select the correct option using Radio buttons in right. </span>
                  </div>
                  <div className="Add-option-selection">
                    <div className="Add-option-field">
                      <input
                        id="my-file"
                        type="file"
                        name="my-file"
                        style={{ display: "none" }}
                        onChange={() => { console.log("Data") }}
                      />

                      <Editor
                        apiKey=""
                        onInit={(evt, editor) => (editorRef_singleoption1.current = editor)}
                        initialValue="<p></p>"
                        init={{
                          height: 250,
                          menubar: false,
                          plugins: [
                            "advlist",
                            "autolink",
                            "lists",
                            "link",
                            "image",
                            "charmap",
                            "preview",
                            "anchor",
                            "searchreplace",
                            "visualblocks",
                            "code",
                            "fullscreen",
                            "insertdatetime",
                            "media",
                            "table",
                            "code",
                            "help",
                            "wordcount",
                          ],
                          toolbar:
                            "undo redo | blocks | " +
                            "bold italic forecolor | alignleft aligncenter " +
                            "alignright alignjustify | bullist numlist outdent indent | " +
                            "removeformat | image",
                          image_title: true,
                          automatic_uploads: true,
                          file_picker_types: "image",
                          file_picker_callback: function (callback, value, meta) {
                            if (meta.filetype === "image") {
                              var input = document.getElementById("my-file");
                              input.click();
                              input.onchange = function () {
                                var file = input.files[0];
                                var reader = new FileReader();
                                reader.onload = function (e) {
                                  console.log("name", e.target.result);
                                  callback(e.target.result, {
                                    alt: file.name,
                                  });
                                };
                                reader.readAsDataURL(file);
                              };
                            }
                          },
                          paste_data_images: true,

                          content_style:
                            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                        }}
                      />
                    </div>

                    <div className="Add-option1">
                      <input type="radio" id="option2" name="options" value={0} onChange={(e) => { setCorrect1(e.target.value) }} />
                    </div>
                  </div>
                  <div />
                  <div className="Add-option-selection">
                    <div className="Add-option-field">
                      <input
                        id="my-file"
                        type="file"
                        name="my-file"
                        style={{ display: "none" }}
                        onChange={() => { console.log("data") }}
                      />

                      <Editor
                        apiKey=""
                        onInit={(evt, editor) => (editorRef_singleoption2.current = editor)}
                        initialValue="<p></p>"
                        init={{
                          height: 250,
                          menubar: false,
                          plugins: [
                            "advlist",
                            "autolink",
                            "lists",
                            "link",
                            "image",
                            "charmap",
                            "preview",
                            "anchor",
                            "searchreplace",
                            "visualblocks",
                            "code",
                            "fullscreen",
                            "insertdatetime",
                            "media",
                            "table",
                            "code",
                            "help",
                            "wordcount",
                          ],
                          toolbar:
                            "undo redo | blocks | " +
                            "bold italic forecolor | alignleft aligncenter " +
                            "alignright alignjustify | bullist numlist outdent indent | " +
                            "removeformat | image",
                          image_title: true,
                          automatic_uploads: true,
                          file_picker_types: "image",
                          file_picker_callback: function (callback, value, meta) {
                            if (meta.filetype === "image") {
                              var input = document.getElementById("my-file");
                              input.click();
                              input.onchange = function () {
                                var file = input.files[0];
                                var reader = new FileReader();
                                reader.onload = function (e) {
                                  console.log("name", e.target.result);
                                  callback(e.target.result, {
                                    alt: file.name,
                                  });
                                };
                                reader.readAsDataURL(file);
                              };
                            }
                          },
                          paste_data_images: true,

                          content_style:
                            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                        }}
                      />
                    </div>
                    <div className="Add-option1">
                      <input type="radio" id="option2" name="options" value={1} onChange={(e) => { setCorrect1(e.target.value) }} />
                    </div>
                  </div>
                  <div className="Add-option-selection">
                    <div className="Add-option-field">
                      <input
                        id="my-file"
                        type="file"
                        name="my-file"
                        style={{ display: "none" }}
                        onChange={() => { console.log("data") }}
                      />

                      <Editor
                        apiKey=""
                        onInit={(evt, editor) => (editorRef_singleoption3.current = editor)}
                        initialValue="<p></p>"
                        init={{
                          height: 250,
                          menubar: false,
                          plugins: [
                            "advlist",
                            "autolink",
                            "lists",
                            "link",
                            "image",
                            "charmap",
                            "preview",
                            "anchor",
                            "searchreplace",
                            "visualblocks",
                            "code",
                            "fullscreen",
                            "insertdatetime",
                            "media",
                            "table",
                            "code",
                            "help",
                            "wordcount",
                          ],
                          toolbar:
                            "undo redo | blocks | " +
                            "bold italic forecolor | alignleft aligncenter " +
                            "alignright alignjustify | bullist numlist outdent indent | " +
                            "removeformat | image",
                          image_title: true,
                          automatic_uploads: true,
                          file_picker_types: "image",
                          file_picker_callback: function (callback, value, meta) {
                            if (meta.filetype === "image") {
                              var input = document.getElementById("my-file");
                              input.click();
                              input.onchange = function () {
                                var file = input.files[0];
                                var reader = new FileReader();
                                reader.onload = function (e) {
                                  console.log("name", e.target.result);
                                  callback(e.target.result, {
                                    alt: file.name,
                                  });
                                };
                                reader.readAsDataURL(file);
                              };
                            }
                          },
                          paste_data_images: true,

                          content_style:
                            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                        }}
                      />
                    </div>
                    <div className="Add-option1">
                      <input type="radio" id="option2" name="options" value={2} onChange={(e) => { setCorrect1(e.target.value) }} />
                    </div>
                  </div>
                  <div className="Add-option-selection">
                    <div className="Add-option-field">
                      <input
                        id="my-file"
                        type="file"
                        name="my-file"
                        style={{ display: "none" }}
                        onChange={() => { console.log("Data") }}
                      />

                      <Editor
                        apiKey=""
                        onInit={(evt, editor) => (editorRef_singleoption4.current = editor)}
                        initialValue="<p></p>"
                        init={{
                          height: 250,
                          menubar: false,
                          plugins: [
                            "advlist",
                            "autolink",
                            "lists",
                            "link",
                            "image",
                            "charmap",
                            "preview",
                            "anchor",
                            "searchreplace",
                            "visualblocks",
                            "code",
                            "fullscreen",
                            "insertdatetime",
                            "media",
                            "table",
                            "code",
                            "help",
                            "wordcount",
                          ],
                          toolbar:
                            "undo redo | blocks | " +
                            "bold italic forecolor | alignleft aligncenter " +
                            "alignright alignjustify | bullist numlist outdent indent | " +
                            "removeformat | image",
                          image_title: true,
                          automatic_uploads: true,
                          file_picker_types: "image",
                          file_picker_callback: function (callback, value, meta) {
                            if (meta.filetype === "image") {
                              var input = document.getElementById("my-file");
                              input.click();
                              input.onchange = function () {
                                var file = input.files[0];
                                var reader = new FileReader();
                                reader.onload = function (e) {
                                  console.log("name", e.target.result);
                                  callback(e.target.result, {
                                    alt: file.name,
                                  });
                                };
                                reader.readAsDataURL(file);
                              };
                            }
                          },
                          paste_data_images: true,

                          content_style:
                            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                        }}
                      />
                    </div>
                    <div className="Add-option1">
                      <input type="radio" id="option2" name="options" value={3} onChange={(e) => { setCorrect1(e.target.value) }} />
                    </div>
                  </div>
                </div>
                <button className="Add-submit" onClick={() => { singleQuestion(); }}>
                  Add Question
                </button>
              </div>
          
        </div>
      </div>
    </>
  )

}
