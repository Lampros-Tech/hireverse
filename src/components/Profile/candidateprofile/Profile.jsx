import "./profile.css";
import Feed from "./Feed";
import Rightbar from "./Rightbar";

export default function Profile() {
  return (
    <>
      <div className="profile-profile">
        <div className="profile-profileRight">
          <div className="profile-profileRightTop">
            <div className="profile-profileCover">
              <img
                className="profile-profileCoverImg"
                src="../assets/post/1.jpeg"
                alt=""
              />
              <img
                className="profile-profileUserImg"
                src="../assets/person/1.jpeg"
                alt=""
              />
            </div>
            <div className="profile-profileInfo">
                <h4 className="profile-profileInfoName">John Smith</h4>
                <span className="profile-profileInfoDesc">Hello World</span>
            </div>
          </div>
          <div className="profile-profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
