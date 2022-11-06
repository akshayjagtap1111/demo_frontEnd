import React from "react";
import Influencer_setup from "../Influencer_setup/Influencer_setup";
import Set_password from "../Set_password/Set_password";
import User_type_pop_up from "../User_type_pop_up/User_type_pop_up";
import "./Register_general_user.css";

export default function Register_general() {
  const inf_ac_flag_init_state = {
    is_inf_flag: false,
    Make_pop_visible: false,
    confirmed_flag: false,
    show_password_setup: false,
  };

  const [inf_ac_flag, set_inf_ac_flag] = React.useState(inf_ac_flag_init_state);

  const reg_comp_init_state = {
    name: "",
    email: "",
    role: "user",
    username: "",
    password: "",
    phone: "",
    instagram: "",
    facebook: "",
    linkedin: "",
    youtube: "",
  };

  const [reg_comp_state, set_reg_comp_state] =
    React.useState(reg_comp_init_state);

  const { name, email, username } = reg_comp_state;

  const handle_reg_comp_state = (e) => {
    const { name, value } = e.target;

    console.log("getting props");

    set_reg_comp_state((prev) => ({ ...prev, [name]: value }));
  };

  const handle_inf_ac_flag = (e) => {
    // console.log(e)
    const { name } = e.target;
    if (name == "next_btn") {
      if (!inf_ac_flag.confirmed_flag) {
        set_inf_ac_flag((prev) => ({ ...prev, Make_pop_visible: true }));
      } else {
        set_inf_ac_flag((prev) => ({ ...prev, show_password_setup: true }));
      }
    } else if (name == "yes_btn") {
      set_inf_ac_flag((prev) => ({
        ...prev,
        Make_pop_visible: false,
        is_inf_flag: true,
        confirmed_flag: true,
      }));
      set_reg_comp_state((prev) => ({ ...prev, role: "influencer" }));
    } else if (name == "no_btn") {
      set_inf_ac_flag((prev) => ({
        ...prev,
        Make_pop_visible: false,
        is_inf_flag: false,
        confirmed_flag: true,
        show_password_setup: true
      }));
    } else if (name == "back_from_inf_set") {
      set_inf_ac_flag((prev) => ({
        ...prev,
        Make_pop_visible: false,
        is_inf_flag: false,
        confirmed_flag: false,
      }));
    } else if (name == "back_from_pass") {
      set_inf_ac_flag((prev) => ({
        ...prev,
        show_password_setup: false,
        confirmed_flag: false,
      }));
    }

    // console.log(e)
  };

  return (
    <div>
      <div id="register_outer">
        {inf_ac_flag.show_password_setup ? (
          <Set_password
            handle_inf_ac_flag={handle_inf_ac_flag}
            handle_reg_comp_state={handle_reg_comp_state}
            reg_comp_state={reg_comp_state}
          />
        ) : (
          <div>
            <h4 id="reg_head">CREATE NEW ACCOUNT</h4>
            <div id="register_box">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">
                  <img
                    src="https://media.istockphoto.com/vectors/men-profile-icon-vector-id1152253495?b=1&k=20&m=1152253495&s=170667a&w=0&h=_t4ok-VGzfjg97kdjQnbcr4ime1BSPwJwHmPs4FDTs8="
                    id="icons_png"
                  />
                  Name
                </span>
                <input
                  className="form-control"
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  value={name}
                  onChange={handle_reg_comp_state}
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">
                  <img
                    src="https://media.istockphoto.com/vectors/men-profile-icon-vector-id1152253495?b=1&k=20&m=1152253495&s=170667a&w=0&h=_t4ok-VGzfjg97kdjQnbcr4ime1BSPwJwHmPs4FDTs8="
                    id="icons_png"
                  />
                  Email
                </span>
                <input
                  className="form-control"
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  value={email}
                  onChange={handle_reg_comp_state}
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">
                  <img
                    src="https://media.istockphoto.com/vectors/men-profile-icon-vector-id1152253495?b=1&k=20&m=1152253495&s=170667a&w=0&h=_t4ok-VGzfjg97kdjQnbcr4ime1BSPwJwHmPs4FDTs8="
                    id="icons_png"
                  />{" "}
                  Username
                </span>
                <input
                  className="form-control"
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  type="text"
                  placeholder="Enter Username"
                  name="username"
                  value={username}
                  onChange={handle_reg_comp_state}
                />
              </div>
              {inf_ac_flag.is_inf_flag ? (
                <Influencer_setup
                  handle_reg_comp_state={handle_reg_comp_state}
                  reg_comp_state={reg_comp_state}
                />
              ) : (
                ""
              )}

              {inf_ac_flag.is_inf_flag ? (
                <button
                  className="btn btn-primary"
                  name="back_from_inf_set"
                  style={{ margin: 5 }}
                  onClick={handle_inf_ac_flag}
                >
                  Back
                </button>
              ) : (
                ""
              )}
              <button
                className="btn btn-primary"
                name="next_btn"
                style={{ margin: 5 }}
                onClick={handle_inf_ac_flag}
              >
                Next
              </button>
            </div>

            {inf_ac_flag.Make_pop_visible ? (
              <User_type_pop_up handle_inf_ac_flag={handle_inf_ac_flag} />
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  );
}
