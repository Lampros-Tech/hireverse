import { useEffect, useState } from "react";
import companyLogo from "../Images/Lampros_Tech_Logo2.png";
// import profilePicture from '../Images/profilePicture.png'
import profilePicture from "../Images/ProfileLetter.svg";
import logout from "../Images/log-out-svgrepo-com.svg";
import Cookies from "universal-cookie";
// import Confettiful from '../User/Confettiful';
import congo from "../Images/congratulation.gif";
// import Animation from './Animation';
import { bounce } from "react-animations";
import { StyleSheet, css } from "aphrodite";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ethers } from "ethers";
import data_nft from "../../Contracts/artifacts/data_nft.json"
import { useAccount } from "wagmi";
const TestTaken = () => {
  const cookies = new Cookies();
  const navigator = useNavigate();
  const [metadataUri, setMetadataUri] = useState(null);
  const { address } = useAccount();
  const [txHash, setTxHash] = useState(null);

  const NFT_GOERLI = "0xA78970518ea6754781Afd24CB35305E16e27003A";  //old
  const NFT_SKALE = "0xf590dece3807fff78cdf3df12f4c29febb2561ba"
  const NFT_AURORA = "0x9d92ca20ea4f33aed1d06203142d264980562020";
  const NFT_CRONOS = "0xB3657f286d840CdEffB26F28c678A6853D8AbBfc";
  const NFT_POLYGON = "0xC7CfF861bd4c378cB80ae54bB7e57B82302C3c41";

  useEffect((e) => {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
    const disableselect = (e) => {
      return false;
    };
    document.onselectstart = disableselect;
    document.onmousedown = disableselect;
  }, []);

  const logoutCookie = () => {
    cookies.remove("Token");
    window.location.reload();
  };

  async function metadata() {
    const nftName = "DehitasTest";
    const nftDesc = "Dehitas test NFT";
    const marks = cookies.get("percentage");

    // setName(nftName);
    // setDesc(nftDesc);
    let imageForMetadata = "https://ipfs.io/ipfs/bafkreihqjvzlqemkh76vwrmwzt6awckj2qdrgkqcotrwkhooiidoyflnhy"   //default value

    if (marks < 0) {
      alert("You are not eligible for nft.");
      return;
    }
    if (marks >= 0 && marks <= 20) {
      console.log("less than 20")
      imageForMetadata = "https://ipfs.io/ipfs/bafkreifuq5f4jevaniqigngjgyfa7uaipzkdsbuh6mnq4fzpxpfetdo26a"
      console.log(imageForMetadata)

    }
    else if (marks >= 21 && marks <= 40) {
      console.log("less than 40")
      imageForMetadata = "https://ipfs.io/ipfs/bafkreif2iqtkd3fbd3h7ivfmyqlq53fcjym7vn33jjw4buhav7xjp2emqu"
      console.log(imageForMetadata)
    }
    else if (marks >= 41 && marks <= 60) {
      console.log("less than 60")
      imageForMetadata = "https://ipfs.io/ipfs/bafkreidprsyx6kigsserx3nbln5j6endam2lgquzw5dgbngdama6sbfika"
      console.log(imageForMetadata)
    }
    else if (marks >= 61 && marks <= 80) {
      console.log("less than 80")
      imageForMetadata = "https://ipfs.io/ipfs/bafkreiht5iadoztdgz6kdqjrtokjcfqndmpysm33gm2xptnuiy6hxfw4xy"
      console.log(imageForMetadata)
    }
    else if (marks >= 81 && marks <= 100) {
      console.log("less than 100")
      imageForMetadata = "https://ipfs.io/ipfs/bafkreihqjvzlqemkh76vwrmwzt6awckj2qdrgkqcotrwkhooiidoyflnhy"
      console.log(imageForMetadata)
    }

    console.log("outside")
    console.log(imageForMetadata)

    const options = {
      method: 'POST',
      url: 'https://api.nftport.xyz/v0/metadata',
      headers: {
        'Content-Type': 'application/json',
        Authorization: '4455109c-4819-40f5-9ec5-5882af32a7ed'
      },
      data: {
        name: nftName,
        description: nftDesc,
        file_url: imageForMetadata
      }
    };

    await axios.request(options).then(function (response) {
      console.log(response.data.metadata_uri);
      setMetadataUri(response.data.metadata_uri)
    }).catch(function (error) {
      console.error(error);
    });

  }

  async function askApiToMint() {
    // e.preventDefault();
    // const network = e.target.networks.value;
    // console.log(network);

    const options = {
      method: 'POST',
      url: 'https://api.nftport.xyz/v0/mints/customizable',
      headers: {
        'Content-Type': 'application/json',
        Authorization: '4455109c-4819-40f5-9ec5-5882af32a7ed'
      },
      data: {
        chain: 'rinkeby',
        contract_address: '0x508C019B90976D654a90d5CECD49C0B7A810a357',
        metadata_uri: metadataUri,
        mint_to_address: address
      }
    };

    await axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }

  const checkBalance = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        // const connectedContract = new ethers.Contract(CONTRACT_ADDRESS_GOERLI, data_goerli.abi, signer);
        if (!provider) {
          console.log("Metamask is not installed, please install!");
        }

        const { chainId } = await provider.getNetwork()
        console.log("switch case for this case is: " + chainId);

        //SWITCH CASE for networks
        switch (chainId) {

          case 5:
            //for GOERLI
            // let connectedContract = new ethers.Contract(CONTRACT_ADDRESS_GOERLI, data.abi, signer);
            // console.log("Going to pop wallet now to pay gas...")
            // let balance = await connectedContract.contractBalance();
            // console.log(balance.toNumber() / 1000000000000000000);
            const connectedContractNft_g = new ethers.Contract(NFT_GOERLI, data_nft.abi, signer);
            let mint = await connectedContractNft_g.mint("0xDaB4984b2F4e06d207f73678935A649ae6969490", metadataUri, {
              gasLimit: 300000
            });
            let tokenID = await connectedContractNft_g.tokenURI(6)
            console.log(mint);
            console.log("mint hash:   " + mint.hash)

            let transactionHash = `https://goerli.etherscan.io/tx/${mint.hash}`
            console.log(transactionHash);
            setTxHash(transactionHash);

            // let tcReciept = await ethereum.request({ method: 'eth_getTransactionReceipt', params: [mint.hash] })
            // console.log(tcReciept);
            console.log(tokenID)
            break;

          case 647426021:
            //for SKALE
            // connectedContract = new ethers.Contract(CONTRACT_ADDRESS_SKALE, data.abi, signer);
            // console.log("Going to pop wallet now to pay gas...")
            // balance = await connectedContract.contractBalance();
            // console.log(balance.toNumber() / 1000000000000000000);
            const connectedContractNft_s = new ethers.Contract(NFT_SKALE, data_nft.abi, signer);
            mint = await connectedContractNft_s.mint("0xDaB4984b2F4e06d207f73678935A649ae6969490", metadataUri, {
              gasLimit: 300000
            });
            console.log(mint.hash)
            tokenID = await connectedContractNft_s.tokenURI(6)


            // let tcReciept = ethereum.request({ method: 'eth_getTransactionReceipt', params: [mint] })
            // console.log("transcation reciept: "+tcReciept);

            // console.log("data hash" + ethers.receipt.mint);
            // function checkTransactionconfirmation(mint) {

            //   let checkTransactionLoop = () => {
            //     return ethereum.request({ method: 'eth_getTransactionReceipt', params: [txhash] }).then(r => {
            //       if (r != null) return 'confirmed';
            //       else return checkTransactionLoop();
            //     });
            //   };

            //   return checkTransactionLoop();
            // }
            console.log(tokenID)
            break;

          case 338:
            //for CRONOS
            const connectedContractNft_c = new ethers.Contract(NFT_CRONOS, data_nft.abi, signer);
            mint = await connectedContractNft_c.mint("0xDaB4984b2F4e06d207f73678935A649ae6969490", metadataUri);
            console.log(mint.hash)
            tokenID = await connectedContractNft_c.tokenURI(6)
            break;

          case 1313161555:
            //for AURORA
            const connectedContractNft_a = new ethers.Contract(NFT_AURORA, data_nft.abi, signer);
            mint = await connectedContractNft_a.mint("0xDaB4984b2F4e06d207f73678935A649ae6969490", metadataUri);
            console.log(mint.hash)
            tokenID = await connectedContractNft_a.tokenURI(6)
            break;
          case 80001:
            //for POLYGON
            const connectedContractNft_p = new ethers.Contract(NFT_POLYGON, data_nft.abi, signer);
            mint = await connectedContractNft_p.mint("0xDaB4984b2F4e06d207f73678935A649ae6969490", metadataUri);
            console.log(mint.hash)
            tokenID = await connectedContractNft_p.tokenURI(6)
            break;
        }
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  const mint = () => {
    metadata();
  }

  useEffect(() => {
    if (metadataUri) {
      askApiToMint();
      checkBalance();
    }
  }, [metadataUri])

  return (
    <>
      {/* Navbar */}
      {/* <Confettiful/>
            <div className="js-container container" style="top:0px !important;"></div> */}
      <div className="u_back">
        <div className="u_sideNavabar" id="u_sideID">
          <div className="u_sideNavDetails">
            <div>
              <img alt="CompanyLogo" id="u_CompanyLogo" src="DEHITAS.png"></img>
            </div>
            <div className="u_profileInfo">
              {/* <div className="u_welcomeUser">Hello User</div> */}
              {/* <img alt='ProfilePic' id="u_landingProfile" src={profilePicture}></img> */}
              {/* <div className="u_profilePic" id="u_landingProfile">
                <div className="u_profileText">{user[0]}</div>
              </div> */}

              {/* <div className="u_logoutBtn" onClick={() => logoutCookie()}>
                <div>Logout</div>
                <img alt="logout" id="u_logout" src={logout}></img>
              </div> */}

              {/* <Logout fill={'white'}/> */}
              {/* <LogoutIcon fill="white"/> */}
            </div>
            {/* <div id="u_sideNavbarItem">Start</div>bouzoomInDownnce
                            <div id="u_sideNavbarItem">Aptitude</div>
                            <div id="u_sideNavbarItem">Reasoning</div>
                            <div id="u_sideNavbarItem">Programming</div>
                            <div id="u_sideNavbarItem">End</div> */}
          </div>
          {/* <div><img src={sideArrow}></img></div> */}
        </div>

        {/* Message Container */}

        <img className="u_congo" src={congo}></img>
        <div className="u_messageContainer">
          <div className="u_message">
            {/* <div className="zoom-in-out-box">Thank You for giving the Exam.</div> */}
            <div className="animated fadeIn">
              Thank You for giving the Test.
            </div>
          </div>
          <div>
            <button className="text-[#eff0ee] bg-[#ff6150] rounded-lg px-2 py-3" onClick={() => { mint() }}>
              Mint NFT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestTaken;
