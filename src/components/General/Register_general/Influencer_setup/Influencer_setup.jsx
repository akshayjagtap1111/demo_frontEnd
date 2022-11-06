import React from "react";

export default function Influencer_setup({
  handle_reg_comp_state,
  reg_comp_state,
}) {
  return (
    <div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon3">
          <img
            src="https://media.istockphoto.com/vectors/men-profile-icon-vector-id1152253495?b=1&k=20&m=1152253495&s=170667a&w=0&h=_t4ok-VGzfjg97kdjQnbcr4ime1BSPwJwHmPs4FDTs8="
            id="icons_png"
          />
          Phone
        </span>
        <input
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
          type="text"
          placeholder="enter username"
          name="phone"
          value={reg_comp_state.phone}
          onChange={handle_reg_comp_state}
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon3">
          <img
            src="https://media.istockphoto.com/vectors/men-profile-icon-vector-id1152253495?b=1&k=20&m=1152253495&s=170667a&w=0&h=_t4ok-VGzfjg97kdjQnbcr4ime1BSPwJwHmPs4FDTs8="
            id="icons_png"
          />
          Instagram
        </span>
        <input
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
          type="text"
          placeholder="Enter Instagram account Link"
          name="instagram"
          value={reg_comp_state.instagram}
          onChange={handle_reg_comp_state}
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon3">
          <img
            src="https://media.istockphoto.com/vectors/men-profile-icon-vector-id1152253495?b=1&k=20&m=1152253495&s=170667a&w=0&h=_t4ok-VGzfjg97kdjQnbcr4ime1BSPwJwHmPs4FDTs8="
            id="icons_png"
          />
          Facebook
        </span>
        <input
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
          type="text"
          placeholder="Enter Facebook account Link"
          name="facebook"
          value={reg_comp_state.facebook}
          onChange={handle_reg_comp_state}
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon3">
          <img
            src="https://media.istockphoto.com/vectors/men-profile-icon-vector-id1152253495?b=1&k=20&m=1152253495&s=170667a&w=0&h=_t4ok-VGzfjg97kdjQnbcr4ime1BSPwJwHmPs4FDTs8="
            id="icons_png"
          />
          Linkedin
        </span>
        <input
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
          type="text"
          placeholder="Enter Linkedin account Link"
          name="linkedin"
          value={reg_comp_state.linkedin}
          onChange={handle_reg_comp_state}
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon3">
          <img
            src="https://media.istockphoto.com/vectors/men-profile-icon-vector-id1152253495?b=1&k=20&m=1152253495&s=170667a&w=0&h=_t4ok-VGzfjg97kdjQnbcr4ime1BSPwJwHmPs4FDTs8="
            id="icons_png"
          />
          Youtube
        </span>
        <input
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
          type="text"
          placeholder="Enter Youtube account Link"
          name="youtube"
          value={reg_comp_state.youtube}
          onChange={handle_reg_comp_state}
        />
      </div>
    </div>
  );
}
