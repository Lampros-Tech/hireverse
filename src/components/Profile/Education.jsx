import "./education.css";
import { Education } from "./dummyData";
import edu_logo from "./images/edu.png";
import editimg from "./images/edit.svg";

export default function Post({ edu }) {
  return (
    <>
      <div className="profile-education">
        <div className="profile-educationWrapper">
          <div className="profile-educationTop">
            <div className="profile-educationTopLeft">
              <img
                className="profile-educationProfileImg"
                src={edu_logo}
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
                  src={editimg}
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
