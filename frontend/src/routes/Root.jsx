import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar";

function Root() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Root;
