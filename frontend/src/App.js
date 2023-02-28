import React from "react";
import UserList from "./pages/user/UserList.jsx";
import axios from "axios";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/Home/Home";
import LoginPage from "./pages/login/loginPage";
import LoginAdmin from "./pages/login/LoginAdmin";
import LoginResepsionis from "./pages/login/LoginResepsionis";
import LandingPageGuest from "./pages/guest/LandingPageGuest";
import TipeKamar from "./pages/room/TipeKamar";



import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardAdmin from "./pages/admin/DashboardAdmin.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* <<<<<login>>>>>>>>>>> */}

          <Route path="/login" element={<LoginPage />} />
          <Route path="/LoginAdmin" element={<LoginAdmin />} />
          <Route path="/LoginResepsionis" element={<LoginResepsionis />} />

          {/* <<<<<user>>>>>>>>>>> */}
          <Route path="/User" element={<UserList />} />

          {/* <<<<<Kamar>>>>>>>>>>> */}
          <Route path="/TipeKamar" element={<TipeKamar />} />
          {/* <Route path="/Tipekamar/:id" element={<TipeKamar />} /> */}

          {/* <<<<<Guest>>>>>>>>>>> */}
          <Route path="/LandingPageGuest" element={<LandingPageGuest />} />

          {/* <<<<<Admin>>>>>>>>>>> */}
          <Route path="/DashboardAdmin" element={<DashboardAdmin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
