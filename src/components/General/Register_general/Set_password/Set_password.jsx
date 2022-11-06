import React from "react";
import "./Set_password.css";

export default function Set_password({ handle_inf_ac_flag }) {
  return (
    <div>
      <div id="set_pass_cover">
        <h4 id="set_pass_head">Configure your Password</h4>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            <img
              src="https://media.istockphoto.com/vectors/men-profile-icon-vector-id1152253495?b=1&k=20&m=1152253495&s=170667a&w=0&h=_t4ok-VGzfjg97kdjQnbcr4ime1BSPwJwHmPs4FDTs8="
              id="icons_png"
            />
            Passward
          </span>
          <input
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
            type="text"
            placeholder="Create Password"
            name="username"
            required
            // value={username}
            // onChange={handleChange}
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            <img
              src="https://media.istockphoto.com/vectors/men-profile-icon-vector-id1152253495?b=1&k=20&m=1152253495&s=170667a&w=0&h=_t4ok-VGzfjg97kdjQnbcr4ime1BSPwJwHmPs4FDTs8="
              id="icons_png"
            />
            Confirm Passward
          </span>
          <input
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
            type="text"
            placeholder="Confirm Password"
            name="username"
            required
            // value={username}
            // onChange={handleChange}
          />
        </div>

        <button
          className="btn btn-primary"
          name="back_from_pass"
          style={{ margin: 5 }}
          onClick={handle_inf_ac_flag}
        >
          Back
        </button>
        <button
          className="btn btn-primary"
          name="next_btn"
          style={{ margin: 5 }}
          // onClick={handle_inf_ac_flag}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
