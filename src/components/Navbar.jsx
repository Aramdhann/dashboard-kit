import React from "react";
import { IoMdNotifications } from "react-icons/io";
import { MdSearch } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({toggleSidebar}) => {
  return (
    <div className="flex justify-between items-center p-5">
      <div className="flex gap-2 items-center">
        <a href="#" className="p-2" onClick={toggleSidebar}>
          <RxHamburgerMenu size={24} />
        </a>
        <h1 className="font-medium text-2xl">Overview</h1>
      </div>
      <div className="flex items-center gap-6">
        <MdSearch size={25} className="text-gray-400" />
        <a role="button" className="relative">
          <div className="absolute rounded-full w-[10px] h-[10px] border-2 border-slate-200 bg-blue-500 right-0"></div>
          <IoMdNotifications size={25} className="text-gray-400" />
        </a>
        <div
          className="flex h-[35px] opacity-25 border-black"
          style={{ borderLeft: "1px solid black" }}
        ></div>
        <a
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          className="flex items-center gap-3"
        >
          <p>Admin</p>
          <img
            src="https://ui-avatars.com/api/?name=Admin"
            className="rounded-full"
            width="36"
            alt="Admin"
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
