// src/layout/Header.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/images/logo.jpg'

//import "./Header.scss"; // optional: create this for styling

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className="app-header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
      </div>

      <div className="profile-container">
        <div
          className="profile-icon"
          onClick={() => setDropdownOpen((prev) => !prev)}
        >
          👤
        </div>
        {dropdownOpen && (
          <div className="dropdown-menu">
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
