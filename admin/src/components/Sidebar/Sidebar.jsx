import { Link } from "react-router-dom";
import { useContext } from "react";
import {
  MdAccountCircle,
  MdDashboard,
  MdInsertChart,
  MdNotifications,
  MdHealthAndSafety,
  MdTextSnippet,
  MdSettings,
  MdLogout,
} from "react-icons/md";
import { FaClipboardList, FaTruck } from "react-icons/fa";
import { AiTwotoneShop } from "react-icons/ai";
import { RiFolderUserFill } from "react-icons/ri";

import { DarkModeContext } from "context/darkModeContext";
import "./Sidebar.scss";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <Link to="/" className="top">
        <img src="/images/logo.png" alt="Logo" />
      </Link>
      <hr />
      <section className="center">
        <div className="center__main">
          <h4>Main</h4>
          <ul>
            <Link to="/">
              <li>
                <MdDashboard className="icon" />
                Dashboard
              </li>
            </Link>
          </ul>
        </div>
        <div className="center__lists">
          <h4>Lists</h4>
          <ul>
            <Link to="/users">
              <li>
                <MdAccountCircle className="icon" />
                Users
              </li>
            </Link>
            <Link to="/products">
              <li>
                <AiTwotoneShop className="icon" />
                Products
              </li>
            </Link>
            <Link to="/orders">
              <li>
                <FaClipboardList className="icon" />
                Orders
              </li>
            </Link>
            <li>
              <FaTruck className="icon" />
              Delivery
            </li>
          </ul>
        </div>
        <div className="center__useful">
          <h4>Useful</h4>
          <ul>
            <li>
              <MdInsertChart className="icon" />
              Stats
            </li>
            <li>
              <MdNotifications className="icon" />
              Notifications
            </li>
          </ul>
        </div>
        <div className="center__service">
          <h4>Service</h4>
          <ul>
            <li>
              <MdHealthAndSafety className="icon" />
              System Health
            </li>
            <li>
              <MdTextSnippet className="icon" />
              Logs
            </li>
            <li>
              <MdSettings className="icon" />
              Settings
            </li>
          </ul>
        </div>
        <div className="center__user">
          <h4>User</h4>
          <ul>
            <li>
              <RiFolderUserFill className="icon" />
              Profile
            </li>
            <li>
              <MdLogout className="icon" />
              Logout
            </li>
          </ul>
        </div>
      </section>
      <section className="bottom">
        <h4>Theme</h4>
        <div className="bottom__theme">
          <div
            className="theme--light"
            onClick={() => dispatch({ type: "LIGHT" })}
          ></div>
          <div
            className="theme--dark"
            onClick={() => dispatch({ type: "DARK" })}
          ></div>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
