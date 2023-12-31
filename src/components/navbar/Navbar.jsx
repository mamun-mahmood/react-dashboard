import { svg } from "../../assets/svg";
import "./Navbar.css";
import ToggleSwitch from "./ToggleSwitch";
const Navbar = ({ setDarkMode, toggleSidebar }) => {
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        {/* search bar*/}
        <div className="navbar-search ">
          <input className="search-input" type="text" placeholder="Search..." />
          <div className="search-icon">{svg.searchIcon}</div>
        </div>
        {/* nav right  */}
        <div className="navbar-right">
          <div
            style={{
              marginRight: "10px",
            }}
          >
            <ToggleSwitch toggleDarkMode={toggleDarkMode} />
          </div>
          <div className="navbar-right-item">{svg.notification}</div>
          <button className="sidebar-toggler" onClick={() => toggleSidebar()}>
            <img width={35} src={"/images/hamburger.svg"} alt="" />
          </button>
          <div className="navbar-profile-button">
            <div className="avatar-name-conatainer">
              <img
                className="avatar"
                src="/images/avatar.png"
                alt="user-avatar"
              />
              <div className="name-email-container">
                <p className="navbar-profile-button-name">Andy Warhol</p>
                <p className="navbar-profile-button-email">
                  andywarhol@mail.com
                </p>
              </div>
            </div>
            <div className="navbar-profile-button-icon">{svg.morevert}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
