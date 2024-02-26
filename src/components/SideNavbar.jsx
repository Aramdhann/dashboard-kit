import React from "react";
import { NavLink } from "react-router-dom";

const SideNavbar = () => {
  return (
    <nav className="bg-zinc-800 h-screen w-fit hidden sm:block">
      <div className="flex items-center gap-3 mb-5 p-4 md:p-5 lg:p-6">
        <div className="relative mx-auto bg-blue-500 h-[35px] w-[35px] rounded-full">
          <div className="absolute bg-white p-2 h-[15px] w-[10px] mt-[9px] ml-[10px] rounded-r-full"></div>
        </div>
        <p className="text-gray-400 text-xs sm:text-base">Dashboard Kit</p>
      </div>
      <ul className="text-gray-400 text-xs">
        <li className="sidebar-button">
          <NavLink to="/overview">Overview</NavLink>
        </li>
        <li className="sidebar-button">
          <NavLink>Tickets</NavLink>
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
