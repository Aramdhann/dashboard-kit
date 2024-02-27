import React, { lazy, Suspense } from "react";
const SideNavbar = lazy(() => import("components/SideNavbar.jsx"));
const Navbar = lazy(() => import("components/Navbar.jsx"));

const Ticket = () => {
  return (
    <Suspense fallback={'Loading...'}>
      <div className="flex">
        <SideNavbar />
        <div className="flex-1 bg-slate-200 h-screen">
          <Navbar />
          <div className="flex items-center justify-center">tickets</div>
        </div>
      </div>
    </Suspense>
  );
};

export default Ticket;
