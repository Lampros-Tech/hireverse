import { useEffect, useRef, useState } from 'react'
// import EditQuestion from '../'
// import Questions from './Data/Question'
import $ from 'jquery'
import 'jquery/dist/jquery.min.js'
import 'datatables.net-dt/js/dataTables.dataTables'
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import { useNavigate } from "react-router-dom";
import Backlogo from "./Images/back_logo";
import axios from 'axios';
import Cookies from 'universal-cookie';
import env from "react-dotenv";
import parse from "html-react-parser";
import closebtn from "../creator/Images/closebtn.png";
import Editimg from './Images/edit.png';
import Delete from './Images/delete.png';


function Viewquestion() {
  // console.log(Questions)
  let navigate = useNavigate();
  const [Edit, setEdit] = useState(false);
  const [id, setId] = useState(null);
  const [qCategory, setQCategory] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [deleteAlert, showDeleteAlert] = useState(false);
  const [delId, setDelId] = useState(null);
  const [delCategory, setDelCategory] = useState(null);
  const cookie = new Cookies();
  // useEffect(() => {
  //   if (!cookie.get("AdminToken")) {
  //     navigate("/");
  //     window.location.reload();
  //   }
  //   getAllQuestions();
  // }, []);

  function Editquestion(index, category) {
    setId(index);
    setQCategory(category);
    setEdit(true);
  }

  const getAllQuestions = () => {
    axios.get(`${env.API_URI}/show_questions`, { headers: { token: cookie.get("AdminToken") } })
      .then((res) => {
        console.log(res.data.data);
        setQuestions(res.data.data);
      })
  }

  const deleteQuestion = (index, category) => {
    console.log(index, category);
    const data = {
      id: index,
      category: category
    }
    axios.post(`${env.API_URI}/delete_question_by_id`, data, { headers: { token: cookie.get("AdminToken") } })
      .then((res) => {
        // console.log(res);
        showDeleteAlert(false);
        getAllQuestions();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function closeEdit() {
    setEdit(false);
  }
  function Redirect() {
    navigate("/landing")
  }
  useEffect(() => {
    console.log(Edit)
  }, [Edit])

  useEffect(() => {
    $(document).ready(function () {
      $('#table_id').DataTable({
        columnDefs: [{
          orderable: false,
          className: 'select-checkbox',
          targets: 0,
        }],
        select: {
          style: 'os',
          selector: 'td:first-child',
        },
        order: [[1, 'asc']],
        retrieve: true,
        // lengthMenu: [[25, 35, 50, -1], [25, 35, 50, "All"]]
      })
    })
  }, [questions])

    return (
      <div className="question-List">
        <div onClick={() => { Redirect() }} className="backBtn-preview"><Backlogo comStyle={{ width: '30px', height: '30px', cursor: 'pointer' }} /></div>
        <h1 style={{ textAlign: 'center' }}>All Questions</h1>
        <table id="table_id" className="display ">
          <thead>
            <tr>
              <th>Sr no.</th>
              <th>Category</th>
              <th>Question</th>
              <th>Correct Answer</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>

            {questions.map((Question, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{Question.category}</td>
                  <td>{parse(Question.question)}</td>
                  <td>{parse(Question.correct)}</td>
                  <td className="Edit"><img className="a_editUser" onClick={() => { Editquestion(Question._id, Question.category) }} src={Editimg} /></td>
                  <td className="s"><img className="a_editUser" onClick={() => { setDelId(Question._id); setDelCategory(Question.category); showDeleteAlert(true); }} src={Delete} /></td>
                </tr>
              )
            })}

          </tbody>
        </table>
        {
          Edit
            ?
            <div className='editQuestion'>
              {/* <EditQuestion id={id} category={qCategory} hideComponent={closeEdit} getAllQuestions={getAllQuestions} /> */}
            </div>
            :
            null
        }
        {
          deleteAlert
            ?
            <div className='delete-alert-main'>
              <div className='delete-alert-box'>
                <div className='delete-alert-header'>
                  <div className='title'>
                    Alert
                  </div>
                  <div className='close-btn'>
                    <img src={closebtn} height={35} width={35} style={{ cursor: "pointer" }} onClick={() => { showDeleteAlert(false) }} />
                  </div>
                </div>
                <div className='delete-alert-message'>
                  Are you sure you want to delete this question?
                </div>
                <div className='delete-alert-footer'>
                  <div className='cancel'><button className='cancel-btn' onClick={() => { showDeleteAlert(false) }}>Cancel</button></div>
                  <div className='delete'><button className='delete-btn' onClick={() => { deleteQuestion(delId, delCategory) }}>Delete</button></div>
                </div>
              </div>
            </div>
            :
            null
        }
      </div>
    )
  } 


export default Viewquestion
