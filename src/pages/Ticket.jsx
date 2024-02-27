import React, { lazy, Suspense, useEffect, useState } from "react";
import axios from "axios";
const Loading = lazy(() => import("components/Loading.jsx"));
const SideNavbar = lazy(() => import("components/SideNavbar.jsx"));
const Navbar = lazy(() => import("components/Navbar.jsx"));
const TableData = lazy(() => import("components/TableData.jsx"));

const Ticket = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/tickets");
      const getData = response.data;
      setData(getData);
      //   setFilteredData(getData);
      setLoading(false);
    } catch (error) {
      console.log("error: ", error.message);
      setLoading(false);
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex">
        <SideNavbar showSidebar={showSidebar} />
        <div className="flex-1 bg-slate-200 h-screen">
          <Navbar toggleSidebar={toggleSidebar} />
          <div className="flex items-center justify-center">
            <TableData data={data} loading={loading} />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Ticket;
