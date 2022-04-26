import {
  MdArrowDropUp,
  MdArrowDropDown,
  MdAccountCircle,
  MdShoppingCart,
  MdAccountBalanceWallet,
} from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";
import "./Widgets.scss";

const Widgets = ({ type }) => {
  let data;
  let amount = 750;
  let diff = 10;

  switch (type) {
    case "users":
      data = {
        title: "Users",
        isMoney: false,
        link: "See all Users",
        icon: (
          <MdAccountCircle
            className="widget-icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "orders":
      data = {
        title: "Orders",
        isMoney: false,
        link: "View all Orders",
        icon: (
          <MdShoppingCart
            className="widget-icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218, 165, 32, 0.2)",
            }}
          />
        ),
      };
      break;
    case "earnings":
      data = {
        title: "Earnings",
        isMoney: true,
        link: "View Net Earnings",
        icon: (
          <BiDollarCircle
            className="widget-icon"
            style={{ color: "green", backgroundColor: "rgba(0, 255, 0, 0.2)" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "My Balance",
        isMoney: true,
        link: "View My Balance",
        icon: (
          <MdAccountBalanceWallet
            className="widget-icon"
            style={{ color: "purple", backgroundColor: "rgba(0,0,255, 0.2)" }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <article className="widgets">
      <header className="widgets-top">
        <h4>{data.title}</h4>
        <div className="top-percentage increase">
          <MdArrowDropUp />
          <span>+{diff}%</span>
        </div>
      </header>
      <div className="widgets-center">
        {data.isMoney && "$ "}
        {amount}
      </div>
      <footer className="widgets-bottom">
        <a href="/#">{data.link}</a>
        {data.icon}
      </footer>
    </article>
  );
};

export default Widgets;
