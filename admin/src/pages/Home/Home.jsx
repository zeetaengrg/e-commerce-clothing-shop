import { Navbar, Sidebar } from "components/templates";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      {/* <Navbar /> */}
      <Sidebar />
      <div className="home__content"></div>
    </div>
  );
};

export default Home;
