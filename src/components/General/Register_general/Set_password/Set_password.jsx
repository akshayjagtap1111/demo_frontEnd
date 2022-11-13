import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../../../../redux/Register/action";
import "./Set_password.css";

export default function Set_password({
  handle_inf_ac_flag,
  handle_reg_comp_state,
  reg_comp_state,
}) {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  /////geting redux app states and dispatch functions

  const glob_reg_state = useSelector((state) => state.register);

  const [pass, set_pass] = React.useState("");

  const handle_pass = (e) => {
    set_pass(e.target.value);
  };

  const handle_submit = () => {
    dispatch(userRegister(reg_comp_state));
  };

  console.log(glob_reg_state.isRegistered);

  if (glob_reg_state.isRegistered) {
    navigate("/login");
  }
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
            Password
          </span>
          <input
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
            type="password"
            placeholder="Create Password"
            // name="username"
            required
            value={pass}
            onChange={handle_pass}
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            <img
              src="https://media.istockphoto.com/vectors/men-profile-icon-vector-id1152253495?b=1&k=20&m=1152253495&s=170667a&w=0&h=_t4ok-VGzfjg97kdjQnbcr4ime1BSPwJwHmPs4FDTs8="
              id="icons_png"
            />
            Confirm Password
          </span>
          <input
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
            type="password"
            placeholder="Confirm Password"
            name="password"
            required
            value={reg_comp_state.password}
            onChange={handle_reg_comp_state}
            // {pass==reg_comp_state.password?"":""}
            style={
              pass == reg_comp_state.password
                ? { color: "green" }
                : { color: "red" }
            }
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
          onClick={handle_submit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
