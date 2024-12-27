import React, { useState,useEffect } from "react";

// ICONS
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

// ROUTING
import { Link, useNavigate } from "react-router-dom";

// DATA FILE
import { SidebarData } from "./SlidebarData";

// STYLES
import "./Navbar.css";

export default function Navbar() {

  const isAuthenticated = () => {
    return localStorage.getItem("accessToken") !== null; // Check for access token
  };

  const [authenticated, setAuthenticated] = useState(isAuthenticated());
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate(); // Hook for navigation
  const [logouticon,setLogoutIcon] =  useState(false)

  const showSidebar = () => setSidebar(!sidebar);

  useEffect(()=>{
    if(logouticon){
      navigate("/login");
    }

  },[logouticon])

  useEffect(() => {
      const handleStorageChange = () => {
        setAuthenticated(isAuthenticated());
      };
  
      window.addEventListener("storage", handleStorageChange);
      return () => {
        window.removeEventListener("storage", handleStorageChange);
      };
    }, [authenticated]);

  // Logout Functionality
  const handleLogout = () => {
    localStorage.clear();
    setLogoutIcon(true) 
    setAuthenticated(false)// Clear all localStorage data
    // Navigate to login page
  };


  console.log("authenticated",authenticated)
  return (
    <>
      {authenticated ? <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div> : <></>}
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>

          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}

          {/* Logout Menu Item */}
          <li className="nav-text">
            <Link to="#" onClick={handleLogout}>
              <AiIcons.AiOutlineLogout />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
