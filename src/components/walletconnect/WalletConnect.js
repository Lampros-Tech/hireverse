import { useState, useEffect, useRef } from "react";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
  useSigner,
} from "wagmi";
// import { Client } from "@xmtp/xmtp-js";
import Meta from "../assets/images/MetaMask.svg";
import Coin from "../assets/images/Coinbase.svg";
import WallConn from "../assets/images/walletconnect.svg";
import NewPopup from "./NewPopup";
import "./walletconnect.css";
import { useNavigate } from "react-router-dom";

export function WalletConnect() {
  const { address, connector, isConnected } = useAccount();
  const { data: ensAvatar } = useEnsAvatar({ addressOrName: address });
  const { data: ensName } = useEnsName({ address });
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();

  const inputRef = useRef();
  const navigate = useNavigate();
  const { data } = useSigner();

  // const [client, setClient] = useState(null);
  // const [getMessage, setGetMessage] = useState([]);
  // const [getallconversations, setGetAllConversations] = useState([]);
  // const [sendMessage, setSendMessage] = useState("");
  const [walletLogo] = useState([Meta, Coin, WallConn]);
  const [walletAddress, setWalletAddress] = useState("");

  // const getXmtp = async (wallet) => {
  //   console.log(data);
  //   console.log(wallet);
  //   const xmtp = await Client.create(data);
  //   console.log(xmtp);
  //   setClient(xmtp);
  //   const allConversations = await xmtp.conversations.list();
  //   console.log(allConversations);
  //   setGetAllConversations(allConversations);
  // };

  // const startNewConversation = async (xmtp) => {
  //   const newConversation = await xmtp.conversations.newConversation(
  //     walletAddress
  //   );
  // };

  // const getConversation = async (xmtp) => {
  //   const conversation = await xmtp.conversations.newConversation(
  //     "0x81a3d5A8D72e6Ed97767F7482451e8Fd7d7Ae51C"
  //   );
  //   // await conversation.send("Hi This is a Test Message! Please Do Not Reply");
  //   await conversation.send(sendMessage);
  //   inputRef.current.value = "";
  // };

  // const listConversation = async (xmtp) => {
  //   const allConversations = await xmtp.conversations.list();
  //   // Say gm to everyone you've been chatting with
  // };

  // const allConversation = async (xmtp) => {
  //   console.log(xmtp.conversations.list());
  //   for (const conversation of await xmtp.conversations.list()) {
  //     // All parameters are optional and can be omitted
  //     const opts = {
  //       // Only show messages from last 24 hours
  //       startTime: new Date(new Date().setDate(new Date().getDate() - 1)),
  //       endTime: new Date(),
  //     };
  //     const messagesInConversation = await conversation.messages(opts);
  //     console.log(messagesInConversation);
  //     setGetMessage(messagesInConversation);
  //   }
  // };

  // useEffect(() => {
  //   const revelMessage = async () => {
  //     const xmtp = await Client.create(data);
  //     console.log(xmtp);
  //     setClient(xmtp);
  //     allConversation(client);
  //   };

  //   revelMessage();
  // }, []);

  // const allNewConversations = async (xmtp) => {
  //   const conversation = await xmtp.conversations.newConversation(
  //     "0x81a3d5A8D72e6Ed97767F7482451e8Fd7d7Ae51C"
  //   );
  //   console.log("in");
  //   for await (const message of await conversation.streamMessages()) {
  //     if (message.senderAddress === xmtp.address) {
  //       // This message was sent from me
  //       continue;
  //     }
  //     console.log(
  //       `New message from ${message.senderAddress}: ${message.content}`
  //     );
  //   }
  // };

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const wallectConnected = () => {
    setTimeout(() => {
      navigate("/signup/ev");
    }, 2000);
    return "connected";
  };
  if (isConnected) {
    // return (
    //   <div>
    //     {/* <img src={ensAvatar} alt="ENS Avatar" /> */}
    //     <div>{ensName ? `${ensName} (${address})` : address}</div>
    //     {/* <div>Connected to {connector.name}</div> */}
    //     <button onClick={() => getXmtp()}>client</button>
    //     <button onClick={togglePopup}>New</button>
    //     {isOpen && (
    //       <NewPopup
    //         content={
    //           <>
    //             <div>Start New Conversation</div>
    //             <input
    //               type="text"
    //               onChange={(e) => {
    //                 setWalletAddress(e.target.value);
    //               }}
    //             />
    //             <input
    //               type="button"
    //               value="New Coversation"
    //               onClick={() => startNewConversation(client)}
    //             />
    //           </>
    //         }
    //         handleClose={togglePopup}
    //       />
    //     )}
    //     <button onClick={() => getConversation(client)}>Send</button>
    //     <button onClick={() => listConversation(client)}>
    //       List Conversations
    //     </button>
    //     <button onClick={() => allConversation(client)}>
    //       All Conversations
    //     </button>
    //     {/* <button onClick={() => allNewConversations(client)}>
    //       All New Conversations
    //     </button> */}
    //     {/* <button onClick={() => startNewConversation(client)}>New</button> */}
    //     <button onClick={disconnect}>Disconnect</button>
    //     <input
    //       type="text"
    //       onChange={(e) => {
    //         setSendMessage(e.target.value);
    //       }}
    //       ref={inputRef}
    //     />
    //     <div>
    //       {getallconversations.map((allconversationsdisplay, index) => (
    //         <div key={index}>{allconversationsdisplay.peerAddress}</div>
    //       ))}
    //     </div>
    //     <div>
    //       {getMessage.map((messagedisplay, index) => (
    //         <div key={index}>{messagedisplay.content}</div>
    //       ))}
    //     </div>
    //   </div>
    // );
    return wallectConnected();
  }

  return (
    <div>
      <div className="wallet-btn-outer">
        {connectors.map((connector, i) => (
          <button
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect({ connector })}
            className="wallet-btn"
          >
            <img
              className="wallet-btn-logo"
              src={walletLogo[i]}
              alt="wallet button logo"
            />

            {connector.name}
            {!connector.ready && " (unsupported)"}
            {isLoading &&
              connector.id === pendingConnector?.id &&
              " (connecting)"}
          </button>
        ))}
        <div className="wallet-error-msg">
          <p>{error && error.message}</p>
        </div>
      </div>
    </div>
  );
}

export default WalletConnect;
