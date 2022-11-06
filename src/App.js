import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";
import * as V from "victory";
import { VictoryBar } from "victory";
import { Routes, Route } from "react-router-dom";
import Login from "./components/General/Login/Login";
import Home from "./components/Home/Home";
import Register_admin from "./components/Admin/Register_admin/Register_admin";
import Register_general from "./components/General/Register_general/Register_general_user/Register_general_user";
import Admin_dashboard from "./components/Admin/Admin_dashboard/Admin_dashboard";
import Inf_dashboard from "./components/Influencer/Inf_dashboard/Inf_dashboard";
import Inf_profile from "./components/Influencer/Inf_profile/Inf_profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register-admin" element={<Register_admin/>}></Route>
        <Route path="/register-general" element={<Register_general />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin-dashboard" element={<Admin_dashboard />}></Route>
        <Route path="/inf-dashboard" element={<Inf_dashboard />}></Route>
        <Route path="/Admin-profile" element={<Admin_dashboard />}></Route>
        <Route path="/inf-profile" element={<Inf_profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
