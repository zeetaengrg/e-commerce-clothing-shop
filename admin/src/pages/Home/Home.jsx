import {
  Sidebar,
  Navbar,
  Widgets,
  RevenueChart,
  GraphChart,
} from "components/templates";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <section className="home-right">
        <Navbar />
        <section className="right__widgets">
          <Widgets type="users" />
          <Widgets type="orders" />
          <Widgets type="earnings" />
          <Widgets type="balance" />
        </section>
        <section className="right__charts">
          <RevenueChart />
          <GraphChart />
        </section>
      </section>
    </div>
  );
};

export default Home;
