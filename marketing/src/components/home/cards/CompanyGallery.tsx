/** Vendor **/
import {
  Box,
  Center,
  Container,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

/** Custom Components **/
import * as logos from "./logos/Logos";

function CompanyGallery() {
  return (
    <Container paddingTop={{ base: "12", md: "16" }}>
      <Stack spacing="8">
        <Box className="flex flex-column-center">
          <Text
            fontSize={{ base: "20", md: "30" }}
            fontWeight="bold"
            textAlign="center"
          >
            We Are Loved
          </Text>
          <Box ml="10px">
            <svg
              width="64"
              height="43"
              viewBox="0 0 64 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M58.9066 21.182C58.2752 21.9861 57.6199 22.7699 56.9594 23.5285C51.6798 29.599 45.9672 35.4573 40.742 41.5638C40.6005 41.7296 40.4389 41.9071 40.1784 41.9742C39.885 42.0499 39.5619 41.9607 39.2762 41.8719C24.038 37.138 -14.9177 16.0034 6.07182 3.08178C10.6553 0.260062 18.131 0.955605 22.9742 3.5575C27.8182 6.15939 30.5914 10.1802 32.9219 14.1214C34.3476 10.4987 36.662 7.04724 39.7332 3.96019C43.0719 0.605119 49.6182 -0.61338 55.2357 0.292058C69.0695 2.52097 63.5018 15.3273 58.9066 21.182Z"
                fill="#F15757"
              />
            </svg>
          </Box>
        </Box>
        <SimpleGrid
          gap={{ base: "4", md: "8" }}
          columns={{ base: 2, md: 3, lg: 5 }}
        >
          {Object.entries(logos).map(([name, Logo]) => (
            <Center key={name}>
              <Logo
                h={{ base: "8", md: "10" }}
                maxW="180px"
                fill="emphasized"
              />
            </Center>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
export default CompanyGallery;
