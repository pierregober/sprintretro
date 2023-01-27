/** Vendor **/
import { Box, Link, useBreakpointValue } from "@chakra-ui/react";
import { Button, Title } from "@contra-ui/core";
import { Link as RouterLink } from "react-router-dom";

/** Custom Components**/
import RegisterButton from "../../auth/cards/RegisterButton";
import Features from "../cards/Features";
import CompanyGallery from "../cards/CompanyGallery";
import BetaRegister from "../cards/BetaRegister";
import HowSection from "../cards/HowSection";

/** Images **/
import PersonLeft from "../../../dist/img/PersonLeft";
import PersonRight from "../../../dist/img/PersonRight";

/** CSS **/
import "./home.css";

function Home() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <>
      <Box
        maxH="80vh"
        style={{
          height: isDesktop ? "569px" : "500px",
          display: "flex",
          justifyContent: "center",
        }}
        className={isDesktop ? "" : "mobile-hero-gradient"}
      >
        {isDesktop && (
          <Box
            style={{
              display: "flex",
              columnGap: "428px",
              position: "absolute",
              zIndex: -1,
            }}
          >
            <PersonLeft />
            <PersonRight />
          </Box>
        )}
        <Box
          textAlign="center"
          className="flex-column flex-column-center flex-center"
          maxW="686px"
          style={{
            position: "absolute",
            marginTop: isDesktop ? "200px" : "100px",
            gap: "12px",
            zIndex: 0,
          }}
        >
          <Title level="44" style={{ color: isDesktop ? "inherit" : "white" }}>
            Facilitate Fun and Interactive Retrospectives with AI
          </Title>
          <Box style={{ color: isDesktop ? "inherit" : "white" }}>
            No one will ever skip retro again
          </Box>
          <RegisterButton />
        </Box>
      </Box>
      <Box
        as="section"
        bg="bg-surface"
        style={{
          zIndex: "10",
          position: "relative",
          boxShadow: "-1px -33px 41px -12px rgba(137,137,137,0.37)",
        }}
      >
        <HowSection />
        <Box className="flex flex-column-center flex-center" py={1}>
          <Link className="link-no-decoration" as={RouterLink} to={"/features"}>
            <Button>Go To Articles</Button>
          </Link>
        </Box>
      </Box>
      <Box bg="bg-surface" style={{ zIndex: "10", position: "relative" }}>
        <Features />
        <Box className="flex flex-column-center flex-center" py={12}>
          <Link className="link-no-decoration" as={RouterLink} to={"/features"}>
            <Button>View All Features</Button>
          </Link>
        </Box>
      </Box>
      <Box bg="#F7FAFC" style={{ zIndex: "10", position: "relative" }}>
        <CompanyGallery />
      </Box>
      <Box bg="bg-surface" style={{ zIndex: "10", position: "relative" }}>
        <BetaRegister />
      </Box>
    </>
  );
}
export default Home;
