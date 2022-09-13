import "./skills.css";
import { Skills } from "./dummyData";

export default function Post({ skills }) {
 
  return (
    <>
    <div className="pro-skillpost-outer">
    <div className="pro-skillpost">
      <div className="pro-skillWrapper">
        <div className="pro-skillTop">
          <div className="pro-skillTopLeft">
            <span className="pro-skillUsername">
              {Skills.filter((u) => u.id === skills?.id)[0].skills}
            </span>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
