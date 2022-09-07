import { WagmiConfig, createClient } from 'wagmi'
import { getDefaultProvider } from 'ethers'
import Profile from './components/xmtp/xmtp'
import Createrepo from './components/creator/CreateRepo'
import CreatorHeader from './components/creator/CreatorHeader'
import CreateAssesment from './components/creator/CreateAssesment'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import AddQuestion from './components/creator/Addquestion';
import Viewquestion from './components/creator/viewquestion';
import Myrepos from './components/creator/Myrepos';
import MyAssesments from './components/creator/Mytest';
import Editrepo from './components/creator/Editrepo'
import EditAssesment from './components/creator/EditAssesment'
import TestTakenpage from './components/Test/testTakenpage'
import TestInstructionpage from './components/Test/TestInstructionpage'
function App() {

  const client_ = createClient({
    autoConnect: true,
    provider: getDefaultProvider(),
  })


  return(
    <div className="App">
      <Router>
          <Routes>
            <Route path="creator" element={<CreatorHeader />}>
              <Route path="createrepo" element={<Createrepo />} />
              <Route path="assesment" element={<CreateAssesment/>} />           
              <Route path="question" element={<AddQuestion/>} />
              <Route path="MyQuestion" element={<Viewquestion/>} />
              <Route path='myrepos'  element={<Myrepos/>}/>
              <Route path='mytests'  element={<MyAssesments/>}/>
              <Route path='editrepo' element={<Editrepo/>}/>
              <Route path='editAssesment' element={<EditAssesment/>}/>
              <Route path='testtakenpage' element={<TestTakenpage/>}/>
              <Route path='testInstruction' element={<TestInstructionpage/>}/>
            </Route>
          </Routes>
      </Router>
      

    </div>
  );
}

export default App;
{/* <WagmiConfig client={client_}>
<Profile />
</WagmiConfig> */}

{/* <Conversations /> */}