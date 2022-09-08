import Feed from "./Feed";
import Rightbar from "./Rightbar";
import "./home.css"
import Profile from "./Profile";
export default function Home() {
  return (
    <>
      <div className="profile-homeContainer">
        <Profile/>
        {/* <Feed/>
        <Rightbar/> */}
      </div>
    </>
  );
}
