import "./rightbar.css";

export default function Rightbar({ profile }) {
  const ProfileRightbar = () => {
    return (
      <>
        <div className="profile-rightbarTitle">User information</div>
        <div className="profile-rightbar-main">
          <div className="profile-rightbarInfoItem">
            <span className="profile-rightbarInfoKey">Position:</span>
            <span className="profile-rightbarInfoValue">Developer</span>
          </div>
          <div className="profile-rightbarInfo">
            <div className="profile-rightbarInfoItem">
              <span className="profile-rightbarInfoKey">City:</span>
              <span className="profile-rightbarInfoValue">Random City</span>
            </div>
            <div className="profile-rightbarInfoItem">
              <span className="profile-rightbarInfoKey">e-mail:</span>
              <span className="profile-rightbarInfoValue">email@email.com</span>
            </div>
            <div className="profile-rightbarInfoItem">
              <span className="profile-rightbarInfoKey">Contact Number:</span>
              <span className="profile-rightbarInfoValue">9876543210</span>
            </div>
            <div className="profile-rightbarInfoItem">
              <span className="profile-rightbarInfoKey">About:</span>
              <span className="profile-rightbarInfoValue">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur eius ea quisquam voluptatibus facilis in quidem nemo
                harum hic corporis. Velit facilis molestias quaerat atque iusto
                eligendi laborum accusamus optio.
              </span>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="profile-rightbar">
      <div className="profile-rightbarWrapper">
        <ProfileRightbar />
      </div>
    </div>
  );
}
