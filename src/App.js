import { WagmiConfig, createClient } from 'wagmi'
import { getDefaultProvider } from 'ethers'
import Profile from './components/xmtp/xmtp'
import Createrepo from './components/creator/create-repo'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
function App() {

  const client_ = createClient({
    autoConnect: true,
    provider: getDefaultProvider(),
  })


  return(
    <div className="App">
      <Router>
        <Header/>
          <Routes>
          <Route path="/" element={<Createrepo />}>
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