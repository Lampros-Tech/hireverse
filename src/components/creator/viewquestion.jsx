import { useEffect, useRef, useState } from "react";
// import EditQuestion from '../'
// import Questions from './Data/Question'

import "./viewquestion.css";
import EditQuestion from "./EditQuestion";
import $ from "jquery";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { useNavigate } from "react-router-dom";
import Backlogo from "./Images/back_logo";
import axios from "axios";
import Cookies from "universal-cookie";
import env from "react-dotenv";
import parse from "html-react-parser";
import closebtn from "../creator/Images/closebtn.png";
import Editimg from "./Images/edit.png";
import Delete from "./Images/delete.png";

function Viewquestion() {
  // console.log(Questions)
  // let navigate = useNavigate();
  const [showEdit, setEdit] = useState(false);
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

  function Editquestion() {
    console.log("hello");
    setEdit(true);
  }

  const getAllQuestions = () => {
    axios
      .get(`${env.API_URI}/show_questions`, {
        headers: { token: cookie.get("AdminToken") },
      })
      .then((res) => {
        console.log(res.data.data);
        setQuestions(res.data.data);
      });
  };

  const deleteQuestion = (index, category) => {
    console.log(index, category);
    const data = {
      id: index,
      category: category,
    };
    axios
      .post(`${env.API_URI}/delete_question_by_id`, data, {
        headers: { token: cookie.get("AdminToken") },
      })
      .then((res) => {
        // console.log(res);
        showDeleteAlert(false);
        getAllQuestions();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function closeEdit() {
    setEdit(false);
  }
  function Redirect() {
    // navigate("/landing")
  }
  useEffect(() => {
    console.log(showEdit);
  }, [showEdit]);

  useEffect(() => {
    $(document).ready(function () {
      $("#table_id").DataTable({
        columnDefs: [
          {
            orderable: false,
            className: "select-checkbox",
            targets: 0,
          },
        ],
        select: {
          style: "os",
          selector: "td:first-child",
        },
        order: [[1, "asc"]],
        retrieve: true,
        // lengthMenu: [[25, 35, 50, -1], [25, 35, 50, "All"]]
      });
    });
  }, [questions]);

  return (
    <>
      <div className="Content ">
        <div className="title text-center font-primary font-bold my-8">
          View Question
        </div>
        <div className="Questions">
          <div className="card-background uplift h-52 p-2 px-8 rounded-md">
            <div className="Tittle font-primary">Question 1</div>
            <div className="font-secondary description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, ducimus. Nesciunt ullam laudantium odio neque, maxime
              quaerat vero a voluptatibus ratione quidem quo dignissimos dolor
              libero vitae iusto odit facilis.
            </div>
            <div className="text-center w-full">
              <button
                className="Edit-Question p-3 rounded-md "
                onClick={() => {
                  Editquestion();
                }}
              >
                Edit Question
              </button>
            </div>
          </div>
        </div>

        <div className="Questions my-10">
          <div className="card-background uplift h-52 p-2 px-8 rounded-md">
            <div className="Tittle font-primary">Question 1</div>
            <div className="font-secondary overflow-x-auto description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, ducimus. Nesciunt ullam laudantium odio neque, maxime
              quaerat vero a voluptatibus ratione quidem quo dignissimos dolor
              libero vitae iusto odit facilis. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Veritatis, ducimus. Nesciunt ullam
              laudantium odio neque, maxime quaerat vero a voluptatibus ratione
              quidem quo dignissimos dolor libero vitae iusto odit facilis.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, ducimus. Nesciunt ullam laudantium odio neque, maxime
              quaerat vero a voluptatibus ratione quidem quo dignissimos dolor
              libero vitae iusto odit facilis.
            </div>

            <div className="text-center w-full">
              <button
                className="Edit-Question p-3 rounded-md "
                onClick={() => {
                  Editquestion();
                }}
              >
                Edit Question
              </button>
            </div>
          </div>
        </div>
      </div>

      {showEdit ? (
        <div className="editquestion">
          <EditQuestion />
        </div>
      ) : null}
    </>
  );
}

export default Viewquestion;
