/** Vendor **/
import {
  Box,
  Container,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Title } from "@contra-ui/core";

/** Custom Components **/
import ManyPeople from "../cards/ManyPeople";

/** Custom CSS **/
import "../about.css";

function About() {
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
      >
        <Box
          style={{
            display: "flex",
            position: "absolute",
            zIndex: -1,
            top: -150,
          }}
        >
          <ManyPeople />
        </Box>
        <Box
          textAlign="center"
          className="flex-column flex-column-center flex-center"
          maxW="686px"
          style={{
            position: "absolute",
            marginTop: isDesktop ? "200px" : "100px",
            gap: "12px",
            zIndex: 0,
            padding: 40,
            borderRadius: "8px",
            boxShadow: "1px 1px 42px 25px rgba(255,255,255,0.62)",
          }}
          bg="#000"
        >
          <Title level="44" color="white">
            About Us 👋
          </Title>
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
        <Container py={{ base: "16", md: "24" }}>
          <Stack
            spacing={{ base: "12", md: "16" }}
            className="flex flex-center"
          >
            <Text fontSize={{ base: "lg", md: "xl" }} color="muted" maxW="3xl">
              I, Pierre, am a solo team member with a mission to create a fun
              and interactive sprint retrospective application. Recognizing the
              absence of a definitive solution in the market, I am driven to
              create a user-friendly application with the added benefit of
              Artificial Intelligence. My goal is to provide the most intuitive
              and effortless sprint retrospective experience. Welcome to the
              app!
            </Text>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
export default About;
