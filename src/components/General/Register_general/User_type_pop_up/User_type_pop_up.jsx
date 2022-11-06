import React from "react";
import "./User_type_pop_up.css";
export default function User_type_pop_up({handle_inf_ac_flag}) {
  return (
    <div id="pop_up_cover">
      <h4 id="pop_up_head">do you want influencer account</h4>

      <button className="btn btn-primary" name="yes_btn" style={{margin:5}} onClick={handle_inf_ac_flag}>YES</button>
      <button className="btn btn-primary" name="no_btn" style={{margin:5}} onClick={handle_inf_ac_flag}>NO</button>
    </div>
  );
}
