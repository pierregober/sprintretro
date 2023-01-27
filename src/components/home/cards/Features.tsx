import { Box, Container, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { IconButton } from "@contra-ui/core";

import { features } from "./data/features";

import "./features.css";

function Features() {
  return (
    <Box
      as="section"
      bg="bg-surface"
      style={{ boxShadow: "-1px -33px 41px -12px rgba(137,137,137,0.37)" }}
    >
      <Container py={{ base: "8", md: "12" }}>
        <Stack spacing={{ base: "12", md: "16" }}>
          <Text
            fontSize={{ base: "20", md: "30" }}
            fontWeight="bold"
            textAlign="center"
          >
            What We Offer
          </Text>
          <SimpleGrid
            className="features-container"
            columns={{ base: 1, md: 2, lg: 3 }}
            columnGap={8}
            rowGap={{ base: 10, md: 16 }}
          >
            {features.map((feature) => (
              <Stack
                key={feature.title}
                spacing={{ base: "3", md: "6" }}
                align="center"
                textAlign="center"
                className="feature"
              >
                <IconButton style={{ backgroundColor: "#FFBD12" }}>
                  {feature.icon}
                </IconButton>
                <Stack spacing={{ base: "1", md: "2" }}>
                  <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="medium">
                    {feature.title}
                  </Text>
                  <Text color="muted">{feature.desc}</Text>
                </Stack>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
export default Features;
