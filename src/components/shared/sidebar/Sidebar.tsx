/** Vendor **/
import { Flex, useColorModeValue } from "@chakra-ui/react";

function Sidebar(): React.ReactElement {
  return (
    <Flex as="section" minH="100vh" bg="bg-canvas">
      <Flex
        flex="1"
        bg="bg-surface"
        overflowY="auto"
        boxShadow={useColorModeValue("sm", "sm-dark")}
        maxW={{ base: "full", sm: "xs" }}
        py={{ base: "6", sm: "8" }}
        px={{ base: "4", sm: "6" }}
      >
        hey there put stuff here
      </Flex>
    </Flex>
  );
}
export default Sidebar;
