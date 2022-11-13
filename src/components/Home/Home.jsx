import React from "react";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { get_profile } from "../../redux/Profile/action";
import Navbar from "../General/Navbar/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Home() {
  const dispatch = useDispatch();

  const user_login_state = useSelector((state) => state.login);
  console.log(user_login_state);

  //user profile

  const user_profile_state = useSelector((state) => state.profile);
  const profile = user_profile_state.profile;

  //if not logged in  and trying to do some activity send back to login page

  const header = {
    Authorization: user_login_state.token,
  };

  const give_date=(string)=>{

    return string.substring(0,10)
  }

  const give_time =(string)=>{
    return string.substring(11,16)
  }
  const [all_videos, set_all_videos] = React.useState([]);

  console.log("all_videos", all_videos);

  //get the videos for generised home page

  //get the videos for the users intrest

  React.useEffect(() => {
    dispatch(get_profile(header));
  }, []);

  React.useEffect(() => {
    axios
      .get("http://localhost:5000/videos/all")
      .then((res) => {
        console.log(res.data);
        set_all_videos(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div id="navbar_container">
        <Navbar />
      </div>
      <div id="sub_container">
        <div id="sub_left">
          {user_profile_state.success ? (
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbzUgX_3XP1deDGmUoQHEJhQtlnArW77odrDSB_EsD78D6m9DclyBTr9IcX4qSXd8YFSk&usqp=CAU" />

              <p className="bold_text">{profile.name}</p>
              <p>{profile.bio}</p>

              {/* users social media links */}
              {profile.instagram ? (
                <abbr title={profile.instagram}>
                  {" "}
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.vVBHvUTzXuPNovUTHD0D8QHaHa&pid=Api&P=0"
                    alt=""
                    style={{ width: 40, height: 40 }}
                  />
                </abbr>
              ) : (
                ""
              )}

              {profile.facebook ? (
                <abbr title={profile.facebook}>
                  {" "}
                  <img
                    src="https://tse2.mm.bing.net/th?id=OIP.puXzIWWAv4w2PRJNv2jldwHaHa&pid=Api&P=0"
                    alt=""
                    style={{ width: 40, height: 40 }}
                  />
                </abbr>
              ) : (
                ""
              )}

              {profile.linkedin ? (
                <abbr title={profile.linkedin}>
                  {" "}
                  <img
                    src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG8.png"
                    alt=""
                    style={{ width: 40, height: 40 }}
                  />
                </abbr>
              ) : (
                ""
              )}

              <Link to="/inf-profile">
                <button
                  className="btn btn-primary"
                  id="loginbtn"
                  style={{
                    width: 200,
                    marginTop: 30,
                    backgroundColor: "#ed6408",
                  }}
                  // onClick={handleLogin}
                >
                  View my Profile
                </button>
              </Link>

              {profile.role == "influencer" ? (
                <div>
                  {/* <p>info text</p> */}
                  <Link to="/inf-dashboard">
                    {" "}
                    <button
                      className="btn btn-primary"
                      id="loginbtn"
                      style={{
                        width: 200,
                        marginTop: 50,
                        backgroundColor: "#ed6408",
                      }}
                      // onClick={handleLogin}
                    >
                      View my Dashboard
                    </button>
                  </Link>

                  <Link to="/add-content">
                    <button
                      className="btn btn-primary"
                      id="loginbtn"
                      style={{
                        width: 200,
                        marginTop: 50,
                        backgroundColor: "#ed6408",
                      }}
                      // onClick={handleLogin}
                    >
                      Create New
                    </button>
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            <div>
              <p> Uffff, it seems you are not logged in </p>
            </div>
          )}

          {/* if logged in show some controlls  */}

          {/* if not logged in  */}
        </div>
        <div id="sub_mid">
          {all_videos.map((el)=>(  <div id="inf_post_div">
            <div id="video_owner_info">
              <div>
                {/* image will be owner image----------cloudinary pending */}
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                  alt=""
                />
              </div>
              <div>
                {}
                <p className="video_mid_txt">{el.owner.name}</p>
                <p className="video_small_txt">{el.owner.bio}</p>
              </div>
            </div>
            <div id="video">
              <iframe
                src="https://www.youtube.com/embed/n_FCrCQ6-bA"
                frameborder="0"
                width={670}
                height={340}
              ></iframe>
            </div>
            <div id="video_info">
              <p className="video_mid_txt">{el.title}</p>
              <p className="video_small_txt">{el.description}</p>
              <p className="video_small_txt">Last update at {give_date(el.updatedAt)}, {give_time(el.updatedAt)}</p>
              <div id="like_bar">
                <p>like</p>
                <p>share</p>
                <p>Comment</p>
              </div>
            </div>
          </div>))}
        
          <div id="inf_post_div"></div>
        </div>
        <div id="sub_right"></div>
      </div>
    </div>
  );
}
