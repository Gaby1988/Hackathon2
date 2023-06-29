import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../component/Navbar";
import Footer from "../component/Footer";


function Root() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Root;
