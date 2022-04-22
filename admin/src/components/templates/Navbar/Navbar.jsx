import {
  MdSearch,
  MdLanguage,
  MdNightlight,
  MdLightMode,
  MdNotifications,
  MdMessage,
  MdSettings,
} from "react-icons/md";
import "./Navbar.scss";

const Navbar = () => {
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
        <MdNightlight className="navbar__icon" />
        <MdNotifications className="navbar__icon" />
        <MdMessage className="navbar__icon" />
        <img src="/images/profile-img.png" alt="Profile Pic" />
        <MdSettings className="navbar__icon" />
      </section>
    </nav>
  );
};

export default Navbar;
