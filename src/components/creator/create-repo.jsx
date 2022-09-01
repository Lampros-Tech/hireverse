import { BrowserRouter,
    Routes,
    Route, } from 'react-router-dom'
import "./creator.css";
import DD_repo from "./Dropdowns/DD_repo";
function Createrepo() {
  return (
    <>
    <div className='parent-content'>
      <div className='Content  min-h-screen px-0.5 py-10'>
        <div className='top'>
            <div className='Heading font-primary text-left py-5 '>
                Create new repository here.
            </div>
            <div className='Instruction font-secondary text-left border-b-2'>
                A repository contains  Questions which you add.
            </div>
        </div>
        <div className='repo-details py-5'>
            <div className='repo-name flex'>
                <div className='owner'>
                    <DD_repo/>
                </div>
                <div className='Repo-name'>

                </div>

            </div>



        </div>


      </div>
    </div>
    </>
  )
}
export default Createrepo
