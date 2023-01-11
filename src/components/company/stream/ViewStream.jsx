import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import liveStream from "./livestream.json";
import { ethers } from "ethers";

function ViewStream() {
  var contrat_address = "0x6acf713321f539d4749108338534e2b79403f8dc";

  const getStream = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const streamInstance = new ethers.Contract(
      contrat_address,
      liveStream,
      signer
    );

    // const storeStream = await streamInstance.storeStream(stream_.streamKey);
    // const getStream = await streamInstance.getStream(
    //   "0x0195ad2Fb013cCdAB86d0b07B413163111f7CB05"
    // );

    const getAllStream = await streamInstance.getAllStream([
      "0x0195ad2Fb013cCdAB86d0b07B413163111f7CB05",
    ]);
    console.log(getAllStream);
  };

  useEffect(() => {
    getStream();
  }, []);

  return (
    <div>
      <div className="exp-pa">
        <div className="exp-bg stream">
          <div className="exp-img">
            {/* <img src="https://picsum.photos/200" alt="" /> */}
            <ReactPlayer
              url={"https://livepeercdn.studio/hls/6de9wdkmngzmvybw/index.m3u8"}
              controls={true}
              style={{ width: "100%" }}
            />
          </div>
          {/* <div className="exp-name" title={artist.name}>{artist.name}</div>
              <p className="exp-description">{artist.description}</p> */}
        </div>
      </div>
    </div>
  );
}

export default ViewStream;
