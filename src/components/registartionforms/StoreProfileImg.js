import React from "react";
import { useState, useRef } from "react";
import { Web3Storage } from "web3.storage";
import UploadSVG from "../assets/images/uploadsvg.svg";
import "./storefile.css";
import env from "react-dotenv";

const client = new Web3Storage({ token: `${env.API_TOKEN}` });

function StoreProfileImg({ setFileCid }) {
  const chooseFile = useRef("");

  const [file, setFile] = useState("");

  async function uploadImage(e) {
    console.log(document.getElementById("input").files[0]);
    console.log(URL.createObjectURL(e.target.files[0]));
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  async function handleupload() {
    var fileInput = document.getElementById("input");
    const rootCid = await client.put(fileInput.files, {
      name: "cat pics",
      maxRetries: 3,
    });
    console.log(rootCid);
    const res = await client.get(rootCid);
    const files = await res.files();
    console.log(files);
    const url = URL.createObjectURL(files[0]);
    console.log(url);
    console.log(files[0].cid);

    setFileCid(files[0].cid);

    // setFile(url);
  }

  const resetFile = () => {
    setFile("");
  };

  return (
    <>
      {file ? (
        <p className="upload-img-instruction">
          Press "Reset" button to reset your uploaded image
        </p>
      ) : null}
      <div className="input_type">
        <div
          className="profile-img-div"
          onClick={() => {
            chooseFile.current.click();
          }}
        >
          {file ? (
            <>
              <img src={file} className="uploaded-img" alt="uploadsvg" />
            </>
          ) : (
            <img src={UploadSVG} className="uploadSVG" alt="uploadsvg" />
          )}

          <input
            type="file"
            ref={chooseFile}
            name="fileupload"
            id="input"
            hidden
            onChange={(e) => uploadImage(e)}
          ></input>
        </div>
        {file ? (
          <button className="upload-file-btn" onClick={() => resetFile()}>
            Reset
          </button>
        ) : null}
        <button className="upload-file-btn" onClick={() => handleupload()}>
          Upload File
        </button>
      </div>
    </>
  );
}

export default StoreProfileImg;
