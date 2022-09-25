import './App.css';
import { BrowserRouter as Router, Routes, Route, useSearchParams } from 'react-router-dom';
import Landingpage from './Components/User/Landingpage';
import Userpage from './Components/User/Userpage';
import Login from './Components/User/login';
// import Finish from './Components/User/Finish';
import TestTaken from './Components/User/Testtaken';
import { useEffect, useState } from 'react';
import Error404 from './Components/User/Error404';
import Request from './Components/User/Request';
import { users } from './Components/Data/users';
// import useActive from './Components/User/userActive';
import Cookies from "universal-cookie";
import { useNavigate } from 'react-router-dom';
import { createClient, WagmiConfig, defaultChains, configureChains } from 'wagmi';
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

function App() {

  const { chains, provider, webSocketProvider } = configureChains(
    defaultChains,
    [alchemyProvider({ apiKey: "yourAlchemyApiKey" }), publicProvider()]
  );

  const client = createClient({
    autoConnect: true,
    connectors: [
      new MetaMaskConnector({ chains }),
      new CoinbaseWalletConnector({
        chains,
        options: {
          appName: "wagmi",
        },
      }),
      new WalletConnectConnector({
        chains,
        options: {
          qrcode: true,
        },
      }),
      // new InjectedConnector({
      //   chains,
      //   options: {
      //     name: "Injected",
      //     shimDisconnect: true,
      //   },
      // }),
    ],
    provider,
    webSocketProvider,
  });

  const cookies = new Cookies();
  // const navigator = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  // useEffect(()=>{
  //   const last = window.location.pathname.split('/')[1];
  //   console.log('App.js-- '+last);
  //   const arr= [];
  //   arr.push(last)
  //   if(!cookies.get('Token') && last.includes('/test')){
  //     navigator('/')
  //   }
  // },[])

  return (
    <div className="App">
      <WagmiConfig client={client}>
        <Router>
          <Routes>
            {/* Main 4 Pages */}
            <Route path='/' element={<Landingpage />} />
            <Route path='/test' element={<Userpage />} />
            <Route path='/test_taken' element={<TestTaken />} />
            {/* Extra */}
            <Route path='*' element={<Error404 />}></Route>
            <Route path='/error404' element={<Error404 />}></Route>
            <Route path='/errorLogin' element={<Request />}></Route>
            {/* <Route path='/final' element={<Finish />} /> */}
            {/* <Route path='/test' element = {<Protected cmp={Userpage} />}> </Route> */}
            {/* <Route path='/test'><Protected element={Finish} /></Route> */}
          </Routes>
        </Router>
      </WagmiConfig>
    </div>
  );
}

export default App;


