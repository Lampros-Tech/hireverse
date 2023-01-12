import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import liveStream from "./livestream.json";
import { ethers } from "ethers";
import { useLocation } from "react-router-dom";

function ViewStream() {
  const location = useLocation();
  // console.log(location.state.id);

  return (
    // <div>
    //   <div className="exp-pa">
    //     <div className="exp-bg stream">
    //       <div className="exp-img">
    //         {/* <img src="https://picsum.photos/200" alt="" /> */}
    //         <ReactPlayer
    //           url={
    //             "https://livepeercdn.studio/hls/" +
    //             // location.state.id +
    //             "/index.m3u8"
    //           }
    //           controls={true}
    //           style={{ width: "100%" }}
    //         />
    //       </div>
    //       {/* <div className="exp-name" title={artist.name}>{artist.name}</div>
    //           <p className="exp-description">{artist.description}</p> */}
    //     </div>
    //   </div>
    // </div>
    <div className="cs-main">
      <div className="video-main">
        <ReactPlayer
          className="cs-video"
          url={
            "https://livepeercdn.studio/hls/" +
            // location.state.id +
            "/index.m3u8"
          }
          controls={true}
          style={{ width: "100%" }}
        />
      </div>
      <div className="cs-message-main">
        <div className="cs-message-header">Messages</div>
        <div className="cs-message-senderparent" id="msg">
          <div className="cs-message-sender">Hello</div>
        </div>
      </div>
    </div>
  );
}

export default ViewStream;
