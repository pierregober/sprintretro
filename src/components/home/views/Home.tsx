/** Custom Components**/
import { Box, Container } from "@chakra-ui/react";

function Home() {
  return (
    <Box overflowY="auto" className="content-container">
      <Container pt={{ base: "8", lg: "12" }}></Container>
    </Box>
  );
}
export default Home;
