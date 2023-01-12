import React from "react";
import { useEffect, useRef, useState } from "react";
import { Client } from "@livepeer/webrtmp-sdk";
import { ethers } from "ethers";
import liveStream from "./livestream.json";
import "./createstream.css";
import { StreamrClient, StreamPermission } from "streamr-client";

import Livepeer from "livepeer-nodejs";
// contact address :0x6acf713321f539d4749108338534e2b79403f8dc
var contrat_address = "0x6acf713321f539d4749108338534e2b79403f8dc";
const CreateStream = () => {
  const videoEl = useRef(null);
  const stream = useRef(null);
  const [session, setSession] = useState("");
  const [url, setUrl] = useState("");
  const [msg, setMsg] = useState();
  const { msgText } = useRef();
  const livepeerObject = new Livepeer("2219207c-552d-4847-abf1-425386027cfa");

  const publishMsg = async () => {
    const streamId = "0x9b4716573622751e7f6a56da251d054b6bba4b00/deh";

    //auth from burner wallet
    const { address, privateKey } = StreamrClient.generateEthereumAccount();

    const streamr = new StreamrClient({
      auth: {
        privateKey: privateKey,
      },
    });

    //{CODe for Granting Permission to Public}////////////////////////////////////////////////////////////
    // const stream = await streamr.getOrCreateStream({
    //   id: "0x9b4716573622751e7f6a56da251d054b6bba4b00/deh",
    // });
    // await stream.grantPermissions({
    //   public: true,
    //   permissions: [StreamPermission.SUBSCRIBE, StreamPermission.PUBLISH],
    // });

    // const msgs = {
    //   hello: msg,
    // };
    streamr.publish(streamId, msg);
  };

  const onButtonClick = async () => {
    videoEl.current.volume = 0;

    stream.current = await navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: true,
    });
    videoEl.current.srcObject = stream.current;
    videoEl.current.play();

    console.log(stream.current);
    const stream_ = await livepeerObject.Stream.create({
      name: "test_stream",
      profiles: [
        {
          name: "720p",
          bitrate: 2000000,
          fps: 30,
          width: 1280,
          height: 720,
        },
        {
          name: "480p",
          bitrate: 1000000,
          fps: 30,
          width: 854,
          height: 480,
        },
        {
          name: "360p",
          bitrate: 500000,
          fps: 30,
          width: 640,
          height: 360,
        },
      ],
    });
    console.log(stream_);
    console.log(stream_.playbackId);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const streamInstance = new ethers.Contract(
      contrat_address,
      liveStream,
      signer
    );

    const storeStream = await streamInstance.storeStream(stream_.playbackId);
    // const getStream = await streamInstance.getStream(
    //   "0x0195ad2Fb013cCdAB86d0b07B413163111f7CB05"
    // );
    // console.log(getStream);
    // if (record) {
    //   stream_.setRecord(true);
    // }
    const current_stream = await livepeerObject.Stream.get(stream_.id);
    console.log("video id" + stream_.id);
    const result = await current_stream.setRecord(true);
    console.log(result);
    const url =
      "https://livepeercdn.com/hls/" + stream_.playbackId + "index.m3u8";
    setUrl(url);
    const streamKey = stream_.streamKey;

    if (!stream.current) {
      alert("Video stream was not started.");
    }

    if (!streamKey) {
      alert("Invalid streamKey.");
      return;
    }

    const client = new Client();

    const session = client.cast(stream.current, streamKey);

    session.on("open", () => {
      console.log("Stream started.");
      alert("Stream started; visit Livepeer Dashboard.");
    });

    session.on("close", () => {
      console.log("Stream stopped.");
    });

    session.on("error", (err) => {
      console.log("Stream error.", err.message);
    });
  };
  const addMsg = async () => {
    await publishMsg();
    const temp = document.getElementById("msg");
    const div = document.createElement("p");
    div.className = "cs-message-sender";
    div.innerHTML = msg;
    setMsg("");
    temp.appendChild(div);
    temp.scrollTop = temp.scrollHeight;
  };

  return (
    <div className="cs-main">
      <div className="video-main">
        <video
          className="cs-video"
          ref={videoEl}
          controls
          // height="500px"
          // width="1000px"
        />
        <div className="video-btn-main">
          <button className="video-btn-start" onClick={() => onButtonClick()}>
            Start Stream
          </button>
          <button className="video-btn-stop">Stop Stream</button>
        </div>
      </div>
      <div className="cs-message-main">
        <div className="cs-message-header">Messages</div>
        <div className="cs-message-senderparent" id="msg">
          <p className="cs-message-sender">Hello</p>
        </div>
        <div className="cs-send-parent">
          <textarea
            style={{ resize: "none" }}
            className="cs-send"
            value={msg}
            type="text"
            onChange={(e) => {
              setMsg(e.target.value);
            }}
          />
          <button className="cs-sendbtn" onClick={() => addMsg()}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateStream;
