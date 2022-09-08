import Post from "./Post";
import EducationPost from "./Education";
import SkillsPost from "./Skills";
import "./feed.css";
import { Experience, Education, Skills } from "../dummyData";

export default function Feed() {
  return (
    <div className="profile-feed">
      <div className="profile-feed-header">Experience</div>
      <div className="profile-feedWrapper">
        {Experience.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>

      <div className="profile-feed-header">Education</div>
      <div className="profile-feedWrapper">     
        {Education.map((p) => (
          <EducationPost key={p.id} edu={p} />
        ))}
      </div>

      <div className="profile-feed-header">Skills</div>
      <div className="profile-skills-feedWrapper">
        {Skills.map((p) => (
          <SkillsPost key={p.id} skills={p} />
        ))}
      </div>
    </div>
  );
}
