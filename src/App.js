import Createrepo from "./components/creator/create-repo";
import CreatorHeader from "./components/creator/CreatorHeader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import CompanyHeader from "./components/company/CompanyHeader";
import RecruitmentDetails from "./components/company/RecruitmentDetails";
import CandidateHeader from "./components/candidate/CandidateHeader";
import CandidateFeed from "./components/candidate/CandidateFeed";
import CandidateTestResults from "./components/candidate/CandidateTestResults";
import EmailVeficationPage from "./components/EmailVeficationPage";
import TestDescription from "./components/company/TestDescription";
import TestsFeed from "./components/company/TestsFeed";
import CreatorsList from "./components/company/CreatorsList";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="ev" element={<EmailVeficationPage />}></Route>
          <Route path="creator" element={<CreatorHeader />}>
            <Route path="repo" element={<Createrepo />} />
          </Route>
          <Route path="company" element={<CompanyHeader />}>
            <Route
              path="recruitment-details"
              element={<RecruitmentDetails />}
            />
            <Route path="tests" element={<TestsFeed />} />
            <Route path="all-creators" element={<CreatorsList />} />
            <Route path="td" element={<TestDescription />} />
          </Route>
          <Route path="candidate" element={<CandidateHeader />}>
            <Route path="candidate-feed" element={<CandidateFeed />} />
            <Route
              path="candidate-test-results"
              element={<CandidateTestResults />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
