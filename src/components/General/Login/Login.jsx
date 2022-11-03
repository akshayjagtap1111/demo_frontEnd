import React from 'react'

import "./Login.css"

export default function Login() {
  return (
    <div>

<div id="login_outer">
<div id="login_box">
  <div className="input-group mb-3">
    <span className="input-group-text" id="basic-addon3"> username</span>
    <input  className="form-control" id="basic-url" aria-describedby="basic-addon3"
        type="text"
        placeholder="enter username"
        name="username"
        // value={username}
        // onChange={handleChange}
      />
  </div>

      <br></br>

      <div className="input-group mb-3">
    <span className="input-group-text" id="basic-addon3"> Password</span>
    <input  className="form-control" id="basic-url" aria-describedby="basic-addon3"
      
       type="password"
       placeholder="enter password"
       name="password"
      //  value={password}
      //  onChange={handleChange}
      />
  </div>
     
      <br />
      <button className="btn btn-primary" >Login</button>

           
      <br></br>
      <br />
<div id="log-reg-links">
    <p> Dont have account...? create One</p>

    <br />
   
    <p>@ Workspace Admin</p>
    </div>
</div>
</div>

    </div>
  )
}
