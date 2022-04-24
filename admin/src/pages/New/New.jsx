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
          <article className="bottom-content">
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
                <input type="text" name="fullName" id="fullName" />
              </div>
              <div className="form-control">
                <label htmlFor="phone">Phone</label>
                <input type="number" name="phone" id="phone" />
              </div>
              <div className="form-control">
                <label htmlFor="address">Address</label>
                <input type="text" name="address" id="address" />
              </div>
            </form>
            <form className="right">
              <div className="form-control">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />
              </div>
              <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
              </div>
              <div className="form-control">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                />
              </div>
              <div className="form-control">
                <label htmlFor="country">Country</label>
                <input type="text" name="country" id="country" />
              </div>
            </form>
          </article>
        </section>
      </div>
    </div>
  );
};

export default New;
