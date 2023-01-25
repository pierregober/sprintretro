/** Vendor **/
import { Outlet } from "react-router-dom";

/** Custom Components **/
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
export default AppLayout;
