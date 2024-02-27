import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const SideNavbar = ({ showSidebar }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    // clean function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const activeState = ({ isActive }) => {
    return {
      color: isActive ? "white" : "",
      backgroundColor: isActive ? "#37373b" : "",
      borderLeft: isActive ? "2px solid white" : "",
    };
  };

  const sidebarClass = showSidebar && !isSmallScreen ? "block" : "hidden";

  return (
    <nav
      id="nav-side"
      className={`bg-zinc-800 min-h-screen w-fit ${sidebarClass}`}
    >
      <div className="flex items-center gap-3 mb-5 p-4 md:p-5 lg:p-6">
        <div className="relative mx-auto bg-blue-500 h-[35px] w-[35px] rounded-full">
          <div className="absolute bg-white p-2 h-[15px] w-[10px] mt-[9px] ml-[10px] rounded-r-full"></div>
        </div>
        <p className="text-gray-400 text-xs sm:text-base">Dashboard Kit</p>
      </div>
      <ul className="text-gray-400 text-xs">
        <li>
          <NavLink to="/" className="sidebar-button" style={activeState}>
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink to="/tickets" className="sidebar-button" style={activeState}>
            Tickets
          </NavLink>
        </li>
        <li className="sidebar-button">Contacts</li>
        <li className="sidebar-button">Agents</li>
        <li className="sidebar-button">Articles</li>
        <hr className="opacity-10" />
        <li className="sidebar-button">Tickets</li>
        <li className="sidebar-button">Tickets</li>
      </ul>
    </nav>
  );
};

export default SideNavbar;
