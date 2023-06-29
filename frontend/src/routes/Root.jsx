import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../component/Navbar";
// import Footer from "../component/footer/Footer";

function Root() {
  return (
    <div>
      <NavBar />A
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

export default Root;
