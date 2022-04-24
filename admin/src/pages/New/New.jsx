import { MdCloudUpload } from "react-icons/md";
import { Navbar, Sidebar } from "components/templates";
import "./New.scss";

const New = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="new-content">
        <Navbar />
        <section className="top">
          <article className="top-content">
            <h4>Add New User</h4>
          </article>
        </section>
        <section className="bottom">
          <div className="bottom-content">
            <figure className="left">
              <img
                src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                alt="Camera"
              />
              <figcaption>
                <label htmlFor="file" className="file-label">
                  Upload Image:
                  <MdCloudUpload
                    style={{ cursor: "pointer", fontSize: "1.5rem" }}
                  />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </figcaption>
            </figure>
            <form className="center">
              <div className="form-control">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="fullName" placeholder="Your Full Name" />
              </div>
              <div className="form-control">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" placeholder="+01 234 567 890" />
              </div>
              <div className="form-control">
                <label htmlFor="address">Address</label>
                <div className="form-address">
                  <input type="text" id="address" placeholder="Street No." />
                  <input type="text" id="address" placeholder="City" />
                  <input type="text" id="address" placeholder="Country" />
                </div>
              </div>
            </form>
            <form className="right">
              <div className="form-control">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter Your Username"
                />
              </div>
              <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter Your Email" />
              </div>
              <div className="form-control">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Your Password"
                />
              </div>
              <div className="form-control">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Your Password"
                />
              </div>
              <button className="btn" type="submit" onClick={handleClick}>
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default New;
