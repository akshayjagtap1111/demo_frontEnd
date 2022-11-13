import React from "react";
import "./Add_content.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Navbar from "../../General/Navbar/Navbar";

export default function Add_content() {
  const user_profile_state = useSelector((state) => state.profile);

  const profile = user_profile_state.profile;

  const init_state = {
    owner: profile._id,
    video_name: "",
    title: "",
    link: "",
    duration: "",
    published_date: "",
    description: "",
    genre: "",
  };

  const [add_content_state, set_add_content_state] = React.useState(init_state);

  const handle_video_state = (e) => {
    const { name, value } = e.target;

    set_add_content_state((prev) => ({ ...prev, [name]: value }));
  };

  const handle_video_submit = () => {
    console.log(add_content_state);

    axios
      .post("http://localhost:5000/videos/add", add_content_state)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log("ufff we have error while adding video", error);
      });
  };

  const { owner, title, link, description, genre } = add_content_state;

  return (
    <div>
      <Navbar />
      <div id="add_content_cover">
        <h4>Add Content</h4>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            <img
              src="https://media.istockphoto.com/vectors/men-profile-icon-vector-id1152253495?b=1&k=20&m=1152253495&s=170667a&w=0&h=_t4ok-VGzfjg97kdjQnbcr4ime1BSPwJwHmPs4FDTs8="
              id="icons_png"
            />{" "}
            Video Title
          </span>
          <input
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
            type="text"
            placeholder="Enter Video Title"
            name="title"
            value={title}
            onChange={handle_video_state}
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            <img
              src="https://media.istockphoto.com/vectors/men-profile-icon-vector-id1152253495?b=1&k=20&m=1152253495&s=170667a&w=0&h=_t4ok-VGzfjg97kdjQnbcr4ime1BSPwJwHmPs4FDTs8="
              id="icons_png"
            />{" "}
            Video Link
          </span>
          <input
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
            type="text"
            placeholder="Enter Video Link"
            name="link"
            value={link}
            onChange={handle_video_state}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            <img
              src="https://media.istockphoto.com/vectors/men-profile-icon-vector-id1152253495?b=1&k=20&m=1152253495&s=170667a&w=0&h=_t4ok-VGzfjg97kdjQnbcr4ime1BSPwJwHmPs4FDTs8="
              id="icons_png"
            />{" "}
            Description
          </span>
          <input
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
            type="text"
            placeholder="Enter vedio description"
            name="description"
            value={description}
            onChange={handle_video_state}
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            <img
              src="https://media.istockphoto.com/vectors/men-profile-icon-vector-id1152253495?b=1&k=20&m=1152253495&s=170667a&w=0&h=_t4ok-VGzfjg97kdjQnbcr4ime1BSPwJwHmPs4FDTs8="
              id="icons_png"
            />{" "}
            Video Type
          </span>
          <input
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
            type="text"
            placeholder="Enter Video Type"
            name="genre"
            value={genre}
            onChange={handle_video_state}
          />
        </div>

        <button
          className="btn btn-primary"
          name="next_btn"
          style={{ margin: 5 }}
          onClick={handle_video_submit}
        >
          Add
        </button>
      </div>
    </div>
  );
}
