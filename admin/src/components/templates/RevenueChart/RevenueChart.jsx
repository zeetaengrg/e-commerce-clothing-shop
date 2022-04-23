import { MdMoreVert, MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { CircularProgressbar } from "react-circular-progressbar";
import "./RevenueChart.scss";
import "react-circular-progressbar/dist/styles.css";

const RevenueChart = () => {
  return (
    <div className="revenue">
      <header className="revenue-header">
        <h4>Total Revenue</h4>
        <MdMoreVert fontSize="1.5rem" color="grey" cursor="pointer" />
      </header>
      <article className="revenue-chart">
        <div className="chart__progress">
          <CircularProgressbar value={86} text={"86%"} strokeWidth={5} />
        </div>
        <div className="chart__info">
          <p className="info__title">Total Sales Today</p>
          <span className="info__amount">$ 1,535.50</span>
          <p className="info__desc">
            Previous Transaction Processing. Last payments may not be included.
          </p>
        </div>
      </article>
      <footer className="revenue-footer">
        <section className="footer__content">
          <h4 className="target__title">Target</h4>
          <div className="target__growth increase">
            <MdArrowDropUp className="icon" />
            <span>$12.4K</span>
          </div>
        </section>
        <section className="footer__content">
          <h4 className="target__title">Last Week</h4>
          <div className="target__growth decrease">
            <MdArrowDropDown className="icon" />
            <span>$7.5K</span>
          </div>
        </section>
        <section className="footer__content">
          <h4 className="target__title">Last Month</h4>
          <div className="target__growth increase">
            <MdArrowDropUp className="icon" />
            <span>$25.45K</span>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default RevenueChart;
