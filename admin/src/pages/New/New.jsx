import { MdCloudUpload } from "react-icons/md";
import { Navbar, Sidebar } from "components/templates";
import "./New.scss";

const New = () => {
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
            </figure>
            <form className="center">
              <div className="form-control">
                <label htmlFor="imgUpload">
                  Upload Your Profile Image: <MdCloudUpload />
                </label>
                <input
                  type="file"
                  name="imgUpload"
                  id="imgUpload"
                  style={{ display: "none" }}
                />
              </div>
              <div className="form-control">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Your Full Name"
                />
              </div>
              <div className="form-control">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="+01 234 567 890"
                />
              </div>
              <div className="form-control">
                <label htmlFor="address">Address</label>
                <div className="form-address">
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Street No."
                  />
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="City"
                  />
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Country"
                  />
                </div>
              </div>
            </form>
            <form className="right">
              <div className="form-control">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter Your Username"
                />
              </div>
              <div className="form-control">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="form-control">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                />
              </div>
              <div className="form-control">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm Your Password"
                />
              </div>
              <button className="btn" type="submit">
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
