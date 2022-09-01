import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './creator.css'
import DD_repo from './Dropdowns/DD_repo'
function Createrepo() {
  return (
    <>
      <div className="parent-content">
        <div className="Content  min-h-screen px-0.5 py-10">
          <div className="top">
            <div className="Heading font-primary text-left py-5 ">
              Create new repository here.
            </div>
            <div className="Instruction font-secondary text-left border-b-2 py-4">
              A repository contains Questions which you add.
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
            <div className="instruction font-secondary text-left py-3 ">
              Great repository names are short and memorable.
            </div>
            <div className="Instruction  font-secondary font-semibold text-left ">
              Description(Optional)
            </div>
            <div>
              <input
                type="text"
                className="w-full align-middle px-2 py-1.5 rounded-md border border-gray-300 my-2"
              ></input>
            </div>
          </div>
          <div className="privacy my-4 border-b-2 dotted pb-4">
            <div className="Instruction font-secondary font-semibold text-left">
              Select privacy option
            </div>
            <div className="flex items-center mb-4">
              <input
                id="default-radio-1"
                type="radio"
                value="Global"
                name="privacy-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                
                className="ml-2 font-secondary font-semibold text-left"
              >
                Global
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="default-radio-1"
                type="radio"
                value="Local"
                name="privacy-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                
                className="ml-2 font-secondary font-semibold text-left"
              >
                Local
              </label>
            </div>
            <div className="flex items-center ">
              <input
                defaultChecked
                id="default-radio-1"
                type="radio"
                value="Private"
                name="privacy-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                
                className="ml-2 font-secondary font-semibold text-left"
              >
                Private
              </label>
            </div>
          </div>
          <div className="Instruction font-secondary text-left  py-4">
            You are creating a private repository press create repository button
            to Create.
          </div>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Button
          </button>
        </div>
      </div>
    </>
  )
}
export default Createrepo
