import { Navbar, Sidebar } from "components/templates";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home__content">
        <Navbar />
        Home Container
      </div>
    </div>
  );
};

export default Home;
