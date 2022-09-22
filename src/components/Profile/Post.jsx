import "./post.css";
import { Experience } from "./dummyData";
import ex_logo from "./images/logo.png";
import editimg from "./images/edit.svg";

export default function Post({ post }) {
  return (
    <>
      <div className="profile-post">
        <div className="profile-postWrapper">
          <div className="profile-postTop">
            <div className="profile-postTopLeft">
              <img className="profile-postProfileImg" src={ex_logo} alt="" />
              <span className="profile-postUsername">
                {Experience.filter((u) => u.id === post?.id)[0].companyname}
              </span>
            </div>

            <div className="profile-postTopRight">
              <span className="profile-postUsername">
                <img className="profile-postEditImg" src={editimg} alt="" />
              </span>
            </div>
          </div>
          <div className="profile-postCenter">
            <span className="profile-postUsername">
              {Experience.filter((u) => u.id === post?.id)[0].location}
            </span>
          </div>
          <div className="profile-postCenter">
            <span className="profile-postUsername">
              {Experience.filter((u) => u.id === post?.id)[0].duration}
            </span>
          </div>
          <div className="profile-postBottom">
            <span className="profile-postUsername">
              {Experience.filter((u) => u.id === post?.id)[0].position}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}