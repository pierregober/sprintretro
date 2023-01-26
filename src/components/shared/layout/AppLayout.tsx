/** Vendor **/
import { Box, Container } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";

/** Custom Components **/
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function AppLayout() {
  return (
    <>
      <Navbar />
      <Box
        style={{
          height: "calc(100vh - 90px)",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <Outlet />
        <Footer />
      </Box>
    </>
  );
}
export default AppLayout;
