import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter Your Username" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Your Password"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
