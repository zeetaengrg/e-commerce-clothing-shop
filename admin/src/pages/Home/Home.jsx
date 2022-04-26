import {
  Sidebar,
  Navbar,
  Widgets,
  RevenueChart,
  GraphChart,
  ProductTable,
} from "components";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-right">
        <Navbar />
        <section className="right__widgets">
          <Widgets type="users" />
          <Widgets type="orders" />
          <Widgets type="earnings" />
          <Widgets type="balance" />
        </section>
        <section className="right__charts">
          <RevenueChart />
          <GraphChart title="Last 6 Months (Revenue)" />
        </section>
        <section className="right__table">
          <ProductTable />
        </section>
      </div>
    </div>
  );
};

export default Home;
