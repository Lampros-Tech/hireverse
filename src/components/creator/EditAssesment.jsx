import { useEffect } from 'react';
import $ from 'jquery'
import 'jquery/dist/jquery.min.js'
import 'datatables.net-dt/js/dataTables.dataTables'
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import { useState } from 'react';
import './creator.css';
import closebtn from "../creator/Images/closebtn.png";
import Editimg from '../creator/Images/edit.png';
import Delete from './Images/delete.png';
import Backlogo from "./Images/back_logo";
import parse from "html-react-parser";

function EditAssesment ()
{
    // let navigate = useNavigate();
  const [Edit, setEdit] = useState(false);
  const [id, setId] = useState(null);
  const [qCategory, setQCategory] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [deleteAlert, showDeleteAlert] = useState(false);
  const [delId, setDelId] = useState(null);
  const [delCategory, setDelCategory] = useState(null);
    const [genres,setGenres] = useState([]);
  const [genreList,setGenreList] = useState({name:"", number:0, repo:"" })
  const [from,setFrom] = useState(0);
  const [to,setTo] = useState(0);
  const [mark,setMark] = useState(0);
  const [negativemarks,setNegativemarks] = useState(0);
  const [section,setSection] = useState([]);


  function Editquestion(index, category) {
    setId(index);
    setQCategory(category);
    setEdit(true);
  }








  const addGenre = () => {
    console.log("Inside");
    // const genreArr = [];
    // genreArr.push(genreList);
    setGenres([...genres,{
      name: genreList.name,
      number: genreList.number,
      repo:genreList.repo
    }]);
    // console.log(genres);
  }
  const addSection = () =>
  {
    console.log("Inside addSection");
    setSection([...section,{
        from:from,
        to:to,
        mark:mark,
        negativemarks:negativemarks
    }])
  }
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
    return(
        <div className="parent-content">
        <div className="Content min-h-screen px-0.5 py-10">
          <div className="top">
              <div className="Headingassesmenth font-primary text-left py-5 ">
                Edit  assesment here.
              </div>
              <div className=" font-secondary text-left border-b-2 py-4">
                Customise your assesment for candidates. 
              </div>
          </div>
          <div className="repo-details py-5 border-b-2">
            <div className="Labels flex">
              <div className="w-44 px-2 py-1 font-secondary font-semibold">
                Owner
                <span className="">*</span>
              </div>
              <div className="px-4 py-1 font-semibold font-secondary">
                Repository name
              </div>
            </div>
            <div className="repo-name flex">
              <div className="owner">
                Owner name
              </div>
              <h1 className="mx-4  text-3xl">/</h1>
              <div className="Repo-name">
               Repo name
              </div>
            </div>
            
            <div className='Description'>
              <div className="  font-secondary font-semibold text-left pb-2 ">
                Description(Enter approx 100 words for understanding of assesment.)
              </div>
              <div className='text-left'>
                <textarea 
                className='border-dotted border-gray-700 border-2 rounded-md text-xs'
                value="default value"
                  rows={5}
                  cols={90}>
                </textarea>
              </div>
            </div>
            <div className='user-type'>
              <div className="Instruction  font-secondary font-semibold text-left pt-3  ">
                  Who is this test for.
              </div>
              <div>
                <input
                  type="text"
                  value="Default value"
                  className="w-full align-middle px-2 py-1.5 rounded-md border border-gray-300 my-2"
                ></input>
              </div>
            </div>
            <div className='flex mt-3 '>
              <div className="Instruction  font-secondary font-semibold text-left   ">
                Total number of question.
              </div>
              <input type="number" min="0" className=' border border-gray-300 ' />
            </div>
            <div className='flex mt-7'>
                    <div className='font-secondary font-semibold'>
                        Duration:
                    </div>
                    <div className='mr-5 ml-2'>
                        <input type="number" min="0" name="Duration" placeholder='Enter minutes' className='border border-gray-300 rounded-md' />
                    </div>
                    <div className='font-secondary font-semibold'>
                        Experiance:
                    </div>
                    <div className='mr-5 ml-2'>
                        <input type="number" min="0" name="experiance" placeholder='Enter years' className='border border-gray-300 rounded-md' />
                    </div>
                </div>
          </div>
          <div className='PaperPattern'>
            <div className="Instruction  font-secondary font-semibold text-left   mt-3">
                Format of the Test.
            </div>
            <div className="formating">
                <div className='flex my-2'>
                    <input 
                      type="text" 
                      onChange={(e)=>{ setGenreList({...genreList, name : e.target.value })}}
                      name='genre' 
                      placeholder='enter genre'
                      defaultValue={genreList.name} 
                      className='p-1 mx-2 rounded-md border border-gray-300'
                    />
                    <input type="number" onChange={(e)=>{setGenreList({...genreList,number : e.target.value})}} name='numberOfQuestion' placeholder='enter number of question'defaultValue={genreList.number} className='p-1 mx-2 w-52 rounded-md border border-gray-300'/>
                    <select name="Repository" onChange={(e)=>{setGenreList({...genreList, repo : e.target.value})}} defaultValue={genreList.repo} id="repos" className='p-1 rounded-md border border-gray-300'>
                        <option value=""  disabled hidden>Select repository</option>
                        <option value="repo2">Repository2</option>
                        <option value="repo3">Repository3</option>
                        <option value="repo4">Repository4</option>
                    </select>
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-2" onClick={()=>{addGenre()}}>
                     Add Button
                    </button>
                </div>
                
                <div className='border-b-2 pb-4 w-full  '>
                  <div className='heading grid grid-cols-3 w-full'>
                      <div className=' heder font-secondary font-semibold'>
                        Question type
                      </div>
                      <div className='heder font-secondary font-semibold'>
                        Number of question
                      </div>
                      <div className='heder font-secondary font-semibold'>
                        Repository
                      </div>
                  </div>
                  {
                    genres.length > 0
                    ?
                      
                        genres.map((single, index)=>(
                        <div key={index} className="grid grid-cols-3 w-full" >
                            
                          <div className='cont'>
                              {single.name}
                          </div>
                          <div className='cont'>
                              {single.number}
                          </div>
                          <div className='cont'>
                              {single.repo}
                          </div>
                         
                          </div>
                        ))
                      
                    :
                    <div className='grid grid-cols-3 w-full'>
                      <div className='cont'>
                        Empty
                      </div>
                      <div className='cont'>
                        Empty
                      </div>
                      <div className='cont'>
                        Empty
                      </div>
                    </div>
                
                  }
                 
                </div>
                <div className='scoring-pattern flex'>
                  
                  <div className='flex my-4 '>
                    <div className='font-secondary  font-semibold'>
                          Question number from:
                      </div>
                      <div className='mr-1 ml-2'>
                          <input type="number" name="Duration" placeholder='Enter minutes' className='border border-gray-300 rounded-md w-14' onChange={(e)=>{setFrom(e.target.value)}}/>
                      </div>
                  </div>
                  <div className='flex my-4 ml-3'>
                    <div className='font-secondary font-semibold'>
                        Question number to:
                    </div>
                    <div className='mr-1 ml-2'>
                        <input type="number" name="experiance" placeholder='Enter minutes' className='border border-gray-300 rounded-md w-14' onChange={(e)=>{setTo(e.target.value)}}/>
                    </div>
                  </div>
                  <div className=' my-4 ml-4 flex'>
                    <input type="number" name="experiance" placeholder='Marks for each' className='border border-gray-300 rounded-md w-32 mr-2' onChange={(e)=>{setMark(e.target.value)}}/>
                    <input type="number" name="experiance" placeholder='-ve score' className='border border-gray-300 rounded-md w-24 pl-1' onChange={(e)=>{setNegativemarks(e.target.value)}}/>
                  </div>
                  </div>
                  <div>
                      <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-2 mb-4' onClick={()=>{addSection()}}>
                          Add Button
                      </button>
                  </div>
                <div className='border-b-2 pb-3'>
                  <div className='heading flex'>
                        <div className=' heder font-secondary  font-semibold'>
                          Question number from
                        </div>
                        <div className='heder font-secondary font-semibold'>
                          Question number to
                        </div>
                        <div className='heder font-secondary font-semibold'>
                          Marks per question
                        </div>
                        <div className='heder font-secondary font-semibold'>
                          Negative marks
                        </div>
                    </div>
                  
                  {
                      section.length > 0
                      ?
                      section.map((section,index)=>(
                        <div key={index} className="flex">
                        <div className='cont'>
                                {section.from}
                            </div>
                            <div className='cont'>
                                {section.to}
                            </div>
                            <div className='cont'>
                                {section.mark}
                            </div>
                            <div className='cont'>
                                {section.negativemarks}
                            </div>
                        </div> 
                      ))
                      :
                      <div className='flex'>
                        <div className='cont'>
                          Empty
                        </div>
                        <div className='cont'>
                          Empty
                        </div>
                        <div className='cont'>
                          Empty
                        </div>
                        <div className='cont'>
                          Empty
                        </div>
                      </div>
                    }
                </div>
                <div className='border-b-2  '>
                    <div className='flex my-4 '>
                        <div className='font-secondary font-semibold'>
                            Max Score:
                        </div>
                        <div className='mr-5 ml-2'>
                            <input type="number" name="Max-score" placeholder='Enter Max-score' className='border border-gray-300 rounded-md' />
                        </div>
                        <div className='font-secondary font-semibold'>
                            Min Score:
                        </div>
                        <div className='mr-5 ml-2'>
                            <input type="number" name="Min-score" placeholder='Min-score' className='border border-gray-300 rounded-md' />
                        </div>
                    </div>
                    <div className='flex my-4'>
                        <div className='font-secondary font-semibold'>
                            Fix fees:
                        </div>
                        <div className='mr-5 ml-2'>
                            <input type="number" name="Fix fees" placeholder='Enter Fix-fees' className='border border-gray-300 rounded-md' />
                        </div>
                        <div className='font-secondary font-semibold'>
                            Price per user:
                        </div>
                        <div className='mr-5 ml-2'>
                            <input type="number" name="PPU" placeholder='Price per-user' className='border border-gray-300 rounded-md' />
                        </div>
                    </div>
                  </div>
                  <div>
                      <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-2 mt-4 mb-4'>Edit assesment</button>
                  </div>
                
            </div>
          </div>
        </div>
        <div>
            <div className="question-List Content my-4 ">
                <h1 style={{ textAlign: 'center' }} className="font-secondary">All Questions in this Assesment</h1>
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
                            <img src={closebtn} height={35} width={35} style={{ cursor: "pointer" }} />
                            </div>
                        </div>
                        <div className='delete-alert-message'>
                            Are you sure you want to delete this question?
                        </div>
                        <div className='delete-alert-footer'>
                            <div className='cancel'><button className='cancel-btn' >Cancel</button></div>
                            <div className='delete'><button className='delete-btn' >Delete</button></div>
                        </div>
                        </div>
                    </div>
                    :
                    null
                }
            </div>
        </div>
      </div>
    )
}
export default EditAssesment;