import { useState } from "react";
import { MdCloudUpload } from "react-icons/md";
import { Navbar, Sidebar } from "components";
import "./New.scss";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

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
            <h4>{title}</h4>
          </article>
        </section>
        <section className="bottom">
          <div className="bottom-content">
            <figure className="left">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt="Camera"
              />
              <figcaption>
                <label htmlFor="file" className="file-label">
                  Upload Image:
                  <MdCloudUpload
                    style={{ cursor: "pointer", fontSize: "1.5rem" }}
                  />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </figcaption>
            </figure>
            <div className="right">
              <form>
                {inputs.map((item) => (
                  <div className="form-control" key={item.id}>
                    <label htmlFor={item.ID}>{item.label}</label>
                    <input
                      type={item.type}
                      id={item.ID}
                      placeholder={item.placeholder}
                    />
                  </div>
                ))}
                <button className="btn" type="submit" onClick={handleClick}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default New;
