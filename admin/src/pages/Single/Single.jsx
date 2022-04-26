import {
  GraphChart,
  Navbar,
  ProductTable,
  Sidebar,
} from "components";
import "./Single.scss";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="single-content">
        <Navbar />
        <section className="top">
          <div className="top-left">
            <div className="edit-btn">Edit</div>
            <h4>Profile</h4>
            <div className="profile">
              <figure className="profile-img">
                <img
                  src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Profile Pic"
                />
              </figure>
              <article className="profile-info">
                <h1>Jane Doe</h1>
                <div className="info-item">
                  <span className="item__key">Email:</span>
                  <span className="item__value">janedoe@gmail.com</span>
                </div>
                <div className="info-item">
                  <span className="item__key">Phone:</span>
                  <span className="item__value">+01 562 584 874</span>
                </div>
                <div className="info-item">
                  <span className="item__key">Address:</span>
                  <span className="item__value">
                    Elton St. 123 Garden, New York
                  </span>
                </div>
                <div className="info-item">
                  <span className="item__key">Country:</span>
                  <span className="item__value">USA</span>
                </div>
              </article>
            </div>
          </div>
          <div className="top-right">
            <GraphChart aspect={3 / 1} title="Last 6 Months (Spending)" />
          </div>
        </section>
        <section className="bottom">
          <ProductTable />
        </section>
      </div>
    </div>
  );
};

export default Single;
