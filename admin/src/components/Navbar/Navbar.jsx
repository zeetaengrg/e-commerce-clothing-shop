import { useContext, useState } from "react";
import {
  MdSearch,
  MdLanguage,
  MdNightlight,
  MdLightMode,
  MdNotifications,
  MdMessage,
  MdSettings,
} from "react-icons/md";
import { DarkModeContext } from "context/darkModeContext";
import "./Navbar.scss";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const { dispatch } = useContext(DarkModeContext);

  const handleClick = () => {
    dispatch({ type: "TOGGLE" });
    setIsClicked(!isClicked);
  };

  const setDarkMode = (
    <MdNightlight className="navbar__icon" onClick={handleClick} />
  );

  const setLightMode = (
    <MdLightMode className="navbar__icon" onClick={handleClick} />
  );

  return (
    <nav className="navbar">
      <section className="section-one">
        <input type="text" placeholder="Search" />
        <MdSearch className="search__icon" />
      </section>
      <section className="section-two">
        <div className="section-two__language">
          <MdLanguage className="navbar__icon" />
          English
        </div>
        <div className="section-two__theme">
          {isClicked ? setLightMode : setDarkMode}
        </div>
        <div className="section-two__notification">
          <span className="notify-count">2</span>
          <MdNotifications className="navbar__icon" />
        </div>
        <div className="section-two__message">
          <span className="notify-count">3</span>
          <MdMessage className="navbar__icon" />
        </div>
        <div className="section-two__profile">
          <img src="/images/profile-img.png" alt="Profile Pic" />
        </div>
        <div className="section-two__setting">
          <MdSettings className="navbar__icon" />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
