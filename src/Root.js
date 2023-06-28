import React from "react";
import Sidebar from "./Navbar/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Navbar/Header";

const Root = () => {
  return (
    <div className="">
      <Sidebar />

      <Header />
      <div className="mt-[4rem] md:ml-[16rem] bg-[#FFFFFF]">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
