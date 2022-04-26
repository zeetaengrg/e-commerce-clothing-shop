import { useState } from "react";
import "./Login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <section className="login">
      <form>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter Your Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn" type="submit" onClick={handleClick}>
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
