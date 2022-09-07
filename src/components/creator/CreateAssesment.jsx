import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { generatePath } from 'react-router-dom';
import '../creator/creator.css'
import DD_repo from "./Dropdowns/DD_repo"
function CreateAssesment() {
  const [genres,setGenres] = useState([]);
  const [genreList,setGenreList] = useState({name:"", number:0, repo:"" })

  const [section,setSection] = useState([]);
  const [from,setFrom] = useState(0);
  const [to,setTo] = useState(0);
  const [mark,setMark] = useState(0);
  const [negativemarks,setNegativemarks] = useState(0);

  useEffect(()=>{
    console.log(genreList.name);
  },[genreList])
  
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

  useEffect(()=>{
    console.log(genres)
    console.log(section)
  },[genres,section])
  return (
    <>
      <div className="parent-content">
        <div className="Content min-h-screen px-0.5 py-10">
          <div className="top">
              <div className="Headingassesmenth font-primary text-left py-5 ">
                Create new assesment here.
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
                <DD_repo />
              </div>
              <h1 className="mx-4  text-3xl">/</h1>
              <div className="Repo-name">
                <input
                  type="text"
                  name="reponame"
                  placeholder="Short repository name"
                  className="align-middle  px-2 py-1.5 rounded-md border border-gray-300"
                ></input>
              </div>
            </div>
            <div className=" font-secondary text-left py-3 ">
              Great repository names are short and memorable.
            </div>
            <div className='Description'>
              <div className="  font-secondary font-semibold text-left pb-2 ">
                Description(Enter approx 100 words for understanding of assesment.)
              </div>
              <div className='text-left'>
                <textarea 
                className='border-dotted border-gray-700 border-2 rounded-md text-xs'
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
                  className="w-full align-middle px-2 py-1.5 rounded-md border border-gray-300 my-2"
                ></input>
              </div>
            </div>
            <div className='flex mt-3 '>
              <div className="Instruction  font-secondary font-semibold text-left   ">
                Total number of question.
              </div>
              <input type="number" min="0" className=' border border-gray-300 '/>
            </div>
            <div className='flex mt-7'>
                    <div className='font-secondary font-semibold'>
                        Duration:
                    </div>
                    <div className='mr-5 ml-2'>
                        <input type="number" name="Duration" placeholder='Enter minutes' className='border border-gray-300 rounded-md' />
                    </div>
                    <div className='font-secondary font-semibold'>
                        Experiance:
                    </div>
                    <div className='mr-5 ml-2'>
                        <input type="number" name="experiance" placeholder='Enter minutes' className='border border-gray-300 rounded-md' />
                    </div>
                </div>
          </div>
          <div className='PaperPattern'>
            <div className="Instruction  font-secondary font-semibold text-left   mt-3">
               Scoring format of the Test.
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
                      <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-2 mt-4 mb-4'>Create assesment</button>
                  </div>
                
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateAssesment