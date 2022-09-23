import "./profile.css";
import Feed from "./Feed";
import Rightbar from "./Rightbar";
import profileimg from "./images/person/1.jpeg";
import coverimg from "./images/post/1.jpeg";
import axios from "axios";
import { useEffect } from "react";
import { useAccount } from "wagmi";
export default function Profile() {
  // const {address } = useAccount();
  // useEffect(()=>{
  //   console.log(address)
  //   const data = {
  //     wallet_address:address
  //   }
  //   axios.post(`${process.env.REACT_APP_API_URL}/getProfile`, data)
  //   .then((res)=>{
  //     console.log(res)
  //   })
  // },[])
  const { address, isConnected } = useAccount();

  const getProfile = async () => {
    console.log("getting data from API");
    var data = JSON.stringify({
      wallet_address: address,
    });
    var config = {
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/getProfile`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <div className="profile-profile">
        <div className="profile-profileRight">
          <div className="profile-profileRightTop">
            <div className="profile-profileCover">
              <img
                className="profile-profileCoverImg"
                src={coverimg}
                alt="cover"
              />
              <img
                className="profile-profileUserImg"
                src={profileimg}
                alt="profile_image"
              />
            </div>
            <div className="profile-profileInfo">
              <h4 className="profile-profileInfoName">John Smith</h4>
              <span className="profile-profileInfoDesc">Hello World</span>
            </div>
          </div>
          <div className="profile-profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
