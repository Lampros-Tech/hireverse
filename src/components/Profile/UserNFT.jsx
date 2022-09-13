import "./UserNFT.css";
import NFTimg from "./images/logo.png"
import { UserNFTData } from "./dummyData";

export default function UserNft({ usenft }) {
 
  return (
    <>
    <div className="usernft-skillpost-outer">
    <div className="usernft-skillpost">
      <div className="usernft-skillWrapper">
        <div className="usernft-skillTop">
          <div className="usernft-skillTopLeft">
         
            <span className="usernft-skillUsername">
            {UserNFTData.filter((u) => u.id === usenft?.id)[0].testname}
            </span>
          </div>

          <div className="usernft-skillTopRight">
          <span className="usernft-skillUsername">
          {/* <img
              className="usernft-skillEditImg"
              src={Skills.filter((u) => u.id === skills?.id)[0].edit}
              alt=""
            /> */}
            </span>
          </div>
        </div>
        <div className="usernft-skillCenter">
        <span className="usernft-skillUsername">
        <img
              className="usernft-skillProfileImg"
              src= {NFTimg}
              alt=""
            />
            </span>
        </div>
        <div className="usernft-skillBottom">
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
