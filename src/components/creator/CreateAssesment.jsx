import { equal } from 'assert'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { generatePath } from 'react-router-dom'
import '../creator/creator.css'
import DD_repo from './Dropdowns/DD_repo'
function CreateAssesment() {

  const resetToInput = useRef(null)




  const [genres, setGenres] = useState([])
  const [genreList, setGenreList] = useState({ name: '', number: 0, repo: '' })
  const [from, setFrom] = useState(1)
  const [to, setTo] = useState(0)


  const [section, setSection] = useState([])
  
  const [mark, setMark] = useState(0)
  const [negativemarks, setNegativemarks] = useState(0)

  const [wrongrange, setWrongrange] = useState(false)

  useEffect(() => {
    console.log(genreList.name)
  }, [genreList])
  
  const addGenre = () => {
    console.log('Inside')
    // const genreArr = [];
    // genreArr.push(genreList);
    setGenres([
      ...genres,
      {
        name: genreList.name,
        number: genreList.number,
        repo: genreList.repo,
      },
    ])
    // console.log(genres);
  }
  const addSection = () => {
    
    if(section.length === 0)
        {
          if(from !== 1)
          {
            console.log("from not equal to  1")
            alert("from Should be 1")
          }
          else if(to < from)
          {
            alert("Invalid Change")
          } 
          else if(mark === 0 || negativemarks === 0)
        {
          alert("Enter marks")
        }
          else
          {
              setSection([
                ...section,
                {
                  from:from,
                  to:to,
                  mark:mark,
                  negativemarks:negativemarks
                }
              ])
              setFrom(Number(to) + 1);
              console.log(from);
          }
        }
      else if (section.length > 0)
      {
        if(to < from)
        {
            alert("Invalid Change")
        }
        // else if(section[(section.length)-1].from   === from) 
        // {
        //   alert("Redundant data")
        // }
        else if(mark === 0 || negativemarks === 0)
        {
          alert("Enter marks")
        }
        else{
            setFrom(to);
            
            setSection([
              ...section,
              {
                from:from,
                to:to,
                mark:mark,
                negativemarks:negativemarks
              }
            ])
            setFrom(Number(to) + 1);
              console.log(from);
              setTo(from)
            
          }
      }
      
    }
    
    // else{ 
    // console.log('Inside addSection')
    // setSection([
    //   ...section,
    //   {
    //     from: from,
    //     to: to,
    //     mark: mark,
    //     negativemarks: negativemarks,
    //   },
    // ]);
    // setFrom(null);
    // setTo(null);
    // }
    
  

  useEffect(() => {
    
    
    console.log(from)
  }, [section])
  return (
    <>
      <div className="parent-content">
        <div className="C_Content min-h-screen px-0.5 py-10">
          <div className="top">
            <div className="Headingassesmenth font-primary text-left py-5 ">
              Create new assesment here.
            </div>
            <div className=" font-secondary text-left border-b-2 py-4">
              Customise your assesment for candidates.
            </div>
          </div>
          <div className="repo-details py-5 border-b-2">
            <div className="Labels flex mb-1">
              <div className="w-44 py-1 font-secondary font-semibold">
                Owner
                <span className="">*</span>
              </div>
              <div className="px-1 py-1 font-semibold font-secondary">
                Repository name
              </div>
            </div>
            <div className="repo-name  flex">
              <div className="font-primary-sm items-center">
                Owner name
              </div>
              <h1 className="mx-10  text-3xl">/</h1>
              <div className="Repo-name">
                <input
                  type="text"
                  name="reponame"
                  placeholder="Short repository name"
                  className="align-middle uplift  px-2 py-1.5 rounded-md border border-gray-300"
                ></input>
              </div>
            </div>
            <div className=" font-secondary text-left py-3 ">
              Great repository names are short and memorable.
            </div>
            <div className="Description">
              <div className="  font-secondary font-semibold text-left pb-2 ">
                Description(Enter approx 100 words for understanding of
                assesment.)
              </div>
              <div className="text-left">
                <textarea
                  className="uplift rounded-md text-xs"
                  rows={5}
                  cols={90}
                ></textarea>
              </div>
            </div>
            <div className="user-type">
              <div className="Instruction  font-secondary font-semibold text-left pt-3  ">
                Who is this test for.
              </div>
              <div>
                <input
                  type="text"
                  className="uplift rounded-md border my-2"
                ></input>
              </div>
            </div>
            <div className=" mt-3 ">
              <div className="Instruction  font-secondary font-semibold text-left   ">
                Total number of question.
              </div>
              <input
                type="number"
                min="0"
                className=" uplift rounded-md my-2"
              />
            </div>
            <div className="flex mt-7">
              <div className="font-secondary font-semibold">Duration:</div>
              <div className="mr-5 ml-3">
                <input
                  type="number"
                  name="Duration"
                  placeholder="Enter minutes"
                  className="uplift  rounded-md p-1"
                />
              </div>
              <div className="font-secondary font-semibold ml-7">Experience:</div>
              <div className="mr-5 ml-3">
                <input
                  type="number"
                  name="experience"
                  placeholder="Enter Years"
                  className="uplift rounded-md p-1"
                />
              </div>
            </div>
          </div>
          <div className="PaperPattern">
            <div className="Instruction  font-secondary font-semibold text-left   mt-3">
              Scoring format of the Test.
            </div>
            <div className="formating">
              <div className="flex  my-4 ">
                <input
                  type="text"
                  onChange={(e) => {
                    setGenreList({ ...genreList, name: e.target.value })
                  }}
                  name="genre"
                  placeholder="Enter genre"
                  defaultValue={genreList.name}
                  className=" uplift text-sm mr-8 pl-1  mx-2 rounded-md border border-gray-300"
                />
                <input
                  type="number"
                  onChange={(e) => {
                    setGenreList({ ...genreList, number: e.target.value })
                  }}
                  name="numberOfQuestion"
                  placeholder="enter number of question"
                  defaultValue={genreList.number}
                  className="p-1 mr-8 w-52 rounded-md uplift"
                />
                <select
                  name="Repository"
                  onChange={(e) => {
                    setGenreList({ ...genreList, repo: e.target.value })
                  }}
                  defaultValue={genreList.repo}
                  id="repos"
                  className="p-1 mr-8 uplift rounded-md border border-gray-300"
                >
                  <option value="" disabled hidden>
                    Select repository
                  </option>
                  <option value="repo2">Repository2</option>
                  <option value="repo3">Repository3</option>
                  <option value="repo4">Repository4</option>
                </select>
                <button
                  class=" rounded-md px-10 Add-btn-custom"
                  onClick={() => {
                    addGenre()
                  }}
                >
                  Add
                </button>
              </div>

              <div className="border-b-2 pb-4 w-full  ">
                <div className="heading grid grid-cols-3 w-full">
                  <div className="heder  font-secondary font-semibold border rounded-md">
                    Question type
                  </div>
                  <div className="heder font-secondary font-semibold rounded-md">
                    Number of question
                  </div>
                  <div className="heder font-secondary font-semibold rounded-md">
                    Repository
                  </div>
                </div>
                {genres.length > 0 ? (
                  genres.map((single, index) => (
                    <div key={index} className="grid grid-cols-3 w-full">
                      <div className="cont">{single.name}</div>
                      <div className="cont">{single.number}</div>
                      <div className="cont">{single.repo}</div>
                      {wrongrange === true ? (
                        <div>From value is grater then To value</div>
                      ) : null}
                    </div>
                  ))
                ) : (
                  <div className="grid grid-cols-3 w-full">
                    <div className="cont">Empty</div>
                    <div className="cont">Empty</div>
                    <div className="cont">Empty</div>
                  </div>
                )}
              </div>
              <div className="scoring-pattern flex">
                <div className="flex my-4 ">
                  <div className="font-secondary  font-semibold">
                    Question number from:
                  </div>
                  <div className="mr-1 ml-2">
                    {from}
                  </div>
                </div>
                <div className="flex my-4 ml-3">
                  <div className="font-secondary font-semibold">
                    Question number to:
                  </div>
                  <div className="mr-1 ml-2">
                    <input
                      type="number"
                      name="experiance"
                      placeholder="Enter minutes"
                      className="border border-gray-300 uplift pl-1 rounded-md w-14"
                      min = {from}
                      value = {to}
                      onChange={(e) => {
                        setTo(e.target.value)
                      }}
                    />
                  </div>
                </div>
                <div className=" my-4 ml-4 flex">
                  <input
                    type="number"
                    name="experiance"
                    placeholder="Marks for each"
                    className="border border-gray-300 uplift pl-1 rounded-md w-32 mr-4"
                    onChange={(e) => {
                      setMark(e.target.value)
                    }}
                  />
                  <input
                    type="number"
                    name="experiance"
                    placeholder="-ve score"
                    className="border border-gray-300 uplift rounded-md w-24 pl-1"
                    onChange={(e) => {
                      setNegativemarks(e.target.value)
                    }}
                  />
                </div>
              </div>
              <div>
                <button
                  className=" mx-2 mb-4 py-1 rounded-md px-10 Add-btn-custom"
                  onClick={() => {
                    addSection()
                  }}
                >
                  Add 
                </button>
              </div>
              <div className="border-b-2 pb-3">
                <div className="heading flex gap-1">
                  <div className=" heder font-secondary rounded-md font-semibold">
                    Question number from
                  </div>
                  <div className="heder font-secondary rounded-md font-semibold">
                    Question number to
                  </div>
                  <div className="heder font-secondary rounded-md font-semibold">
                    Marks per question
                  </div>
                  <div className="heder font-secondary rounded-md font-semibold">
                    Negative marks
                  </div>
                </div>

                {section.length > 0 ? (
                  section.map((section, index) => (
                    <div key={index} className="flex">
                      <div className="cont">{section.from}</div>
                      <div className="cont">{section.to}</div>
                      <div className="cont">{section.mark}</div>
                      <div className="cont">{section.negativemarks}</div>
                    </div>
                  ))
                ) : (
                  <div className="flex">
                    <div className="cont">Empty</div>
                    <div className="cont">Empty</div>
                    <div className="cont">Empty</div>
                    <div className="cont">Empty</div>
                  </div>
                )}
              </div>
              <div className="  ">
                <div className="flex my-4 ">
                  <div className="font-secondary font-semibold">Max Score:</div>
                  <div className="mr-5 ml-2">
                    <input
                      type="number"
                      name="Max-score"
                      placeholder="Enter Max-score"
                      className="uplift rounded-md"
                    />
                  </div>
                  <div className="font-secondary font-semibold ml-9">Min Score:</div>
                  <div className="mr-5 ml-2">
                    <input
                      type="number"
                      name="Min-score"
                      placeholder="Min-score"
                      className="uplift rounded-md"
                    />
                  </div>
                </div>
                <div className="flex my-4">
                  <div className="font-secondary font-semibold">Fix fees:</div>
                  <div className="mr-5 ml-2">
                    <input
                      type="number"
                      name="Fix fees"
                      placeholder="Enter Fix-fees"
                      className="uplift rounded-md"
                    />
                  </div>
                  <div className="font-secondary font-semibold">
                    Price per user:
                  </div>
                  <div className="mr-5 ml-2">
                    <input
                      type="number"
                      name="PPU"
                      placeholder="Price per-user"
                      className="uplift rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className='final-buttom'>
                <button className="create-assessment-btn text-black-700 font-semibold py-2 px-4 border border-black-500  rounded mx-2 mt-4 mb-4">
                  Create assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateAssesment
