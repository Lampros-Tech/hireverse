import "./education.css";
import { Education } from "../dummyData";

export default function Post({ edu }) {
 


  return (
    <>
    <div className="profile-education">
      <div className="profile-educationWrapper">
        <div className="profile-educationTop">
          <div className="profile-educationTopLeft">
          <img
              className="profile-educationProfileImg"
              src={Education.filter((u) => u.id === edu?.id)[0].photo}
              alt=""
            />
            <span className="profile-educationUsername">
              {Education.filter((u) => u.id === edu?.id)[0].institutionname}
            </span>
          </div>

          <div className="profile-educationTopRight">
          <span className="profile-educationUsername">
          <img
              className="profile-educationEditImg"
              src={Education.filter((u) => u.id === edu?.id)[0].edit}
              alt=""
            />
            </span>
          </div>
        </div>
        <div className="profile-educationCenter">
        <span className="profile-educationUsername">
              {Education.filter((u) => u.id === edu?.id)[0].degree}
            </span>
        </div>
        <div className="profile-educationCenter">
        <span className="profile-educationUsername">
        {Education.filter((u) => u.id === edu?.id)[0].duration}
            </span>
        </div>
      </div>
    </div>
    </>
  );
}
