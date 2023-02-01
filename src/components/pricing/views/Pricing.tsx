/** Vendor **/
import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { products } from "../cards/pricingData";
import ProductCallToActionTable from "../cards/ProductCallToActionTable";
import ProductFeaturesTable from "../cards/ProductFeaturesTable";
import ProductOverviewTable from "../cards/ProductOverviewTable";

/** Custom Components **/

/** Custom CSS **/
import "../pricing.css";

function Pricing() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box as="section" bg="bg-surface" py={{ base: "16", md: "24" }}>
      <Stack spacing={{ base: "16", md: "24" }} shouldWrapChildren>
        <Container>
          <Stack
            spacing={{ base: "4", md: "6" }}
            textAlign="center"
            align="center"
          >
            <Stack spacing="3">
              <Heading fontWeight="bold" size={{ base: "md", md: "lg" }}>
                Pricing That Fits Your Needs
              </Heading>
            </Stack>
            <Text fontSize={{ base: "lg", md: "xl" }} color="muted" maxW="3xl">
              <s>Upgrade, downgrade or cancel at any time</s> <br />
              <s> Monthly and annual subscriptions available</s> <br />
              Currently only offering only free memberships
            </Text>
          </Stack>
        </Container>
        {isMobile ? (
          <Stack spacing="16">
            {products.map((product, id, isMobile) => (
              <Container px={{ base: "0" }} key={id}>
                <Stack spacing={{ base: "5", md: "7" }}>
                  <ProductOverviewTable
                    products={[product]}
                    beta={product.name === "Freemium"}
                    isMobile
                  />
                  <ProductFeaturesTable products={[product]} />
                  <ProductCallToActionTable
                    products={[product]}
                    beta={product.name === "Freemium"}
                    isMobile
                  />
                </Stack>
              </Container>
            ))}
          </Stack>
        ) : (
          <Container px={{ base: "0", lg: "8" }}>
            <Stack spacing={{ base: "5", md: "7" }}>
              <ProductOverviewTable products={products} />
              <ProductFeaturesTable products={products} />
              <ProductCallToActionTable products={products} />
            </Stack>
          </Container>
        )}
      </Stack>
    </Box>
  );
}
export default Pricing;
