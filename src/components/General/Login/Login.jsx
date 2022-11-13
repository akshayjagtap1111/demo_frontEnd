import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Login.css";
import { Navigate, useNavigate } from "react-router-dom";
// import { GoogleLogin } from "react-google-login";
// import FacebookLogin from "react-facebook-login";
// import Home_nav from "../../home/Home_nav";
import { userLogin } from "../../../redux/Login/action";
import Navbar from "../Navbar/Navbar";

export default function UserLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.login);
  console.log(user);

  React.useEffect(() => {
    if (user.isAuthenticated) {
      navigate("/");
    }
  });

  const initialState = {
    username: "",
    password: "",
    role: "user",
  };

  const [logData, setlogData] = React.useState(initialState);

  const handleChange = (e) => {
    console.log(e);

    const { name, value } = e.target;
    if (e.target.checked) {
      setlogData((prev) => ({ ...prev, role: "influencer" }));
    }
    setlogData((prev) => ({ ...prev, [name]: value }));
  };
  const { username, password } = logData;

  const handleLogin = (e) => {
    console.log(logData);
    dispatch(userLogin(logData));
  };

  return (
    <div>
      <Navbar />
      <div id="login_outer">
        <div id="login_box">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
              <img
                src="http://pluspng.com/img-png/png-user-icon-icons-logos-emojis-users-2400.png"
                id="icons_png"
              />
              User Name
            </span>
            <input
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              type="text"
              placeholder="enter username"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </div>
          <br></br>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/97/Avast_Passwords_logo.png"
                id="icons_png"
              />
              Password
            </span>
            <input
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              type="password"
              placeholder="enter password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <div id="influencer">
            <label id="inflogin">Login as Influencer</label>
            <input
              class="form-check-input"
              type="checkbox"
              id="checkboxNoLabel"
              value=""
              aria-label="..."
              onChange={handleChange}
            />
          </div>
          <div id="log-reg-links">
            <button
              className="btn btn-primary"
              id="loginbtn"
              onClick={handleLogin}
            >
              Login
            </button>{" "}
            <Link to="/ForgotPassword" id="link_source">
              Forgotten Password?
            </Link>{" "}
          </div>
          <div className="hr">Or Login With</div>
          <div className="social">
            {/* <GoogleLogin
              clientId="Your google client id"
              buttonText="Login with google"
              // onSuccess={responseGoogle}
              cookiePolicy={"single_host_origin"}
            /> */}
            {/* <FacebookLogin
              appId="Your facebook app id"
              autoLoad={false}
              fields="name,email,picture"
              // callback={responseFacebook}
            /> */}
          </div>
          <br /> <br />
          <p id="description">
            Dont have an Account ?{" "}
            <Link to="/register-general" id="link_source1">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
