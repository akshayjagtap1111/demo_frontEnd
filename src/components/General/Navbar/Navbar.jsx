import React from "react";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserLogin from "../Login/Login";

export default function Navbar() {
  const dispatch = useDispatch();

  const user_login_state = useSelector((state) => state.login);

  const user_profile_state = useSelector((state) => state.profile);

  const profile = user_profile_state.profile;

  return (
    <div id="nav_cover">
      <Link to="/">
        <img src="https://png.pngitem.com/pimgs/s/111-1111034_home-button-png-transparent-png-download.png" />
      </Link>

      <div id="navsearch">
        <input
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
          type="text"
          placeholder="Search"
        />
        <img
          src="https://s3.amazonaws.com/freestock-prod/450/freestock_564897937.jpg"
          id="icons_png"
        />
      </div>

      {profile ? (
        <div id="nav_login_profile">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbzUgX_3XP1deDGmUoQHEJhQtlnArW77odrDSB_EsD78D6m9DclyBTr9IcX4qSXd8YFSk&usqp=CAU" />
          {/* if not logged in login if logged in user name */}
          <p>{profile.name}</p>

          <abbr title="Log Out">
            {" "}
            <img
              src="https://www.iconsdb.com/icons/preview/orange/logout-xxl.png"
              alt=""
            />{" "}
          </abbr>
        </div>
      ) : (
        <div id="nav_login_profile">
          {/* if not logged in login if logged in user name */}
          <p>
            <Link to="/login"> LOGIN</Link>
          </p>
        </div>
      )}
    </div>
  );
}
