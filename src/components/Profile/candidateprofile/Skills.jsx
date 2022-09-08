import "./skills.css";
import { Skills } from "../dummyData";

export default function Post({ skills }) {
 
  return (
    <>
    <div className="pro-skillpost-outer">
    <div className="pro-skillpost">
      <div className="pro-skillWrapper">
        <div className="pro-skillTop">
          <div className="pro-skillTopLeft">
          <img
              className="pro-skillProfileImg"
              src={Skills.filter((u) => u.id === skills?.id)[0].photo}
              alt=""
            />
            <span className="pro-skillUsername">
              {Skills.filter((u) => u.id === skills?.id)[0].skills}
            </span>
          </div>

          <div className="pro-skillTopRight">
          <span className="pro-skillUsername">
          <img
              className="pro-skillEditImg"
              src={Skills.filter((u) => u.id === skills?.id)[0].edit}
              alt=""
            />
            </span>
          </div>
        </div>
        <div className="pro-skillCenter">
        <span className="pro-skillUsername">
              
            </span>
        </div>
        <div className="pro-skillBottom">
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
