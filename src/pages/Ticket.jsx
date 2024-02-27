import React, { lazy, Suspense, useState } from "react";
const Loading = lazy(() => import("components/Loading.jsx"));
const SideNavbar = lazy(() => import("components/SideNavbar.jsx"));
const Navbar = lazy(() => import("components/Navbar.jsx"));

const Ticket = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Suspense fallback={<Loading/>}>
      <div className="flex">
        <SideNavbar showSidebar={showSidebar} />
        <div className="flex-1 bg-slate-200 h-screen">
          <Navbar toggleSidebar={toggleSidebar} />
          <div className="flex items-center justify-center">tickets</div>
        </div>
      </div>
    </Suspense>
  );
};

export default Ticket;
