import React from "react";
import SideNavbar from "components/SideNavbar";
import Navbar from "components/Navbar";
import Card from "components/Card";

const Home = () => {
  return (
    <div className="flex">
      <SideNavbar />
      <div className="flex-1 bg-slate-200 h-screen">
        <Navbar />
        <div className="flex items-center justify-center">
          <div className="flex-wrap flex justify-center gap-5 w-11/12">
            <Card title={"Unresolved"} value={60} />
            <Card title={"Unresolved"} value={60} />
            <Card title={"Unresolved"} value={60} />
            <Card title={"Unresolved"} value={60} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
