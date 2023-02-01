import { useEffect, useRef } from "react";

/** Vendor **/
import { Box } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";

/** Custom Components **/
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function AppLayout() {
  const { pathname } = useLocation();
  const ref = useRef<any>();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Box
        ref={ref}
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
