// import { NextPage } from "next";
import { useState, useEffect, useCallback } from "react";
// import Link from "next/link";
// import styles from "../styles/home.module.scss";
// import { createInflate } from "zlib";
// import toast from "../components/Toast";

const MintNft = () => {
  const [isMartian, setMartian] = useState(true);
  const [isConnected, setConnect] = useState(true);
  const [imageError, setImageError] = useState(true);
  const [viewType, setViewType] = useState("simple");
  const [address, setAddress] = useState("");

  const [nftImgUrl, setNftImgUrl] = useState("");
  const [nftName, setNftName] = useState("");
  const [nftDescription, setNftDescription] = useState("");

  const btnConnect = async () => {
    await window.martian.connect();
    const isConnected = await window.martian.isConnected();
    setConnect(isConnected);
    if (isConnected) {
      const martianAccount = await window.martian.account();
      setAddress(martianAccount.address);
    }
  };

  useEffect(() => {
    if ("martian" in window) {
      setMartian(true);
    }
  }, []);

  const notify = useCallback((type, message) => {
    console.log(type, message);
    // toast({ type, message });
  }, []);

  const btnCreateCollection = async () => {
    const txnHash = await window.martian.createCollection(
      "ColName123",
      "CollectionDescription",
      "https://aptos.dev"
    );
  };
  const btnCreateNft = async () => {
    // Create a collection
    // const txnHash1 = await window.martian.createCollection("ColName123", "CollectionDescription", "https://aptos.dev")
    console.log(nftName, nftDescription, nftImgUrl, imageError);
    if (nftName == "") {
      notify("error", "Input nft name!");
      return;
    }
    if (nftDescription == "") {
      notify("error", "Input nft description!");
      return;
    }
    if (nftImgUrl == "" || imageError) {
      notify("error", "Input valid image url!");
      return;
    }
    // Create Token
    const txnHash = await window.martian.createToken(
      "ColName123",
      nftName,
      nftDescription,
      1,
      nftImgUrl,
      1
    );
    console.log(txnHash);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center h-full w-full">
        {!isMartian ? (
          <>
            <p style={{ fontSize: "25px" }}>
              It seems like you have not installed
              <span style={{ fontWeight: 400 }}> Martian wallet </span>
              extension.
            </p>
            <a
              href={"https://www.martianwallet.xyz/"}
              target={"_blank"}
              style={{ fontWeight: 500, fontSize: "25px" }}
            >
              Click here
            </a>
          </>
        ) : !isConnected ? (
          <button onClick={btnConnect}>
            {/* onClick={() => setConnect(true)}> */}
            Connect <span>Aptos</span> wallet
          </button>
        ) : (
          <>
            <div
              className="flex flex-row justify-between items-start w-full"
              style={{
                width: viewType == "simple" ? "40%" : "60%",
                marginTop: "60px",
              }}
            >
              {viewType != "simple" && (
                <div className="flex flex-col justify-center items-center">
                  <h2 className="mb-[10px] font-semibold text-[20px]">
                    Create NFT Collection
                  </h2>
                  <input placeholder="NFT Collection name" type="text" />
                  <input placeholder="NFT Collection description" type="text" />
                  <input placeholder="NFT Collection Url" type="text" />
                  <button onClick={() => btnCreateCollection()}>
                    Create NFT Collection
                  </button>
                </div>
              )}
              <div className="flex flex-col justify-center items-center">
                <h2 className="mb-[10px] font-semibold">Create NFT</h2>
                <input
                  placeholder="NFT name"
                  type="text"
                  value={nftName}
                  onChange={(e) => setNftName(e.target.value)}
                />
                <input
                  placeholder="NFT Description"
                  type="text"
                  value={nftDescription}
                  onChange={(e) => setNftDescription(e.target.value)}
                />
                {viewType != "simple" && (
                  <input placeholder="NFT collection name" type="text" />
                )}
                <input
                  placeholder="NFT Url"
                  type="text"
                  onChange={(e) => {
                    setNftImgUrl(e.target.value);
                    setImageError(false);
                  }}
                />
                <button onClick={btnCreateNft}>Create NFT</button>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="mb-[10px]">NFT preview</p>
                <img
                  src={imageError ? "/image/initimg.svg" : nftImgUrl}
                  alt="nft-image"
                  onError={(e) => {
                    setImageError(true);
                  }}
                  data-src={nftImgUrl}
                  className="h-[200px] w-[200px] border-solid border-[1px] border-[rgb(78, 78, 78)] bg-[black] visible"
                />
              </div>
            </div>
            <p
              onClick={() =>
                setViewType(viewType == "simple" ? "advance" : "simple")
              }
            >
              Switch to Advanced view
            </p>
            <button
            //   className={`${styles.absolute_div} ${styles.btn} ${styles.textGreen} !top-[30px] !right-[515px] !w-[250px]`}
            >
              {address.substring(0, 6) +
                "..." +
                address.substring(address.length - 4)}
            </button>
          </>
        )}
      </div>
      <h1>Hello World</h1>
      <button onClick={() => btnConnect()}>
        {/* onClick={() => setConnect(true)}> */}
        Connect <span>Aptos</span> wallet
      </button>

      {/* <Link href={"/"}>
        <a>
          <img src="/image/martian.png" alt="Logo" width={23} height={23} />
          <p>Martian</p>
        </a>
      </Link>
      <Link href={"/"}>
        <a>
          <p>Tutorial</p>
        </a>
      </Link> */}
    </div>
  );
};

export default MintNft;
