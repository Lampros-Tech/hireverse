import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  WagmiConfig,
  createClient,
  defaultChains,
  configureChains,
} from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

// import { getDefaultProvider } from "ethers";
// import Profile from "./xmtp/xmtp";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
// import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

import WalletPopup from "./walletconnect/WalletPopup";
import WalletConnect from "./walletconnect/WalletConnect";

import logo from "./styles/logo.png";
import polygon from "./styles/polygon.svg";
import ipfs from "./styles/IPFS_logo.svg";
import xmtp from "./styles/xmtp logo.svg";
import superfluid from "./styles/superfluid.svg";
import heroimg from "./styles/1.png";
import bigbg from "./styles/background.svg";
import gd1 from "./styles/graphic1.svg";
import gd2 from "./styles/graphic2.svg";
import line1 from "./styles/line1.svg";
import smallbg from "./styles/smallbg.svg";
import illu1 from "./styles/2.png";
import illu2 from "./styles/5.png";
import illu3 from "./styles/4.png";
import item2 from "./styles/item1.svg";
import item8 from "./styles/item2.svg";
import item6 from "./styles/item3 LQ.svg";
import item3 from "./styles/item4.svg";
import item7 from "./styles/item5.svg";
import item5 from "./styles/item6.svg";
import item1 from "./styles/item7.svg";
import item4 from "./styles/Proctoring.svg";
import lastimg from "./styles/3.png";
import line2 from "./styles/bline.svg";

import "./styles/landingpage.css";

const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
  alchemyProvider({ apiKey: "yourAlchemyApiKey" }),
  publicProvider(),
]);

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

function LandingPage() {
  let navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className="d-main-container ">
        <section className="d-navbar">
          <div className="d-logo">
            <img className="d-logo" src={logo} alt="logo" />
          </div>
          <div className="d-connect">
            <WagmiConfig client={client}>
              {isOpen && (
                <WalletPopup
                  content={
                    <>
                      <WalletConnect />
                    </>
                  }
                  handleClose={togglePopup}
                />
              )}
            </WagmiConfig>
            <button
              className="d-connect-btn"
              value="Connect"
              onClick={togglePopup}
            >
              Connect Wallet
            </button>
          </div>
        </section>
        <section className="d-hero">
          <img className="d-hero-bg-1" src={bigbg} alt="background" />
          <img className="d-graphics-item-3" src={line1} alt="line" />

          <div className="d-hero-flex">
            <div className="d-hero-left">
              <h1 className="d-hero-left-h1">
                Decentralised hiring & talent assessment platform
              </h1>
              <p className="d-hero-left-p">
                Create customized tests, assess the right candidate & experience
                life-like recruitment process on our secure Web 3.0 platform
              </p>
              <button className="d-hero-left-btn"> Get Started</button>
            </div>
            <div className="d-hero-right">
              <img className="d-hero-right-img" src={heroimg} alt="" />
            </div>
          </div>
          <section className="d-sponsers">
            <p className="d-sponser-p">Powered by:</p>
            <div className="d-sponser-grid">
              <div className="d-sponser-grid-item">
                <img src={polygon} alt="polygon" className="d-sponser-img" />
              </div>
              <div className="d-sponser-grid-item">
                <img src={ipfs} alt="polygon" className="d-sponser-img" />
              </div>
              <div className="d-sponser-grid-item">
                <img src={xmtp} alt="polygon" className="d-sponser-img" />
              </div>
              <div className="d-sponser-grid-item">
                <img src={superfluid} alt="polygon" className="d-sponser-img" />
              </div>
            </div>
          </section>
        </section>
        <img className="d-graphics-item-1" src={gd1} alt="gd" />
        <img className="d-graphics-item-2" src={gd2} alt="gd" />

        <section className="d-video-container">
          <div className="d-inside-video-container">
            <h1 className="d-video-title">Enter the HireVerse!</h1>
            <p className="d-video-p">
              Connect with pre-assessed candidates to hire remotely without
              hassle
            </p>
            <iframe
              className="d-video"
              width="70%"
              height="600px"
              src="https://www.youtube.com/embed/znbzGfGLw_4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            {/* <video
              className="d-video"
              src="https://youtu.be/znbzGfGLw_4"
              controls
            >
              {" "}
            </video> */}
          </div>
          <img className="d-video-graphics-1" src={smallbg} alt="line" />
          <img className="d-graphics-item-4" src={line2} alt="line" />
        </section>
        <section className="d-third-section">
          <div className="d-inside-third">
            <h1 className="d-third-title">A Decentralised</h1>
            <h1 className="d-third-title">
              Hiring & Talent Assessment Platform
            </h1>
            <p className="d-third-p">
              We have decentralised the hiring process to help you recruit the
              perfect candidate for your team
            </p>
            <div className="d-third-flex">
              <div className="d-third-flex-item">
                <div className="d-third-flex-item-left">
                  <img src={illu1} alt="" className="d-third-flex-item-img" />
                </div>
                <div className="d-third-flex-item-right">
                  <h1 className="d-third-flex-right-h1">
                    Hire the right candidate
                  </h1>
                  <p className="d-third-flex-right-p">
                    Assess applicants for each role with our pre-built
                    customised tests or create one yourself
                  </p>
                  <p className="d-third-flex-right-p">
                    Connect with potential candidates in real than life
                    Hireverse
                  </p>
                  <button className="d-third-flex-btn">Connect Wallet</button>
                </div>
              </div>
              <div className="d-third-flex-item">
                <div className="d-third-flex-item-right">
                  <h1 className="d-third-flex-right-h1">
                    Get paid to create tests
                  </h1>
                  <p className="d-third-flex-right-p">
                    Create customised tests for your niche and get paid every
                    time that test is used for assessment
                  </p>
                  <p className="d-third-flex-right-p">
                    Establish yourself as an industry leader by creating
                    best-in-class pre-employment tests
                  </p>
                  <button className="d-third-flex-btn">Get Started</button>
                </div>
                <div className="d-third-flex-item-left">
                  <img src={illu2} alt="" className="d-third-flex-item-img" />
                </div>
              </div>
              <div className="d-third-flex-item">
                <div className="d-third-flex-item-left">
                  <img src={illu3} alt="" className="d-third-flex-item-img" />
                </div>
                <div className="d-third-flex-item-right">
                  <h1 className="d-third-flex-right-h1">
                    Impress the recruiters in Hireverse
                  </h1>
                  <p className="d-third-flex-right-p">
                    Put your best foot forward by acing Pre-emploment Assessment
                    tests, sending customised cover letters and creating a
                    well-round profile{" "}
                  </p>
                  <p className="d-third-flex-right-p">
                    Impress the recruiters in Hireverse from the comfort of your
                    home
                  </p>
                  <button className="d-third-flex-btn">Connect Wallet</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="d-fourth">
          <h1 className="d-fourth-h1">Why Choose Dehitas?</h1>
          <div className="d-fourth-inside">
            <div className="d-fourth-inside-one">
              <div className="d-fourth-inside-main">
                <img src={item1} alt="" className="d-fourth-inside-img" />
                <h2 className="d-fourth-inside-h2">
                  Wallet based Profile Creation
                </h2>
              </div>
              <div className="d-fourth-inside-main">
                <img src={item2} alt="" className="d-fourth-inside-img" />
                <h2 className="d-fourth-inside-h2">Customised Assessments</h2>
              </div>
              <div className="d-fourth-inside-main">
                <img src={item3} alt="" className="d-fourth-inside-img" />
                <h2 className="d-fourth-inside-h2">
                  'Pay-as-you-go' pricing model
                </h2>
              </div>
            </div>
            <div className="d-fourth-inside-one">
              <div className="d-fourth-inside-main">
                <img src={item4} alt="" className="d-fourth-inside-img" />
                <h2 className="d-fourth-inside-h2">
                  Best in class Proctoring tools
                </h2>
              </div>
              <div className="d-fourth-inside-main">
                <img src={item5} alt="" className="d-fourth-inside-img" />
                <h2 className="d-fourth-inside-h2">
                  Verifiable scores using NFTs
                </h2>
              </div>
              <div className="d-fourth-inside-main">
                <img src={item6} alt="" className="d-fourth-inside-img" />
                <h2 className="d-fourth-inside-h2">
                  Largest collection of questions
                </h2>
              </div>
            </div>
            <div className="d-fourth-inside-two">
              <div className="d-fourth-inside-main">
                <img src={item7} alt="" className="d-fourth-inside-img" />
                <h2 className="d-fourth-inside-h2">
                  Platform agnostic storage of data
                </h2>
              </div>
              <div className="d-fourth-inside-main">
                <img src={item8} alt="" className="d-fourth-inside-img" />
                <h2 className="d-fourth-inside-h2">
                  Real-than-life experience using HireVerse
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section className="d-last">
          <div className="d-last-left">
            <h1 className="d-last-h1">Companies.</h1>
            <h1 className="d-last-h1">Creators.</h1>
            <h1 className="d-last-h1">Candidates.</h1>
            <button className="d-last-left-btn">Let's Connect</button>
          </div>
          <div className="d-last-right">
            <div className="d-last-right-img-div">
              <img src={lastimg} alt="" className="d-last-right-img" />
            </div>
            <h2 className="d-last-right-h2">
              The only decentralised hiring & talent assessment platform.
            </h2>
          </div>
        </section>
      </section>
    </>
  );
}

export default LandingPage;
