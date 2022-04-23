import { Navbar, Sidebar, Widgets } from "components/templates";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-right">
        <Navbar />
        <div className="right__widgets">
          <Widgets type="users" />
          <Widgets type="orders" />
          <Widgets type="earnings" />
          <Widgets type="balance" />
        </div>
        <div className="right__charts"></div>
      </div>
    </div>
  );
};

export default Home;
