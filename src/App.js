import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";
import Profile from "./components/xmtp/xmtp";
import Createrepo from "./components/creator/CreateRepo";
import CreatorHeader from "./components/creator/CreatorHeader";
import CreateAssesment from "./components/creator/CreateAssesment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddQuestion from "./components/creator/Addquestion";
import Viewquestion from "./components/creator/viewquestion";
import Myrepos from "./components/creator/Myrepos";
import MyAssesments from "./components/creator/Mytest";
import Editrepo from "./components/creator/Editrepo";
import EditAssesment from "./components/creator/EditAssesment";
import TestTakenpage from "./components/candidate/Test/testTakenpage";
import TestInstructionpage from "./components/candidate/Test/TestInstructionpage";
import LandingPage from "./components/LandingPage";
import CompanyHeader from "./components/company/CompanyHeader";
import RecruitmentDetails from "./components/company/RecruitmentDetails";
import CandidateHeader from "./components/candidate/CandidateHeader";
import CandidateFeed from "./components/candidate/feed/CandidateFeed";
import EmailVeficationPage from "./components/EmailVeficationPage";
import TestDescription from "./components/company/TestDescription";
import TestsFeed from "./components/company/TestsFeed";
import CreatorsList from "./components/company/CreatorsList";
import RoleSelector from "./components/RoleSelector";
import CompanyRegForm from "./components/registartionforms/CompanyRegForm";
import CandidateRegForm from "./components/registartionforms/CandidateRegForm";
import CreatorRegForm from "./components/registartionforms/CreatorRegForm";
import CandidateEducation from "./components/registartionforms/CandidateEducation";
import CandidateExperience from "./components/registartionforms/CandidateExperience";
import CreatorExperience from "./components/registartionforms/CreatorExperience";
import CandidateTestResults from "./components/candidate/Test/CandidateTestResults";
import CandidateTest from "./components/candidate/Test/CandidateTest";
import Home from "./components/Profile/candidateprofile/Home";
import Jobpost from "./components/company/Jobpost";
import AvailableTest from "./components/company/Availabletest";
import InviteCandidate from "./components/company/Invitecandidate";
import JobApplicant from "./components/company/JobApplicant";
import Jobinsights from "./components/company/JobInsight";
import CreatorMessage from "./components/creator/CreatorMessages";
import CandidateMessage from "./components/candidate/CandidateMessages";
import CompanyMessage from "./components/company/CompanyMessages";
import EditQuestion from "./components/creator/EditQuestion";
import QuestionFeed from "./components/creator/questionFeed";
function App() {
  const client_ = createClient({
    autoConnect: true,
    provider: getDefaultProvider(),
  });
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="signup/ev" element={<EmailVeficationPage />}></Route>
          <Route path="role" element={<RoleSelector />}></Route>

          <Route path="companyregform" element={<CompanyRegForm />}></Route>
          <Route path="creatorregform" element={<CreatorRegForm />}></Route>
          <Route
            path="creatorregform/creator-experience"
            element={<CreatorExperience />}
          ></Route>
          <Route path="candidateregform" element={<CandidateRegForm />}></Route>
          <Route
            path="candidateregform/candidate-education"
            element={<CandidateEducation />}
          ></Route>
          <Route
            path="candidateregform/candidate-experience"
            element={<CandidateExperience />}
          ></Route>

          <Route path="creator" element={<CreatorHeader/>}>
            <Route path="createrepo" element={<Createrepo/>}/>
            <Route path="assesment" element={<CreateAssesment/>}/>
            <Route path="question" element={<AddQuestion/>}/>
            <Route path="MyQuestion" element={<Viewquestion/>}/>
            <Route path="myrepo" element={<Myrepos/>}/>
            <Route path="myassessment" element={<MyAssesments/>}/>
            <Route path="editrepo" element={<Editrepo/>}/>
            <Route path="editAssesment" element={<EditAssesment/>}/>
            <Route path="message" element={<CreatorMessage />}/>
            <Route path="questionFeed" element={<QuestionFeed/>}/>
          </Route>

          <Route path="company" element={<CompanyHeader />}>
            <Route path="recruitment-details" element={<RecruitmentDetails />}/>
            <Route path="tests" element={<TestsFeed />} />
            <Route path="" element={<CreatorsList />} />
            <Route path="testdescrption" element={<TestDescription />} />
            <Route path="jobpost" element={<Jobpost/>}/>
            <Route path="availabletests" element={<AvailableTest/>}/>
            <Route path="invitecandidates" element={<InviteCandidate/>}/>
            <Route path="jobapplicant" element={<JobApplicant/>}/>
            <Route path="jobinsights" element={<Jobinsights/>}/>
            <Route path="message" element={<CompanyMessage/>}/>
          </Route>
          <Route path="candidate" element={<CandidateHeader />}>
            <Route path="" element={<CandidateFeed />} />
            <Route path="candidate-test" element={<CandidateTest />} />
            <Route path="candidate-test-results" element={<CandidateTestResults />}/>
            <Route path="candidate-profile" element={<Home/>}/>
            <Route path="testtakenpage" element={<TestTakenpage />} />
            <Route path="testInstruction" element={<TestInstructionpage/>} />
            <Route path="message" element={<CandidateMessage/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
