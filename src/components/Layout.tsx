import Navbar from "./NavBar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
export default Layout;
