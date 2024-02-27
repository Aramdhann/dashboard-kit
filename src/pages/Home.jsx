import React, { lazy, Suspense, useState } from "react";
const SideNavbar = lazy(() => import("components/SideNavbar.jsx"));
const Navbar = lazy(() => import("components/Navbar.jsx"));
const Card = lazy(() => import("components/Card.jsx"));
const Loading = lazy(() => import("components/Loading.jsx"));

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };


  return (
    <Suspense fallback={<Loading/>}>
      <div className="flex">
        <SideNavbar showSidebar={showSidebar} />
        <div className="flex-1 bg-slate-200 min-h-screen">
          <Navbar toggleSidebar={toggleSidebar} />
          <div className="flex items-center justify-center">
            <div className="flex-wrap flex justify-center gap-5 px-3">
              <Card title={"Unresolved"} value={60} />
              <Card title={"Overdue"} value={16} />
              <Card title={"Open"} value={43} />
              <Card title={"On hold"} value={64} />
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Home;
