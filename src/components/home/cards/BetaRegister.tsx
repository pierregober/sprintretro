import {
  Box,
  Container,
  FormControl,
  FormHelperText,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { Button, Input } from "@contra-ui/core";

function BetaRegister() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box bgGradient="linear(to-b, bg-canvas 50%, #FFBD12 50%, )">
      <Container pt={{ base: "16", md: "24" }} pb={{ base: "8", md: "24" }}>
        <Box
          bg="bg-surface"
          py={{ base: "10", md: "16" }}
          px={{ base: "6", md: "16" }}
          borderRadius="lg"
          boxShadow={useColorModeValue("sm", "sm-dark")}
        >
          <Stack
            spacing={{ base: "8", md: "8" }}
            direction={{ base: "column", lg: "row" }}
            justify="space-between"
          >
            <Stack spacing={{ base: "4", md: "5" }}>
              <Heading size={useBreakpointValue({ base: "sm", md: "md" })}>
                Work With Us And Forget About Others
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="muted">
                Get Beta Access
              </Text>
            </Stack>
            <Stack
              direction={{ base: "column", md: "row" }}
              width="full"
              maxW={{ base: "md", xl: "lg" }}
            >
              <FormControl>
                <Input placeholder="Enter your email" />
                {isDesktop && (
                  <FormHelperText color="subtle">
                    We will notify you when it's ready
                  </FormHelperText>
                )}
              </FormControl>
              <Button
                appearance="primary"
                size="small"
                style={{
                  width: isDesktop ? "fit-content" : "100%",
                  height: "53px",
                }}
              >
                Subscribe
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
export default BetaRegister;
