import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import liveStream from "./livestream.json";
import { ethers } from "ethers";
import { useLocation } from "react-router-dom";
import { StreamrClient, StreamPermission } from "streamr-client";

function ViewStream() {
  const location = useLocation();
  const [msg, setMsg] = useState();
  const [loading, setLoading] = useState(false);

  // console.log(location.state.id);

  const createStreamer = async () => {
    const streamr = new StreamrClient({
      auth: {
        ethereum: window.ethereum,
      },
    });
    console.log(streamr);

    const stream = await streamr.createStream({
      id: "/deh",
    });

    console.log(stream.id);
    // 0x9b4716573622751e7f6a56da251d054b6bba4b00/deh
  };

  useEffect(() => {
    const streamr = new StreamrClient({
      auth: {
        ethereum: window.ethereum,
      },
    });
    streamr.subscribe(
      "0x9b4716573622751e7f6a56da251d054b6bba4b00/deh",
      // console.log(msg)
      (message) => {
        setMsg(message);
        setLoading(true);
      }
    );
    return () => setLoading(false);
  });
  const addMsg = () => {
    const temp = document.getElementById("msg");
    const div = document.createElement("p");
    div.className = "cs-message-sender";
    div.innerHTML = msg;
    setMsg("");
    temp.appendChild(div);
    temp.scrollTop = temp.scrollHeight;
    // This function will be called when new messages occur
    console.log(JSON.stringify(msg));
  };
  useEffect(() => {
    if (loading) {
      addMsg();
    }
  }, [loading]);

  useEffect(() => {
    createStreamer();
  }, []);

  return (
    <div className="cs-main">
      <div className="video-main">
        <ReactPlayer
          className="cs-video"
          url={
            "https://livepeercdn.studio/hls/" +
            location.state.id +
            "/index.m3u8"
          }
          controls={true}
          style={{ width: "100%" }}
        />
      </div>
      <div className="cs-message-main">
        <div className="cs-message-header">Messages</div>
        <div className="cs-message-senderparent" id="msg">
          <p className="cs-message-sender">Hello</p>
        </div>
      </div>
    </div>
  );
}

export default ViewStream;
